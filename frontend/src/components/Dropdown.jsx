import Select from 'react-select';

function Dropdown() {
	const options = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'pineapple', label: 'Pineapple' },
		{ value: 'watermelon', label: 'Watermelon' },
	];

	return (
		<div>
			<Select options={options} />
		</div>
	);
}

export default Dropdown;
