/* eslint-disable react/no-unknown-property */
import Moon from '../assets/Moon';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';

const OrbitingMoon = ({ scale, position, orbitalOffset = 1, orbitalSpeed = 1 }) => {
	OrbitingMoon.propTypes = {
		scale: PropTypes.number.isRequired, // Validate the 'scale' prop as a required number
		position: PropTypes.arrayOf(PropTypes.number).isRequired, // Validate the 'position' prop as an array of numbers
		orbitalOffset: PropTypes.number, // Validate the 'orbitalOffset' prop as an optional number
		orbitalSpeed: PropTypes.number, // Validate the 'orbitalSpeed' prop as an optional number
	};

	const ref = useRef();

	useFrame(() => {
		let date = (Date.now() * orbitalSpeed * 0.001 + orbitalOffset) * -1;
		const x = Math.cos(date) * 6 + position[0];
		const z = Math.sin(date) * 6 + position[2];

		// Apply the rotation matrix (30 degrees) around the y-axis (XZ plane)
		const theta = (30 * Math.PI) / 180; // Convert 30 degrees to radians
		const xRotated = x * Math.cos(theta) + z * Math.sin(theta);
		const zRotated = -x * Math.sin(theta) + z * Math.cos(theta);

		// Calculate y-coordinate based on z value
		const zNormalized = (zRotated + 1) / 2; // Normalize z to [0, 1]
		const y = 1 - zNormalized * 2; // Map [0, 1] to [1, -1]

		ref.current.position.set(xRotated, y * 0.3, zRotated);
	});

	return (
		<group position={position} ref={ref}>
			<Moon scale={scale} />
		</group>
	);
};

export default OrbitingMoon;
