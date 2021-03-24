import React, { useState, useEffect } from 'react';

const App = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy'
		).then(response => {
			if (response.ok) {
				setData(response.json());
			} else {
				throw response;
			}
		});
		console.log(data);
	}, []);

	return <></>;
};

export default App;
