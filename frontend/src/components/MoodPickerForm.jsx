/* eslint-disable react-hooks/exhaustive-deps */
import { DataContext } from '../context/Context';
import { useContext, useEffect } from 'react';

//! MoodForm component
// Determine the time of day color based on the current time of day.
// Combine the mood color and time of day color to create a gradient.
// TOP: mood color
// BOTTOM: time of day color

const MoodForm = () => {
	const { moodState, moodDispatch } = useContext(DataContext);
	// recieve the mood colors and time of day from the context

	// Define colors for different times of day
	const timeOfDayColors = {
		morning: '#cffafe',
		afternoon: '#FFFFFF',
		evening: '#525fd7',
	};

	// Define a default color for the gradient when no mood is selected
	const defaultColor = '#f6cdf2';

	// Set the body's background color based on the selected mood and time of day
	// Could move that out into a separate component
	useEffect(() => {
		// Get the mood color and time of the day from the context
		// Define moodColor based on the selected mood
		// Define timeOfDayColor based on the selected time of day
		const moodColor = moodState.moods[moodState.mood];
		const timeOfDayColor = timeOfDayColors[moodState.timeOfDay] || defaultColor;

		// Combine the mood color and time of day color to create a gradient
		if (moodColor) {
			document.body.style.background = `linear-gradient(${moodColor}, ${timeOfDayColor})`;
		} else {
			// If no mood is selected, fall back to the time of day theme
			document.body.style.background = `linear-gradient(${defaultColor}, ${timeOfDayColor})`;
		}
	}, [moodState.mood, moodState.timeOfDay]);
	// dependencies: the effect will re-run whenever the mood, time of day change

	// handle mood change
	const handleChangeMood = (e) => {
		moodDispatch({ type: 'SET_MOOD', payload: e.target.value });
	};

	return (
		<div className="flex justify-center text-gray-700 text-s">
			<form className="w-1.5/3">
				<select
					className="py-4 px-5 text-gray-700 border-0 rounded-full shadow-lg text-base bg-white outline-none appearance-none w-full focus:border-transparent cursor-pointer"
					value={moodState.mood}
					onChange={handleChangeMood}
				>
					<option value="">Select your mood</option>
					<option value="happy">happy</option>
					<option value="relaxed">relaxed</option>
					<option value="fearful">fearful</option>
					<option value="astonished">astonished</option>
					<option value="sad">sad</option>
					<option value="frustrated">frustrated</option>
					<option value="angry">angry</option>
					<option value="excited">excited</option>
				</select>
			</form>
		</div>
	);
};

export default MoodForm;
