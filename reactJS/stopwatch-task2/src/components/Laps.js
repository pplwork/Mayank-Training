import React, { Component, memo } from 'react';
import { connect } from 'react-redux';

class Laps extends Component {
	lapLists() {
		return (
			this.props.laps.length !== 0 &&
			this.props.laps.reverse().map((lap) => (
				<div key={lap.count} className='lap-item'>
					<div>{'Lap ' + lap.count}</div>
					<div>{lap.lapTiming}</div>
					<div>{'+' + lap.diff}</div>
				</div>
			))
		);
	}

	render() {
		return (
			<div className='laps'>
				{this.props.laps.length !== 0 && (
					<div className='lap-head'>
						<div>Lap No.</div>
						<div>Lap Timing</div>
						<div>Lap Difference</div>
					</div>
				)}
				{this.lapLists()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		laps: state.laps,
	};
}

export default memo(connect(mapStateToProps)(Laps));
