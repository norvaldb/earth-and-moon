import { Text } from '@react-three/drei';
import XZPlane from './XZPlane.jsx';
import YZPlane from './YZPlane.jsx';
import XYPlane from './XYPlane.jsx';
import PropTypes from 'prop-types';

const Grid = ({ size }) => {
	// Add prop type validation
	Grid.propTypes = {
		size: PropTypes.number.isRequired, // Validate the 'size' prop as a required number
	};

	return (
		<group>
			<Text
				color='white' // default
				anchorX='center' // default
				anchorY='middle' // default
				position={[size / 2 + 1, 0, 0]}
				scale={[1, 1, 1]}
			>
				X+
			</Text>
			<Text
				color='white' // default
				anchorX='center' // default
				anchorY='middle' // default
				position={[-size / 2 - 1, 0, 0]}
				scale={[1, 1, 1]}
			>
				X-
			</Text>
			<Text
				color='white' // default
				anchorX='center' // default
				anchorY='middle' // default
				position={[0, size / 2 + 1, 0]}
				scale={[1, 1, 1]}
			>
				Y+
			</Text>
			<Text
				color='white' // default
				anchorX='center' // default
				anchorY='middle' // default
				position={[0, -size / 2 - 1, 0]}
				scale={[1, 1, 1]}
			>
				Y-
			</Text>
			<Text
				color='white' // default
				anchorX='center' // default
				anchorY='middle' // default
				position={[0, 0, size / 2 + 1]}
				scale={[1, 1, 1]}
			>
				Z+
			</Text>
			<Text
				color='white' // default
				anchorX='center' // default
				anchorY='middle' // default
				position={[0, 0, -size / 2 - 1]}
				scale={[1, 1, 1]}
			>
				Z-
			</Text>
			<XZPlane size={size} />
			<XYPlane size={size} />
			<YZPlane size={size} />
		</group>
	);
};

export default Grid;
