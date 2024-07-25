//! Button component

const Button = ({ isActive, label, onClick }) => {
	return (
		<button
			className={`px-4 py-2 rounded-3xl transition-colors duration-300 
                ${
									isActive
										? 'bg-gray-900 text-white hover:bg-gray-700 hover:shadow-md'
										: 'bg-gray-300 text-gray-900 hover:bg-gray-100 hover:shadow-md'
								}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
