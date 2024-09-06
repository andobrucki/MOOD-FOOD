import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { MoodProvider, MoodContext } from './context/MoodContext';
import Home from './components/Home';
import FetchAdvice from './components/FetchAdvice';
import FetchInfo from './components/FetchInfo';
import MusicPlayer from './components/MusicPlayer';

//! App component

const App = () => {
	const { state } = useContext(MoodContext);
	return (
		<MoodProvider>
			<Router>
				<div className="outer-container box-border flex justify-center items-center min-h-screen border-none shadow-2xl rounded-2xl p-5 mt-20">
					<div className="inner-container flex flex-col items-center font-josefin font-normal w-3/5 ">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/advice" element={<FetchAdvice />} />
							<Route
								path="/music"
								element={<MusicPlayer mood={state.mood} />}
							/>
							<Route path="/learn-more" element={<FetchInfo />} />
						</Routes>
					</div>
				</div>
			</Router>
		</MoodProvider>
	);
};

export default App;
