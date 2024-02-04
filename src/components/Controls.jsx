import PropTypes from 'prop-types';

const Controls = ({ controls }) => {
	const {
		xRotation,
		yRotation,
		zRotation,
		xPosition,
		yPosition,
		zPosition,
		xScale,
		yScale,
		zScale,
		setXRotation,
		setYRotation,
		setZRotation,
		setXPosition,
		setYPosition,
		setZPosition,
		setXScale,
		setYScale,
		setZScale,
	} = controls;

	Controls.propTypes = {
		controls: PropTypes.shape({
			xRotation: PropTypes.number.isRequired,
			yRotation: PropTypes.number.isRequired,
			zRotation: PropTypes.number.isRequired,
			xPosition: PropTypes.number.isRequired,
			yPosition: PropTypes.number.isRequired,
			zPosition: PropTypes.number.isRequired,
			xScale: PropTypes.number.isRequired,
			yScale: PropTypes.number.isRequired,
			zScale: PropTypes.number.isRequired,
			setXRotation: PropTypes.func.isRequired,
			setYRotation: PropTypes.func.isRequired,
			setZRotation: PropTypes.func.isRequired,
			setXPosition: PropTypes.func.isRequired,
			setYPosition: PropTypes.func.isRequired,
			setZPosition: PropTypes.func.isRequired,
			setXScale: PropTypes.func.isRequired,
			setYScale: PropTypes.func.isRequired,
			setZScale: PropTypes.func.isRequired,
		}).isRequired,
	};

	return (
		<div className='controls'>
			<h2>Selected Object: Cube</h2>
			<div className='controlGroup'>
				<div className='control'>
					<label>X Position</label>
					<input
						value={xPosition}
						onChange={(e) => setXPosition(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
				<div className='control'>
					<label>Y Position</label>
					<input
						value={yPosition}
						onChange={(e) => setYPosition(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
				<div className='control'>
					<label>Z Position</label>
					<input
						value={zPosition}
						onChange={(e) => setZPosition(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
			</div>
			<div className='controlGroup'>
				<div className='control'>
					<label>X Rotation</label>
					<input
						value={xRotation}
						onChange={(e) => setXRotation(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
				<div className='control'>
					<label>Y Rotation</label>
					<input
						value={yRotation}
						onChange={(e) => setYRotation(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
				<div className='control'>
					<label>Z Rotation</label>
					<input
						value={zRotation}
						onChange={(e) => setZRotation(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
			</div>
			<div className='controlGroup'>
				<div className='control'>
					<label>X Scale</label>
					<input
						value={xScale}
						onChange={(e) => setXScale(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
				<div className='control'>
					<label>Y Scale</label>
					<input
						value={yScale}
						onChange={(e) => setYScale(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
				<div className='control'>
					<label>Z Scale</label>
					<input
						value={zScale}
						onChange={(e) => setZScale(e.target.value)}
						step={1 / 32}
						type='number'
					/>
				</div>
			</div>
		</div>
	);
};

export default Controls;
