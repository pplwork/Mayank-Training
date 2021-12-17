class Person {
	constructor(name, age, salary, sex) {
		this.name = name;
		this.age = age;
		this.salary = salary;
		this.sex = sex;
	}
	static sort(arr, field, order) {
		let newArr = arr;
		quickSort(newArr, 0, newArr.length - 1, field);

		return order === 'desc' ? newArr.reverse() : newArr;
	}
}

const quickSort = (arr, low, high, field) => {
	if (low < high) {
		let p = partition(arr, low, high, field);

		quickSort(arr, low, p - 1, field);
		quickSort(arr, p + 1, high, field);
	}
};

const partition = (arr, low, high, field) => {
	let pivot = arr[high];
	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j][field] <= pivot[field]) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	i++;
	[arr[i], arr[high]] = [arr[high], arr[i]];
	return i;
};

const persons = [
	['Williams', 25, 59000, 'Male'],
	['John', 24, 48000, 'Male'],
	['Scott', 27, 10000, 'Male'],
	['Taylor', 44, 88000, 'Female'],
	['Selena', 36, 35000, 'Female'],
	['Harry', 21, 100000, 'Male'],
	['Mary', 34, 36000, 'Female'],
];

let arr = [];
persons.forEach((person) => {
	arr.push(new Person(...person));
});

console.log(arr);

const sortedArray = Person.sort(arr, 'name', 'asc');

console.log(sortedArray);
