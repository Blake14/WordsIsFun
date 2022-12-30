import { BsInfoCircle } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const WordTile = (props) => {
	const renderTooltip = (word, type, uses) => (
		<Tooltip>
			<p
				style={{
					margin: 5,
					fontSize: 18,
				}}
			>
				<strong>{word}</strong>
			</p>
			<p
				style={{
					margin: 5,
					fontSize: 12,
				}}
			>
				<strong>Type: </strong>
				{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
			</p>
			<p
				style={{
					margin: 5,
					fontSize: 12,
				}}
			>
				<strong>Uses Left: </strong>
				{uses}
			</p>
		</Tooltip>
	);
	return (
		<div
			key={props.index}
			style={{
				height: 40,
				minWidth: 100,
				boxShadow: '0px 2px 8px 0px black',
				borderRadius: 25,
				margin: 5,
				display: 'flex',
				justifyContent: 'center',
				ItemAlign: 'center',
				backgroundColor: props.active ? props.hexCode : '#93a8ac',
			}}
		>
			<OverlayTrigger
				placement='right'
				delay={{ show: 250, hide: 400 }}
				overlay={renderTooltip(props.word, props.type, props.uses)}
			>
				<p
					style={{
						padding: 5,
						cursor: 'pointer',
					}}
				>
					<BsInfoCircle />
				</p>
			</OverlayTrigger>
			<p
				style={{
					padding: 5,
					cursor: 'pointer',
				}}
				onClick={() => {
					if (props.selectedTile !== 99999) {
						let tempArray = [];
						tempArray = props.tiles;
						tempArray
							.filter((tile, index) => {
								return tile.id === props.selectedTile;
							})
							.map((tile, index) => {
								tile.word = props.word;
								props.setTiles(tempArray);
								props.setSelectedTile(99999);
								return <></>;
							});
						props.boardData
							.filter((a, i) => {
								return i === props.index;
							})
							.map((a, i) => {
								a.active = false;
								return <></>;
							});
					}
				}}
			>
				{props.word}
			</p>
		</div>
	);
};

export default WordTile;
