import React from 'react';
import { connect } from 'react-redux';
import { handleStart } from '../actions/timerAction';

const StartBtn = ({ handleStart, stopped }) => {
	return (
		<button className='btn btn-green' onClick={handleStart}>
			{stopped ? 'Restart' : 'Start'}
		</button>
	);
};

function mapStateToProps(state) {
	return {
		stopped: state.stopped,
	};
}

export default connect(mapStateToProps, { handleStart })(StartBtn);
