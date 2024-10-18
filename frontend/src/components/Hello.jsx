import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Hello = () => {
	const navigate = useNavigate();

	const handleSignupDirect = () => {
		navigate('/signup');
	};
	const handleLoginDirect = () => {
		navigate('/login');
	};

	return (
		<div className="signup-form-container flex flex-col space-y-4 mt-40 items-center ">
			<Button label={'Login'} onClick={handleLoginDirect} className="w-24" />
			<Button
				label={'Register'}
				onClick={handleSignupDirect}
				isActive={true}
				className="bg-gray-800 text-white hover:bg-gray-700 w-24"
				style={{}}
			/>
		</div>
	);
};

export default Hello;
