import React from 'react';
import { connect } from 'react-redux';
import { handleReset } from '../actions/timerAction';

const ResetBtn = ({ handleReset }) => {
	return (
		<button className='btn btn-red' onClick={handleReset}>
			Reset
		</button>
	);
};

export default connect(null, { handleReset })(ResetBtn);
