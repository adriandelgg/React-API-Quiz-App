import React from 'react';

const FinalScore = ({ score, setShow, show }) => {
	return (
		<>
			<h3>Final Score!</h3>
			<p>You got {score}/10 correct!</p>
			<p>Want to play again?</p>
			<button onClick={() => setShow(!show)}>YES!</button>
			<button>No</button>
		</>
	);
};

export default FinalScore;
