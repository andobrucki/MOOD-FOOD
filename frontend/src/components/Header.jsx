import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/Context';

const Header = () => {
	const { moodDispatch } = useContext(DataContext);
	const navigate = useNavigate();

	const handleNavigateHome = () => {
		moodDispatch({ type: 'RESET_MOOD' });
		navigate('/');
	};

	return (
		<div className="container flex flex-col items-center">
			<h1
				className="text-5xl w-full text-gray-800 pb-5 font-josefin font-normal italic hover:not-italic cursor-pointer"
				onClick={handleNavigateHome}
			>
				MOODFOOD
			</h1>
		</div>
	);
};

export default Header;
