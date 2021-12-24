import React from 'react';
import { connect } from 'react-redux';

const LapDetails = ({ laps, minLap, maxLap }) => {
	return (
		<div className='lap-details'>
			{console.log(laps)}
			<div className='desc'>Total Number of Laps : {laps.length}</div>
			<div className='desc'>
				<p className='desc-heading'>Fastest Lap</p>
				<p>
					Lap No.{minLap.i} <span className='red'>+{minLap.diff}</span>
				</p>
			</div>
			<div className='desc'>
				<p className='desc-heading'>Slowest Lap</p>
				<p>
					Lap No.{maxLap.i} <span className='red'>+{maxLap.diff}</span>
				</p>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		laps: state.laps,
		minLap: state.minLap,
		maxLap: state.maxLap,
	};
}

export default connect(mapStateToProps)(LapDetails);
