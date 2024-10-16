import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;

// import { Outlet } from 'react-router-dom';
// import Header from '../components/Header';
// import { DataContext } from '../context/Context';
// import { useContext, useEffect } from 'react';

// const Layout = () => {
// 	const { moodState } = useContext(DataContext);

// 	const timeOfDayColors = {
// 		morning: '#cffafe',
// 		afternoon: '#FFFFFF',
// 		evening: '#525fd7',
// 	};

// 	// Define a default color for the gradient when no mood is selected
// 	const defaultColor = '#f6cdf2';

// 	useEffect(() => {
// 		// Get time of the day from the context
// 		// Define timeOfDayColor based on the selected time of day
// 		console.log(moodState);
// 		const timeOfDayColor = timeOfDayColors[moodState.timeOfDay] || defaultColor;

// 		document.body.style.background = `linear-gradient(${defaultColor}, ${timeOfDayColor})`;
// 	}, [moodState]);

// 	return (
// 		<div className="app">
// 			<Header />
// 			<Outlet />
// 		</div>
// 	);
// };

// export default Layout;
