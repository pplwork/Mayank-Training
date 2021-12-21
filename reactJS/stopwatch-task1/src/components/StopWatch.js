import React, { Component } from 'react';
import Timer from './Timer';
import Laps from './Laps';
import StartBtn from './StartBtn';
import LapBtn from './LapBtn';
import ResetBtn from './ResetBtn';
import StopBtn from './StopBtn';

class StopWatch extends Component {
	constructor() {
		super();
		this.state = {
			time: 0,
			active: false,
			paused: false,
			intervalID: null,
			prevLap: null,
			laps: [],
			stopped: false,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.active !== this.state.active || prevState.paused !== this.state.paused) {
			let interval;
			if (this.state.active && !this.state.paused) {
				interval = setInterval(() => {
					this.setState({
						time: this.state.time + 10,
					});
				}, 10);
				this.setState({
					intervalID: interval,
				});
			} else {
				clearInterval(this.state.intervalID);
			}
		}
	}

	handleStart = () => {
		this.handleReset();
		this.setState({
			active: true,
			paused: false,
		});
	};

	handlePauseResume = () => {
		this.setState({
			paused: !this.state.paused,
		});
	};

	handleReset = () => {
		this.setState({
			time: 0,
			active: false,
			paused: false,
			intervalID: null,
			prevLap: null,
			laps: [],
			stopped: false,
		});
	};

	getTime = (time) => {
		return `${('0' + Math.floor(time / 3600000)).slice(-2)}:${('0' + Math.floor((time / 60000) % 60)).slice(-2)}:${(
			'0' + Math.floor((time / 1000) % 60)
		).slice(-2)}.${('0' + ((time / 10) % 100)).slice(-2)} `;
	};

	handleLap = () => {
		let temp = this.getTime(this.state.time);
		let diff;
		if (!this.state.prevLap) {
			diff = temp;
			this.setState({
				laps: [...this.state.laps, { count: 1, lapTiming: temp, diff: diff }],
			});
		} else {
			diff = this.getTime(this.state.time - this.state.prevLap);
			this.setState({
				laps: [...this.state.laps, { count: this.state.laps.length + 1, lapTiming: temp, diff: diff }],
			});
		}
		this.setState({
			prevLap: this.state.time,
		});
	};

	handleStop = () => {
		this.setState({
			active: false,
			stopped: true,
		});
	};

	render() {
		return (
			<div className='stop-watch'>
				{this.state.stopped && (
					<p className='desc'>
						Total <span className='red'>Time</span>:
					</p>
				)}
				<Timer time={this.state.time} />
				<div className='control-btns'>
					<div>
						{this.state.active ? (
							<div className='btn-grp'>
								{this.state.paused ? (
									<ResetBtn handleReset={this.handleReset} />
								) : (
									<LapBtn handleLap={this.handleLap} />
								)}

								<button className='btn btn-blue' onClick={this.handlePauseResume}>
									{this.state.paused ? 'Resume' : 'Pause'}
								</button>
								<StopBtn handleStop={this.handleStop} />
							</div>
						) : (
							<StartBtn handleStart={this.handleStart} stopped={this.state.stopped} />
						)}
					</div>
				</div>
				<Laps laps={this.state.laps} />
			</div>
		);
	}
}

export default StopWatch;
