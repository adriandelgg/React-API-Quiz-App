import React from 'react';

const FinalScore = ({ score, setShow, show }) => {
	return (
		<>
			<h3>Final Score!</h3>
			<p>You got {score}/10 correct!</p>
			<button onClick={() => setShow(!show)}>Play Again!</button>
		</>
	);
};

export default FinalScore;
