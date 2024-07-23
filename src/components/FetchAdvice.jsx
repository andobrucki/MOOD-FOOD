import axios from 'axios';
import { useState } from 'react';

const FetchAdvice = () => {
	const [advice, setAdvice] = useState(''); //state to store advice

	const getAdvice = async () => {
		const response = await axios.get('https://api.adviceslip.com/advice');
		const advice = response.data.slip.advice; // Assuming the API response structure
		setAdvice(advice); // Update state with fetched advice
	};
	return (
		<div>
			<button onClick={getAdvice}>Get advice</button>
			<p>{advice}</p>
		</div>
	);
};

export default FetchAdvice;
