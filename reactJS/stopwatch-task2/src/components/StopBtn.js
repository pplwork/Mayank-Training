import React from 'react';
import { connect } from 'react-redux';
import { handleStop } from '../actions/timerAction';

const StopBtn = ({ handleStop }) => {
	return (
		<button className='btn btn-gray' onClick={handleStop}>
			Stop
		</button>
	);
};

export default connect(null, { handleStop })(StopBtn);
