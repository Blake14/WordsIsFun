import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';

const MenuBar = (props) => {
	return (
		<div
			style={{
				display: 'flex',
				margin: 20,
			}}
		>
			<Image
				src={logo}
				style={{
					width: 200,
				}}
			></Image>
			<div>
				<Button
					variant='success'
					size='sm'
					onClick={() => {
						props.setBoardData([]);
						props.WordFilter(props.WordData);
					}}
				>
					Refresh Deck
				</Button>
			</div>
			<p
				style={{
					margin: '5px 5px 5px 15px',
					fontSize: 18,
					color: 'white',
				}}
			>
				<strong>Remaining Words: </strong>
				{`${
					props.boardData.filter((w, i) => {
						return w.active === true;
					}).length
				}`}
			</p>
			{props.tones
				.filter((tone, index) => {
					return tone.code === props.tone;
				})
				.map((tone, index) => {
					return (
						<p
							key={index}
							style={{
								margin: '5px 5px 5px 15px',
								fontSize: 18,
								color: 'white',
							}}
						>
							<strong>Current Tone: </strong>
							{`${tone.title}`}
						</p>
					);
				})}
			{props.templates
				.filter((template, index) => {
					return template.code === props.template;
				})
				.map((template, index) => {
					return (
						<p
							key={index}
							style={{
								margin: '5px 5px 5px 15px',
								fontSize: 18,
								color: 'white',
							}}
						>
							<strong>Current Template: </strong>
							{`${template.title}`}
						</p>
					);
				})}
		</div>
	);
};

export default MenuBar;
