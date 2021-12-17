document.querySelector('#submit').addEventListener('click', (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const gender = document.getElementById('gender').value;
	const roles = document.getElementsByName('role');
	let role;
	roles.forEach((r) => {
		if (r.checked) {
			role = r.value;
		}
	});
	if (!role) {
		role = '';
	}

	let permission = [];
	const permissions = document.getElementsByName('permission');
	permissions.forEach((p) => {
		if (p.checked) {
			permission.push(p.value);
		}
	});

	const data = {
		email,
		password,
		gender,
		role,
		permissions: permission,
	};
	validateForm(data);
});

const error = document.querySelector('#error');
const success = document.querySelector('#success');

const showError = (msg) => {
	error.innerHTML = msg;
	error.style.display = 'block';
	success.style.display = 'none';
};
const showSuccess = (msg) => {
	success.innerHTML = msg;
	success.style.display = 'block';
	error.style.display = 'none';
};

const emailValidated = (email) => {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return mailformat.test(email);
};

const passwordValidated = (password) => {
	const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
	return passwordFormat.test(password);
};

const validateForm = ({ email, password, gender, role, permissions }) => {
	console.log(email, password, gender, role, permissions);
	if (!email || !password || !gender || !role || permissions.length === 0) {
		// console.log('Enter all field');
		showError('Please enter all fields.');
	} else if (!emailValidated(email)) {
		showError('Please enter a valid email.');
	} else if (!passwordValidated(password)) {
		showError('Password should be min of 6 character & should be a combination of lowercase,uppercase and digits.');
	} else if (permissions.length < 2) {
		showError('Please select atleast two permissions.');
	} else {
		showSuccess('Form has been submitted successfully.');
		document.querySelector('form').style.display = 'none';

		document.querySelector('#dataResult').innerHTML = `
            <h2>Email : ${email}</h2>
            <h2>Password : ${password}</h2>
            <h2>Gender : ${gender}</h2>
            <h2>Role : ${role}</h2>
            <h2>Permissions : ${permissions.toString()}</h2>
        `;
	}
};
