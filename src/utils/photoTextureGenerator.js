function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const words = String(text || '').split(/\s+/);
  let line = '';
  let lineCount = 0;

  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line) {
      ctx.fillText(line, x, y + lineCount * lineHeight);
      line = words[i];
      lineCount++;
      if (lineCount >= maxLines - 1) {
        const fullRemaining = words.slice(i).join(' ');
        if (ctx.measureText(fullRemaining).width <= maxWidth) {
          ctx.fillText(fullRemaining, x, y + lineCount * lineHeight);
        } else {
          let trimmed = fullRemaining;
          while (ctx.measureText(`${trimmed}...`).width > maxWidth && trimmed.length > 3) {
            trimmed = trimmed.slice(0, -1);
          }
          ctx.fillText(`${trimmed.replace(/[.,\s]+$/, '')}...`, x, y + lineCount * lineHeight);
        }
        return;
      }
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, y + lineCount * lineHeight);
  }
}

function drawCoverImage(ctx, img, x, y, w, h) {
  const imgRatio = img.width / img.height;
  const boxRatio = w / h;
  let sx = 0;
  let sy = 0;
  let sw = img.width;
  let sh = img.height;

  if (imgRatio > boxRatio) {
    sw = img.height * boxRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / boxRatio;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function drawArtwork(ctx, iconType, colors, x, y, w, h) {
  const [c1, c2, accent] = colors || ['#1b2a4a', '#2b4570', '#ffd166'];
  const cx = x + w / 2;
  const cy = y + h / 2;

  ctx.save();
  drawRoundRect(ctx, x, y, w, h, 18);
  ctx.clip();

  // Rich gradient sky/backdrop
  const bgGrad = ctx.createLinearGradient(x, y, x + w, y + h);
  bgGrad.addColorStop(0, c1);
  bgGrad.addColorStop(0.65, c2);
  bgGrad.addColorStop(1, '#090b14');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(x, y, w, h);

  // Soft radial halo
  const halo = ctx.createRadialGradient(cx, cy - 20, 12, cx, cy - 20, w * 0.65);
  halo.addColorStop(0, `${accent}55`);
  halo.addColorStop(0.5, `${accent}18`);
  halo.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = halo;
  ctx.fillRect(x, y, w, h);

  // Ambient bokeh stars
  for (let i = 0; i < 28; i++) {
    const px = x + ((Math.sin(i * 78.233) * 0.5 + 0.5) * 0.92 + 0.04) * w;
    const py = y + ((Math.cos(i * 45.164) * 0.5 + 0.5) * 0.88 + 0.04) * h;
    const r = (i % 4) * 1.1 + 1.2;
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fillStyle = i % 3 === 0 ? `${accent}bb` : 'rgba(255,255,255,0.45)';
    ctx.fill();
  }

  ctx.strokeStyle = accent;
  ctx.fillStyle = accent;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  switch (iconType) {
    case 'chalkboard': {
      // Wooden framed chalkboard
      ctx.fillStyle = '#12332a';
      drawRoundRect(ctx, cx - 170, cy - 115, 340, 210, 14);
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#c88a4b';
      ctx.stroke();

      // Chalk writing "20/11" & heart
      ctx.fillStyle = '#fff9e6';
      ctx.font = 'bold 64px "Cormorant Garamond", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText('20 / 11', cx, cy - 12);

      ctx.font = 'italic 28px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = accent;
      ctx.fillText('Tri Ân Thầy Cô', cx, cy + 44);

      // Chalk tray
      ctx.fillStyle = '#a46b34';
      ctx.fillRect(cx - 120, cy + 90, 240, 12);
      break;
    }
    case 'phoenix': {
      // Branch & glowing phoenix blossoms
      ctx.strokeStyle = '#4a251d';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(x + 25, cy + 95);
      ctx.quadraticCurveTo(cx - 20, cy + 10, x + w - 40, cy - 95);
      ctx.stroke();

      const blooms = [
        [cx - 80, cy + 10, 34],
        [cx + 10, cy - 45, 42],
        [cx + 95, cy - 60, 30],
        [cx - 10, cy + 35, 26],
      ];
      blooms.forEach(([bx, by, br]) => {
        for (let p = 0; p < 5; p++) {
          const ang = (p / 5) * Math.PI * 2;
          ctx.beginPath();
          ctx.ellipse(
            bx + Math.cos(ang) * br * 0.55,
            by + Math.sin(ang) * br * 0.55,
            br * 0.45,
            br * 0.24,
            ang,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = p % 2 === 0 ? '#ff5c77' : '#ff8fa3';
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(bx, by, br * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = '#ffd166';
        ctx.fill();
      });
      break;
    }
    case 'book': {
      // Open glowing book
      ctx.fillStyle = 'rgba(255,248,230,0.92)';
      ctx.beginPath();
      ctx.moveTo(cx, cy - 40);
      ctx.quadraticCurveTo(cx - 85, cy - 75, cx - 165, cy - 30);
      ctx.lineTo(cx - 165, cy + 95);
      ctx.quadraticCurveTo(cx - 85, cy + 55, cx, cy + 95);
      ctx.quadraticCurveTo(cx + 85, cy + 55, cx + 165, cy + 95);
      ctx.lineTo(cx + 165, cy - 30);
      ctx.quadraticCurveTo(cx + 85, cy - 75, cx, cy - 40);
      ctx.fill();

      ctx.strokeStyle = accent;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 40);
      ctx.lineTo(cx, cy + 95);
      ctx.stroke();

      // Light rays rising from book
      for (let r = -2; r <= 2; r++) {
        ctx.beginPath();
        ctx.moveTo(cx + r * 14, cy - 50);
        ctx.lineTo(cx + r * 52, cy - 160);
        ctx.strokeStyle = `${accent}66`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      break;
    }
    case 'sunset': {
      // Warm classroom window with sunrays
      const sunGrad = ctx.createRadialGradient(cx, cy - 30, 15, cx, cy - 30, 130);
      sunGrad.addColorStop(0, '#fff3b0');
      sunGrad.addColorStop(0.4, accent);
      sunGrad.addColorStop(1, 'rgba(255,158,100,0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(cx, cy - 30, 130, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255,255,255,0.65)';
      ctx.lineWidth = 6;
      drawRoundRect(ctx, cx - 125, cy - 135, 250, 260, 12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 135);
      ctx.lineTo(cx, cy + 125);
      ctx.moveTo(cx - 125, cy - 5);
      ctx.lineTo(cx + 125, cy - 5);
      ctx.stroke();
      break;
    }
    case 'group': {
      // Silhouettes under fairy lights
      ctx.strokeStyle = `${accent}88`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(x + 20, cy - 120);
      ctx.quadraticCurveTo(cx, cy - 60, x + w - 20, cy - 120);
      ctx.stroke();
      for (let b = 0; b < 9; b++) {
        const t = (b + 1) / 10;
        const bx = x + 20 + t * (w - 40);
        const by = cy - 120 + Math.sin(t * Math.PI) * 30;
        ctx.beginPath();
        ctx.arc(bx, by, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#fff3b0';
        ctx.fill();
      }

      // 5 student silhouettes
      const offsets = [-110, -55, 0, 55, 110];
      offsets.forEach((ox, idx) => {
        const headY = cy + 15 + (idx % 2 === 0 ? -8 : 4);
        ctx.fillStyle = idx === 2 ? accent : 'rgba(255,255,255,0.85)';
        ctx.beginPath();
        ctx.arc(cx + ox, headY, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + ox, headY + 68, 26, 42, 0, Math.PI, Math.PI * 2);
        ctx.fill();
      });
      break;
    }
    case 'paperplane': {
      // Dotted spiral trail
      ctx.setLineDash([8, 10]);
      ctx.strokeStyle = `${accent}aa`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - 150, cy + 120);
      ctx.bezierCurveTo(cx - 60, cy + 80, cx - 10, cy + 10, cx + 20, cy - 20);
      ctx.stroke();
      ctx.setLineDash([]);

      // Origami paper plane
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(cx + 125, cy - 95);
      ctx.lineTo(cx - 55, cy - 15);
      ctx.lineTo(cx + 20, cy + 15);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.moveTo(cx + 125, cy - 95);
      ctx.lineTo(cx + 20, cy + 15);
      ctx.lineTo(cx + 40, cy + 75);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'lantern': {
      // Glowing floating lantern
      const lGrad = ctx.createRadialGradient(cx, cy - 20, 10, cx, cy - 20, 95);
      lGrad.addColorStop(0, '#fffbe6');
      lGrad.addColorStop(0.55, '#ffb703');
      lGrad.addColorStop(1, '#fb8500');
      ctx.fillStyle = lGrad;
      ctx.beginPath();
      ctx.moveTo(cx - 65, cy - 95);
      ctx.quadraticCurveTo(cx, cy - 125, cx + 65, cy - 95);
      ctx.lineTo(cx + 45, cy + 45);
      ctx.lineTo(cx - 45, cy + 45);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 45, 45, 10, 0, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case 'guitar': {
      // Acoustic guitar silhouette & notes
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(cx - 25, cy + 45, 62, 0, Math.PI * 2);
      ctx.arc(cx + 15, cy - 10, 44, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#1b2d2a';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(cx + 35, cy - 35);
      ctx.lineTo(cx + 125, cy - 135);
      ctx.stroke();

      ctx.fillStyle = '#0f1f1c';
      ctx.beginPath();
      ctx.arc(cx - 10, cy + 25, 22, 0, Math.PI * 2);
      ctx.fill();

      // Musical notes
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 42px serif';
      ctx.fillText('♪', cx - 120, cy - 70);
      ctx.fillText('♫', cx + 80, cy + 50);
      break;
    }
    case 'gradcap': {
      // Graduation cap & stars
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 85);
      ctx.lineTo(cx + 135, cy - 25);
      ctx.lineTo(cx, cy + 35);
      ctx.lineTo(cx - 135, cy - 25);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.beginPath();
      ctx.moveTo(cx - 75, cy + 15);
      ctx.lineTo(cx - 75, cy + 75);
      ctx.quadraticCurveTo(cx, cy + 105, cx + 75, cy + 75);
      ctx.lineTo(cx + 75, cy + 15);
      ctx.lineTo(cx, cy + 46);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx + 125, cy - 22);
      ctx.lineTo(cx + 125, cy + 65);
      ctx.stroke();
      break;
    }
    case 'bouquet':
    default: {
      // Bouquet of blooming flowers
      ctx.fillStyle = '#e5989b';
      ctx.beginPath();
      ctx.moveTo(cx - 75, cy - 10);
      ctx.lineTo(cx + 75, cy - 10);
      ctx.lineTo(cx, cy + 125);
      ctx.closePath();
      ctx.fill();

      const flowerPts = [
        [cx - 48, cy - 45, '#ff758f'],
        [cx + 48, cy - 45, '#ff8fa3'],
        [cx, cy - 75, '#ffd166'],
        [cx - 22, cy - 15, '#ffb3c1'],
        [cx + 22, cy - 15, '#ff4d6d'],
      ];
      flowerPts.forEach(([fx, fy, fcol]) => {
        ctx.beginPath();
        ctx.arc(fx, fy, 32, 0, Math.PI * 2);
        ctx.fillStyle = fcol;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(fx, fy, 11, 0, Math.PI * 2);
        ctx.fillStyle = '#fff3b0';
        ctx.fill();
      });
      break;
    }
  }

  ctx.restore();
}

function renderCardFrame(ctx, photoItem, index, width, height, uploadedImg = null) {
  ctx.clearRect(0, 0, width, height);

  // Subtle dark border padding behind frame
  ctx.fillStyle = '#090a12';
  drawRoundRect(ctx, 4, 4, width - 8, height - 8, 26);
  ctx.fill();

  // Full-bleed 4:3 photo viewport area with zero bottom text/captions
  const artX = 16;
  const artY = 16;
  const artW = width - 32;
  const artH = height - 32;

  if (uploadedImg) {
    ctx.save();
    drawRoundRect(ctx, artX, artY, artW, artH, 22);
    ctx.clip();
    drawCoverImage(ctx, uploadedImg, artX, artY, artW, artH);
    ctx.restore();
  } else {
    drawArtwork(ctx, photoItem.iconType, photoItem.themeColors, artX, artY, artW, artH);
  }

  // Sleek golden gallery frame border around edges
  const borderGrad = ctx.createLinearGradient(0, 0, width, height);
  borderGrad.addColorStop(0, '#ffd166');
  borderGrad.addColorStop(0.5, '#ff9ebb');
  borderGrad.addColorStop(1, '#ffd166');
  ctx.strokeStyle = borderGrad;
  ctx.lineWidth = 4;
  drawRoundRect(ctx, artX, artY, artW, artH, 22);
  ctx.stroke();

  // Subtle outer ambient rim
  ctx.strokeStyle = 'rgba(255, 224, 150, 0.28)';
  ctx.lineWidth = 1.5;
  drawRoundRect(ctx, 7, 7, width - 14, height - 14, 26);
  ctx.stroke();
}

/**
 * Generates a high-DPI 800x600 (4:3) full-bleed canvas for a memory photo card.
 * If photoItem.imageUrl is provided, loads the image asynchronously and re-renders.
 */
export function createMemoryCardCanvas(photoItem, index, onAsyncUpdate) {
  const width = 800;
  const height = 600;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Render procedural artwork immediately so texture is never blank
  renderCardFrame(ctx, photoItem, index, width, height, null);

  if (photoItem?.imageUrl) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      renderCardFrame(ctx, photoItem, index, width, height, img);
      if (typeof onAsyncUpdate === 'function') {
        onAsyncUpdate(canvas);
      }
    };
    img.src = photoItem.imageUrl;
  }

  return canvas;
}
