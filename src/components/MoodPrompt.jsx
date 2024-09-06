import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoodContext } from '../context/MoodContext';
import { fetchMusic } from './FetchMusic';
import Button from './Button';

// MoodPrompt component
const MoodPrompt = () => {
	const { state, dispatch } = useContext(MoodContext);
	const navigate = useNavigate();

	// Async function to handle option click
	const handleOptionClick = async (option) => {
		dispatch({ type: 'SET_NEXT_STEP', payload: option });
		
		// Check which option selected
		// Navigate to the respective page
		if (option === 'advice') {
			navigate('/advice');
		} else if (option === 'music') {
			// Fetch the video ID before navigating
			const videoId = await fetchMusic(state.mood);
			console.log('Fetched video ID:', videoId); // Debugging line

			dispatch({ type: 'SET_VIDEO_ID', payload: videoId });
			console.log('State after setting video ID:', state); // Debugging line
			navigate('/music');
		} else if (option === 'learn-more') {
			navigate('/learn-more');
		}
	};
console.log('State after setting next step:', state); // Debugging line

	return (
		<div className="container flex flex-col justify-center items-center">
			<h2 className="text-2xl font-normal mb-4 pt-10">
				What can I do for you?
			</h2>

			<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
				{/* Button for listening to music */}
				<Button
					isActive={state.nextStep === 'music'}
					label="Play some music"
					onClick={() => handleOptionClick('music')}
				/>

				{/* Button for getting advice */}
				<Button
					isActive={state.nextStep === 'advice'}
					label="Give advice"
					onClick={() => handleOptionClick('advice')}
				/>

				{/* Button for Wikipedia */}
				<Button
					isActive={state.nextStep === 'learn-more'}
					label={`Tell me something about ${state.mood} mood`}
					onClick={() => handleOptionClick('learn-more')}
				/>
			</div>
		</div>
	);
};

export default MoodPrompt;
