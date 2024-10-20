import Select from 'react-select';

function Dropdown() {
	const options = [
		{ value: 'happy', label: 'happy' },
		{ value: 'relaxed', label: 'relaxed' },
		{ value: 'fearful', label: 'fearful' },
		{ value: 'astonished', label: 'astonished' },
		{ value: 'sad', label: 'sad' },
		{ value: 'frustrated', label: 'frustrated' },
		{ value: 'angry', label: 'angry' },
		{ value: 'excited', label: 'excited' },
	];

	return (
		<div>
			<Select options={options} />
		</div>
	);
}

export default Dropdown;
