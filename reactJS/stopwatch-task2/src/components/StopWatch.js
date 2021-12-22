import React, { Component } from 'react';
import Timer from './Timer';
import Laps from './Laps';
import StartBtn from './StartBtn';
import LapBtn from './LapBtn';
import ResetBtn from './ResetBtn';
import StopBtn from './StopBtn';
import { connect } from 'react-redux';
import { handlePauseResume, handleIncrement, addIntervalID } from '../actions/timerAction';

class StopWatch extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.active !== this.props.active || prevProps.paused !== this.props.paused) {
			let interval;
			if (this.props.active && !this.props.paused) {
				interval = setInterval(() => {
					this.props.handleIncrement();
				}, 10);
				this.props.addIntervalID(interval);
			} else {
				clearInterval(this.props.intervalID);
			}
		}
	}

	render() {
		return (
			<div className='stop-watch'>
				{this.props.stopped && (
					<p className='desc'>
						Total <span className='red'>Time</span>:
					</p>
				)}
				<Timer />
				<div className='control-btns'>
					{this.props.active ? (
						<div className='btn-grp'>
							{this.props.paused ? <ResetBtn /> : <LapBtn />}

							<button className='btn btn-blue' onClick={this.props.handlePauseResume}>
								{this.props.paused ? 'Resume' : 'Pause'}
							</button>
							<StopBtn />
						</div>
					) : (
						<StartBtn />
					)}
				</div>
				{/* {this.props.stopped && this.props.laps.length !== 0 && (
					<>
						
						<p className='desc'>Total Number of Laps : {this.props.laps.length}</p>
						<p className='desc'>Fastest Laps : {this.props.laps.length}</p>
						<p className='desc'>Total Number of Laps : {this.props.laps.length}</p>
					</>
				)} */}
				<Laps />
			</div>
		);
	}
}

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
