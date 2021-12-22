import React from 'react';
import { connect } from 'react-redux';
import { handleLap } from '../actions/timerAction';

const LapBtn = ({ time, prevLap, handleLap }) => {
	return (
		<button className='btn btn-yellow' onClick={() => handleLap(time, prevLap)}>
			Lap
		</button>
	);
};

function mapStateToProps(state) {
	return {
		time: state.time,
		prevLap: state.prevLap,
	};
}

export default connect(mapStateToProps, { handleLap })(LapBtn);
