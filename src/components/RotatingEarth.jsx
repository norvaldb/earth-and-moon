/* eslint-disable react/no-unknown-property */
import Earth from '../assets/Earth';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';

const RotatingEarth = ({ scale, position }) => {
	RotatingEarth.propTypes = {
		scale: PropTypes.number.isRequired, // Validate the 'scale' prop as a required number
		position: PropTypes.arrayOf(PropTypes.number).isRequired, // Validate the 'position' prop as an array of numbers
	};

	const ref = useRef();

	// Rotate the mesh every frame
	useFrame((state, delta) => {
		ref.current.rotation.y += 0.5 * delta; // Rotate around Y-axis
	});

	return (
		<group position={position} ref={ref}>
			<Earth scale={scale} />
		</group>
	);
};

export default RotatingEarth;
