import React from 'react';
import { connect } from 'react-redux';
import { handleLap } from '../actions/timerAction';

const LapBtn = ({ time, prevLap, handleLap, laps, minLap, maxLap }) => {
	return (
		<button className='btn btn-yellow' onClick={() => handleLap(time, laps, prevLap, minLap, maxLap)}>
			Lap
		</button>
	);
};

function mapStateToProps(state) {
	return {
		time: state.time,
		prevLap: state.prevLap,
		laps: state.laps,
		minLap: state.minLap,
		maxLap: state.maxLap,
	};
}

export default connect(mapStateToProps, { handleLap })(LapBtn);
