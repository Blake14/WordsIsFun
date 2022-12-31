import React, { useState } from 'react';
import Homepage from './components/pages/Homepage';
import { WordData } from './data/WordData';

function App() {
	document.body.style.backgroundColor = '#0a0908';
	const [userId, setUserId] = useState(10);
	const [players, setPlayers] = useState([
		{
			id: 0,
			name: 'Ronald McDonald',
			isHost: true,
		},
		{
			id: 1,
			name: 'EMPTY',
			isHost: false,
		},
		{
			id: 2,
			name: 'EMPTY',
			isHost: false,
		},
		{
			id: 3,
			name: 'EMPTY',
			isHost: false,
		},
	]);
	const [gameData, setGameData] = useState([
		{
			gameId: 0,
			player1Id: 0,
			player2Id: 0,
			player3Id: 0,
			player4Id: 0,
			player1Score: 0,
			player2Score: 0,
			player3Score: 0,
			player4Score: 0,
			winnerId: 0,
			gameComplete: false,
			round: 0,
		},
	]);
	return (
		<div>
			<Homepage
				WordData={WordData}
				gameData={gameData}
				setGameData={setGameData}
				players={players}
				setPlayers={setPlayers}
			/>
		</div>
	);
}

export default App;
