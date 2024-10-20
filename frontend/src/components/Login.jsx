import { useContext, useState } from 'react';
import { DataContext } from '../context/Context';
import Form from '../components/Form';
import { login } from '../api/usersApi'; // Assuming you have an API utility
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { userDispatch } = useContext(DataContext);
		const [errors, setErrors] = useState({});
		const navigate = useNavigate();


	const validateForm = (formData) => {
		const errors = {};
		if (!formData.username) {
			errors.username = 'Username is required';
		}
		if (!formData.password) {
			errors.password = 'Password is required';
		} else if (formData.password.length < 4) {
			errors.password = 'Password must be at least 4 characters long';
		}
		return errors;
	};

	// this sends login request via API, updates userState, redirect to homepage
	const handleLogin = async (formData) => {
		// Validate form inputs
		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors); // Update errors state if validation fails
			return; // Prevent form submission
		}
		await login(userDispatch, formData);
		navigate('/');
	};

	const inputs = [
		{
			name: 'username',
			placeholder: 'username',
			defaultValue: '',
			error: errors.username, // pass the error to display next to the field
		},
		{
			name: 'password',
			placeholder: 'password',
			defaultValue: '',
			error: errors.password, // Pass the error to display next to the field
		},
	];

	return (
		<div className="login-form-container">
			<h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
			<Form inputs={inputs} buttonText="Log In" onFormSubmit={handleLogin} />
			{/* Display error messages */}
			{Object.keys(errors).length > 0 && (
				<div className="text-gray-500 mt-4">
					{errors.username && <p>{errors.username}</p>}
					{errors.password && <p>{errors.password}</p>}
				</div>
			)}
		</div>
	);
};
export default Login;
