import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'

const SAGE = '#8fae8b'
const SAND = '#d8c3a5'

function Core() {
  const mesh = useRef()
  const { viewport } = useThree()
  const wide = viewport.width > 9
  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.elapsedTime * 0.12
    mesh.current.rotation.y = clock.elapsedTime * 0.18
  })
  return (
    <group position={[wide ? viewport.width * 0.2 : 0, wide ? 0 : -0.6, -1]}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={mesh} scale={wide ? 1.9 : 1.5}>
          <icosahedronGeometry args={[1, 24]} />
          <MeshDistortMaterial color={SAGE} roughness={0.2} metalness={0.55} distort={0.32} speed={1.4} />
        </mesh>
      </Float>
      <Orbits />
    </group>
  )
}

function Orbits() {
  const g = useRef()
  useFrame((_, d) => {
    g.current.children.forEach((r, i) => {
      r.rotation.z += d * (0.15 + i * 0.07) * (i % 2 ? -1 : 1)
    })
  })
  return (
    <group ref={g}>
      {[2.6, 3.2, 3.9].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2.3 + i * 0.35, i * 0.6, 0]}>
          <torusGeometry args={[radius, 0.012, 16, 160]} />
          <meshBasicMaterial color={i === 1 ? SAND : SAGE} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  )
}

function CameraRig() {
  const target = new THREE.Vector3()
  useFrame(({ camera, pointer }) => {
    target.set(pointer.x * 0.7, pointer.y * 0.45, 7)
    camera.position.lerp(target, 0.035)
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas className="hero-canvas" dpr={[1, 1.75]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color="#fff6e6" />
      <pointLight position={[-4, -2, 2]} intensity={25} color={SAND} />
      <Stars radius={60} depth={40} count={1800} factor={3} fade speed={0.6} />
      <Sparkles count={60} scale={[12, 7, 4]} size={2.2} speed={0.35} color={SAND} />
      <Core />
      <CameraRig />
    </Canvas>
  )
}
