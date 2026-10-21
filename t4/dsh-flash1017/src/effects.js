import * as THREE from 'three';

const MAX_PARTICLES = 900;

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(MAX_PARTICLES * 3);
    this.colors = new Float32Array(MAX_PARTICLES * 3);
    this.sizes = new Float32Array(MAX_PARTICLES);
    this.alphas = new Float32Array(MAX_PARTICLES);
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    this.geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    this.material = new THREE.ShaderMaterial({
      uniforms: { pixelRatio: { value: Math.min(2, window.devicePixelRatio || 1) } },
      vertexShader: `
        attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
        varying vec3 vColor; varying float vAlpha;
        uniform float pixelRatio;
        void main() {
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * pixelRatio * (170.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor; varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float soft = smoothstep(0.5, 0.08, d);
          gl_FragColor = vec4(vColor, vAlpha * soft);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 8;
    scene.add(this.points);
    this.count = 0;
    this._color = new THREE.Color();

    // Skid marks kept in a single instanced draw call.
    this.skidCapacity = 420;
    this.skidMesh = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(0.38, 0.8),
      new THREE.MeshBasicMaterial({ color: 0x1d2425, transparent: true, opacity: 0.34, depthWrite: false }),
      this.skidCapacity,
    );
    this.skidMesh.rotation.x = -Math.PI / 2;
    this.skidMesh.frustumCulled = false;
    this.skidMesh.renderOrder = 2;
    this.skidMesh.count = 0;
    scene.add(this.skidMesh);
    this.skidCount = 0;
    this._skidTimer = 0;
    this._matrix = new THREE.Matrix4();
    this._quat = new THREE.Quaternion();
    this._pos = new THREE.Vector3();
    this._scale = new THREE.Vector3(1, 1, 1);
  }

  spawn(opts) {
    if (this.particles.length >= MAX_PARTICLES) this.particles.shift();
    const life = opts.life ?? 1;
    this.particles.push({
      x: opts.x, y: opts.y, z: opts.z,
      vx: opts.vx ?? 0, vy: opts.vy ?? 0, vz: opts.vz ?? 0,
      life, maxLife: life,
      size: opts.size ?? 0.5,
      color: new THREE.Color(opts.color ?? 0xffffff),
      gravity: opts.gravity ?? 0,
      drag: opts.drag ?? 0.6,
    });
  }

  burst(x, y, z, colors, count = 28, power = 8) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const p = power * (0.35 + Math.random() * 0.65);
      this.spawn({
        x: x + (Math.random() - 0.5) * 1.1,
        y: y + Math.random() * 1.2,
        z: z + (Math.random() - 0.5) * 1.1,
        vx: Math.cos(a) * p,
        vz: Math.sin(a) * p,
        vy: 4 + Math.random() * 10,
        gravity: 19,
        drag: 0.25,
        life: 0.7 + Math.random() * 0.8,
        size: 0.5 + Math.random() * 0.75,
        color: Array.isArray(colors) ? colors[Math.floor(Math.random() * colors.length)] : colors,
      });
    }
  }

  smoke(x, y, z, amount = 2, boosting = false) {
    for (let i = 0; i < amount; i++) {
      this.spawn({
        x: x + (Math.random() - 0.5) * 0.9,
        y: y + 0.1,
        z: z + (Math.random() - 0.5) * 0.9,
        vx: (Math.random() - 0.5) * 3,
        vz: (Math.random() - 0.5) * 3,
        vy: 0.5 + Math.random() * 1.3,
        drag: 1.5,
        gravity: -0.15,
        life: 0.55 + Math.random() * 0.55,
        size: 1.5 + Math.random() * 1.8,
        color: boosting ? 0x8be6e0 : 0xd6d8d0,
      });
    }
  }

  splash(x, z) {
    for (let i = 0; i < 45; i++) {
      const a = Math.random() * Math.PI * 2;
      const p = 5 + Math.random() * 12;
      this.spawn({
        x, y: 0.2, z,
        vx: Math.cos(a) * p,
        vz: Math.sin(a) * p,
        vy: 6 + Math.random() * 11,
        gravity: 20,
        drag: 0.6,
        life: 0.8 + Math.random() * 0.7,
        size: 0.4 + Math.random() * 0.9,
        color: i % 3 === 0 ? 0xe7fcff : 0x69c4dc,
      });
    }
  }

  sparks(x, y, z, count = 20) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const p = 2 + Math.random() * 8;
      this.spawn({
        x, y, z,
        vx: Math.cos(a) * p,
        vz: Math.sin(a) * p,
        vy: 1.5 + Math.random() * 4,
        gravity: 17,
        drag: 0.2,
        life: 0.25 + Math.random() * 0.35,
        size: 0.3 + Math.random() * 0.4,
        color: Math.random() > 0.4 ? 0xffc63d : 0xfff3ce,
      });
    }
  }

  coinSparkle(x, y, z) {
    for (let i = 0; i < 10; i++) {
      this.spawn({
        x, y, z,
        vx: (Math.random() - 0.5) * 4,
        vz: (Math.random() - 0.5) * 4,
        vy: 2 + Math.random() * 3,
        gravity: 7,
        life: 0.4 + Math.random() * 0.4,
        size: 0.35 + Math.random() * 0.3,
        color: 0xffd84a,
      });
    }
  }

  addSkid(x, z, heading) {
    if (this.skidCount >= this.skidCapacity) return;
    this._quat.setFromEuler(new THREE.Euler(-Math.PI / 2, 0, -heading));
    this._pos.set(x, 0.133, z);
    this._scale.set(1, 1, 1);
    this._matrix.compose(this._pos, this._quat, this._scale);
    this.skidMesh.setMatrixAt(this.skidCount++, this._matrix);
    this.skidMesh.count = this.skidCount;
    this.skidMesh.instanceMatrix.needsUpdate = true;
  }

  resetSkids() {
    this.skidCount = 0;
    this.skidMesh.count = 0;
  }

  update(dt, taxi, drifting = false, boosting = false) {
    const p = this.particles;
    for (let i = p.length - 1; i >= 0; i--) {
      const q = p[i];
      q.life -= dt;
      if (q.life <= 0) { p.splice(i, 1); continue; }
      const drag = Math.exp(-q.drag * dt);
      q.vx *= drag; q.vz *= drag;
      q.vy -= q.gravity * dt;
      q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
      if (q.y < 0.1 && q.vy < 0) { q.y = 0.1; q.vy *= -0.22; q.vx *= 0.7; q.vz *= 0.7; }
    }
    const n = Math.min(p.length, MAX_PARTICLES);
    for (let i = 0; i < n; i++) {
      const q = p[i];
      const t = q.life / q.maxLife;
      this.positions[i * 3] = q.x;
      this.positions[i * 3 + 1] = q.y;
      this.positions[i * 3 + 2] = q.z;
      const fade = t > 0.75 ? (1 - t) / 0.25 : Math.min(1, t / 0.28);
      this._color.copy(q.color);
      this.colors[i * 3] = this._color.r;
      this.colors[i * 3 + 1] = this._color.g;
      this.colors[i * 3 + 2] = this._color.b;
      this.sizes[i] = q.size * (0.7 + (1 - t) * 0.6);
      this.alphas[i] = Math.max(0, Math.min(1, fade)) * 0.9;
    }
    this.count = n;
    this.geometry.setDrawRange(0, n);
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aColor.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;

    // Tyre smoke and skid marks.
    if (taxi) {
      const dr = drifting || (taxi.drifting && taxi.speed > 7);
      if (dr && Math.random() > 0.3) {
        const f = taxi.forward;
        const rightX = Math.cos(taxi.heading), rightZ = Math.sin(taxi.heading);
        const backX = taxi.position.x - f.x * 1.6;
        const backZ = taxi.position.z - f.y * 1.6;
        this.smoke(backX + rightX * 1.2, 0.2, backZ + rightZ * 1.2, 1, boosting);
        this.smoke(backX - rightX * 1.2, 0.2, backZ - rightZ * 1.2, 1, boosting);
        this._skidTimer -= dt;
        if (this._skidTimer <= 0) {
          this._skidTimer = 0.09;
          const sx = taxi.position.x - f.x * 1.9;
          const sz = taxi.position.z - f.y * 1.9;
          this.addSkid(sx + rightX * 1.3, sz + rightZ * 1.3, taxi.heading);
          this.addSkid(sx - rightX * 1.3, sz - rightZ * 1.3, taxi.heading);
        }
      }
      if (boosting) {
        const f = taxi.forward;
        this.spawn({
          x: taxi.position.x - f.x * 3.1 + (Math.random() - 0.5) * 0.4,
          y: 0.72 + Math.random() * 0.2,
          z: taxi.position.z - f.y * 3.1 + (Math.random() - 0.5) * 0.4,
          vx: -f.x * 7 + (Math.random() - 0.5) * 1.5,
          vz: -f.y * 7 + (Math.random() - 0.5) * 1.5,
          vy: 0.4,
          life: 0.15 + Math.random() * 0.15,
          size: 0.7 + Math.random() * 0.5,
          color: Math.random() > 0.5 ? 0x6fefff : 0xffc64e,
          drag: 0.2,
        });
      }
    }
  }
}
