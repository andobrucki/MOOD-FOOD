import { MoodContext } from '../context/MoodContext';
import { useContext, useEffect } from 'react';

//! MoodForm component // choosing mood from dropdown
// Determine the time of day color based on the current time of day.
// Combine the mood color and time of day color to create a gradient.
// Set the body's background color to the gradient:
// TOP: mood color
// BOTTOM: time of day color

const MoodForm = () => {
	const { state, dispatch } = useContext(MoodContext);
	// recieve the mood colors and time of day from the context

	// Define colors for different times of day
	const timeOfDayColors = {
		morning: '#cffafe',
		afternoon: '#FFFFFF',
		evening: '#2B2E4A',
	};

	const timeOfDayFontColors = {
		morning: '#cffafe',
		afternoon: '#FFFFFF',
		evening: '#2B2E4A',
	};

	// Define a default color for the gradient when no mood is selected
	const defaultColor = '#f6cdf2';

	// Set the body's background color based on the selected mood and time of day
	useEffect(() => {
		// Get the mood color and time of the day from the context
		// Define moodColor based on the selected mood
		// Define timeOfDayColor based on the selected time of day
		const moodColor = state.moods[state.mood];
		const timeOfDayColor = timeOfDayColors[state.timeOfDay] || defaultColor;

		// Combine the mood color and time of day color to create a gradient
		if (moodColor) {
			document.body.style.background = `linear-gradient(${moodColor}, ${timeOfDayColor})`;
		} else {
			// If no mood is selected, fall back to the time of day theme
			document.body.style.background = `linear-gradient(${defaultColor}, ${timeOfDayColor})`;
		}
	}, [state.mood, state.timeOfDay]);
	// dependencies: the effect will re-run whenever the mood, time of day change

	// handle mood change
	const handleChangeMood = (e) => {
		dispatch({ type: 'SET_MOOD', payload: e.target.value });
	};

	return (
		<div className="flex justify-center text-gray-700 text-s">
			<form className="w-1.5/3">
				<select
					className="py-4 px-5 text-gray-700 border-0 rounded-3xl shadow-lg text-base transition-all duration-300 ease-in-out bg-white outline-none appearance-none w-full focus:ring-2 focus:ring-gray-300 focus:border-transparent cursor-pointer"
					value={state.mood}
					onChange={handleChangeMood}
				>
					<option value="">--Select your mood--:</option>
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
