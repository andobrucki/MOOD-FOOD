import { useContext } from 'react';
import TimeOfDay from './TimeOfDay';
import MoodForm from './MoodPickerForm';
import Hello from './Hello';
import { MoodDisplay } from './MoodDisplay';
import MoodPrompt from './MoodPrompt';
// import Dropdown from './Dropdown';
import { DataContext } from '../context/Context';

const Home = () => {
	const { moodState } = useContext(DataContext);
	return (
		<div>
			<TimeOfDay />
			<MoodForm />
			<MoodDisplay />
			{moodState.mood && <MoodPrompt />}
			<Hello/>
{/* <Dropdown/> */}
		</div>
	);
};

export default Home;
