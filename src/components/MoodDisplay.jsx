import { MoodContext } from '../context/MoodContext';
import { useContext } from 'react';

const moodMessages = {
	happy: "That's great, you are happy!",
	relaxed: 'You seem relaxed and at ease.',
	fearful: 'Oh no, you feel fearful!',
	astonished: "Wow, you're astonished!",
	sad: "I'm sorry to hear you're feeling sad.",
	frustrated: "It sounds like you're frustrated.",
	angry: 'Oh no, you feel angry!',
	excited: "That's awesome, you are excited!",
};

export const MoodDisplay = () => {
	const { state } = useContext(MoodContext);

	const message = state.mood ? moodMessages[state.mood] : '';

	console.log('hello');
	return (
		<div className="container flex flex-col items-center p-5 text-3xl">
			{message && <p className="text-2xl text-gray-800 font-bold">{message}</p>}
		</div>
	);
};
