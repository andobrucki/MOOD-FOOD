import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { DataContext } from '../context/Context';
import { useContext } from 'react';

const LoginRegister = () => {
	const { userState, userDispatch } = useContext(DataContext);
	const navigate = useNavigate();

	const handleSignupDirect = () => {
		navigate('/signup');
	};
	const handleLoginDirect = () => {
		navigate('/login');
	};

	const handleLogout = () => {
		userDispatch({ type: 'LOGOUT' });
		navigate('/');
	};

	return (
		<div className="signup-form-container flex flex-col space-y-4 mt-40 items-center ">
			{!userState.isUserLoggedIn ? (
				<>
					<Button
						label={'Login'}
						onClick={handleLoginDirect}
						className="w-24"
					/>

					<Button
						label={'Register'}
						onClick={handleSignupDirect}
						isActive={true}
						className="bg-gray-800 text-white hover:bg-gray-700 w-24"
						style={{}}
					/>
				</>
			) : (
				<>
					<Button
						label={'Logout'}
						onClick={handleLogout}
						isActive={true}
						className="w-24"
					/>
				</>
			)}
		</div>
	);
};

export default LoginRegister;
