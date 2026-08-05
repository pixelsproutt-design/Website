'use client';

import { createElement, useMemo, useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Effects, OrbitControls } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const PARTICLE_COUNT = 20000;

function ParticleSwarm() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
        ),
      );
    }
    return pos;
  }, []);

  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  const PARAMS = useMemo(() => ({ speed: 0.4, chaos: 20, coreSize: 10 }), []);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const time = state.clock.getElapsedTime() * speedMult;
    const speed = PARAMS.speed;
    const chaos = PARAMS.chaos;
    const coreSize = PARAMS.coreSize;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const norm = i / PARTICLE_COUNT;
      const progress = (norm + time * speed * 0.2) % 1.0;
      const easeProgress = Math.pow(progress, 1.5);

      const goldenRatio = (1.0 + Math.sqrt(5.0)) / 2.0;
      const theta = (2.0 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1.0 - 2.0 * norm);

      const currentRadius = coreSize + 150.0 * (1.0 - easeProgress);

      const instability = Math.pow(1.0 - progress, 2.0);
      const wobbleX = Math.sin(time * 2.0 + norm * 100.0) * chaos * instability;
      const wobbleY = Math.cos(time * 1.5 + norm * 200.0) * chaos * instability;
      const wobbleZ = Math.sin(time * 3.0 - norm * 300.0) * chaos * instability;

      const sinPhi = Math.sin(phi);
      const x = currentRadius * sinPhi * Math.cos(theta) + wobbleX;
      const y = currentRadius * sinPhi * Math.sin(theta) + wobbleY;
      const z = currentRadius * Math.cos(phi) + wobbleZ;

      target.set(x, y, z);

      const hue = 0.55 + 0.25 * progress;
      const saturation = 0.8 + 0.2 * progress;
      const corePulse = progress > 0.95 ? Math.sin(time * 10.0) * 0.3 : 0.0;
      const lightness = 0.2 + 0.6 * progress + corePulse;

      pColor.setHSL(hue, saturation, Math.max(0.0, Math.min(1.0, lightness)));

      positions[i].lerp(target, 0.1);
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, pColor);
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, PARTICLE_COUNT]} />;
}

export default function HeroParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden="true">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 100], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={['#000000', 80, 200]} />
        <ParticleSwarm />
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Effects disableGamma>
          {createElement('unrealBloomPass', {
            threshold: 0,
            strength: 1.8,
            radius: 0.4,
          })}
        </Effects>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-loam" />
    </div>
  );
}
