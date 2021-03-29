import React, { useRef, useState, useEffect } from 'react';

const Test = () => {
	const [person, setPerson] = useState({
		firstName: '',
		lastName: '',
		email: ''
	});
	const lol = useRef();

	const [people, setPeople] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		if (person.firstName && person.lastName && person.email) {
			setPeople(prev => [...prev, person]);
			setPerson({ firstName: '', lastName: '', email: '' });
		} else {
			alert('Incomplete form!');
		}
	};

	useEffect(() => {
		lol.current = people;
		console.log(lol.current);
		console.log(lol.current.value);
	}, [people]);

	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="firstName">Name: </label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					value={person.firstName}
					onChange={handleChange}
				/>
				<label htmlFor="lastName">Last name: </label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					value={person.lastName}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email: </label>
				<input
					type="text"
					name="email"
					id="email"
					value={person.email}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Test;
