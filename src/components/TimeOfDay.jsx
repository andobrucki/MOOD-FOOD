import { useEffect, useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

const TimeOfDay = () => {
	const { state, dispatch } = useContext(MoodContext);

	// Determine the time of day based on the current time
	useEffect(() => {
		const getTimeOfDay = () => {
			const hours = new Date().getHours();
			if (hours >= 6 && hours > 12) return 'morning';
			// else if (hours >= 12 && hours < 18) return 'afternoon';
			else return 'evening';
		};

		const timeOfDay = getTimeOfDay();
		dispatch({ type: 'SET_TIME_OF_DAY', payload: timeOfDay });

		// Set the body class based on time of day
		document.body.className = ''; // Reset existing classes
		document.body.classList.add(timeOfDay); // Add the time of day class
	}, [dispatch]);

	return (
		<div>
			{state.timeOfDay === 'morning' && (
				<div className='text-2xl block text-gray-800 font-bold p-5'><h1>
					Good Morning,
				</h1><h2>how are you feeling today?</h2></div>
			)}
			{state.timeOfDay === 'afternoon' && (
					<div className='text-2xl block text-gray-800 font-bold p-5'><h1>
					Good Afternoon,
				</h1><h2>how are you feeling today?</h2>
				</div>
			)}
			{state.timeOfDay === 'evening' && (
				<div className="text-2xl block text-gray-800 font-bold p-5">
					<h1 >
						Good Evening,
					</h1>
					<h2>how are you feeling today?</h2>
				</div>
			)}
		</div>
	);
};

export default TimeOfDay;
