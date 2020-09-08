import React from 'react';
import Header from './Header';
import Nav from './Nav';
import './App.css';
import Results from './Results';
import VideoCard from './VideoCard';

function App() {
	return (
		<div className="app">
			<Header />
			<Nav />
			<Results />
		</div>
	);
}

export default App;
