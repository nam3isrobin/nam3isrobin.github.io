import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Float, Line } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { skills, skillPillars } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'

const SkillOrb = ({
  position,
  scale,
  color,
  name,
}: {
  position: [number, number, number]
  scale: number
  color: string
  name: string
}) => {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!ref.current) return
    const target = hovered ? scale * 1.28 : scale
    const t = 1 - Math.pow(0.86, delta * 60)
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), t)
  })

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : ''
    return () => {
      document.body.style.cursor = ''
    }
  }, [hovered])

  return (
    <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.8} floatingRange={[-0.15, 0.15]}>
      <mesh
        ref={ref}
        position={position}
        scale={scale}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 40, 40]} />
        <meshPhysicalMaterial
          transmission={0.92}
          thickness={0.55}
          roughness={0.12}
          metalness={0.05}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.05}
          color={color}
          transparent
          opacity={hovered ? 0.95 : 0.55}
          emissive={color}
          emissiveIntensity={hovered ? 0.35 : 0.08}
        />
        {hovered && (
          <Html center distanceFactor={14} position={[0, 1.45, 0]} zIndexRange={[100, 0]}>
            <div className="px-3 py-1.5 bg-dark-bg/95 backdrop-blur-md border border-white/15 rounded-lg text-white font-ui text-xs whitespace-nowrap shadow-xl pointer-events-none">
              {name}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  )
}

const SkillOrbsWrapper = () => {
  const positions = useMemo(() => {
    const result: [number, number, number][] = []
    skills.forEach((_, i) => {
      const angle = (i / skills.length) * Math.PI * 2
      const radius = 5.2 + Math.sin(i * 1.7) * 1.3
      const yOffset = Math.sin(i * 1.4) * 1.6
      result.push([Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius - 4])
    })
    return result
  }, [])

  const linePoints = useMemo(() => {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i < positions.length; i += 2) {
      const a = positions[i]
      const b = positions[(i + 3) % positions.length]
      pts.push(new THREE.Vector3(...a), new THREE.Vector3(...b))
    }
    return pts
  }, [positions])

  return (
    <group>
      {linePoints.length >= 2 && (
        <Line points={linePoints} color="#7dd3fc" lineWidth={0.6} transparent opacity={0.12} />
      )}
      {skills.map((skill, i) => (
        <SkillOrb
          key={skill.name}
          position={positions[i]}
          scale={1.15}
          color={skill.color}
          name={skill.name}
        />
      ))}
    </group>
  )
}

export function Skills() {
  const [show3d, setShow3d] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    const update = () => setShow3d(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section id="skills" className="py-12 md:py-32 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills"
          highlight="& stack"
          description="Tools I reach for when building agents, products, and trading systems."
          centered
        />

        {show3d && (
          <ScrollReveal className="mt-10">
            <div className="relative h-[420px] lg:h-[520px] rounded-2xl border border-white/[0.06] overflow-hidden bg-dark-elevated/40">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">Interactive constellation</div>
              <Canvas
                className="w-full h-full"
                camera={{ position: [0, 1.5, 16], fov: 42 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              >
                <ambientLight intensity={0.45} />
                <directionalLight position={[6, 10, 4]} intensity={1.2} color="#e0f2fe" />
                <pointLight position={[-6, -2, 4]} intensity={0.6} color="#a78bfa" />
                <SkillOrbsWrapper />
              </Canvas>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillPillars.map((pillar) => {
              const tags = skills.filter((s) => s.category === pillar.id)
              return (
                <GlassCard key={pillar.id} variant="hover" className="p-5 sm:p-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm text-text-muted leading-relaxed mb-4"
                    style={{ textWrap: 'pretty' } as React.CSSProperties}
                  >
                    {pillar.blurb}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-1 rounded-md border border-white/[0.07] bg-white/[0.03] text-text-muted"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: skill.color }}
                          aria-hidden
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}