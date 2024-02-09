/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import OrbitingMoon from './components/OrbitingMoon.jsx';
import Sun from './components/Sun.jsx';
import RotatingEarth from './components/RotatingEarth.jsx';
import Grid from './components/Grid.jsx';

const App = () => {
	return (
		<>
			<Canvas camera={{ position: [0, 2, 10] }}>
				<Suspense fallback={null}>
					<OrbitControls />
					<ambientLight intensity={0.1} />
					{/*<Grid size={10} />*/}
					<OrbitingMoon
						scale='0.1'
						position={[0, 1, 0]}
						color='white'
						intensity={200}
						distance={20}
						orbitalSpeed={1}
					/>
					<Sun position={[0, 0, 0]} color='white' intensity={200} distance={20} orbitalSpeed={1} />
					<RotatingEarth />
				</Suspense>
			</Canvas>
		</>
	);
};

export default App;
