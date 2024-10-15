import React, { useState } from 'react';
import Button from './Button';

const Form = ({
	inputs,
	buttonText,
	heading,
	onFormSubmit,
	loading,
	disabled,
}) => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(formData);
	};

	return (
		<form
			className="form-container max-w-lg mx-auto p-6 shadow-md rounded-xl"
			onSubmit={handleSubmit}
		>
			<h1 className="text-2xl text-center">{heading}</h1>
			{inputs.map((input) => (
				<div key={input.name} className="info">
					<input
						className="w-full px-4 py-2 mt-1 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
						name={input.name}
						placeholder={input.placeholder}
						onChange={handleChange}
					/>
				</div>
			))}
			<div className="submit mt-6">
				{/* <input className="button-bg" type="submit" value={buttonText} />
				 */}{' '}
				<Button
					isActive={true}
					label={loading ? 'Signing Up...' : buttonText} //
					onClick={handleSubmit}
					loading={loading} // Disable button if loading
					disabled={disabled || loading} // Disable based on props or loading state
				/>
			</div>
		</form>
	);
};

export default Form;
