import { useContext } from 'react';
import { DataContext } from '../context/Context';
import Form from '../components/Form';
import { login } from '../api/usersApi'; // Assuming you have an API utility
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { userDispatch } = useContext(DataContext);
	const navigate = useNavigate();

	// this sends login request via API, updates userState, redirect to homepage
	const handleLogin = async (formData) => {
		await login(userDispatch, formData);
		navigate('/');
	};

	const inputs = [
		{
			name: 'username',
			placeholder: 'username',
			defaultValue: '',
		},
		{
			name: 'password',
			placeholder: 'password',
			defaultValue: '',
		},
	];

	return (
		<div className="login-form-container">
			<h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
			<Form inputs={inputs} buttonText="Log In" onFormSubmit={handleLogin} />
		</div>
	);
};
export default Login;
