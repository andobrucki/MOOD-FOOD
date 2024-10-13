import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/Context';
import Home from './components/Home';
import Signup from './components/Signup';
import FetchAdvice from './components/FetchAdvice';
import FetchInfo from './components/FetchInfo';
import MusicPlayer from './components/MusicPlayer';

//! App component

const App = () => {
	return (
		<DataProvider>
			<Router>
				<div className="outer-container box-border flex justify-center items-center min-h-screen border-none shadow-2xl rounded-2xl p-5 mt-20">
					<div className="inner-container flex flex-col items-center font-josefin font-normal w-3/5 ">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/advice" element={<FetchAdvice />} />
							<Route path="/music" element={<MusicPlayer />} />
							<Route path="/learn-more" element={<FetchInfo />} />
						</Routes>
					</div>
				</div>
			</Router>
		</DataProvider>
	);
};

export default App;
