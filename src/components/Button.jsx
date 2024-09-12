//! Button component

const Button = ({ isActive, label, onClick }) => {
	return (
		<button
			className={`px-4 py-2 rounded-full font-medium text-sm tracking-wide 
				 transition-all duration-300 transform-gpu shadow-lg
                ${
									isActive
										? 'bg-gray-900 text-white hover:bg-gray-700 hover:shadow-lg'
										: 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg'
								}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
