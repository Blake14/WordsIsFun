const Default = (props) => {
	return (
		<div style={props.BoardOutline}>
			<div style={props.TextBody}>
				{props.tiles
					.filter((tile, index) => {
						return tile.special === 'NONE';
					})
					.map((tile, index) => {
						return (
							<div
								key={index}
								style={props.Tile}
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
};

export default Default;
