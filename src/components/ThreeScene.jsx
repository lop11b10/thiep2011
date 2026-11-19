import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createMemoryCardCanvas } from '../utils/photoTextureGenerator';

const PARTICLE_COUNT = 4200;
const PALETTE = [
  new THREE.Color('#ffd166'), // Warm Gold
  new THREE.Color('#ff758f'), // Rose Pink
  new THREE.Color('#ff9e64'), // Amber Sunset
  new THREE.Color('#72efdd'), // Soft Cyan
  new THREE.Color('#c77dff'), // Orchid Violet
  new THREE.Color('#fff8e7'), // Starlight Cream
];

function createGlowSpriteTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.22, 'rgba(255, 245, 225, 0.85)');
  grad.addColorStop(0.5, 'rgba(255, 215, 140, 0.28)');
  grad.addColorStop(1, 'rgba(255, 215, 140, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function generateParticleLayouts(count) {
  const startPositions = new Float32Array(count * 3);
  const envelopePositions = new Float32Array(count * 3);
  const galaxyPositions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const phases = new Float32Array(count);

  const envW = 5.6;
  const envH = 3.6;
  const halfW = envW / 2;
  const halfH = envH / 2;
  const sealCenterY = -0.15;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    phases[i] = Math.random() * Math.PI * 2;

    // 1. Start Position: deep-space outer shell
    const sTheta = Math.random() * Math.PI * 2;
    const sPhi = Math.acos(2 * Math.random() - 1);
    const sRad = 12 + Math.random() * 16;
    startPositions[i3] = sRad * Math.sin(sPhi) * Math.cos(sTheta);
    startPositions[i3 + 1] = sRad * Math.sin(sPhi) * Math.sin(sTheta);
    startPositions[i3 + 2] = sRad * Math.cos(sPhi) - 2;

    // 2. Envelope Target Position
    const roll = Math.random();
    let ex = 0;
    let ey = 0;
    let ez = 0;
    let col = PALETTE[Math.floor(Math.random() * PALETTE.length)];

    if (roll < 0.24) {
      // Outer crisp rectangular border of the envelope
      const perim = Math.random() * (2 * envW + 2 * envH);
      if (perim < envW) {
        ex = -halfW + perim;
        ey = halfH;
      } else if (perim < envW + envH) {
        ex = halfW;
        ey = halfH - (perim - envW);
      } else if (perim < 2 * envW + envH) {
        ex = halfW - (perim - envW - envH);
        ey = -halfH;
      } else {
        ex = -halfW;
        ey = -halfH + (perim - 2 * envW - envH);
      }
      ex += (Math.random() - 0.5) * 0.09;
      ey += (Math.random() - 0.5) * 0.09;
      ez = (Math.random() - 0.5) * 0.14;
      col = Math.random() < 0.65 ? PALETTE[0] : PALETTE[5];
    } else if (roll < 0.44) {
      // Top V-flap lines converging from top corners to center seal
      const t = Math.random();
      const side = Math.random() < 0.5 ? -1 : 1;
      ex = side * halfW * (1 - t) + (Math.random() - 0.5) * 0.08;
      ey = halfH * (1 - t) + sealCenterY * t + (Math.random() - 0.5) * 0.08;
      ez = 0.14 + t * 0.08;
      col = Math.random() < 0.7 ? PALETTE[0] : PALETTE[2];
    } else if (roll < 0.56) {
      // Bottom diagonal fold lines
      const t = Math.random();
      const side = Math.random() < 0.5 ? -1 : 1;
      ex = side * halfW * (1 - t) + side * 0.45 * t + (Math.random() - 0.5) * 0.07;
      ey = -halfH * (1 - t) + (sealCenterY - 0.1) * t + (Math.random() - 0.5) * 0.07;
      ez = 0.08;
      col = PALETTE[5];
    } else if (roll < 0.72) {
      // Glowing heart wax seal in the middle of the envelope
      const ht = Math.random() * Math.PI * 2;
      const fill = Math.sqrt(Math.random()) * 0.036;
      const hx = 16 * Math.pow(Math.sin(ht), 3);
      const hy =
        13 * Math.cos(ht) -
        5 * Math.cos(2 * ht) -
        2 * Math.cos(3 * ht) -
        Math.cos(4 * ht);
      ex = hx * fill;
      ey = hy * fill + sealCenterY;
      ez = 0.24 + (Math.random() - 0.5) * 0.08;
      col = Math.random() < 0.72 ? PALETTE[1] : PALETTE[0];
    } else {
      // Shimmering interior fill & stardust halo around envelope
      ex = (Math.random() - 0.5) * envW * 0.94;
      ey = (Math.random() - 0.5) * envH * 0.92;
      ez = (Math.random() - 0.5) * 0.22;
      col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    }

    envelopePositions[i3] = ex;
    envelopePositions[i3 + 1] = ey;
    envelopePositions[i3 + 2] = ez;

    // 3. Galaxy Orbit Position after burst
    const gAngle = Math.random() * Math.PI * 2;
    const gRadius = 8.5 + Math.random() * 14.5;
    const gHeight = (Math.random() - 0.5) * 12;
    galaxyPositions[i3] = Math.cos(gAngle) * gRadius;
    galaxyPositions[i3 + 1] = gHeight;
    galaxyPositions[i3 + 2] = Math.sin(gAngle) * gRadius - 2;

    colors[i3] = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;
  }

  return { startPositions, envelopePositions, galaxyPositions, colors, phases };
}

