import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const _dir = new THREE.Vector3()
const _orbit = new THREE.Vector3()
const _drift = new THREE.Vector3()
const _mousePos = new THREE.Vector3()

const COLORS = [
  new THREE.Color('#ddd6fe'),
  new THREE.Color('#c4b5fd'),
  new THREE.Color('#a78bfa'),
  new THREE.Color('#8b5cf6'),
  new THREE.Color('#7c3aed'),
]

type Particle = {
  position: THREE.Vector3
  velocity: THREE.Vector3
  drift: THREE.Vector3
  speed: number
  factor: number
  phase: number
  colorIndex: number
}

const ParticleSwarm = ({ count = 480 }: { count?: number }) => {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colorsReady = useRef(false)

  const particles = useMemo(() => {
    const temp: Particle[] = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 32,
          (Math.random() - 0.5) * 24,
          (Math.random() - 0.5) * 14 - 4
        ),
        velocity: new THREE.Vector3(0, 0, 0),
        drift: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.03
        ),
        speed: 0.012 + Math.random() * 0.028,
        factor: Math.random() * 0.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
        colorIndex: i % COLORS.length,
      })
    }
    return temp
  }, [count])

  const mouse = useRef(new THREE.Vector2(0, 0))
  const target = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    if (window.scrollY > window.innerHeight * 1.2) return

    const timeScale = Math.min(delta * 60, 2.5)
    const currentMesh = mesh.current
    if (!currentMesh) return

    if (!colorsReady.current) {
      particles.forEach((particle, i) => {
        currentMesh.setColorAt(i, COLORS[particle.colorIndex])
      })
      if (currentMesh.instanceColor) currentMesh.instanceColor.needsUpdate = true
      colorsReady.current = true
    }

    mouse.current.lerp(target.current, 1 - Math.pow(0.88, timeScale))
    _mousePos.set(mouse.current.x * 14, mouse.current.y * 10, 0)

    particles.forEach((particle, i) => {
      _dir.subVectors(_mousePos, particle.position)
      const dist = _dir.length()

      if (dist < 9) {
        _dir.normalize()
        const orbitOffset = (particle.phase % 1 - 0.5) * 0.4
        _orbit.set(-_dir.y, _dir.x, orbitOffset).multiplyScalar(particle.speed * 2.2)
        _dir.multiplyScalar(particle.speed).add(_orbit)
        particle.velocity.add(_dir.multiplyScalar(0.055 * particle.factor * timeScale))
      } else {
        particle.velocity.add(
          _drift
            .copy(particle.drift)
            .multiplyScalar(timeScale * (0.6 + 0.4 * Math.sin(state.clock.elapsedTime + particle.phase)))
        )
      }

      particle.velocity.multiplyScalar(Math.pow(0.93, timeScale))
      particle.position.addScaledVector(particle.velocity, timeScale)

      if (particle.position.x > 18) particle.position.x = -18
      if (particle.position.x < -18) particle.position.x = 18
      if (particle.position.y > 14) particle.position.y = -14
      if (particle.position.y < -14) particle.position.y = 14
      if (particle.position.z > 4) particle.position.z = -16
      if (particle.position.z < -16) particle.position.z = 4

      dummy.position.copy(particle.position)
      const scale =
        (Math.sin(state.clock.elapsedTime * 1.6 + particle.phase) + 1) * 0.5 * 0.07 + 0.025
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      currentMesh.setMatrixAt(i, dummy.matrix)
    })

    currentMesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <circleGeometry args={[1, 12]} />
      <meshBasicMaterial
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        toneMapped={false}
      />
    </instancedMesh>
  )
}

/** Soft ambient orbs behind the particle field */
function GlowOrbs() {
  const g1 = useRef<THREE.Mesh>(null)
  const g2 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (g1.current) {
      g1.current.position.x = Math.sin(t * 0.15) * 3
      g1.current.position.y = Math.cos(t * 0.12) * 1.5
    }
    if (g2.current) {
      g2.current.position.x = Math.cos(t * 0.1) * -4
      g2.current.position.y = Math.sin(t * 0.14) * 2
    }
  })

  return (
    <>
      <mesh ref={g1} position={[-4, 1, -8]}>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.06} depthWrite={false} />
      </mesh>
      <mesh ref={g2} position={[5, -1, -10]}>
        <sphereGeometry args={[3.2, 24, 24]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.05} depthWrite={false} />
      </mesh>
    </>
  )
}

export const HeroParticles = () => {
  const [enabled, setEnabled] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobile = window.matchMedia('(max-width: 767px)')
    const update = () => {
      setReduceMotion(mq.matches)
      setEnabled(!mq.matches && !mobile.matches)
    }
    update()
    mq.addEventListener('change', update)
    mobile.addEventListener('change', update)
    return () => {
      mq.removeEventListener('change', update)
      mobile.removeEventListener('change', update)
    }
  }, [])

  if (!enabled) {
    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(139,92,246,0.08), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(167,139,250,0.06), transparent 70%)',
        }}
      />
    )
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-80">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <GlowOrbs />
        <ParticleSwarm count={reduceMotion ? 120 : 420} />
      </Canvas>
    </div>
  )
}
