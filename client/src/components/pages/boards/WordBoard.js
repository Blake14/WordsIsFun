import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import WordTile from './WordTile';
import Image from 'react-bootstrap/Image';
import logo from '../../../assets/logo.png';

const WordBoard = (props) => {
	const UnlimSelections = [
		{
			character: '.',
			hexCode: '',
		},
		{
			character: '!',
			hexCode: '',
		},
		{
			character: '?',
			hexCode: '',
		},
		{
			character: '-',
			hexCode: '',
		},
		{
			character: ',',
			hexCode: '',
		},
	];
	const WordFilter = (WordData) => {
		while (boardData.length < boardLimit) {
			let rand = Math.floor(Math.random() * (WordData.length - 1 - 0 + 1) + 0);
			let randWord = WordData[rand].word;
			let maxPerCard = WordData[rand].maxPerCard;
			let cardType = WordData[rand].type;
			if (
				WordData.filter((word) => {
					return word.word === randWord;
				}).length < maxPerCard
			) {
				boardData.push({
					word: randWord.charAt(0).toUpperCase() + randWord.slice(1),
					active: true,
					type: cardType,
				});
			}
		}
	};
	const [boardData, setBoardData] = useState([]);
	const [boardLimit, setBoardLimit] = useState(150);
	WordFilter(props.WordData);
	// console.log(boardData);
	return (
		<div
			style={{
				padding: 10,
				height: 750,
			}}
		>
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
							setBoardData([]);
							WordFilter(props.WordData);
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
						boardData.filter((w, i) => {
							return w.active === true;
						}).length
					}`}
				</p>
				<p
					style={{
						margin: '5px 5px 5px 15px',
						fontSize: 18,
						color: 'white',
					}}
				>
					<strong>Current Tone: </strong>
					{`${
						props.tone.charAt(0).toUpperCase() +
						props.tone.slice(1).toLowerCase()
					}`}
				</p>
				<p
					style={{
						margin: '5px 5px 5px 15px',
						fontSize: 18,
						color: 'white',
					}}
				>
					<strong>Current Template: </strong>
					{`${
						props.template.charAt(0).toUpperCase() +
						props.template.slice(1).toLowerCase()
					}`}
				</p>
			</div>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					ItemAlign: 'center',
				}}
			>
				{[...Array(boardLimit + UnlimSelections.length)].map((x, index) => {
					if (index < boardLimit) {
						return (
							<WordTile
								key={index}
								word={boardData[index].word}
								type={boardData[index].type}
								active={boardData[index].active}
								index={index}
								hexCode={'#e3f2fd'}
								uses={'1'}
								selectedTile={props.selectedTile}
								tiles={props.tiles}
								setTiles={props.setTiles}
								setSelectedTile={props.setSelectedTile}
								boardData={boardData}
							/>
						);
					} else {
						return (
							<WordTile
								word={UnlimSelections[index - boardLimit].character}
								index={index}
								key={index}
								type={'SPECIAL'}
								active={true}
								hexCode={'#99e2b4'}
								uses={'Unlimited'}
								tiles={props.tiles}
								selectedTile={props.selectedTile}
								setTiles={props.setTiles}
								setSelectedTile={props.setSelectedTile}
								boardData={boardData}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default WordBoard;
