import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/Context';
import { fetchMusic } from './FetchMusic';
import Button from './Button';

// MoodPrompt component
const MoodPrompt = () => {
	const { moodState, moodDispatch } = useContext(DataContext);
	const navigate = useNavigate();

	// Async function to handle option click
	const handleOptionClick = async (option) => {
		moodDispatch({ type: 'SET_NEXT_STEP', payload: option });

		// Check which option selected
		// Navigate to the respective page
		if (option === 'advice') {
			navigate('/advice');
		} else if (option === 'music') {
			// Fetch the video ID before navigating
			const videoId = await fetchMusic(moodState.mood);
			console.log('Fetched video ID:', videoId); // Debugging line

			moodDispatch({ type: 'SET_VIDEO_ID', payload: videoId });
			console.log('State after setting video ID:', moodState); // Debugging line
			navigate('/music');
		} else if (option === 'learn-more') {
			navigate('/learn-more');
		}
	};
	console.log('State after setting next step:', moodState); // Debugging line

	return (
		<div className="container flex flex-col justify-center items-center">
			<h2 className="text-2xl font-normal mb-4 pt-10">
				What can I do for you?
			</h2>

			<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
				{/* Button for listening to music */}
				<Button
					isActive={moodState.nextStep === 'music'}
					label="Play some music"
					onClick={() => handleOptionClick('music')}
				/>

				{/* Button for getting advice */}
				<Button
					isActive={moodState.nextStep === 'advice'}
					label="Give advice"
					onClick={() => handleOptionClick('advice')}
				/>

				{/* Button for Wikipedia */}
				<Button
					isActive={moodState.nextStep === 'learn-more'}
					label={`Tell me something about ${moodState.mood} mood`}
					onClick={() => handleOptionClick('learn-more')}
				/>
			</div>
		</div>
	);
};

export default MoodPrompt;
