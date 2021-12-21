import React from 'react';

const ResetBtn = ({ handleReset }) => {
	return (
		<button className='btn btn-red' onClick={handleReset}>
			Reset
		</button>
	);
};

export default ResetBtn;
