import React from 'react';

const StartBtn = ({ handleStart, stopped }) => {
	return (
		<button className='btn btn-green' onClick={handleStart}>
			{stopped ? 'Restart' : 'Start'}
		</button>
	);
};

export default StartBtn;
