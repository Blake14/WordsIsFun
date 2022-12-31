import React, { useState } from 'react';
import Default from '../../templates/Default';
import Email from '../../templates/Email';
import Letter from '../../templates/Letter';
import Note from '../../templates/Note';
import Sales from '../../templates/Sales';
import Text from '../../templates/Text';

const FinishBoard = (props) => {
	const SelectTile = (id) => {};

	const CreateTemplate = (charLimit, type) => {
		let requiredChars = 5;
		if (type === 'EMAIL') {
			for (let i = 0; i < charLimit; i++) {
				requiredChars = 15;
				if (i <= requiredChars) {
					props.tiles.push({
						id: i,
						word: null,
						reqType: 'ANY',
						required: true,
						special: 'TO',
					});
					if (i === 0) {
					} else if (i >= 0 && i <= 5) {
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
				}
			}
		} else {
			for (let i = 0; i < charLimit; i++) {
				requiredChars = 15;
				if (i <= requiredChars) {
					props.tiles.push({
						id: i,
						word: null,
						reqType: 'ANY',
						required: true,
						special: 'NONE',
					});
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
	if (props.tiles.length === 0) {
		CreateTemplate(30, props.type);
	}
	if (props.type === 'EMAIL') {
		return (
			<Email
				BoardOutline={BoardOutline}
				Tile={Tile}
				TextBody={TextBody}
				tiles={props.tiles}
				setSelectedTile={props.setSelectedTile}
			/>
		);
	} else if (props.type === 'LETTER') {
		return (
			<Letter
				BoardOutline={BoardOutline}
				Tile={Tile}
				TextBody={TextBody}
				tiles={props.tiles}
				setSelectedTile={props.setSelectedTile}
			/>
		);
	} else if (props.type === 'LNOTE') {
		return (
			<Note
				BoardOutline={BoardOutline}
				Tile={Tile}
				TextBody={TextBody}
				tiles={props.tiles}
				setSelectedTile={props.setSelectedTile}
			/>
		);
	} else if (props.type === 'SALES') {
		return (
			<Sales
				BoardOutline={BoardOutline}
				Tile={Tile}
				TextBody={TextBody}
				tiles={props.tiles}
				setSelectedTile={props.setSelectedTile}
			/>
		);
	} else if (props.type === 'TEXT') {
		return (
			<Text
				BoardOutline={BoardOutline}
				Tile={Tile}
				TextBody={TextBody}
				tiles={props.tiles}
				setSelectedTile={props.setSelectedTile}
			/>
		);
	} else {
		return (
			<Default
				BoardOutline={BoardOutline}
				Tile={Tile}
				TextBody={TextBody}
				tiles={props.tiles}
				setSelectedTile={props.setSelectedTile}
			/>
		);
	}
};

export default FinishBoard;
