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
		<div className="signup-form-container flex flex-col space-y-4 ">
			<Button label={'Login'} onClick={handleLoginDirect} />
			<Button label={'Sign Up'} onClick={handleSignupDirect} />
		</div>
	);
};

export default Hello;
