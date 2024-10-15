import { useContext } from 'react';
import { DataContext } from '../context/Context';
import Form from '../components/Form';
import Button from './Button';
import { signup } from '../api/usersApi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const { userDispatch } = useContext(DataContext);
	const navigate = useNavigate();

	const handleRegister = async (formData) => {
		await signup(userDispatch, formData);
		navigate('/');
	};

	const handleLoginDirect = () => {
		navigate('/login');
	};

	const inputs = [
		{
			name: 'username',
			placeholder: 'username',
			defaultValue: '',
		},
		{
			name: 'email',
			placeholder: 'your@email.com',
			defaultValue: '',
		},
		{
			name: 'password',
			placeholder: 'password',
			defaultValue: '',
		},
	];

	return (
		<div className="signup-form-container">
			<h2 className="text-2xl font-bold mb-4">Welcome!</h2>

			<Button label={'Login'} onClick={handleLoginDirect} />
			<p className="pt-6">or sign up with us</p>

			<Form
				inputs={inputs}
				buttonText="Sign up"
				onFormSubmit={handleRegister}
			/>
		</div>
	);
};

export default Signup;
