/* ================= FOR LOOP =========================== */

var names = ['James', 'Jacob', 'Jackson', 'Jordan', 'Jared', 'Jude', 'Jeremiah', 'James'];
// names.foo = 'hello';

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
	// OUTPUT
	//James Jacob Jackson Jordan Jared Jude Jeremiah James
}

/* ================= FOR..IN LOOP =========================== */
var student = {
	firstname: 'James',
	lastname: 'Gordon',
	age: 19,
	id: 'GSE28298ID',
};

// console.log(student.firstname);

for (let i in student) {
	console.log(`${i}:${student[i]}`);
	// OUTPUT
	// firstname: James
	// lastname: Gordon
	// age: 19
	// id: GSE28298ID
	//console.log(`${i}:${student.i}`); //->student.i showed undefined.
}

for (let i in names) {
	console.log(`${i}:${names[i]}`);
	// OUTPUT
	// 0:James
	// 1:Jacob
	// 2:Jackson
	// 3:Jordan
	// 4:Jared
	// 5:Jude
	// 6:Jeremiah
	// 7:James
	// foo:hello
}

/* ================= FOR..OF LOOP =========================== */
// will only run on iterable objects like array ,string,etc.

let myname = 'Awesome Sauce';
for (let char of myname) {
	// console.log(char);
}
// OUPUT
// A
// w
// e
// s
// o
// m
// e
//
// S
// a
// u
// c
// e

for (let i of names) {
	// console.log(i);
	// OUTPUT
	// every name
}

for (let i of student) {
	// console.log(i);
	// will not run in object
}

// ================ WHILE LOOP ======================
// syntax
// while (condition) { ->code will execute only if the condition is true
// 	// execute this code
// }

let name = 0;
while (name < names.length) {
	// console.log(names[name]);
	name++;
}

// ================DO WHILE LOOP ======================
// In do while the code will execute once even if the codition is false.
// SYNTAX
// do {

// } while (condition)
