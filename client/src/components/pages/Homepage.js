import React, { useState } from 'react';
import FinishBoard from './boards/FinishBoard';
import WordBoard from './boards/WordBoard';
import Button from 'react-bootstrap/Button';
import '../../styles/hovers.css';
import bigLogo from '../../assets/big-logo.png';
import Image from 'react-bootstrap/Image';
import MenuPopUp from './MenuPopUp';

const Homepage = (props) => {
	const [selectedTile, setSelectedTile] = useState(99999);
	const [tiles, setTiles] = useState([]);
	const [template, setTemplate] = useState(null);
	const [tone, setTone] = useState(null);
	const [debug, flagDebug] = useState(0);
	const [menuType, setMenuType] = useState('NONE');
	const [tones, setTones] = useState([
		{
			id: 1,
			code: 'HAPPY',
			title: 'Happy',
			def: '',
			active: true,
		},
		{
			id: 2,
			code: 'SAD',
			title: 'Sad',
			def: '',
			active: true,
		},
		{
			id: 3,
			code: 'SCARED',
			title: 'Scared',
			def: '',
			active: true,
		},
		{
			id: 4,
			code: 'EXCITED',
			title: 'Excited',
			def: '',
			active: true,
		},
		{
			id: 5,
			code: 'ANGER',
			title: 'Angry',
			def: '',
			active: true,
		},
		{
			id: 6,
			code: 'NERVE',
			title: 'Nervous',
			def: '',
			active: true,
		},
		{
			id: 7,
			code: 'OBNOX',
			title: 'Obnoxious',
			def: '',
			active: true,
		},
		{
			id: 8,
			code: 'KIND',
			title: 'Kind',
			def: '',
			active: true,
		},
	]);
	const [templates, setTemplates] = useState([
		{
			id: 1,
			code: 'EMAIL',
			title: 'Work Email',
			active: true,
		},
		{
			id: 2,
			code: 'LETTER',
			title: 'Letter',
			active: true,
		},
		{
			id: 3,
			code: 'LNOTE',
			title: 'Love Note',
			active: true,
		},
		{
			id: 4,
			code: 'POEM',
			title: 'Poem',
			active: true,
		},
		{
			id: 5,
			code: 'SLOGAN',
			title: 'Company Slogan',
			active: true,
		},
		{
			id: 6,
			code: 'SALES',
			title: 'Sales Pitch',
			active: true,
		},
		{
			id: 7,
			code: 'TEXT',
			title: 'Text Message',
			active: true,
		},
	]);
	const MenuButtonStyle = {
		margin: 20,
		color: 'white',
		fontSize: 24,
		border: '2px solid white',
		borderRadius: 25,
		padding: '20px 20px 10px 20px',
		cursor: 'pointer',
	};
	if (debug === 1 && template === null && tone === null) {
		setTemplate('EMAIL');
		setTone('HAPPY');
	}
	if (template !== null && tone !== null) {
		return (
			<div>
				<div
					style={{
						height: 800,
					}}
				>
					<WordBoard
						WordData={props.WordData}
						selectedTile={selectedTile}
						tiles={tiles}
						setTiles={setTiles}
						setSelectedTile={setSelectedTile}
						tone={tone}
						template={template}
						tones={tones}
						templates={templates}
					/>
				</div>
				<div
					style={{
						marginTop: 15,
					}}
				>
					<FinishBoard
						type={template}
						selectedTile={selectedTile}
						setSelectedTile={setSelectedTile}
						tiles={tiles}
						tone={tone}
						template={template}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<Button
					variant='danger'
					style={{
						margin: 10,
					}}
					size='sm'
					onClick={() => {
						flagDebug(1);
					}}
				>
					Dubug Mode
				</Button>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 50,
					}}
				>
					<Image
						src={bigLogo}
						style={{
							width: 1300,
						}}
					></Image>
				</div>
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 200,
					}}
				>
					<div
						style={{
							display: 'flex',
						}}
					>
						<div
							style={MenuButtonStyle}
							className='hover-box-shadow-1'
							onClick={() => {
								setMenuType('HOST');
							}}
						>
							<p>Host Game</p>
						</div>
						<div
							style={MenuButtonStyle}
							className='hover-box-shadow-1'
							onClick={() => {
								setMenuType('JOIN');
							}}
						>
							<p>Join Game</p>
						</div>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MenuPopUp
						gameData={props.gameData}
						menuType={menuType}
						setMenuType={setMenuType}
						players={props.players}
						templates={templates}
						tones={tones}
						setTemplates={setTemplates}
						setTones={setTones}
						template={template}
						tone={tone}
						setTemplate={setTemplate}
						setTone={setTone}
					/>
				</div>
			</div>
		);
	}
};

export default Homepage;