export default function ThreeScene({
  stage,
  photos,
  onEnvelopeFormed,
  onEnvelopeClick,
  onSelectPhoto,
}) {
  const mountRef = useRef(null);
  const stageRef = useRef(stage);
  const callbacksRef = useRef({ onEnvelopeFormed, onEnvelopeClick, onSelectPhoto });
  const cardMaterialsRef = useRef([]);
  const syncOrbitRef = useRef(null);

  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    callbacksRef.current = { onEnvelopeFormed, onEnvelopeClick, onSelectPhoto };
  }, [onEnvelopeFormed, onEnvelopeClick, onSelectPhoto]);

  // Update card textures or rebuild ring dynamically when photos change
  useEffect(() => {
    if (!photos || !syncOrbitRef.current) return;
    syncOrbitRef.current(photos);
  }, [photos]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const aspect = width / height;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(48, aspect, 0.1, 120);
    const computeCameraZ = (asp) => {
      if (asp >= 1.15) return 19.6;
      return Math.min(35.5, 19.6 * (1.15 / Math.max(asp, 0.52)));
    };
    camera.position.set(0, 0.1, computeCameraZ(aspect));

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Subtle ambient + warm point lights for envelope accent
    const ambientLight = new THREE.AmbientLight(0xfff5e4, 0.9);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffd166, 2.2, 30);
    pointLight.position.set(0, 2, 8);
    scene.add(pointLight);

    // --- 1. Particle System ---
    const layouts = generateParticleLayouts(PARTICLE_COUNT);
    const currentPositions = new Float32Array(layouts.startPositions);
    const burstVelocities = new Float32Array(PARTICLE_COUNT * 3);

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(layouts.colors, 3));

    const spriteTex = createGlowSpriteTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.2,
      map: spriteTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    // --- 2. Translucent 3D Envelope Accent + Hinged Flap ---
    const envelopeGroup = new THREE.Group();
    scene.add(envelopeGroup);

    const envBodyMat = new THREE.MeshBasicMaterial({
      color: 0x1a1528,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const envBodyMesh = new THREE.Mesh(new THREE.PlaneGeometry(5.55, 3.55), envBodyMat);
    envelopeGroup.add(envBodyMesh);

    const envEdgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(5.6, 3.6, 0.14));
    const envEdgeMat = new THREE.LineBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0,
    });
    const envEdgeLines = new THREE.LineSegments(envEdgeGeo, envEdgeMat);
    envelopeGroup.add(envEdgeLines);

    // Hinged top flap pivoting along y = +1.8
    const flapPivot = new THREE.Group();
    flapPivot.position.set(0, 1.8, 0.08);
    envelopeGroup.add(flapPivot);

    const flapShape = new THREE.Shape();
    flapShape.moveTo(-2.8, 0);
    flapShape.lineTo(2.8, 0);
    flapShape.lineTo(0, -1.95);
    flapShape.closePath();

    const flapMat = new THREE.MeshBasicMaterial({
      color: 0x261d3a,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const flapMesh = new THREE.Mesh(new THREE.ShapeGeometry(flapShape), flapMat);
    flapPivot.add(flapMesh);

    const flapLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-2.8, 0, 0.01),
      new THREE.Vector3(0, -1.95, 0.01),
      new THREE.Vector3(2.8, 0, 0.01),
    ]);
    const flapLineMat = new THREE.LineBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0,
    });
    flapPivot.add(new THREE.Line(flapLineGeo, flapLineMat));

    // Invisible larger raycast hit plane for comfortable envelope clicking
    const envelopeHitBox = new THREE.Mesh(
      new THREE.PlaneGeometry(6.2, 4.2),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    envelopeGroup.add(envelopeHitBox);

    // --- 3. 3D Orbiting Photo Ring ---
    const orbitGroup = new THREE.Group();
    orbitGroup.visible = false;
    orbitGroup.scale.set(0.001, 0.001, 0.001);
    orbitGroup.rotation.x = 0.25;
    orbitGroup.rotation.z = -0.03;
    scene.add(orbitGroup);

    const photoMeshes = [];
    const cardEntries = [];
    const orbitRadius = 9.0;
    const cardGeo = new THREE.PlaneGeometry(2.72, 2.04);
    const backingGeo = new THREE.PlaneGeometry(2.84, 2.16);

    const buildOrUpdateOrbitCards = (photoList) => {
      const list = Array.isArray(photoList) && photoList.length > 0 ? photoList : [];
      if (list.length === cardEntries.length && cardEntries.length > 0) {
        cardEntries.forEach((entry, idx) => {
          const item = list[idx];
          const canvas = createMemoryCardCanvas(item, idx, () => {
            if (entry.texture) {
              entry.texture.needsUpdate = true;
            }
          });
          const newTex = new THREE.CanvasTexture(canvas);
          newTex.colorSpace = THREE.SRGBColorSpace;
          newTex.anisotropy = 4;
          entry.texture?.dispose();
          entry.texture = newTex;
          entry.material.map = newTex;
          entry.material.needsUpdate = true;
        });
        return;
      }

      // Clear previous cards if length changed
      while (orbitGroup.children.length > 0) {
        orbitGroup.remove(orbitGroup.children[0]);
      }
      cardEntries.forEach((entry) => {
        entry.texture?.dispose();
        entry.material.dispose();
        entry.backingMat.dispose();
      });
      photoMeshes.length = 0;
      cardEntries.length = 0;

      const cardCount = list.length;
      for (let i = 0; i < cardCount; i++) {
        const item = list[i];
        const canvas = createMemoryCardCanvas(item, i, () => {
          if (cardEntries[i]?.texture) {
            cardEntries[i].texture.needsUpdate = true;
          }
        });
        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 4;

        const cardHolder = new THREE.Group();
        const angle = (i / cardCount) * Math.PI * 2;
        cardHolder.position.set(
          Math.sin(angle) * orbitRadius,
          Math.sin(angle * 2) * 0.25,
          Math.cos(angle) * orbitRadius
        );
        cardHolder.userData = {
          index: i,
          baseAngle: angle,
          hoverScale: 1,
        };

        const cardMat = new THREE.MeshBasicMaterial({
          map: tex,
          transparent: true,
          opacity: 0.98,
          side: THREE.DoubleSide,
        });

        const cardMesh = new THREE.Mesh(cardGeo, cardMat);
        cardMesh.userData = { index: i };
        cardHolder.add(cardMesh);

        const backingMat = new THREE.MeshBasicMaterial({
          color: 0xffd166,
          transparent: true,
          opacity: 0.22,
          side: THREE.DoubleSide,
        });
        const backingMesh = new THREE.Mesh(backingGeo, backingMat);
        backingMesh.position.z = -0.025;
        cardHolder.add(backingMesh);

        orbitGroup.add(cardHolder);
        photoMeshes.push(cardMesh);
        cardEntries.push({
          holder: cardHolder,
          mesh: cardMesh,
          material: cardMat,
          backingMat,
          texture: tex,
        });
      }
      cardMaterialsRef.current = cardEntries;
    };

    buildOrUpdateOrbitCards(photos);
    syncOrbitRef.current = buildOrUpdateOrbitCards;

    // --- Animation & Interaction State ---
    let animId = 0;
    let lastTime = performance.now();
    let gatherProgress = 0;
    let formedNotified = false;
    let prevStage = stageRef.current;

    let openingElapsed = 0;
    let orbitScale = 0.001;
    let orbitYaw = 0;
    let orbitAngularVel = 0.22;

    let isDragging = false;
    let pointerDownPos = { x: 0, y: 0 };
    let lastPointerX = 0;
    let hoveredIndex = -1;
    let envelopeHovered = false;

    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2(-99, -99);

    const updatePointerNdc = (clientX, clientY) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      pointerDownPos = { x: e.clientX, y: e.clientY };
      lastPointerX = e.clientX;
      updatePointerNdc(e.clientX, e.clientY);
    };

    const handlePointerMove = (e) => {
      updatePointerNdc(e.clientX, e.clientY);
      if (isDragging && stageRef.current === 'orbit') {
        const dx = e.clientX - lastPointerX;
        orbitYaw += dx * 0.0065;
        orbitAngularVel = THREE.MathUtils.clamp(dx * 0.045, -2.5, 2.5);
        lastPointerX = e.clientX;
      }
    };

    const handlePointerUp = (e) => {
      const moved = Math.hypot(
        e.clientX - pointerDownPos.x,
        e.clientY - pointerDownPos.y
      );
      isDragging = false;

      if (moved < 9) {
        updatePointerNdc(e.clientX, e.clientY);
        raycaster.setFromCamera(pointerNdc, camera);

        if (stageRef.current === 'ready') {
          const hits = raycaster.intersectObject(envelopeHitBox, false);
          if (hits.length > 0) {
            callbacksRef.current.onEnvelopeClick?.();
          }
        } else if (stageRef.current === 'orbit') {
          const hits = raycaster.intersectObjects(photoMeshes, false);
          if (hits.length > 0) {
            const idx = hits[0].object.userData.index;
            callbacksRef.current.onSelectPhoto?.(idx);
          }
        }
      }
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      const asp = w / h;
      camera.aspect = asp;
      camera.position.z = computeCameraZ(asp);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const worldPos = new THREE.Vector3();

    const animate = (now) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const t = now * 0.001;
      const currentStage = stageRef.current;

      // Detect stage transitions to initialize one-shot triggers
      if (currentStage !== prevStage) {
        if (currentStage === 'dark' || currentStage === 'gathering') {
          gatherProgress = 0;
          formedNotified = false;
          openingElapsed = 0;
          orbitScale = 0.001;
          orbitGroup.visible = false;
          orbitGroup.scale.set(0.001, 0.001, 0.001);
          flapPivot.rotation.x = 0;
          envelopeGroup.visible = true;
          envelopeGroup.scale.set(1, 1, 1);
          for (let i = 0; i < currentPositions.length; i++) {
            currentPositions[i] = layouts.startPositions[i];
          }
        } else if (currentStage === 'opening') {
          openingElapsed = 0;
          orbitGroup.visible = true;
          orbitScale = 0.02;
          orbitYaw = -0.6;
          orbitAngularVel = 0.85;
          // Give particles outward explosion velocity
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            const px = currentPositions[i3];
            const py = currentPositions[i3 + 1];
            const pz = currentPositions[i3 + 2];
            const len = Math.hypot(px, py, pz) || 1;
            const spd = 4.5 + Math.random() * 8.5;
            burstVelocities[i3] = (px / len) * spd + (Math.random() - 0.5) * 2.5;
            burstVelocities[i3 + 1] = (py / len) * spd + (Math.random() - 0.5) * 2.5;
            burstVelocities[i3 + 2] = (pz / len) * spd + (Math.random() - 0.5) * 3.0;
          }
        }
        prevStage = currentStage;
      }

      const posAttr = particleGeo.attributes.position;

      // --- Update Particles & Envelope per Stage ---
      if (currentStage === 'dark') {
        particleMat.opacity = 0.12;
        envBodyMat.opacity = 0;
        envEdgeMat.opacity = 0;
        flapMat.opacity = 0;
        flapLineMat.opacity = 0;
      } else if (currentStage === 'gathering' || currentStage === 'ready') {
        if (currentStage === 'gathering') {
          gatherProgress = Math.min(1, gatherProgress + dt * 0.20);
          if (gatherProgress >= 0.98 && !formedNotified) {
            formedNotified = true;
            callbacksRef.current.onEnvelopeFormed?.();
          }
        } else {
          gatherProgress = 1;
        }

        // Ease-out cubic
        const ease = 1 - Math.pow(1 - gatherProgress, 3);
        const swirlAmount = (1 - ease) * 3.6;

        particleMat.opacity = 0.35 + ease * 0.6;
        particleMat.size = 0.17 + Math.sin(t * 2) * 0.015;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          const sx = layouts.startPositions[i3];
          const sy = layouts.startPositions[i3 + 1];
          const sz = layouts.startPositions[i3 + 2];

          const tx = layouts.envelopePositions[i3];
          const ty = layouts.envelopePositions[i3 + 1];
          const tz = layouts.envelopePositions[i3 + 2];

          const angle = swirlAmount * (0.6 + (i % 7) * 0.08);
          const bx = THREE.MathUtils.lerp(sx, tx, ease);
          const by = THREE.MathUtils.lerp(sy, ty, ease);
          const bz = THREE.MathUtils.lerp(sz, tz, ease);

          // Swirl around Y axis during convergence + gentle floating once formed
          const cosA = Math.cos(angle);
          const sinA = Math.sin(angle);
          const rx = bx * cosA - bz * sinA;
          const rz = bx * sinA + bz * cosA;

          const floatAmp = ease > 0.85 ? 0.025 : 0;
          currentPositions[i3] = rx + Math.sin(t * 1.8 + layouts.phases[i]) * floatAmp;
          currentPositions[i3 + 1] = by + Math.cos(t * 1.5 + layouts.phases[i]) * floatAmp;
          currentPositions[i3 + 2] = rz;
        }
        posAttr.needsUpdate = true;

        // Fade in translucent 3D envelope wireframe & gentle float
        const accentFade = THREE.MathUtils.clamp((ease - 0.72) / 0.28, 0, 1);
        const hoverBoost = envelopeHovered ? 1.45 : 1.0;
        envBodyMat.opacity = accentFade * 0.22 * hoverBoost;
        envEdgeMat.opacity = accentFade * 0.55 * hoverBoost;
        flapMat.opacity = accentFade * 0.26 * hoverBoost;
        flapLineMat.opacity = accentFade * 0.65 * hoverBoost;

        const floatY = Math.sin(t * 1.6) * 0.12 * accentFade;
        const tiltY = Math.sin(t * 0.9) * 0.14 * accentFade;
        envelopeGroup.position.y = floatY;
        envelopeGroup.rotation.y = tiltY;
        particlesMesh.position.y = floatY;
        particlesMesh.rotation.y = tiltY;
      } else if (currentStage === 'opening' || currentStage === 'orbit') {
        openingElapsed += dt;

        // Open hinged flap and fade envelope away
        const flapProgress = Math.min(1, openingElapsed / 1.35);
        flapPivot.rotation.x = -flapProgress * Math.PI * 0.82;
        const envFadeOut = Math.max(0, 1 - openingElapsed / 1.65);
        envBodyMat.opacity = envFadeOut * 0.22;
        envEdgeMat.opacity = envFadeOut * 0.55;
        flapMat.opacity = envFadeOut * 0.26;
        flapLineMat.opacity = envFadeOut * 0.65;
        envelopeGroup.scale.setScalar(1 + (1 - envFadeOut) * 0.35);
        if (envFadeOut <= 0.01) {
          envelopeGroup.visible = false;
        }

        // Particles burst outward, then drift gracefully into galaxy positions
        particlesMesh.position.y = 0;
        particlesMesh.rotation.y += dt * 0.04;
        particleMat.opacity = 0.72;
        particleMat.size = 0.15;

        const settleRate = openingElapsed < 0.7 ? 0.018 : 0.045;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          if (openingElapsed < 0.9) {
            currentPositions[i3] += burstVelocities[i3] * dt;
            currentPositions[i3 + 1] += burstVelocities[i3 + 1] * dt;
            currentPositions[i3 + 2] += burstVelocities[i3 + 2] * dt;
            burstVelocities[i3] *= 0.94;
            burstVelocities[i3 + 1] *= 0.94;
            burstVelocities[i3 + 2] *= 0.94;
          }
          currentPositions[i3] = THREE.MathUtils.lerp(
            currentPositions[i3],
            layouts.galaxyPositions[i3],
            settleRate
          );
          currentPositions[i3 + 1] = THREE.MathUtils.lerp(
            currentPositions[i3 + 1],
            layouts.galaxyPositions[i3 + 1],
            settleRate
          );
          currentPositions[i3 + 2] = THREE.MathUtils.lerp(
            currentPositions[i3 + 2],
            layouts.galaxyPositions[i3 + 2],
            settleRate
          );
        }
        posAttr.needsUpdate = true;

        // Expand 3D Orbiting Photo Ring from the envelope
        orbitScale = THREE.MathUtils.lerp(orbitScale, 1.0, Math.min(1, dt * 1.65));
        orbitGroup.scale.setScalar(orbitScale);

        if (!isDragging) {
          // Smoothly relax angular velocity back to gentle ambient spin (0.18 rad/s)
          orbitAngularVel = THREE.MathUtils.lerp(orbitAngularVel, 0.18, dt * 1.8);
          orbitYaw += orbitAngularVel * dt;
        }
        orbitGroup.rotation.y = orbitYaw;

        // Keep each photo card readable (facing viewer with subtle 3D curvature) & animate hover
        cardEntries.forEach((entry, idx) => {
          const { holder, material, backingMat } = entry;
          holder.getWorldPosition(worldPos);

          // Billboard toward camera while keeping natural 3D curve yaw
          holder.lookAt(camera.position.x, worldPos.y, camera.position.z);

          // Gentle float bob
          const baseAngle = holder.userData.baseAngle;
          holder.position.y = Math.sin(t * 1.4 + baseAngle * 2) * 0.26;

          // Hover scale boost
          const targetScale = idx === hoveredIndex ? 1.13 : 1.0;
          holder.userData.hoverScale = THREE.MathUtils.lerp(
            holder.userData.hoverScale,
            targetScale,
            dt * 10
          );
          holder.scale.setScalar(holder.userData.hoverScale);

          // Slight depth clarity: cards far behind are subtly softer, hovered card glows brighter
          const depthFactor = THREE.MathUtils.clamp((worldPos.z + 8) / 16, 0.55, 1);
          material.opacity = idx === hoveredIndex ? 1.0 : 0.72 + depthFactor * 0.28;
          backingMat.opacity = idx === hoveredIndex ? 0.62 : 0.18 + depthFactor * 0.14;
        });
      }

      // --- Raycasting for Hover Cursor ---
      raycaster.setFromCamera(pointerNdc, camera);
      if (currentStage === 'ready') {
        const hits = raycaster.intersectObject(envelopeHitBox, false);
        envelopeHovered = hits.length > 0;
        hoveredIndex = -1;
        domEl.style.cursor = envelopeHovered ? 'pointer' : 'default';
      } else if (currentStage === 'orbit') {
        envelopeHovered = false;
        const hits = raycaster.intersectObjects(photoMeshes, false);
        hoveredIndex = hits.length > 0 ? hits[0].object.userData.index : -1;
        domEl.style.cursor = hoveredIndex >= 0 ? 'pointer' : isDragging ? 'grabbing' : 'grab';
      } else {
        envelopeHovered = false;
        hoveredIndex = -1;
        domEl.style.cursor = 'default';
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      particleGeo.dispose();
      particleMat.dispose();
      spriteTex.dispose();
      envBodyMesh.geometry.dispose();
      envBodyMat.dispose();
      envEdgeGeo.dispose();
      envEdgeMat.dispose();
      flapMesh.geometry.dispose();
      flapMat.dispose();
      flapLineGeo.dispose();
      flapLineMat.dispose();
      cardGeo.dispose();
      backingGeo.dispose();
      cardEntries.forEach((e) => {
        e.texture?.dispose();
        e.material.dispose();
        e.backingMat.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="three-stage" aria-label="Không gian 3D thiệp 20/11" />;
}
