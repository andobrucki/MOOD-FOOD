import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/Context';
import TimeOfDay from './TimeOfDay';
import MoodForm from './MoodPickerForm';
import LoginRegister from './LoginRegister';
import { MoodDisplay } from './MoodDisplay';
import MoodPrompt from './MoodPrompt';
import Modal from './Modal';

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { moodState } = useContext(DataContext);

	useEffect(() => {
		setIsModalOpen(true); // open the modal on render
	}, []); // runs only once

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<TimeOfDay />
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<h2 className="text-xl font-semibold mb-4"></h2>
				<p>Please log in for more features!</p>

				<button
					onClick={closeModal}
					className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600"
				>
					Close
				</button>
			</Modal>
			<MoodForm />
			<MoodDisplay />
			{moodState.mood && <MoodPrompt />}
			<LoginRegister />
		</div>
	);
};

export default Home;
