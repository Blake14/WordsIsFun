import React, { useState } from 'react';
import FinishBoard from './boards/FinishBoard';
import WordBoard from './boards/WordBoard';
import Button from 'react-bootstrap/Button';
import '../../styles/hovers.css';
import bigLogo from '../../assets/big-logo.png';
import Image from 'react-bootstrap/Image';

const Homepage = (props) => {
	const [selectedTile, setSelectedTile] = useState(99999);
	const [tiles, setTiles] = useState([]);
	const [template, setTemplate] = useState(null);
	const [tone, setTone] = useState(null);
	const [debug, flagDebug] = useState(0);
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
		console.log(template);
		console.log(tone);
	}
	if (template !== null && tone !== null) {
		return (
			<div>
				<WordBoard
					WordData={props.WordData}
					selectedTile={selectedTile}
					tiles={tiles}
					setTiles={setTiles}
					setSelectedTile={setSelectedTile}
				/>
				<FinishBoard
					type={template}
					selectedTile={selectedTile}
					setSelectedTile={setSelectedTile}
					tiles={tiles}
				/>
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
						<div style={MenuButtonStyle} className='hover-box-shadow-1'>
							<p>Host Game</p>
						</div>
						<div style={MenuButtonStyle} className='hover-box-shadow-1'>
							<p>Join Game</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Homepage;
