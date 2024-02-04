/* eslint-disable react/no-unknown-property */
import { Plane } from '@react-three/drei';
import PropTypes from 'prop-types';

const YZPlane = ({ size }) => (
	<Plane args={[size, size, size, size]} rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]}>
		<meshStandardMaterial attach='material' color='#80ffdb' wireframe />
	</Plane>
);
// Add prop type validation
YZPlane.propTypes = {
	size: PropTypes.number.isRequired, // Validate the 'size' prop as a required number
};
export default YZPlane;
