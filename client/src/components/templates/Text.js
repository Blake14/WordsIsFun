const Text = (props) => {
	return (
		<div style={props.BoardOutline}>
			<div style={{ display: 'flex' }}>
				{props.tiles.map((tile, index) => {
					if (tile.special === 'NONE' && index <= 6) {
						return (
							<div
								key={index}
								style={{
									position: 'relative',
									left: 0,
									margin: 5,
									color: 'white',
									cursor: 'pointer',
								}}
								onClick={() => {
									props.setSelectedTile(tile.id);
								}}
							>
								{tile.word || '___________'}
							</div>
						);
					} else if (tile.special === 'NONE' && index <= 12) {
						return (
							<div
								key={index}
								style={{
									position: 'relative',
									right: 0,
									margin: 5,
									color: 'white',
									cursor: 'pointer',
								}}
								onClick={() => {
									props.setSelectedTile(tile.id);
								}}
							>
								{tile.word || '___________'}
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Text;
