const JoinGame = (props) => {
	return (
		<div
			style={{
				position: 'relative',
				top: -500,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: 800,
						height: 300,
						backgroundColor: 'white',
						border: '2px solid black',
					}}
				>
					{' '}
					<div
						style={{
							position: 'relative',
							float: 'right',
							marginRight: 12,
							fontSize: 24,
							color: '#d90429',
							cursor: 'pointer',
						}}
						onClick={() => {
							props.setMenuType('NONE');
						}}
					>
						{props.FaRegWindowClose()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinGame;
