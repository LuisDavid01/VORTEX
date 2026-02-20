'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Fresnel / atmosphere glow shader
const fresnelVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fresnelFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform vec3 uColor;
  uniform float uPower;
  void main() {
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(0.0, dot(vNormal, viewDir)), uPower);
    gl_FragColor = vec4(uColor, fresnel);
  }
`

export function RotatingPlanet() {
  const earthRef  = useRef<THREE.Mesh>(null)
  const lightsRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  const glowRef   = useRef<THREE.Mesh>(null)

  const textures = useTexture({
    map:           '/textures/00_earthmap1k.webp',
    bumpMap:       '/textures/01_earthbump1k.webp',
    specularMap:   '/textures/02_earthspec1k.webp',
    lightMap:      '/textures/03_earthlights1k.webp',
    cloudMap:      '/textures/04_earthcloudmap.webp',
    cloudMapTrans: '/textures/05_earthcloudmaptrans.webp',
  })

  // Geometría compartida entre todas las capas
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.2, 12), [])

  // Material tierra — Phong para specular highlight en océanos
  const earthMat = useMemo(() => new THREE.MeshPhongMaterial({
    map:         textures.map,
    specularMap: textures.specularMap,
    bumpMap:     textures.bumpMap,
    bumpScale:   0.08,
    specular:    new THREE.Color(0x333333),
    shininess:   10,
  }), [textures])

  // Luces nocturnas — blending aditivo para que solo brillen en la sombra
  const lightsMat = useMemo(() => new THREE.MeshBasicMaterial({
    map:      textures.lightMap,
    blending: THREE.AdditiveBlending,
  }), [textures])

  // Nubes con transparencia
  const cloudsMat = useMemo(() => new THREE.MeshStandardMaterial({
    map:         textures.cloudMap,
    alphaMap:    textures.cloudMapTrans,
    transparent: true,
    opacity:     0.8,
    blending:    THREE.AdditiveBlending,
  }), [textures])

  // Uniforms para el shader Fresnel
  const fresnelUniforms = useMemo(() => ({
    uColor: { value: new THREE.Color(0x4ca8ff) },
    uPower: { value: 3.5 },
  }), [])

  useFrame((_, delta) => {
    const speed = delta * 0.12
    if (earthRef.current)  earthRef.current.rotation.y  += speed
    if (lightsRef.current) lightsRef.current.rotation.y += speed
    if (cloudsRef.current) cloudsRef.current.rotation.y += speed * 1.15  // nubes un poco más rápido
    if (glowRef.current)   glowRef.current.rotation.y   += speed
  })

  return (
    // Inclinación axial de la Tierra: -23.4°
    <group rotation={[0, 0, -23.4 * Math.PI / 180]}>

      {/* Superficie terrestre */}
      <mesh ref={earthRef} geometry={geometry} material={earthMat} />

      {/* Luces de ciudades (lado nocturno) */}
      <mesh ref={lightsRef} geometry={geometry} material={lightsMat} />

      {/* Capa de nubes ligeramente más grande */}
      <mesh ref={cloudsRef} geometry={geometry} material={cloudsMat} scale={1.003} />

      {/* Atmósfera Fresnel */}
        <shaderMaterial
          vertexShader={fresnelVertexShader}
          fragmentShader={fresnelFragmentShader}
          uniforms={fresnelUniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.FrontSide}
        />

    </group>
  )
}
