import React, { useState } from 'react';
import Button from './Button';

const Form = ({ inputs, buttonText, heading, onFormSubmit, loading, disabled }) => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(formData);
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<h1>{heading}</h1>
			{inputs.map((input) => (
				<div key={input.name} className="info">
					<input
						name={input.name}
						placeholder={input.placeholder}
						onChange={handleChange}
					/>
				</div>
			))}
			<div className="submit">
				{/* <input className="button-bg" type="submit" value={buttonText} /> 
                */}	<Button
					isActive={true} // Or you can pass this as a prop based on your logic
					label={loading ? 'Signing Up...' : buttonText} // Use loading state for button text
					onClick={handleSubmit} // Ensure the button triggers form submission
					loading={loading} // Disable button if loading
					disabled={disabled || loading} // Disable based on props or loading state
				/>
			</div>
		</form>
	);
};

export default Form;
