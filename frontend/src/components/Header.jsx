import { useNavigate } from 'react-router-dom';

//! Header component

const Header = () => {
	const navigate = useNavigate();

	const handleNavigateHome = () => {
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
