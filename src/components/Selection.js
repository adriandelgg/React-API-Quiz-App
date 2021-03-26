import React, { useState, useEffect } from 'react';

import QuizQuestion from './QuizQuestion';
import quizes from './QuizesAPI';
import axios from 'axios';

const Selection = () => {
	const [data, setData] = useState(null);
	const [quiz, setQuiz] = useState(null);
	const [show, setShow] = useState(false);

	// Fetches data on user choice
	useEffect(() => {
		if (quiz === null) return;
		(async () => {
			try {
				const response = await axios.get(quiz);
				const {
					data: { results }
				} = response;
				setData(results);
			} catch (e) {
				console.log(e);
			}
		})();
	}, [quiz, show]);

	return (
		<>
			{!show && (
				<>
					<h3>Choose a trivia category!</h3>
					<p>Every quiz will be 10 questions long.</p>
				</>
			)}
			{/* Loads questions when data is fetched after quiz choice */}
			{!data && show && <h3>Loading...</h3>}
			{show && data && (
				<QuizQuestion results={data} setShow={setShow} show={show} />
			)}
			{/* Hides buttons after selection */}
			{!show && (
				<div className="flex">
					<button
						onClick={() => {
							setQuiz(quizes.generalKnowledge);
							setShow(prev => !prev);
						}}
					>
						General Knowledge
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.science);
							setShow(prev => !prev);
						}}
					>
						Science
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.anime);
							setShow(prev => !prev);
						}}
					>
						Anime
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.geography);
							setShow(prev => !prev);
						}}
					>
						Geography
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.computers);
							setShow(prev => !prev);
						}}
					>
						Computers
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.history);
							setShow(prev => !prev);
						}}
					>
						History
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.movies);
							setShow(prev => !prev);
						}}
					>
						Movies
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.animals);
							setShow(prev => !prev);
						}}
					>
						Animals
					</button>
					<button
						onClick={() => {
							setQuiz(quizes.videoGames);
							setShow(prev => !prev);
						}}
					>
						Video Games
					</button>
				</div>
			)}
		</>
	);
};

export default Selection;
