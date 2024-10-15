/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { DataContext } from '../context/Context';

//! TimeOfDay component
// TimeOfDay component to display a greeting based on the time of day

const TimeOfDay = () => {
	const greetings = {
		morning: 'Good Morning',
		afternoon: 'Good Afternoon',
		evening: 'Good Evening',
	};

	const { moodState, moodDispatch } = useContext(DataContext);

	// Determine the time of day based on the current time
	useEffect(() => {
		const getTimeOfDay = () => {
			const hours = new Date().getHours();
			if (hours >= 6 && hours < 12) return 'morning';
			else if (hours >= 12 && hours < 18) return 'afternoon';
			else return 'evening';
		};

		// Set the time of day in the state
		const timeOfDay = getTimeOfDay();
		moodDispatch({ type: 'SET_TIME_OF_DAY', payload: timeOfDay });
		console.log(
			'Greetings: ',
			greetings,
			'Greetings(state): ',
			greetings[timeOfDay]
		);

		// Set the body class based on time of day
		document.body.className = ''; // Reset existing classes
		document.body.classList.add(timeOfDay); // Add the time of day class
	}, [moodDispatch]);

	return (
		<div>
			{moodState.timeOfDay && (
				<div className="text-2xl block text-gray-800 font-light p-5">
					<h1 className="text-3xl">{greetings[moodState.timeOfDay]},</h1>
					<h2>how are you feeling today?</h2>
				</div>
			)}
		</div>
	);
};

export default TimeOfDay;
