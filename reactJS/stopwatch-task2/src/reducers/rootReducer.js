const initialState = {
	time: 0,
	active: false,
	paused: false,
	intervalID: null,
	prevLap: null,
	laps: [],
	stopped: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'START':
			return {
				...state,
				time: 0,
				active: true,
				paused: false,
				intervalID: null,
				prevLap: null,
				laps: [],
				stopped: false,
			};
		case 'STOP':
			return {
				...state,
				active: false,
				stopped: true,
			};
		case 'PASUERESUME':
			return {
				...state,
				paused: !state.paused,
			};
		case 'RESET':
			return {
				...state,
				time: 0,
				active: false,
				paused: false,
				intervalID: null,
				prevLap: null,
				laps: [],
				stopped: false,
			};

		case 'NEWLAP':
			return {
				...state,
				prevLap: action.payload.time,
				laps: [
					{
						count: 1,
						lapTiming: action.payload.temp,
						diff: action.payload.temp,
					},
				],
			};
		case 'LAP':
			return {
				...state,
				prevLap: action.payload.time,
				laps: [
					...state.laps,
					{
						count: state.laps.length + 1,
						lapTiming: action.payload.temp,
						diff: action.payload.diff,
					},
				],
			};
		case 'INCREMENT':
			return {
				...state,
				time: state.time + 10,
			};
		case 'ADDINTERVAL':
			return {
				...state,
				intervalID: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
