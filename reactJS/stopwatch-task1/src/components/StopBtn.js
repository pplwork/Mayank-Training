import React from 'react';

const StopBtn = ({ handleStop }) => {
	return (
		<button className='btn btn-gray' onClick={handleStop}>
			Stop
		</button>
	);
};

export default StopBtn;
