'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { RotatingPlanet } from './index'

export function PlanetScene() {
	return (
		<Canvas
			camera={{ position: [0, 0, 6], fov: 70 }}
			style={{ background: 'transparent', width: '100%', height: '100%', minHeight: '500px' }}
		>
			<ambientLight intensity={0.1} />
			<directionalLight position={[-2, 0.5, 1.6]} intensity={1} />
			<pointLight position={[-10, -10, -5]} intensity={0.5} color="#4080ff" />
			<RotatingPlanet />
			<OrbitControls
				enableZoom={false}
				enablePan={false}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI / 1.5}
			/>
		</Canvas>
	)
}
