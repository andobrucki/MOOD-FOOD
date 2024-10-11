//! Button component
import { DataContext } from '../context/Context';
import { useContext } from 'react';

const Button = ({ isActive, label, onClick }) => {
	const { moodState } = useContext(DataContext);
	const moodColor = moodState.moods[moodState.mood];

	return (
		<button
			className={`px-5 py-3 rounded-full font-medium text-sm tracking-wide 
				 transition-all duration-100 hover:shadow-[moodColor] shadow-lg
                ${
									isActive
										? 'bg-gray-900 text-white hover:bg-gray-700 hover:shadow-lg'
										: 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg'
								}`}
			style={{
				boxShadow: isActive
					? `0 4px 8px rgba(0, 0, 0, 0.1)`
					: `0 4px 8px ${moodColor}`, // Apply dynamic shadow color
				transition: 'box-shadow 0.3s ease',
			}}
			onMouseEnter={(e) => {
				e.target.style.boxShadow = `0 4px 8px ${moodColor}`;
			}}
			onMouseLeave={(e) => {
				e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
			}}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

{
	/* <button className="rounded-xl bg-gradient-to-br from-[#FF9966] to-[#FF5E62] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FF9966]/50">
  Button 10
</button> */
}

export default Button;
