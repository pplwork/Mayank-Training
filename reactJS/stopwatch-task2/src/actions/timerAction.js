const getTime = (time) => {
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

export const handleLap = (time, prevLap) => {
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

	return {
		type: 'LAP',
		payload: {
			time,
			temp,
			diff,
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
