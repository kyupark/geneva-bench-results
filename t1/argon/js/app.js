/**
 * Main Application Entry — LEGO® GENEVA: BRICK BY BRICK Motion Graphic
 */
(function (global) {
  'use strict';

  function formatTimecode(sec) {
    const totalSec = Math.floor(sec);
    const mm = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const ss = String(totalSec % 60).padStart(2, '0');
    const ff = String(Math.floor((sec % 1) * 24)).padStart(2, '0');
    return `${mm}:${ss}:${ff}`;
  }

  function initApp() {
    const webglCanvas = document.getElementById('webgl-canvas');
    const overlayCanvas = document.getElementById('mg-overlay-canvas');

    // 1. Initialize Three.js Scene, Camera & High-DPI Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x162436);
    scene.fog = new THREE.FogExp2(0x162436, 0.0048);

    const camera = new THREE.PerspectiveCamera(
      38,
      window.innerWidth / window.innerHeight,
      0.5,
      300
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: webglCanvas,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;

    // 2. Studio LEGO Architecture Lighting Rig
    const ambientLight = new THREE.HemisphereLight(0xDCE8F8, 0x243447, 0.85);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFF7E8, 1.95);
    sunLight.position.set(45, 68, 42);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 180;
    const d = 52;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x56B4E9, 0.75);
    rimLight.position.set(-48, 32, -40);
    scene.add(rimLight);

    // 3. Build the 6 Geneva Landmarks + Master Connected LEGO City Table
    const world = global.GenevaLandmarks.createGenevaWorld(scene);

    // Calculate total represented LEGO bricks across the entire Geneva diorama
    let totalCityBricks = world.baseTable.brickCount;
    Object.keys(world.landmarks).forEach((k) => {
      totalCityBricks += world.landmarks[k].brickCount;
    });

    // 4. Add Floating Celebratory 1x1 LEGO Stud Particles in the Studio Air
    const floatingStudsGroup = new THREE.Group();
    scene.add(floatingStudsGroup);
    const studGeo = global.LegoEngine.getRoundBrickGeometry(0.6, 0.8, false, 10);
    const studColors = ['brightYellow', 'brightRed', 'mediumAzure', 'sandGreen', 'brightOrange', 'white'];
    const floatingStuds = [];
    for (let i = 0; i < 36; i++) {
      const m = new THREE.Mesh(studGeo, global.LegoEngine.getMaterial(studColors[i % studColors.length]));
      const angle = (i / 36) * Math.PI * 2;
      const rad = 16 + (i % 7) * 5.2;
      const y = 7 + (i % 6) * 3.2;
      m.position.set(Math.cos(angle) * rad, y, Math.sin(angle) * rad);
      floatingStudsGroup.add(m);
      floatingStuds.push({ mesh: m, baseY: y, phase: i * 0.45 });
    }

    // 5. DOM Elements for Broadcast HUD
    const elCard = document.getElementById('landmark-card');
    const elCode = document.getElementById('chapter-code');
    const elBrickCount = document.getElementById('chapter-brick-count');
    const elTitleKo = document.getElementById('card-title-ko');
    const elTitleFr = document.getElementById('card-title-fr');
    const elSubtitle = document.getElementById('card-subtitle');
    const elDesc = document.getElementById('card-desc');
    const elTotalBricks = document.getElementById('total-bricks-readout');
    const elChapterTabsContainer = document.getElementById('chapter-tabs');
    const elScrubberTrack = document.getElementById('scrubber-track');
    const elScrubberFill = document.getElementById('scrubber-fill');
    const elTimecode = document.getElementById('timecode-readout');
    const btnPlayPause = document.getElementById('btn-play-pause');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnRebuild = document.getElementById('btn-rebuild');
    const btnStopMotion = document.getElementById('btn-stopmotion');
    const btnIsolate = document.getElementById('btn-isolate');
    const btnAudio = document.getElementById('btn-audio');

    if (elTotalBricks) {
      elTotalBricks.textContent = totalCityBricks.toLocaleString() + ' BRICKS';
    }

    // Build 7 Chapter Tabs in the bottom dock
    const tabElements = [];
    world.CHAPTERS.forEach((ch, idx) => {
      const btn = document.createElement('button');
      btn.className = 'chapter-tab' + (idx === 0 ? ' active' : '');
      btn.style.setProperty('--tab-accent', ch.accentColor);
      btn.dataset.chapterIndex = idx;

      const numLabel = idx === 0 ? 'ALL · CITY' : `0${idx} · LANDMARK`;
      btn.innerHTML = `
        <span class="tab-stud"></span>
        <span class="tab-text-wrap">
          <span class="tab-num">${numLabel}</span>
          <span class="tab-name">${ch.nameKo}</span>
        </span>
        <span class="tab-progress-bar"></span>
      `;
      btn.addEventListener('click', () => {
        director.audio.playBrickClick(1.1);
        director.selectChapter(idx, true);
      });
      elChapterTabsContainer.appendChild(btn);
      tabElements.push(btn);
    });

    // Update Lower-Third Card & Active Chapter Tab
    function updateHudForChapter(ch, idx) {
      document.documentElement.style.setProperty('--active-accent', ch.accentColor);

      elCard.classList.remove('animate-wipe');
      void elCard.offsetWidth; // trigger reflow for kinetic wipe animation
      elCard.classList.add('animate-wipe');

      elCode.textContent = ch.code;
      elTitleKo.textContent = ch.nameKo;
      elTitleFr.textContent = ch.nameFr;
      elSubtitle.textContent = ch.subtitle;
      elDesc.textContent = ch.description;

      const lmBricks = ch.id === 'panorama'
        ? totalCityBricks
        : (world.landmarks[ch.id] ? world.landmarks[ch.id].brickCount : 850);
      elBrickCount.textContent = `${lmBricks.toLocaleString()} LEGO PCS`;

      tabElements.forEach((tab, tIdx) => {
        const bar = tab.querySelector('.tab-progress-bar');
        if (tIdx === idx) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
          if (bar) bar.style.width = tIdx < idx ? '100%' : '0%';
        }
      });
    }

    // 6. Initialize MotionDirector
    const director = new global.MotionDirector.MotionDirector({
      scene,
      camera,
      overlayCanvas,
      world,
      lights: {
        ambient: ambientLight,
        sun: sunLight,
        rim: rimLight
      },
      onChapterChange: updateHudForChapter,
      onTimelineUpdate: (normProgress, chProgress, elapsedSec) => {
        if (elScrubberFill) {
          elScrubberFill.style.width = `${(normProgress * 100).toFixed(2)}%`;
        }
        const activeTab = tabElements[director.currentChapterIndex];
        if (activeTab) {
          const bar = activeTab.querySelector('.tab-progress-bar');
          if (bar) bar.style.width = `${(chProgress * 100).toFixed(1)}%`;
        }
        if (elTimecode) {
          elTimecode.textContent = `${formatTimecode(elapsedSec % director.totalDuration)} / ${formatTimecode(director.totalDuration)}`;
        }
      }
    });

    // Resize handler
    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      overlayCanvas.width = w * dpr;
      overlayCanvas.height = h * dpr;
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize HUD for Chapter 0 (or URL-requested chapter / lighting mode)
    updateHudForChapter(world.CHAPTERS[0], 0);
    const params = new URLSearchParams(window.location.search);
    const reqCh = params.get('chapter') || window.location.hash.replace('#', '');
    if (reqCh) {
      const idxById = world.CHAPTERS.findIndex((c) => c.id === reqCh || String(c.index) === reqCh);
      if (idxById >= 0) {
        director.selectChapter(idxById, false);
        director.camPosCurrent.copy(world.CHAPTERS[idxById].camPos);
        director.camLookCurrent.copy(world.CHAPTERS[idxById].worldCenter);
      }
    }
    const reqLight = params.get('light');
    if (reqLight) {
      director.setLightingMode(reqLight);
      document.querySelectorAll('.light-btn').forEach((lb) => {
        lb.classList.toggle('active', lb.dataset.light === reqLight);
      });
    }

    // 7. Wire Interactive Controls
    btnPlayPause.addEventListener('click', () => {
      director.isPlaying = !director.isPlaying;
      btnPlayPause.textContent = director.isPlaying ? '❚❚' : '▶';
      director.audio.playBrickClick(1.0);
    });

    btnPrev.addEventListener('click', () => {
      director.audio.playBrickClick(0.95);
      director.selectChapter(director.currentChapterIndex - 1, true);
    });

    btnNext.addEventListener('click', () => {
      director.audio.playBrickClick(1.15);
      director.selectChapter(director.currentChapterIndex + 1, true);
    });

    btnRebuild.addEventListener('click', () => {
      const activeId = world.CHAPTERS[director.currentChapterIndex].id;
      director.triggerAssembly(activeId, true);
    });

    btnStopMotion.addEventListener('click', () => {
      director.stopMotionMode = !director.stopMotionMode;
      btnStopMotion.classList.toggle('active', director.stopMotionMode);
      btnStopMotion.querySelector('.btn-label').textContent = director.stopMotionMode
        ? '12 FPS Stop motion ON'
        : '12 FPS Stop motion';
      director.audio.playBrickClick(1.2);
    });

    btnIsolate.addEventListener('click', () => {
      director.setIsolatedView(!director.isolatedView);
      btnIsolate.classList.toggle('active', director.isolatedView);
      btnIsolate.querySelector('.btn-label').textContent = director.isolatedView
        ? 'Single diorama view'
        : 'Full city view';
      director.audio.playBrickClick(1.05);
    });

    btnAudio.addEventListener('click', () => {
      const on = director.audio.toggleMusic();
      btnAudio.classList.toggle('active', on);
      btnAudio.querySelector('.btn-label').textContent = on ? 'Sound ON' : 'Sound OFF';
    });

    // Lighting Mode Buttons
    const lightBtns = document.querySelectorAll('.light-btn');
    lightBtns.forEach((b) => {
      b.addEventListener('click', () => {
        const mode = b.dataset.light;
        director.setLightingMode(mode);
        lightBtns.forEach((lb) => lb.classList.toggle('active', lb === b));
        director.audio.playBrickClick(1.1);
      });
    });

    // Scrubber Bar Click/Drag
    let isScrubbing = false;
    function scrubFromEvent(e) {
      const rect = elScrubberTrack.getBoundingClientRect();
      const norm = (e.clientX - rect.left) / rect.width;
      director.seekNormalized(norm);
    }
    elScrubberTrack.addEventListener('pointerdown', (e) => {
      isScrubbing = true;
      scrubFromEvent(e);
    });
    window.addEventListener('pointermove', (e) => {
      if (isScrubbing) scrubFromEvent(e);
    });
    window.addEventListener('pointerup', () => {
      isScrubbing = false;
    });

    // 3D Viewport Pointer Orbit & Wheel Zoom
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    webglCanvas.addEventListener('pointerdown', (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      director.userOrbitAngleOffset -= dx * 0.0065;
      director.userPitchOffset = Math.max(-8, Math.min(24, director.userPitchOffset + dy * 0.08));
    });
    window.addEventListener('pointerup', () => {
      isDragging = false;
    });
    webglCanvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      director.userZoomScale = Math.max(0.52, Math.min(1.55, director.userZoomScale + e.deltaY * 0.0008));
    }, { passive: false });

    // Keyboard shortcuts (1..6 for landmarks, 0 for panorama, Space for play/pause, R for rebuild)
    window.addEventListener('keydown', (e) => {
      if (e.key >= '0' && e.key <= '6') {
        director.selectChapter(parseInt(e.key, 10), true);
      } else if (e.code === 'Space') {
        e.preventDefault();
        btnPlayPause.click();
      } else if (e.key === 'r' || e.key === 'R') {
        btnRebuild.click();
      }
    });

    // Expose controller globally for inspection & automated tests
    global.GenevaLegoApp = {
      scene,
      camera,
      renderer,
      world,
      director
    };

    // 8. Main Animation Loop (render initial frame immediately)
    director.update(0.016);
    renderer.render(scene, camera);

    let lastTime = null;
    function animate(now) {
      requestAnimationFrame(animate);
      if (lastTime === null) {
        lastTime = now;
      }
      const rawDt = (now - lastTime) * 0.001;
      const dt = Math.max(0.0, Math.min(rawDt, 0.1));
      lastTime = now;

      // Animate floating studio LEGO studs
      for (let i = 0; i < floatingStuds.length; i++) {
        const fs = floatingStuds[i];
        fs.mesh.position.y = fs.baseY + Math.sin(director.clockTime * 1.8 + fs.phase) * 0.45;
        fs.mesh.rotation.x += dt * 0.8;
        fs.mesh.rotation.y += dt * 1.1;
      }

      director.update(dt);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})(window);
