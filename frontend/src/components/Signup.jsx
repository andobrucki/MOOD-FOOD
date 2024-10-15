import { useState, useContext } from 'react';
import { DataContext } from '../context/Context';
import Button from './Button';
import { signup } from '../api/usersApi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const { userDispatch } = useContext(DataContext);
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.username) {
			newErrors.username = 'Username is required';
		}
		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 4) {
			newErrors.password = 'Password must be at least 6 characters';
		}
		return newErrors;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setLoading(true);
		try {
			await signup(userDispatch, formData);
			navigate('/');
		} catch (error) {
			console.error('Signup failed: ', error);
			setErrors({ general: 'Signup failed' });
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="signup-form-container">
			<h2 className="text-2xl font-bold mb-4">Sign up</h2>
			{errors.general && <p className="text-black-500">{errors.general}</p>}
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
					{errors.username && <p className="text-red-500">{errors.username}</p>}
				</div>

				<div>
					<label htmlFor="email" className="block font-medium">
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
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
						label="Sign Up"
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

export default Signup;
