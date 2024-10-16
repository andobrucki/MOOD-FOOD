//! Button component

const Button = ({ isActive, label, onClick, loading, disabled }) => {
	return (
		<button
			className={`px-5 py-3 rounded-full font-medium text-sm tracking-wide 
				 transition-all duration-100 shadow-lg
                ${
									isActive
										? 'bg-gray-900 text-white hover:bg-gray-700 hover:shadow-lg'
										: 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg'
								} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
			style={{
				boxShadow: isActive
					? `0 4px 8px rgba(0, 0, 0, 0.1)`
					: `0 4px 8px rgba(56, 14, 79, 0.1)`,
				transition: 'box-shadow 0.3s ease',
			}}
			onMouseEnter={(e) => {
				e.target.style.boxShadow = `0 4px 8px rgba(0, 0, 0, 0.3)`;
			}}
			onMouseLeave={(e) => {
				e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
			}}
			onClick={onClick}
			disabled={disabled} // Disable if loading
		>
			{loading ? 'Signing Up...' : label}
		</button>
	);
};

export default Button;
