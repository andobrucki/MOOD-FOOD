import { useContext } from 'react';
import Header from './Header';
import TimeOfDay from './TimeOfDay';
import MoodForm from './MoodPickerForm';
import { MoodDisplay } from './MoodDisplay';
import MoodPrompt from './MoodPrompt';
import { MoodContext } from '../context/MoodContext';

const Home = () => {
	const { state } = useContext(MoodContext);
	return (
		<div>
			<Header />
			<TimeOfDay />
			<MoodForm />
			<MoodDisplay />
			{state.mood && <MoodPrompt />}
		</div>
	);
};

export default Home;
