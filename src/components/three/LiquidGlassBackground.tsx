'use client'

import { Canvas } from '@react-three/fiber'
import { Html, Environment } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

const GlassOrb = ({ position, scale, color }: any) => {
  const ref = useRef<THREE.Mesh | null>(null)

  return (
    <mesh ref={ref} position={position} scale={scale} castShadow receiveShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        transmission={1}
        thickness={0.5}
        roughness={0}
        metalness={0}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={1}
        color={color}
        opacity={0.3}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const Particles = ({ count = 200 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points | null>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 50
    }
    return arr
  }, [count])

  const sizes = useMemo(() => {
    const arr = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 3 + 1
    }
    return arr
  }, [count])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        transparent
        opacity={0.4}
        color="#a855f7"
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

export function LiquidGlassBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return null
  }

  return (
    <Canvas
      className="fixed inset-0 -z-10 pointer-events-none"
      camera={{ position: [0, 0, 30], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ 
        antialias: true, 
        alpha: true, 
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance'
      }}
    >
      <Environment preset="city" background={false} resolution={256} />
      <GlassOrb position={[-8, 2, -10]} scale={3} color="#a855f7" />
      <GlassOrb position={[8, -3, -15]} scale={2.5} color="#ec4899" />
      <GlassOrb position={[0, 5, -20]} scale={2} color="#06b6d4" />
      <GlassOrb position={[-5, -5, -8]} scale={1.5} color="#f97316" />
      <GlassOrb position={[6, 4, -12]} scale={1.8} color="#22d3ee" />
      <Particles count={300} />
      <Html occlude={false} />
    </Canvas>
  )
}