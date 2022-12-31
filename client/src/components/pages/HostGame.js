import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const HostGame = (props) => {
	const [gameId, setGameId] = useState('XXXXX');

	const GenerateGameID = () => {
		var length = 5;
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		result = result.toUpperCase();
		return result;
	};
	if (gameId === 'XXXXX') {
		setGameId(GenerateGameID());
	}
	const PlayerStyle = {
		width: 150,
		fontSize: 18,
		paddingTop: 15,
		marginLeft: 20,
		marginRight: 45,
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
							margin: '10px 0px 50px 10px',
							fontSize: 24,
						}}
					>
						<div
							style={{
								height: 200,
							}}
						>
							{props.players.map((player, index) => {
								if (player.isHost !== false) {
									return (
										<div style={{ display: 'flex' }} key={index}>
											<Button
												style={{
													width: 150,
													margin: 5,
												}}
												variant='success'
												disabled
											>
												Ready Up
											</Button>
											<p style={PlayerStyle}>{`${
												player.name !== 'EMPTY' ? player.name : ''
											}`}</p>
											<p
												style={{
													color: 'red',
													width: 100,
													paddingTop: 8,
												}}
											>
												Leave
											</p>
										</div>
									);
								} else {
									return (
										<div style={{ display: 'flex' }} key={index}>
											<Button
												style={{
													width: 150,
													margin: 5,
												}}
												variant='secondary'
											>
												Invite
											</Button>
											<p style={PlayerStyle}>
												{player.name !== 'EMPTY' ? player.name : ''}
											</p>
											<p
												style={{
													color: 'red',
													width: 100,
													paddingTop: 8,
												}}
											>
												Kick
											</p>
										</div>
									);
								}
							})}
						</div>
					</div>
					<div
						style={{
							position: 'relative',
							top: -10,
							float: 'right',
							marginRight: 15,
							display: 'flex',
						}}
					>
						<p
							style={{
								margin: '2px 50px 0px 0px',
								fontSize: 24,
								width: 270,
							}}
						>
							<strong>
								<span
									style={{
										marginRight: 5,
										cursor: 'pointer',
									}}
									onClick={() => {
										setGameId(GenerateGameID());
									}}
								>
									{props.FiRefreshCcw()}{' '}
								</span>
								Game Code:{' '}
							</strong>
							{gameId || 'XXXXX'}
						</p>
						<Button
							variant='success'
							onClick={() => {
								let tempRand = Math.floor(
									Math.random() * (props.templates.length - 1 - 0 + 1) + 0
								);
								let toneRand = Math.floor(
									Math.random() * (props.tones.length - 1 - 0 + 1) + 0
								);
								props.setTemplate(props.templates[tempRand].code);
								props.setTone(props.tones[toneRand].code);
							}}
						>
							Launch Game
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HostGame;
