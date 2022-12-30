import React, { useState } from 'react';
import WordBoard from './boards/WordBoard';

const Homepage = (props) => {
	const [selectedTile, setSelectedTile] = useState(99999);
	const [tiles, setTiles] = useState([]);
	return (
		<div>
			<WordBoard
				WordData={props.WordData}
				selectedTile={selectedTile}
				tiles={tiles}
				setTiles={setTiles}
				setSelectedTile={setSelectedTile}
			/>
		</div>
	);
};

export default Homepage;
