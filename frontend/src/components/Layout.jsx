import { Outlet } from 'react-router-dom';
import { DataContext } from '../context/Context';
import { useContext, useEffect } from 'react';
import Header from '../components/Header';

const Layout = () => {
	const { moodState } = useContext(DataContext);

	const timeOfDayColors = {
		morning: '#cffafe', // Light blue
		afternoon: '#FFFFFF', // White
		evening: '#525fd7', // Dark blue
	};

	// Define a default color for the gradient when no mood is selected
	const defaultMoodColor = '#f6cdf2';

	useEffect(() => {
		// Get the time of day color and mood color from context
		const timeOfDayColor =
			timeOfDayColors[moodState.timeOfDay] || defaultMoodColor;
		const moodColor = moodState.mood
			? moodState.moods[moodState.mood]
			: defaultMoodColor;

		// Set the background based on time of day and mood
		document.body.style.background = `linear-gradient(${moodColor}, ${timeOfDayColor})`;
	}, [moodState.mood, moodState.timeOfDay]); // Re-run whenever mood or timeOfDay changes

	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
