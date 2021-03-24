import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import FinalScore from './FinalScore';

const QuizQuestion = ({ data: { results }, setShow, show }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [answers, setAnswers] = useState(null);

	// Shuffles new questions on every new game
	useEffect(() => {
		setAnswers(
			results.map(question =>
				_.shuffle([...question.incorrect_answers, question.correct_answer])
			)
		);
	}, [results]);

	console.log(answers);

	const handleAnswer = ({ target: { value } }) => {
		if (value === results[currentQuestion].correct_answer) {
			setScore(prev => prev + 1);
			setCurrentQuestion(prev => prev + 1);
		} else {
			setCurrentQuestion(prev => prev + 1);
			console.log('Wrong Answer');
		}
	};

	const displayQuestion = () => {
		return (
			<>
				<h3>{decodeURIComponent(results[currentQuestion].question)}</h3>
				<h2>Score: {score}</h2>
				<div className="flex">
					<button
						onClick={handleAnswer}
						value={answers[currentQuestion][0]}
					>
						A: {decodeURIComponent(answers[currentQuestion][0])}
					</button>
					<button
						onClick={handleAnswer}
						value={answers[currentQuestion][1]}
					>
						B: {decodeURIComponent(answers[currentQuestion][1])}
					</button>
					<button
						onClick={handleAnswer}
						value={answers[currentQuestion][2]}
					>
						C: {decodeURIComponent(answers[currentQuestion][2])}
					</button>
					<button
						onClick={handleAnswer}
						value={answers[currentQuestion][3]}
					>
						D: {decodeURIComponent(answers[currentQuestion][3])}
					</button>
				</div>
			</>
		);
	};

	return (
		<>
			{currentQuestion < 10 && answers && displayQuestion()}
			{currentQuestion === 10 && (
				<FinalScore score={score} setShow={setShow} show={show} />
			)}
		</>
	);
};

export default QuizQuestion;
