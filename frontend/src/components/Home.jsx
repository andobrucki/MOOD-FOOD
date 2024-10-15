import { useContext } from 'react';
import TimeOfDay from './TimeOfDay';
import MoodForm from './MoodPickerForm';
import { MoodDisplay } from './MoodDisplay';
import MoodPrompt from './MoodPrompt';
import { DataContext } from '../context/Context';

const Home = () => {
	const { moodState } = useContext(DataContext);
	return (
		<div>
			<TimeOfDay />
			<MoodForm />
			<MoodDisplay />
			{moodState.mood && <MoodPrompt />}
		</div>
	);
};

export default Home;
