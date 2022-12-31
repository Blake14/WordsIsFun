const Email = (props) => {
	return (
		<div style={props.BoardOutline}>
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
				<div style={{ display: 'flex' }}>
					<p style={{ display: 'flex', color: 'white', margin: 5 }}>
						<strong>Subject: </strong>
						{props.tiles
							.filter((tile, index) => {
								return tile.special === 'SUBJECT';
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
					</p>
				</div>
			</div>
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

export default Email;
