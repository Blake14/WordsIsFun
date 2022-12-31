import React, { useState } from 'react';
import WordTile from './WordTile';
import MenuBar from '../../MenuBar';
import FilterBar from '../../FilterBar';

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
	const [filterSelects, setFilterSelects] = useState('NONE');
	const WordFilter = (WordData) => {
		while (boardData.length < boardLimit) {
			let rand = Math.floor(Math.random() * (WordData.length - 1 - 0 + 1) + 0);
			let randWord = WordData[rand].word;
			let maxPerCard = WordData[rand].maxPerCard;
			let cardType = WordData[rand].type;
			if (
				WordData.filter((word) => {
					return word.word === randWord;
				}).length <= maxPerCard
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
			<MenuBar
				template={props.template}
				tone={props.tone}
				WordFilter={WordFilter}
				setBoardData={setBoardData}
				boardData={boardData}
				tones={props.tones}
				templates={props.templates}
			/>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					ItemAlign: 'center',
				}}
			>
				<FilterBar
					filterSelects={filterSelects}
					setFilterSelects={setFilterSelects}
				/>
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
								filterSelects={filterSelects}
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
								filterSelects={filterSelects}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default WordBoard;
