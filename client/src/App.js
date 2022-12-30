import React, { useState } from 'react';
import Homepage from './components/pages/Homepage';
import { WordData } from './data/WordData';

function App() {
	document.body.style.backgroundColor = '#0a0908';

	return (
		<div>
			<Homepage WordData={WordData} />
		</div>
	);
}

export default App;
