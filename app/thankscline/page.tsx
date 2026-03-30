"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ClineRunnerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // ── Scene setup (lower FOV = less detail visible) ────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0d1a);
    scene.fog = new THREE.FogExp2(0x0d0d1a, 0.018); // increased fog to soften edges

    const camera = new THREE.PerspectiveCamera(
      42, // narrower FOV — less distortion, more flattering
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 2.0, 7.5); // pulled back a bit
    camera.lookAt(0, 1.0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.zIndex = "1";
    containerRef.current.appendChild(renderer.domElement);

    // ── OrbitControls — drag to rotate, auto-rotates when idle ───
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.2, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.8;
    controls.minDistance = 4;
    controls.maxDistance = 25;
    controls.maxPolarAngle = Math.PI * 0.85; // prevent going underground
    controls.minPolarAngle = 0.2; // prevent going directly overhead
    controls.enablePan = false; // keep focus on the character

    // ── Post-processing bloom (the #1 cheap trick) ───────────────
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.8,  // bloom strength — dreamy glow
      0.4,  // radius — how far bloom spreads
      0.3   // threshold — what brightness starts to bloom
    );
    composer.addPass(bloomPass);

    // ── Lighting — Cyberpunk dance club ──────────────────────────
    const ambientLight = new THREE.AmbientLight(0x222244, 1.5);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x4444aa, 0x221133, 0.8);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xeeeeff, 1.5);
    keyLight.position.set(2, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // ── Orbiting neon dance lights (proto7ype colors) ────────────
    const neonColors = [
      0xff8c00, 0xff006e, 0x9d4edd, 0x00f5ff, 0xff00ff,
      0xfbbf24, 0xff4500, 0x06b6d4, 0xc084fc, 0xff8c00,
    ];
    const neonLights: THREE.PointLight[] = [];
    const neonOrbitRadius = 5;

    for (let i = 0; i < neonColors.length; i++) {
      const light = new THREE.PointLight(neonColors[i], 2.5, 14);
      const angle = (i / neonColors.length) * Math.PI * 2;
      light.position.set(
        Math.cos(angle) * neonOrbitRadius,
        1.5 + (i % 3) * 1.2,
        Math.sin(angle) * neonOrbitRadius
      );
      scene.add(light);
      neonLights.push(light);
    }

    const innerColors = [0xff8c00, 0xfbbf24, 0xff6b35, 0xffa500];
    const innerLights: THREE.PointLight[] = [];
    for (let i = 0; i < innerColors.length; i++) {
      const light = new THREE.PointLight(innerColors[i], 1.5, 8);
      const angle = (i / innerColors.length) * Math.PI * 2 + 0.4;
      light.position.set(
        Math.cos(angle) * 2.5,
        1 + (i % 2) * 2,
        Math.sin(angle) * 2.5
      );
      scene.add(light);
      innerLights.push(light);
    }

    const spotlight = new THREE.SpotLight(0xff8c00, 3, 15, Math.PI / 6, 0.5, 1);
    spotlight.position.set(0, 8, 0);
    spotlight.target.position.set(0, 0, 0);
    spotlight.castShadow = true;
    scene.add(spotlight);
    scene.add(spotlight.target);

    const spotlight2 = new THREE.SpotLight(0x9d4edd, 2, 15, Math.PI / 5, 0.6, 1);
    spotlight2.position.set(3, 7, 2);
    spotlight2.target.position.set(0, 0, 0);
    scene.add(spotlight2);
    scene.add(spotlight2.target);

    // ── Neon grid dance floor ────────────────────────────────────
    const gridSegments = 80;
    const gridSize = 120;
    const groundGeometry = new THREE.PlaneGeometry(gridSize, gridSize, gridSegments, gridSegments);
    const groundMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(0x0d0d1a) },
        uColor2: { value: new THREE.Color(0xff00ff) },
        uColor3: { value: new THREE.Color(0x00ffff) },
        uFogColor: { value: new THREE.Color(0x0d0d1a) },
        uFogDensity: { value: 0.03 },
        uBeat: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vDist;
        uniform float uTime;
        uniform float uBeat;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float dist = length(pos.xy);
          pos.z += sin(dist * 0.5 - uTime * 2.0) * 0.08 * uBeat;
          pos.z += sin(pos.x * 0.3 + uTime * 0.8) * 0.1;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          vDist = -mvPos.z;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vDist;
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        uniform float uBeat;
        void main() {
          vec2 scrollUv = vUv;
          scrollUv.y += uTime * 0.05;
          vec2 grid = abs(fract(scrollUv * 30.0 - 0.5) - 0.5) / fwidth(scrollUv * 30.0);
          float line = min(grid.x, grid.y);
          float gridLine = 1.0 - min(line, 1.0);
          float cycle = sin(uTime * 0.5) * 0.5 + 0.5;
          vec3 gridColor = mix(uColor2, uColor3, cycle);
          float pulse = 0.5 + uBeat * 0.5;
          vec3 color = mix(uColor1, gridColor, gridLine * pulse);
          float centerDist = length(scrollUv - 0.5);
          float glow = exp(-centerDist * 3.0) * 0.15;
          color += gridColor * glow;
          float fogFactor = 1.0 - exp(-uFogDensity * vDist * vDist);
          color = mix(color, uFogColor, clamp(fogFactor, 0.0, 1.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide,
    });

    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);

    // ── Floating particles ───────────────────────────────────────
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const particlePalette = [
      new THREE.Color(0xff00ff), new THREE.Color(0x00ffff),
      new THREE.Color(0xff006e), new THREE.Color(0x7c3aed),
      new THREE.Color(0xfbbf24), new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = Math.random() * 10 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = particlePalette[Math.floor(Math.random() * particlePalette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ── Cyberpunk Buildings ──────────────────────────────────────
    const buildingColors = [0x1a1a2e, 0x16162a, 0x121228, 0x0e0e22];
    const accentColors = [0xff00ff, 0x00ffff, 0x9d4edd, 0xff006e, 0xff8c00, 0xfbbf24];

    const createBuilding = (x: number, z: number, w: number, d: number, h: number) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      const color = buildingColors[Math.floor(Math.random() * buildingColors.length)];
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.8,
        metalness: 0.3,
      });
      const building = new THREE.Mesh(geo, mat);
      building.position.set(x, h / 2, z);
      building.castShadow = true;
      building.receiveShadow = true;
      scene.add(building);

      // Neon edge strips (horizontal lines on buildings)
      const stripCount = Math.floor(h / 2) + 1;
      for (let s = 0; s < stripCount; s++) {
        const stripColor = accentColors[Math.floor(Math.random() * accentColors.length)];
        const stripGeo = new THREE.BoxGeometry(w + 0.05, 0.05, d + 0.05);
        const stripMat = new THREE.MeshBasicMaterial({
          color: stripColor,
          transparent: true,
          opacity: 0.6 + Math.random() * 0.4,
        });
        const strip = new THREE.Mesh(stripGeo, stripMat);
        strip.position.set(x, 1 + s * 2 + Math.random(), z);
        scene.add(strip);
      }

      // Window lights (small emissive squares on facades)
      const windowRows = Math.floor(h / 1.5);
      const windowCols = Math.floor(w / 1.2);
      for (let row = 0; row < windowRows; row++) {
        for (let col = 0; col < windowCols; col++) {
          if (Math.random() > 0.5) continue; // random window pattern
          const wGeo = new THREE.PlaneGeometry(0.4, 0.3);
          const wColor = Math.random() > 0.5 ? 0xffeedd : accentColors[Math.floor(Math.random() * accentColors.length)];
          const wMat = new THREE.MeshBasicMaterial({
            color: wColor,
            transparent: true,
            opacity: 0.3 + Math.random() * 0.5,
          });
          const win = new THREE.Mesh(wGeo, wMat);
          const wx = x - w / 2 + 0.6 + col * 1.2;
          const wy = 1 + row * 1.5;
          // Place on front or back face
          if (Math.random() > 0.5) {
            win.position.set(wx, wy, z + d / 2 + 0.01);
          } else {
            win.position.set(wx, wy, z - d / 2 - 0.01);
            win.rotation.y = Math.PI;
          }
          scene.add(win);
        }
      }

      return building;
    };

    // Generate city skyline around the character
    const buildingData = [
      // Ring at ~15-25 units radius
      { x: 15, z: 0, w: 4, d: 3, h: 12 },
      { x: -15, z: 3, w: 3, d: 4, h: 18 },
      { x: 12, z: 12, w: 5, d: 3, h: 10 },
      { x: -12, z: -10, w: 3, d: 3, h: 22 },
      { x: 0, z: 18, w: 6, d: 3, h: 14 },
      { x: 0, z: -16, w: 4, d: 5, h: 20 },
      { x: 18, z: -8, w: 3, d: 4, h: 16 },
      { x: -18, z: 10, w: 4, d: 3, h: 11 },
      { x: 10, z: -15, w: 5, d: 3, h: 25 },
      { x: -8, z: 16, w: 3, d: 5, h: 13 },
      // Closer medium buildings
      { x: 8, z: 8, w: 2.5, d: 2, h: 8 },
      { x: -9, z: -7, w: 2, d: 2.5, h: 9 },
      { x: 7, z: -9, w: 3, d: 2, h: 7 },
      { x: -7, z: 8, w: 2, d: 3, h: 10 },
      // Far distant towers
      { x: 25, z: 15, w: 3, d: 3, h: 30 },
      { x: -22, z: -18, w: 4, d: 3, h: 28 },
      { x: 20, z: -20, w: 3, d: 4, h: 35 },
      { x: -25, z: 12, w: 3, d: 3, h: 24 },
    ];

    buildingData.forEach((b) => createBuilding(b.x, b.z, b.w, b.d, b.h));

    // ── Neon Signs / Billboards ──────────────────────────────────
    const createNeonSign = (text: string, x: number, y: number, z: number, color: number, size: number, rotY: number) => {
      // Sign backing panel
      const panelW = text.length * size * 0.6 + 1;
      const panelH = size * 1.5;
      const panelGeo = new THREE.PlaneGeometry(panelW, panelH);
      const panelMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      });
      const panel = new THREE.Mesh(panelGeo, panelMat);
      panel.position.set(x, y, z);
      panel.rotation.y = rotY;
      scene.add(panel);

      // Neon border
      const borderGeo = new THREE.EdgesGeometry(panelGeo);
      const borderMat = new THREE.LineBasicMaterial({ color, linewidth: 2 });
      const border = new THREE.LineSegments(borderGeo, borderMat);
      border.position.copy(panel.position);
      border.rotation.copy(panel.rotation);
      scene.add(border);

      // Sign light to illuminate surroundings
      const signLight = new THREE.PointLight(color, 1.5, 8);
      signLight.position.set(x, y, z + (Math.cos(rotY) > 0 ? 0.5 : -0.5));
      scene.add(signLight);
    };

    // Place neon signs on/near buildings
    createNeonSign("PROTO7YPE", 15, 8, 1.6, 0xff8c00, 1.2, 0);
    createNeonSign("ARCADE", -15, 12, 5.1, 0x00ffff, 1.0, 0);
    createNeonSign("CLINE", 0, 10, 18.1, 0xff00ff, 1.4, 0);
    createNeonSign("PLAY", -12, 7, -8.5, 0xfbbf24, 1.0, Math.PI);
    createNeonSign("VIBE", 12, 6, 13.6, 0x9d4edd, 0.9, 0);
    createNeonSign("NEON", 18, 10, -6.0, 0xff006e, 1.1, Math.PI * 0.5);
    createNeonSign("HACK", -18, 8, 11.6, 0x06b6d4, 1.0, Math.PI * -0.3);
    createNeonSign("GG", 10, 15, -13.5, 0xff8c00, 1.5, Math.PI);

    // ── Laser beams ──────────────────────────────────────────────
    const beamGeometry = new THREE.CylinderGeometry(0.02, 0.02, 15, 8);
    const beams: THREE.Mesh[] = [];
    const beamColors = [0xff00ff, 0x00ffff, 0x7c3aed, 0xff006e];

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 8 + Math.random() * 4;
      const beamMat = new THREE.MeshBasicMaterial({
        color: beamColors[i % beamColors.length],
        transparent: true,
        opacity: 0.3,
      });
      const beam = new THREE.Mesh(beamGeometry, beamMat);
      beam.position.set(Math.cos(angle) * radius, 7, Math.sin(angle) * radius);
      beam.rotation.x = (Math.random() - 0.5) * 0.3;
      beam.rotation.z = (Math.random() - 0.5) * 0.3;
      scene.add(beam);
      beams.push(beam);
    }

    // ── Pink & Green flash lights ────────────────────────────────
    const pinkFlash = new THREE.PointLight(0xff69b4, 0, 40);
    pinkFlash.position.set(5, 6, 3);
    scene.add(pinkFlash);

    const greenFlash = new THREE.PointLight(0x00ff66, 0, 40);
    greenFlash.position.set(-5, 6, -3);
    scene.add(greenFlash);

    // ── Load character — ONLY first animation at 0.8x speed ─────
    let mixer: THREE.AnimationMixer | null = null;
    const loader = new GLTFLoader();

    loader.load(
      "/assets/cream-puff/rhythmic-dance.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        model.castShadow = true;
        model.receiveShadow = true;

        // Override materials: glowing white body, black eyes
        model.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const name = mesh.name.toLowerCase();
            const isEye = name.includes("eye") || name.includes("pupil") || name.includes("iris");

            if (isEye) {
              // Solid black eyes
              mesh.material = new THREE.MeshBasicMaterial({ color: 0x000000 });
            } else {
              // Softly glowing white body
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0xe8e8f0,
                emissive: 0xccccdd,
                emissiveIntensity: 0.15,
                roughness: 0.4,
                metalness: 0.0,
              });
            }
          }
        });

        scene.add(model);

        // Play ONLY the first animation at slower speed to smooth out jerky keyframes
        if (gltf.animations.length > 0) {
          console.log("Available animations:", gltf.animations.map((a) => a.name));
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.timeScale = 0.8; // slow down to smooth out jerkiness
          action.play();
        }

        setLoaded(true);
      },
      undefined,
      (error) => {
        console.error("Error loading GLB:", error);
        setLoaded(true);
      }
    );

    // ── Animation loop (render through bloom composer) ────────────
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (mixer) mixer.update(delta);

      const beat = Math.pow(Math.sin(elapsed * Math.PI * 2) * 0.5 + 0.5, 4);

      groundMaterial.uniforms.uTime.value = elapsed;
      groundMaterial.uniforms.uBeat.value = 0.5 + beat * 0.5;

      for (let i = 0; i < neonLights.length; i++) {
        const speed = 0.3 + (i % 3) * 0.1;
        const angle = (i / neonLights.length) * Math.PI * 2 + elapsed * speed;
        const radius = neonOrbitRadius + Math.sin(elapsed * 0.5 + i) * 1;
        neonLights[i].position.x = Math.cos(angle) * radius;
        neonLights[i].position.z = Math.sin(angle) * radius;
        neonLights[i].position.y = 2 + Math.sin(elapsed * 1.5 + i * 0.8) * 1;
        neonLights[i].intensity = 1.5 + beat * 2.5;
      }

      for (let i = 0; i < innerLights.length; i++) {
        const angle = (i / innerLights.length) * Math.PI * 2 - elapsed * 0.5;
        innerLights[i].position.x = Math.cos(angle) * 2.5;
        innerLights[i].position.z = Math.sin(angle) * 2.5;
        innerLights[i].position.y = 1.5 + Math.sin(elapsed * 2 + i) * 0.8;
        innerLights[i].intensity = 1.0 + beat * 1.5;
      }

      const hue = (elapsed * 0.08) % 1;
      spotlight.color.setHSL(hue, 1, 0.6);
      spotlight.intensity = 2 + beat * 3;

      spotlight2.position.x = 3 + Math.sin(elapsed * 0.4) * 2;
      spotlight2.position.z = 2 + Math.cos(elapsed * 0.3) * 2;
      spotlight2.intensity = 1.5 + beat * 2;

      // Update OrbitControls (handles auto-rotate + user drag)
      controls.update();

      // Particles
      const posArr = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += 0.01 + Math.sin(elapsed + i) * 0.005;
        if (posArr[i * 3 + 1] > 10) {
          posArr[i * 3 + 1] = 0.5;
          posArr[i * 3] = (Math.random() - 0.5) * 30;
          posArr[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;
      particleMaterial.opacity = 0.5 + beat * 0.4;

      beams.forEach((beam, i) => {
        const mat = beam.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.15 + beat * 0.4;
        beam.rotation.y = elapsed * 0.2 + i * 0.5;
      });

      // Pink & green periodic flashes (staggered, every ~2-3 seconds)
      const pinkPulse = Math.max(0, Math.sin(elapsed * 2.5) * 3);
      const pinkFlashIntensity = pinkPulse > 2.0 ? (pinkPulse - 2.0) * 15 : 0;
      pinkFlash.intensity = pinkFlashIntensity;

      const greenPulse = Math.max(0, Math.sin(elapsed * 1.8 + 1.5) * 3);
      const greenFlashIntensity = greenPulse > 2.0 ? (greenPulse - 2.0) * 15 : 0;
      greenFlash.intensity = greenFlashIntensity;

      // Move flash positions around for variety
      pinkFlash.position.x = 5 * Math.sin(elapsed * 0.7);
      pinkFlash.position.z = 5 * Math.cos(elapsed * 0.7);
      greenFlash.position.x = -5 * Math.cos(elapsed * 0.5);
      greenFlash.position.z = -5 * Math.sin(elapsed * 0.5);

      // Pulse bloom with beat for extra punch
      bloomPass.strength = 0.6 + beat * 0.5;

      // Render through bloom composer instead of raw renderer
      composer.render();
    };

    animate();

    // ── Resize handler ───────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ── Cleanup ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      composer.dispose();
      renderer.dispose();
      groundGeometry.dispose();
      groundMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      beamGeometry.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Three.js canvas container */}
      <div ref={containerRef} style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* CRT scanline overlay — hides rough geometry, adds retro style */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Soft vignette — draws eye to center, hides edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-fuchsia-400 font-mono tracking-widest text-sm">
              LOADING...
            </p>
          </div>
        </div>
      )}

      {/* Top text */}
      <div
        style={{
          position: "fixed",
          top: "48px",
          left: 0,
          right: 0,
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "90%",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "32px 32px",
            boxShadow: "0 0 80px rgba(157, 78, 221, 0.2)",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "bold",
              letterSpacing: "0.04em",
              lineHeight: 1.4,
              margin: 0,
              textShadow:
                "0 0 30px rgba(255, 140, 0, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)",
            }}
          >
            Thanks Cline for building so many games.
          </h2>
        </div>
      </div>

      {/* Bottom button */}
      <div
        style={{
          position: "fixed",
          bottom: "48px",
          left: 0,
          right: 0,
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://cline.bot"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "16px 48px",
            background: "linear-gradient(135deg, #f97316, #ec4899, #9333ea)",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "18px",
            borderRadius: "14px",
            textDecoration: "none",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            boxShadow:
              "0 4px 30px rgba(255, 140, 0, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)",
          }}
        >
          Try Cline
        </a>
      </div>
    </div>
  );
}
