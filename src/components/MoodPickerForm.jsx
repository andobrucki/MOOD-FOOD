import { MoodContext } from '../context/MoodContext';
import { useContext, useEffect } from 'react';

//! MoodForm component // choosing mood from dropdown
// Determine the time of day color based on the current time of day.
// Combine the mood color and time of day color to create a gradient.
// Set the body's background color to the gradient.

const MoodForm = () => {
	const { state, dispatch } = useContext(MoodContext);

	// Define colors for different times of day
	const timeOfDayColors = {
		morning: '#cffafe',
		afternoon: '#FFFFFF',
		evening: '#2B2E4A',
	};

	const fallbackColor = '#9f9e9c';

	useEffect(() => {
		// Get the mood color and time of the day color from the context
		const moodColor = state.moods[state.mood];
		const timeOfDayColor = timeOfDayColors[state.timeOfDay] || fallbackColor;

		// Combine the mood color and time of day color to create a gradient
		if (moodColor) {
			document.body.style.background = `linear-gradient(${moodColor}, ${timeOfDayColor})`;
		} else {
			// If no mood is selected, fall back to the time of day theme
			document.body.style.background = `linear-gradient(${fallbackColor}, ${timeOfDayColor})`;
		}
	}, [state.mood, state.timeOfDay, state.moods]);

	// handle mood change
	const handleChangeMood = (e) => {
		dispatch({ type: 'SET_MOOD', payload: e.target.value });
		console.log(e.target.value);
	};

	console.log(state.mood);

	return (
		<div className='block text-gray-700 text-s'>

			<form>
				<label className='block text-gray-700 text-s font-bold mb-2'>Select your mood: </label>
				<select
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"'
					value={state.mood}
					onChange={handleChangeMood}
				>
					<option value="">--Select mood--:</option>
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
