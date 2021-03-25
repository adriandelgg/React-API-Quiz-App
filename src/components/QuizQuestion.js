import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import FinalScore from './FinalScore';

const QuizQuestion = ({ data: { results }, setShow, show }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [answers, setAnswers] = useState(null);
	const [wrongAnswer, setWrongAnswer] = useState(null);
	const [showAnswers, setShowAnswers] = useState(true);

	// Shuffles new questions on every new game
	useEffect(() => {
		setAnswers(
			results.map(question =>
				_.shuffle([...question.incorrect_answers, question.correct_answer])
			)
		);
	}, [results]);

	// Toggles the correct answer if user gets question wrong.
	useEffect(() => {
		if (currentQuestion < 10) {
			setWrongAnswer(
				<h4>
					Incorrect. The answer was:{' '}
					{decodeURIComponent(results[currentQuestion].correct_answer)}
				</h4>
			);
		}
	}, [currentQuestion]);

	// Gives user +1 on correct & toggles the correct answer if wrong.
	const handleAnswer = ({ target: { value } }) => {
		if (value === results[currentQuestion].correct_answer) {
			setScore(prev => prev + 1);
			setCurrentQuestion(prev => prev + 1);
		} else {
			setShowAnswers(prev => !prev);
		}
	};

	const handleNext = () => {
		setCurrentQuestion(prev => prev + 1);
		setShowAnswers(prev => !prev);
	};

	const displayQuestions = () => {
		return (
			<>
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
			{currentQuestion < 10 && (
				<h2>
					Q{currentQuestion + 1}:{' '}
					{decodeURIComponent(results[currentQuestion].question)}
				</h2>
			)}
			{currentQuestion < 10 && <h3>Score: {score}/10</h3>}
			{currentQuestion < 10 && answers && showAnswers && displayQuestions()}

			{/* Shows incorrect answer and Next button when wrong */}
			{!showAnswers && wrongAnswer}
			{!showAnswers && <button onClick={handleNext}>Next Question</button>}

			{currentQuestion === 10 && (
				<FinalScore score={score} setShow={setShow} show={show} />
			)}
		</>
	);
};

export default QuizQuestion;
