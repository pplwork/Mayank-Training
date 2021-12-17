// A simple scenario: Suppose Jon is waiting for the result of an exam, and he plans a vacation based on his exam score.
// The exam result is divided into 4 rankings: A, B, C, and D:

// If Jon gets an A, he rewards himself and goes for travel happily.
// If Jon gets a B, the reward drops to normal shopping.
// If Jon gets a C, he stays home and watches TV.
// If Jon gets a D, he’ll go to the library and work on the subject.

let ranking = 'D';

// =================== IF ELSE ===================

if (ranking === 'A') {
	console.log('Travel');
} else if (ranking === 'B') {
	console.log('Shopping');
} else if (ranking === 'C') {
	console.log('Watch TV');
} else if (ranking === 'D') {
	console.log('Review');
}

// =================== SWITCH CASE ===================

switch (ranking) {
	case 'A':
		console.log('Travel');
		break;
	case 'B':
		console.log('Shopping');
		break;
	case 'C':
		console.log('Watch TV');
		break;
	case 'D':
		console.log('Review');
		break;
}

// =================== KEY VALUE  ===================

let scenarios = {
	A: 'Travel',
	B: 'Shopping',
	C: 'Watch TV',
	D: 'Review',
};

const action = (ranking) => {
	let scenario = scenarios[ranking];
	console.log(scenario);
};
action('D');

// =================== USING MAP  ===================

let strategies = new Map([
	['A', 'travel'],
	['B', 'shopping'],
	['C', 'watchTV'],
	['D', 'review'],
]);

function action(ranking) {
	let strategy = strategies.get(ranking);
	console.log(strategy);
}
action('D');
