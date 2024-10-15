import { DataContext } from '../context/Context';
import { useContext } from 'react';

// Messages for each mood
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

// MoodDisplay component
export const MoodDisplay = () => {
	const { moodState } = useContext(DataContext);

	const message = moodState.mood ? moodMessages[moodState.mood] : '';

	return (
		<div className="container flex flex-col items-center p-5 text-3xl">
			{message && <p className="text-2xl text-gray-800 font-bold">{message}</p>}
		</div>
	);
};
