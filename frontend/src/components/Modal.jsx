/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null; // don't render when it's not open

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
				<button
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
					onClick={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
