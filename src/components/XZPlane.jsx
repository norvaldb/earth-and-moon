/* eslint-disable react/no-unknown-property */
import { Plane } from '@react-three/drei';
import PropTypes from 'prop-types';

const XZPlane = ({ size }) => (
	<Plane args={[size, size, size, size]} rotation={[1.5 * Math.PI, 0, 0]} position={[0, 0, 0]}>
		<meshStandardMaterial attach='material' color='#f9c74f' wireframe />
	</Plane>
);
// Add prop type validation
XZPlane.propTypes = {
	size: PropTypes.number.isRequired, // Validate the 'size' prop as a required number
};
export default XZPlane;
