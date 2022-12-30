import React, { useState } from 'react';

const FinishBoard = (props) => {
	const SelectTile = (id) => {};
	const CreateTemplate = (charLimit, type) => {
		let requiredChars = 5;
		for (let i = 0; i < charLimit; i++) {
			if (type === 'EMAIL') {
				requiredChars = 15;
				if (i <= requiredChars) {
					if (i === 0) {
						props.tiles.push({
							id: i,
							word: null,
							reqType: 'ANY',
							required: true,
							special: 'TO',
						});
					}
				} else if (i > 0 && i <= 5) {
					props.tiles.push({
						id: i,
						word: null,
						reqType: 'ANY',
						required: true,
						special: 'SUBJECT',
					});
				} else {
					props.tiles.push({
						id: i,
						word: null,
						reqType: 'ANY',
						required: true,
						special: 'NONE',
					});
				}
			} else {
				props.tiles.push({
					id: i,
					word: null,
					reqType: 'ANY',
					required: false,
					special: 'NONE',
				});
			}
		}
	};

	// Styling
	let charLimit = 0;
	const BoardOutline = {
		border: '2px solid white',
		margin: 20,
		padding: 20,
		minHeight: 500,
	};
	const TextBody = {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: 50,
	};
	const MissingWord = {
		margin: 5,
		color: 'white',
	};
	const Tile = {
		margin: 5,
		color: 'white',
		cursor: 'pointer',
	};

	if (props.type === 'EMAIL') {
		if (props.tiles.length === 0) {
			CreateTemplate(25, props.type);
		}
		return (
			<div style={BoardOutline}>
				<div
					style={{
						color: 'white',
					}}
				>
					<div style={{ display: 'flex' }}>
						<p>
							<strong>To:</strong>
							{` Mrs.`}
						</p>
						<p
							style={{
								marginLeft: 5,
								color: 'white',
								cursor: 'pointer',
							}}
							onClick={() => {
								props.setSelectedTile(props.tiles[0].id);
								console.log(props.selectedTile);
							}}
						>
							{props.tiles[0].word || '___________'}
						</p>
					</div>
					<p>
						<strong>From: </strong> Player 1
					</p>
					<p style={{ display: 'flex', color: 'white', margin: 5 }}>
						<strong>Subject: </strong>
						{props.tiles
							.filter((tile, index) => {
								return tile.special === 'SUBJECT';
							})
							.map((tile, index) => {
								if (props.selectedTile === tile.id) {
									return (
										<div
											key={index}
											style={{
												margin: 5,
												color: 'white',
												cursor: 'pointer',
												fontVariant: 'bold',
											}}
											onClick={() => {
												props.setSelectedTile(tile.id);
												console.log(props.selectedTile);
											}}
										>
											{tile.word || '__'}
										</div>
									);
								} else {
									return (
										<div
											key={index}
											style={Tile}
											onClick={() => {
												props.setSelectedTile(tile.id);
												console.log(props.selectedTile);
											}}
										>
											{tile.word || '___________'}
										</div>
									);
								}
							})}
					</p>
				</div>
				<div style={TextBody}>
					{props.tiles
						.filter((tile, index) => {
							return tile.special === 'NONE';
						})
						.map((tile, index) => {
							return (
								<div
									key={index}
									style={Tile}
									onClick={() => {
										props.setSelectedTile(tile.id);
									}}
								>
									{tile.word || '___________'}
								</div>
							);
						})}
				</div>
			</div>
		);
	} else if (props.type === 'LETTER') {
		charLimit = 200;
		return <div style={BoardOutline}></div>;
	} else {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}
};

export default FinishBoard;
