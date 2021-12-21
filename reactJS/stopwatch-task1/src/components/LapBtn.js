import React from 'react';

const LapBtn = ({ handleLap }) => {
	return (
		<button className='btn btn-yellow' onClick={handleLap}>
			Lap
		</button>
	);
};

export default LapBtn;
