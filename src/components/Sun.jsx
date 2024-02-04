/* eslint-disable react/no-unknown-property */
import Moon from '../assets/Moon';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import PropTypes from 'prop-types';

const OrbitingMoon = ({ color, intensity, distance }) => {
	OrbitingMoon.propTypes = {
		color: PropTypes.string.isRequired, // Validate the 'color' prop as a required string
		intensity: PropTypes.number.isRequired, // Validate the 'intensity' prop as a required number
		distance: PropTypes.number.isRequired, // Validate the 'distance' prop as a required number
	};

	const ref = useRef();
	return (
		<group position={[distance, 0 + 0.2 * distance, 0]} ref={ref}>
			<pointLight color={color} intensity={intensity * 5} decay={2} distance={10000} />
		</group>
	);
};

export default OrbitingMoon;
