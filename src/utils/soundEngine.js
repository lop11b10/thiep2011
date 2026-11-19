// Pure Web Audio API Sound Engine for 20/11 E-Card
// Plays magical chime effects and a gentle music-box / piano arrangement of "Bụi Phấn"

const NOTE_FREQ = {
  C3: 130.81,
  D3: 146.83,
  E3: 164.81,
  F3: 174.61,
  G3: 196.0,
  A3: 220.0,
  B3: 246.94,
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  A5: 880.0,
};

// Gentle waltz/ballad arrangement inspired by "Bụi Phấn" in C major (duration in beats, 1 beat = ~0.58s)
const MELODY_SEQUENCE = [
  // "Khi thầy viết bảng, bụi phấn rơi rơi"
  { note: 'E4', chord: ['C3', 'G3', 'E4'], dur: 0.75 },
  { note: 'G4', chord: null, dur: 0.75 },
  { note: 'A4', chord: ['F3', 'C4', 'A4'], dur: 1.5 },
  { note: 'G4', chord: null, dur: 0.75 },
  { note: 'E4', chord: ['C3', 'G3', 'E4'], dur: 0.75 },
  { note: 'D4', chord: ['G3', 'D4'], dur: 1.5 },
  // "Có hạt bụi nào rơi trên bục giảng"
  { note: 'C4', chord: ['A3', 'E4'], dur: 0.75 },
  { note: 'D4', chord: null, dur: 0.75 },
  { note: 'E4', chord: ['C3', 'G3'], dur: 1.5 },
  { note: 'G4', chord: null, dur: 0.75 },
  { note: 'E4', chord: ['F3', 'C4'], dur: 0.75 },
  { note: 'D4', chord: ['G3', 'B3'], dur: 1.5 },
  // "Có hạt bụi nào rơi trên tóc thầy"
  { note: 'E4', chord: ['C3', 'G3'], dur: 0.75 },
  { note: 'G4', chord: null, dur: 0.75 },
  { note: 'C5', chord: ['A3', 'E4'], dur: 1.5 },
  { note: 'A4', chord: ['F3', 'C4'], dur: 0.75 },
  { note: 'G4', chord: null, dur: 0.75 },
  { note: 'E4', chord: ['C3', 'G3'], dur: 1.5 },
  // "Em yêu phút giây này, thầy em tóc như bạc thêm"
  { note: 'A4', chord: ['F3', 'C4'], dur: 0.75 },
  { note: 'C5', chord: null, dur: 0.75 },
  { note: 'D5', chord: ['G3', 'D4'], dur: 1.5 },
  { note: 'C5', chord: ['C3', 'G3'], dur: 0.75 },
  { note: 'A4', chord: ['F3', 'C4'], dur: 0.75 },
  { note: 'G4', chord: ['C3', 'E4'], dur: 1.5 },
  // Ending phrase resolve
  { note: 'E4', chord: ['A3', 'E4'], dur: 0.75 },
  { note: 'D4', chord: ['G3', 'B3'], dur: 0.75 },
  { note: 'C4', chord: ['C3', 'G3', 'C4'], dur: 2.25 },
];

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.delayNode = null;
    this.isPlaying = false;
    this.stepIndex = 0;
    this.loopTimer = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.55;

      // Soft ambient delay echo for dreamy music-box atmosphere
      this.delayNode = this.ctx.createDelay(1.0);
      this.delayNode.delayTime.value = 0.28;
      const feedback = this.ctx.createGain();
      feedback.gain.value = 0.28;
      const delayFilter = this.ctx.createBiquadFilter();
      delayFilter.type = 'lowpass';
      delayFilter.frequency.value = 1800;

      this.delayNode.connect(delayFilter);
      delayFilter.connect(feedback);
      feedback.connect(this.delayNode);
      delayFilter.connect(this.masterGain);

      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  playTone(freq, startTime, duration, volume = 0.14, type = 'sine') {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2, startTime);

    const harmonicGain = this.ctx.createGain();
    harmonicGain.gain.value = 0.14;

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(volume * 0.45, startTime + duration * 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    oscHarmonic.connect(harmonicGain);
    harmonicGain.connect(gain);

    gain.connect(this.masterGain);
    if (this.delayNode) {
      gain.connect(this.delayNode);
    }

    osc.start(startTime);
    oscHarmonic.start(startTime);
    osc.stop(startTime + duration + 0.05);
    oscHarmonic.stop(startTime + duration + 0.05);
  }

  playSparkleGather() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      this.playTone(f, now + idx * 0.12, 0.7, 0.06, 'sine');
    });
  }

  playEnvelopeOpen() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Magical harp glissando + warm Cmaj9 chord swell
    const arpeggio = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25, 783.99, 987.77, 1046.5];
    arpeggio.forEach((freq, i) => {
      this.playTone(freq, now + i * 0.065, 1.35, 0.085, 'sine');
    });
  }

  scheduleNextStep() {
    if (!this.isPlaying || !this.ctx) return;

    const item = MELODY_SEQUENCE[this.stepIndex % MELODY_SEQUENCE.length];
    const beatSeconds = 0.56;
    const durSec = item.dur * beatSeconds;
    const now = this.ctx.currentTime + 0.03;

    if (item.note && NOTE_FREQ[item.note]) {
      this.playTone(NOTE_FREQ[item.note], now, durSec * 1.4, 0.12, 'sine');
    }

    if (item.chord) {
      item.chord.forEach((chordNote, idx) => {
        if (NOTE_FREQ[chordNote]) {
          this.playTone(
            NOTE_FREQ[chordNote],
            now + idx * 0.04,
            durSec * 1.8,
            0.04,
            'triangle'
          );
        }
      });
    }

    this.stepIndex = (this.stepIndex + 1) % MELODY_SEQUENCE.length;
    this.loopTimer = window.setTimeout(() => {
      this.scheduleNextStep();
    }, durSec * 1000);
  }

  startMelody() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.stepIndex = 0;
    this.scheduleNextStep();
  }

  stopMelody() {
    this.isPlaying = false;
    if (this.loopTimer !== null) {
      window.clearTimeout(this.loopTimer);
      this.loopTimer = null;
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.stopMelody();
    } else {
      this.startMelody();
    }
    return this.isPlaying;
  }
}

export const soundEngine = new SoundEngine();
