import React, { useState, useEffect } from 'react';
import './App.css';

import Selection from './components/Selection';

const App = () => {
	return (
		<>
			<h1>React API Trivia</h1>
			<h2>by Adrian Delgado</h2>
			<Selection />
		</>
	);
};

export default App;
