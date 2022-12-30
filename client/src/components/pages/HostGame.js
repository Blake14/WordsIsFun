import Button from 'react-bootstrap/Button';

const HostGame = (props) => {
	const PlayerStyle = {
		margin: '10px 30px 0px 10px',
	};
	return (
		<div
			style={{
				position: 'relative',
				top: -500,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: 800,
						height: 300,
						backgroundColor: 'white',
						border: '2px solid black',
					}}
				>
					<div
						style={{
							position: 'relative',
							float: 'right',
							marginRight: 12,
							fontSize: 24,
							color: '#d90429',
							cursor: 'pointer',
						}}
						onClick={() => {
							props.setMenuType('NONE');
						}}
					>
						{props.FaRegWindowClose()}
					</div>
					<div
						style={{
							margin: '30px 0px 50px 10px',
							fontSize: 24,
						}}
					>
						<div style={{ display: 'flex' }}>
							<p style={PlayerStyle}>Player 1</p>
							<Button style={PlayerStyle} variant='success' disabled>
								Ready Up
							</Button>
						</div>
						<div style={{ display: 'flex' }}>
							<p style={PlayerStyle}>Player 2</p>
							<Button style={PlayerStyle} variant='info' disabled>
								Invite
							</Button>
						</div>
						<div style={{ display: 'flex' }}>
							<p style={PlayerStyle}>Player 3</p>
							<Button style={PlayerStyle} variant='info' disabled>
								Invite
							</Button>
						</div>
						<div style={{ display: 'flex' }}>
							<p style={PlayerStyle}>Player 4</p>
							<Button style={PlayerStyle} variant='info' disabled>
								Invite
							</Button>
						</div>
					</div>
					<div
						style={{
							position: 'relative',
							top: -25,
							float: 'right',
							marginRight: 15,
							display: 'flex',
						}}
					>
						<p
							style={{
								margin: '2px 50px 0px 0px',
								fontSize: 24,
							}}
						>
							<strong>Game Code: </strong>
							{`${'JSD8FJ'}`}
						</p>
						<Button variant='success'>Launch Game</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HostGame;
