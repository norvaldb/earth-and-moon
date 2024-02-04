/* eslint-disable react/no-unknown-property */
import { Box } from '@react-three/drei';
import PropTypes from 'prop-types';

const Cube = ({ position, rotation, scale = [1, 1, 1], handleClick }) => (
	<group position={position} rotation={rotation} scale={scale}>
		<Box args={[1, 1, 1]} onClick={handleClick}>
			<meshStandardMaterial attach='material' color='white' />
		</Box>
	</group>
);

// Add prop type validation
Cube.propTypes = {
	position: PropTypes.arrayOf(PropTypes.number).isRequired, // Validate the 'position' prop as an array of numbers
	rotation: PropTypes.arrayOf(PropTypes.number).isRequired, // Validate the 'rotation' prop as an array of numbers
	scale: PropTypes.arrayOf(PropTypes.number), // Validate the 'scale' prop as an optional array of numbers
	handleClick: PropTypes.func, // Validate the 'handleClick' prop as an optional function
};

export default Cube;
