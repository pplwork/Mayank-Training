import React, { memo } from 'react';
import { connect } from 'react-redux';

const Laps = ({ laps }) => {
	const lapLists = () => {
		return (
			laps.length !== 0 &&
			laps
				.map((lap) => (
					<div key={lap.count} className='lap-item'>
						<div>{'Lap ' + lap.count}</div>
						<div>{lap.lapTiming}</div>
						<div>{'+' + lap.diff}</div>
					</div>
				))
				.reverse()
		);
	};

	return (
		<div className='laps'>
			{laps.length !== 0 && (
				<div className='lap-head'>
					<div>Lap No.</div>
					<div>Lap Timing</div>
					<div>Lap Difference</div>
				</div>
			)}
			{lapLists()}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		laps: state.laps,
	};
}

export default memo(connect(mapStateToProps)(Laps));
