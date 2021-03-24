import React, { useState, useEffect } from 'react';
import './App.css';

import Selection from './components/Selection';

const App = () => {
	// const [data, setData] = useState(null);
	const [showSelection, setShowSelection] = useState(false);

	return (
		<>
			<h1>React API Quiz</h1>
			<Selection />
		</>
	);
};

export default App;
