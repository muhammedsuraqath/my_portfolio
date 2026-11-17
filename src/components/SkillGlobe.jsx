import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

function fibonacciSphere(n, r) {
  const pts = []
  const phi = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const rad = Math.sqrt(1 - y * y)
    const t = phi * i
    pts.push(new THREE.Vector3(Math.cos(t) * rad * r, y * r, Math.sin(t) * rad * r))
  }
  return pts
}

function Cloud({ items, radius }) {
  const group = useRef()
  const labels = useRef([])
  const points = useMemo(() => fibonacciSphere(items.length, radius), [items.length, radius])
  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ pointer }, d) => {
    const g = group.current
    g.rotation.y += d * 0.18 + pointer.x * d * 0.6
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -pointer.y * 0.5, 0.05)
    g.updateMatrixWorld()
    points.forEach((p, i) => {
      const el = labels.current[i]
      if (!el) return
      tmp.copy(p).applyMatrix4(g.matrixWorld)
      const depth = (tmp.z + radius) / (2 * radius) // 0 = back, 1 = front
      el.style.opacity = (0.18 + depth * 0.82).toFixed(2)
      el.style.filter = depth < 0.35 ? 'blur(1px)' : 'none'
    })
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[radius * 0.98, 32, 32]} />
        <meshBasicMaterial color="#8fae8b" wireframe transparent opacity={0.06} />
      </mesh>
      {items.map((s, i) => (
        <Html key={s.name} position={points[i]} center zIndexRange={[10, 0]}>
          <span ref={(el) => (labels.current[i] = el)} className={`globe-chip${s.hl ? ' hl' : ''}`}>
            {s.name}
          </span>
        </Html>
      ))}
    </group>
  )
}

export default function SkillGlobe({ items }) {
  return (
    <Canvas className="globe-canvas" dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 50 }}>
      <Cloud items={items} radius={2.4} />
    </Canvas>
  )
}
