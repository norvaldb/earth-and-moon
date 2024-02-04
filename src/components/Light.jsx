/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import '../App.css';
import PropTypes from 'prop-types';

const Light = ({ position, color, intensity, orbitalOffset = 0, orbitalSpeed = 1 }) => {
	Light.propTypes = {
		scale: PropTypes.number,
		position: PropTypes.arrayOf(PropTypes.number).isRequired,
		orbitalOffset: PropTypes.number,
		color: PropTypes.string,
		intensity: PropTypes.number,
		orbitalSpeed: PropTypes.number,
	};

	const ref = useRef();
	useFrame(() => {
		let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
		ref.current.position.set(
			Math.cos(date) * 2 + position[0],
			Math.sin(date) * 2 + position[1],
			Math.sin(date) * 2 + position[2]
		);
	});
	const texture = useTexture('/lightbulb.png');
	return (
		<group position={position} ref={ref}>
			<sprite>
				<spriteMaterial attach='material' map={texture} transparent opacity={0.7} color={color} />
			</sprite>
			<pointLight color={color} intensity={intensity} decay={2} distance={20} />
		</group>
	);
};

export default Light;
