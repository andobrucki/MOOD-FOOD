import './App.css';
import MoodForm from './components/MoodPickerForm';
import { MoodDisplay } from './components/MoodDisplay';
import MoodPrompt from './components/MoodPrompt';
import Header from './components/Header';
import './App.css';
import TimeOfDay from './components/TimeOfDay';
import FetchAdvice from './components/FetchAdvice';
import FetchMusic from './components/FetchMusic';
// import RateMood from './components/Rating';

//! App component

const App = () => {
	return (
		<div className="outer-container box-border flex justify-center items-center min-h-screen">
			<div className="inner-container flex flex-col items-center font-josefin w-3/5 bg-custom-bg p-8">
				<Header />
				<TimeOfDay />
				<MoodForm />
				<MoodDisplay />
				<MoodPrompt />
				{/* <FetchAdvice /> */}
				{/* <FetchMusic searchQuery="relaxation" /> */}
			</div>
		</div>
	);
};

export default App;
