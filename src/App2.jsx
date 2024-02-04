/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef } from 'react';
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, Environment, OrbitControls, Plane, Text } from '@react-three/drei';
import Earth from './assets/Earth';
import Moon from './assets/Moon';
import Light from './components/Light.jsx';
import Cube from './components/Cube.jsx';
import Controls from './components/Controls.jsx';
import Grid from './components/Grid.jsx';
import OrbitingMoon from './components/OrbitingMoon.jsx';
import Sun from './components/Sun.jsx';

const App2 = () => {
	const [xPosition, setXPosition] = useState(0);
	const [yPosition, setYPosition] = useState(0);
	const [zPosition, setZPosition] = useState(0);

	const [xRotation, setXRotation] = useState(0);
	const [yRotation, setYRotation] = useState(0);
	const [zRotation, setZRotation] = useState(0);

	const [xScale, setXScale] = useState(1);
	const [yScale, setYScale] = useState(1);
	const [zScale, setZScale] = useState(1);

	return (
		<>
			<Canvas camera={{ position: [0, 2, 10] }}>
				<Suspense
					fallback={
						<Text
							color='white' // default
							anchorX='center' // default
							anchorY='middle' // default
						>
							Loading
						</Text>
					}
				>
					<OrbitControls />
					<directionalLight intensity={0.5} position={[6, 2, 1]} />
					{/*<ambientLight intensity={0.1} />*/}
					<Grid size={10} />
					{/*<Light position={[3, 0, 2]} color="red" intensity={2} offset={200}/>*/}
					{/*<Light*/}
					{/*    position={[2, 2, -2]}*/}
					{/*    color="blue"*/}
					{/*    intensity={2}*/}
					{/*    distance={10}*/}
					{/*    orbitalSpeed={1}*/}
					{/*/>*/}
					<OrbitingMoon
						scale='0.1'
						position={[0, 1, 0]}
						color='white'
						intensity={200}
						distance={20}
						orbitalSpeed={1}
					/>
					<Sun position={[0, 0, 0]} color='white' intensity={200} distance={20} orbitalSpeed={1} />

					{/*<Light*/}
					{/*    position={[-3, 0, 2]}*/}
					{/*    color="green"*/}
					{/*    intensity={2}*/}
					{/*    orbitalSpeed={1}*/}
					{/*/>*/}
					<Earth />
					{/*<Moon scale="0.3"/>*/}
					{/*<Cube*/}
					{/*    handleClick={() => console.log("clicked on the cube")}*/}
					{/*    rotation={[*/}
					{/*        xRotation * Math.PI,*/}
					{/*        yRotation * Math.PI,*/}
					{/*        zRotation * Math.PI*/}
					{/*    ]}*/}
					{/*    position={[xPosition, yPosition, zPosition]}*/}
					{/*    scale={[xScale, yScale, zScale]}*/}
					{/*/>*/}
				</Suspense>
			</Canvas>
			<Controls
				controls={{
					xPosition,
					yPosition,
					zPosition,
					xRotation,
					yRotation,
					zRotation,
					xScale,
					yScale,
					zScale,
					setXPosition,
					setYPosition,
					setZPosition,
					setXRotation,
					setYRotation,
					setZRotation,
					setXScale,
					setYScale,
					setZScale,
				}}
			/>
			{/*            <Canvas>*/}
			{/*                <OrbitControls/>*/}
			{/*                <Suspense fallback={null}>*/}
			{/*                    <ambientLight intensity={0.3}/>*/}
			{/*                    <Earth></Earth>*/}
			{/*                    /!*<Moon></Moon>*!/*/}
			{/*                </Suspense>*/}
			{/*                <Environment preset="sunset"/>*/}
			{/*            </Canvas>*/}
		</>
	);
};

export default App2;
