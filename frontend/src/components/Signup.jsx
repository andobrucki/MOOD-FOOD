import { useContext } from 'react';
import { DataContext } from '../context/Context';
import Form from '../components/Form';
import { signup } from '../api/usersApi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const { userDispatch } = useContext(DataContext);
	const navigate = useNavigate();

	const handleRegister = async (formData) => {
		await signup(userDispatch, formData);
		navigate('/');
	};

	const inputs = [
		{
			name: 'username',
			placeholder: 'username',
			defaultValue: '',
		},
		{
			name: 'email',
			placeholder: 'email',
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
			<h2 className="text-2xl font-bold mb-4">Sign up</h2>

			<Form
				inputs={inputs}
				buttonText="Sign up"
				onFormSubmit={handleRegister}
			/>
		</div>
	);
};

export default Signup;
