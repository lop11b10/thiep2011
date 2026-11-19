import React, { useCallback, useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import '@designcodeio/threeui/style.css';
import { StreamConvergenceBackground } from '@designcodeio/threeui/components/StreamConvergenceBackground';
import { CircleButtons } from '@designcodeio/threeui/components/CircleButtons';
import { LumenCta } from '@designcodeio/threeui/components/LumenCta';
import ThreeScene from './components/ThreeScene';
import { DEFAULT_CARD_DATA } from './config/cardData';
import { createMemoryCardCanvas } from './utils/photoTextureGenerator';
import { soundEngine } from './utils/soundEngine';

export default function App() {
  const cardData = DEFAULT_CARD_DATA;
  const [stage, setStage] = useState('dark'); // 'dark' | 'gathering' | 'ready' | 'opening' | 'orbit'
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [hideCenterCard, setHideCenterCard] = useState(false);
  const [typedWish, setTypedWish] = useState('');

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [showLetterModal, setShowLetterModal] = useState(false);

  // Stage 0 -> 1: Begin from pure black screen, then start particle convergence
  useEffect(() => {
    if (stage !== 'dark') return;
    const timer = window.setTimeout(() => {
      setStage('gathering');
    }, 850);
    return () => window.clearTimeout(timer);
  }, [stage]);

  // Typewriter reveal of central wish once orbiting stage begins
  useEffect(() => {
    if (stage !== 'orbit') {
      setTypedWish('');
      return;
    }
    const target = cardData.shortWish || '';
    let idx = 0;
    const interval = window.setInterval(() => {
      idx += 1;
      if (idx >= target.length) {
        setTypedWish(target);
        window.clearInterval(interval);
      } else {
        setTypedWish(target.slice(0, idx));
      }
    }, 32);
    return () => window.clearInterval(interval);
  }, [stage, cardData.shortWish]);

  const handleEnvelopeFormed = useCallback(() => {
    setStage((prev) => (prev === 'gathering' ? 'ready' : prev));
  }, []);

  const handleOpenLetter = useCallback(() => {
    if (stage !== 'ready' && stage !== 'gathering') return;

    soundEngine.playEnvelopeOpen();
    soundEngine.startMelody();
    setMusicPlaying(true);

    // Burst golden & rose confetti
    confetti({
      particleCount: 95,
      spread: 85,
      origin: { y: 0.52 },
      colors: ['#ffd166', '#ff758f', '#ffe79e', '#72efdd', '#ffffff'],
    });
    window.setTimeout(() => {
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 65,
        origin: { x: 0.15, y: 0.6 },
        colors: ['#ffd166', '#ff758f', '#fff3b0'],
      });
      confetti({
        particleCount: 55,
        angle: 120,
        spread: 65,
        origin: { x: 0.85, y: 0.6 },
        colors: ['#ffd166', '#ff758f', '#fff3b0'],
      });
    }, 240);

    setStage('opening');
    window.setTimeout(() => {
      setStage('orbit');
    }, 1600);
  }, [stage]);

  const handleReplay = useCallback(() => {
    setSelectedPhotoIndex(null);
    setShowLetterModal(false);
    setHideCenterCard(false);
    soundEngine.stopMelody();
    setMusicPlaying(false);
    setStage('dark');
  }, []);

  const handleToggleMusic = useCallback(() => {
    const active = soundEngine.toggleMusic();
    setMusicPlaying(active);
  }, []);

  // Generate high-res preview image for the selected lightbox photo card
  const [lightboxPreviewUrl, setLightboxPreviewUrl] = useState('');
  const selectedPhoto =
    selectedPhotoIndex !== null ? cardData.photos[selectedPhotoIndex] : null;

  useEffect(() => {
    if (selectedPhotoIndex === null || !selectedPhoto) {
      setLightboxPreviewUrl('');
      return;
    }
    const canvas = createMemoryCardCanvas(selectedPhoto, selectedPhotoIndex, (updated) => {
      setLightboxPreviewUrl(updated.toDataURL('image/png'));
    });
    setLightboxPreviewUrl(canvas.toDataURL('image/png'));
  }, [selectedPhotoIndex, selectedPhoto]);

  const shaderOpacity = useMemo(() => {
    if (stage === 'dark') return 0.04;
    if (stage === 'gathering') return 0.16;
    if (stage === 'ready') return 0.24;
    return 0.4;
  }, [stage]);

  return (
    <div className="app-root">
      {/* ThreeUI Ambient WebGL Background Shader */}
      <div className="ambient-shader-layer" style={{ opacity: shaderOpacity }}>
        <StreamConvergenceBackground
          speed={stage === 'orbit' ? 0.75 : 0.45}
          fidelity={0.55}
          hue={32}
          saturation={1.15}
          brightness={0.9}
          opacity={1}
        />
      </div>

      {/* Interactive Three.js 3D Particle Envelope & Orbiting Photo Ring */}
      <ThreeScene
        stage={stage}
        photos={cardData.photos}
        onEnvelopeFormed={handleEnvelopeFormed}
        onEnvelopeClick={handleOpenLetter}
        onSelectPhoto={(idx) => setSelectedPhotoIndex(idx)}
      />

      <div className="stage-vignette" />

      {/* Top HUD (Visible after opening) */}
      {(stage === 'opening' || stage === 'orbit') && (
        <header className="hud-top">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="hud-pill"
              onClick={handleReplay}
              title="Xem lại hiệu ứng tụ hạt từ đầu"
            >
              🔄 Xem lại
            </button>
            <button
              type="button"
              className="hud-pill"
              onClick={() => setHideCenterCard((v) => !v)}
            >
              {hideCenterCard ? '💌 Hiện lời chúc' : '🖼️ Ngắm vòng ảnh'}
            </button>
          </div>

          <div className="hud-music-wrap">
            <button
              type="button"
              className="music-label"
              onClick={handleToggleMusic}
              aria-label={musicPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
            >
              <span className={`music-bars ${musicPlaying ? 'music-bars--active' : ''}`}>
                <span />
                <span />
                <span />
              </span>
              <span>{musicPlaying ? 'Bụi Phấn · Đang phát' : 'Bật nhạc 20/11'}</span>
            </button>
            <CircleButtons
              variant="play"
              mode="dark"
              hue={38}
              brightness={musicPlaying ? 1.25 : 0.85}
              ariaLabel={musicPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
              className="threeui-inline-circle"
              onClick={handleToggleMusic}
            />
          </div>
        </header>
      )}

      {/* Stage 1 & 2 Overlays */}
      <main className="ui-overlay">
        {stage === 'ready' && (
          <div className="envelope-prompt">
            <div className="envelope-prompt__row">
              <CircleButtons
                variant="mail"
                mode="dark"
                hue={36}
                brightness={1.15}
                ariaLabel="Mở lá thư 20/11"
                className="threeui-inline-circle threeui-mail-btn"
                onClick={handleOpenLetter}
              />
              <LumenCta
                variant="primary"
                mode="dark"
                label="Chạm Để Mở Lá Thư 20/11"
                hue={145}
                saturation={1.05}
                brightness={1.15}
                className="threeui-inline-cta"
                onClick={handleOpenLetter}
              />
            </div>
            <p className="envelope-prompt__hint">
              Nhấn trực tiếp vào phong thư phát sáng hoặc nút để mở
            </p>
          </div>
        )}

        {/* Stage 3: Central Greeting & Wishes Card framed by the 3D Photo Ring */}
        {stage === 'orbit' && (
          <div className="central-wish-reveal">
            <section
              className={`central-wish-card ${
                hideCenterCard ? 'central-wish-card--hidden' : ''
              }`}
              aria-hidden={hideCenterCard}
              aria-label="Lời chúc 20/11 gửi Thầy Cô"
            >
              <span className="central-wish-card__corner central-wish-card__corner--tl" />
              <span className="central-wish-card__corner central-wish-card__corner--tr" />
              <span className="central-wish-card__corner central-wish-card__corner--bl" />
              <span className="central-wish-card__corner central-wish-card__corner--br" />

              <div className="wish-badge">{cardData.badgeText}</div>
              <p className="wish-teacher">{cardData.teacherTitle}</p>
              <h1 className="wish-headline">{cardData.headline}</h1>

              <div className="wish-divider" aria-hidden="true">
                <span />
                <i>✦</i>
                <span />
              </div>

              <p className="wish-body">{typedWish || '\u00A0'}</p>
              <p className="wish-class">— {cardData.className} —</p>

              <div className="wish-actions">
                <LumenCta
                  variant="primary"
                  mode="dark"
                  label="📜 Đọc Tâm Thư"
                  hue={145}
                  saturation={1.0}
                  brightness={1.12}
                  className="threeui-inline-cta threeui-inline-cta--compact"
                  onClick={() => setShowLetterModal(true)}
                />
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Bottom Hint */}
      {stage === 'orbit' && (
        <footer className="hud-bottom">
          <div className="hud-hint">
            Kéo hoặc vuốt để xoay vòng ảnh 3D • Nhấn vào từng ảnh kỷ niệm để phóng to
          </div>
        </footer>
      )}

      {/* Modal 1: Photo Lightbox */}
      {selectedPhoto && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedPhotoIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="modal-card modal-card--lightbox"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label="Đóng"
            >
              ×
            </button>
            <div className="lightbox-preview">
              {lightboxPreviewUrl && (
                <img src={lightboxPreviewUrl} alt={selectedPhoto.title} />
              )}
            </div>
            <div className="lightbox-nav">
              <button
                type="button"
                className="hud-pill"
                onClick={() =>
                  setSelectedPhotoIndex(
                    (selectedPhotoIndex - 1 + cardData.photos.length) %
                      cardData.photos.length
                  )
                }
              >
                ← Ảnh trước
              </button>
              <span
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 231, 158, 0.85)',
                }}
              >
                Ảnh {selectedPhotoIndex + 1} / {cardData.photos.length}
              </span>
              <button
                type="button"
                className="hud-pill"
                onClick={() =>
                  setSelectedPhotoIndex(
                    (selectedPhotoIndex + 1) % cardData.photos.length
                  )
                }
              >
                Ảnh tiếp →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Full Heartfelt Letter */}
      {showLetterModal && (
        <div
          className="modal-backdrop"
          onClick={() => setShowLetterModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Tâm thư tri ân 20/11"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowLetterModal(false)}
              aria-label="Đóng"
            >
              ×
            </button>
            <div className="wish-badge">{cardData.badgeText}</div>
            <h2
              style={{
                margin: '4px 0 6px',
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.65rem',
                color: '#ffd166',
              }}
            >
              {cardData.teacherTitle}
            </h2>

            {cardData.fullLetter.map((para, idx) =>
              idx === 0 ? (
                <blockquote key={idx} className="letter-scroll__poem">
                  {para}
                </blockquote>
              ) : (
                <p key={idx} className="letter-scroll__para">
                  {para}
                </p>
              )
            )}

            <div className="letter-scroll__sig">
              Thương mến gửi Thầy Cô,
              <br />
              {cardData.className}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
