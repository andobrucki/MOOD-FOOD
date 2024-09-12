import axios from 'axios';
import { useState, useEffect } from 'react';

//! FetchAdvice component
// FetchAdvice component to fetch advice from the API

const FetchAdvice = () => {
	const [advice, setAdvice] = useState(''); //state to store advice

	useEffect(() => {
		axios
			.get('https://api.adviceslip.com/advice')
			.then((response) => {
				setAdvice(response.data.slip.advice); // Update state with fetched advice
			})
			.catch((error) => {
				console.error('Error fetching advice: ', error);
			});
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-full w-full p-5">
			{/* <h2 className="text-2xl underline font-normal mb-4 mt-10">Advice</h2> */}
			<p className="text-2xl md:text-3xl font-light text-center leading-relaxed break-words max-w-full">
				{advice}
			</p>
		</div>
	);
};

export default FetchAdvice;
