import { MoodContext } from '../context/MoodContext';
import { useContext } from 'react';

const MoodPrompt = () => {
	const { state, dispatch } = useContext(MoodContext);

	const handleOptionClick = (option) => {
		dispatch({ type: 'SET_NEXT_STEP', payload: option });
	};

	return (
		<div className="flex flex-col items-center p-5">
			<h2 className="text-2xl font-bold mb-4">
				What would you like to do next?
			</h2>
			<div className="flex space-x-4">
				<button
					className={`px-4 py-2 rounded ${
						state.nextStep === 'advice'
							? 'bg-gray-900 text-white'
							: 'bg-gray-300'
					}`}
					onClick={() => handleOptionClick('advice')}
				>
					Get Advice
				</button>
				<button
					className={`px-4 py-2 rounded ${
						state.nextStep === 'music'
							? 'bg-gray-900 text-white'
							: 'bg-gray-300'
					}`}
					onClick={() => handleOptionClick('music')}
				>
					Listen to some music
				</button>
				<button
					className={`px-4 py-2 rounded ${
						state.nextStep === 'learn-more'
							? 'bg-gray-900 text-white'
							: 'bg-gray-300'
					}`}
					onClick={() => handleOptionClick('learn-more')}
				>
					Learn more about {state.mood} mood
				</button>
			</div>
			<p className="mt-4 text-lg">Selected Option: {state.nextStep}</p>
		</div>
	);
};

export default MoodPrompt;
