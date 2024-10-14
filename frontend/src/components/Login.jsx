import { useState, useContext } from 'react';
import { DataContext } from '../context/Context';
import Button from './Button';
import { login } from '../api/usersApi'; // Assuming you have an API utility
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { userDispatch } = useContext(DataContext);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// handle input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Validate form input
	const validateForm = () => {
		const newErrors = {};
		if (!formData.username) {
			newErrors.username = 'Username is required';
		}
		if (!formData.password) {
			newErrors.password = 'Password is required';
		}
		return newErrors;
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setLoading(true);
		try {
			// Call the API to log the user in
			const user = await login(formData); // This will update the user state upon success
			userDispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
			// redirect to the homepage after login
			navigate('/');
		} catch (error) {
			console.error('Login failed: ', error);
			setErrors({ general: 'Login failed' });
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="login-form-container">
			<h2 className="text-2xl font-bold mb-4">Log in</h2>
			{errors.general && <p className="text-red-500">{errors.general}</p>}

			<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
				<div>
					<label htmlFor="username" className="block font-medium">
						Username:
					</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						className="border p-2 w-full"
					/>
					{errors.email && <p className="text-red-500">{errors.email}</p>}
				</div>

				<div>
					<label htmlFor="password" className="block font-medium">
						Password:
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="border p-2 w-full"
					/>
					{errors.password && <p className="text-red-500">{errors.password}</p>}
				</div>

				<div>
					<Button
						label="Log In"
						isActive={!loading}
						onClick={handleSubmit}
						loading={loading}
						disabled={loading}
					/>
				</div>
			</form>
		</div>
	);
};
export default Login;
