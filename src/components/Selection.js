import React, { useState, useEffect } from 'react';

import QuizQuestion from './QuizQuestion';

const easy =
	'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple';
const medium =
	'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';

const Selection = () => {
	const [data, setData] = useState(null);
	const [quiz, setQuiz] = useState(null);

	// const getQuizData = async difficulty => {
	// 	try {
	// 		const response = await fetch(difficulty);
	// 		if (response.ok) {
	// 			const jsonResponse = await response.json();
	// 			console.log(jsonResponse);
	// 			return jsonResponse;
	// 		}
	// 		throw new Error('Request Failed!');
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		if (quiz === null) return;
		fetch(quiz)
			.then(response => {
				if (response.ok) {
					setData(response.json());
				} else {
					throw new Error('Request Failed!');
				}
			})
			.catch(error => console.log(error));
	}, [quiz]);
	console.log(data);
	return (
		<>
			<button onClick={() => setQuiz(easy)}>Easy</button>
			<button onClick={() => setQuiz(medium)}>Medium</button>
			<QuizQuestion />
		</>
	);
};

export default Selection;
