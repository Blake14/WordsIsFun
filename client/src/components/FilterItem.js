import { MdOutlineRadioButtonChecked } from 'react-icons/md';

const FilterItem = (props) => {
	return (
		<div
			style={{
				display: 'flex',
			}}
			onClick={() => {
				if (props.filterSelects === props.code) {
					props.setFilterSelects('NONE');
				} else {
					props.setFilterSelects(props.code);
				}
			}}
		>
			<div
				style={{
					margin: '3px 10px 0px 10px',
					backgroundColor:
						props.filterSelects === props.code ? '#DF4698' : 'white',
					height: 20,
					width: 20,
					border: '2px solid white',
				}}
			>
				{props.filterSelects === props.code ? (
					<MdOutlineRadioButtonChecked
						style={{
							position: 'relative',
							top: -7,
							left: -2,
							fontSize: 20,
						}}
					/>
				) : (
					''
				)}
			</div>
			<p>{props.title}</p>
		</div>
	);
};

export default FilterItem;
