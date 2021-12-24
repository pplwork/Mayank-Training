import React, { useEffect } from 'react';
import Timer from './Timer';
import Laps from './Laps';
import StartBtn from './StartBtn';
import LapBtn from './LapBtn';
import ResetBtn from './ResetBtn';
import StopBtn from './StopBtn';
import { connect } from 'react-redux';
import { handlePauseResume, handleIncrement, addIntervalID } from '../actions/timerAction';
import LapDetails from './LapDetails';

const StopWatch = ({
	active,
	paused,
	intervalID,
	laps,
	stopped,
	handlePauseResume,
	handleIncrement,
	addIntervalID,
}) => {
	useEffect(() => {
		let interval;
		if (active && !paused) {
			interval = setInterval(() => {
				handleIncrement();
			}, 10);
			addIntervalID(interval);
		} else {
			clearInterval(intervalID);
		}
		// eslint-disable-next-line
	}, [active, paused]);

	return (
		<div className='stop-watch'>
			{stopped && laps.length !== 0 && <LapDetails />}
			{stopped && (
				<p className='desc'>
					Total <span className='red'>Time</span>:
				</p>
			)}
			<Timer />
			<div className='control-btns'>
				{active ? (
					<div className='btn-grp'>
						{paused ? <ResetBtn /> : <LapBtn />}

						<button className='btn btn-blue' onClick={handlePauseResume}>
							{paused ? 'Resume' : 'Pause'}
						</button>
						<StopBtn />
					</div>
				) : (
					<StartBtn />
				)}
			</div>
			<Laps />
		</div>
	);
};

function mapStateToProps(state) {
	return {
		active: state.active,
		paused: state.paused,
		time: state.time,
		intervalID: state.intervalID,
		prevLap: state.prevLap,
		laps: state.laps,
		stopped: state.stopped,
	};
}

export default connect(mapStateToProps, { handlePauseResume, handleIncrement, addIntervalID })(StopWatch);
