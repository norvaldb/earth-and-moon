/* eslint-disable react/no-unknown-property */
import { Plane } from '@react-three/drei';
import PropTypes from 'prop-types';

const XYPlane = ({ size }) => (
	<Plane args={[size, size, size, size]} rotation={[0, 0, 0]} position={[0, 0, 0]}>
		<meshStandardMaterial attach='material' color='pink' wireframe />
	</Plane>
);

// Add prop type validation
XYPlane.propTypes = {
	size: PropTypes.number.isRequired, // Validate the 'size' prop as a required number
};

export default XYPlane;
