export const getTime = (time) => {
	return `${('0' + Math.floor(time / 3600000)).slice(-2)}:${('0' + Math.floor((time / 60000) % 60)).slice(-2)}:${(
		'0' + Math.floor((time / 1000) % 60)
	).slice(-2)}.${('0' + ((time / 10) % 100)).slice(-2)} `;
};

export const handleStart = () => {
	return {
		type: 'START',
	};
};

export const handleReset = () => {
	return {
		type: 'RESET',
	};
};

export const handleStop = () => {
	return {
		type: 'STOP',
	};
};

export const handlePauseResume = () => {
	return {
		type: 'PASUERESUME',
	};
};

export const handleLap = (time, laps, prevLap, minLap, maxLap) => {
	const temp = getTime(time);
	let diff;

	if (!prevLap) {
		return {
			type: 'NEWLAP',
			payload: {
				time,
				temp,
			},
		};
	}
	diff = getTime(time - prevLap);

	if (minLap.timing > time - prevLap) {
		minLap.i = laps.length + 1;
		minLap.diff = diff;
		minLap.timing = time - prevLap;
	}
	if (maxLap.timing < time - prevLap) {
		maxLap.i = laps.length + 1;
		maxLap.diff = diff;
		maxLap.timing = time - prevLap;
	}

	return {
		type: 'LAP',
		payload: {
			time,
			temp,
			diff,
			minLap,
			maxLap,
		},
	};
};

export const handleIncrement = () => {
	return {
		type: 'INCREMENT',
	};
};

export const addIntervalID = (id) => {
	return {
		type: 'ADDINTERVAL',
		payload: id,
	};
};
