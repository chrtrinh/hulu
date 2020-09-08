import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
	return (
		<div className="videoCard">
			<img
				src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				alt=""
			/>
			<p>This is a film about coding...</p>
			<h2>Movie Title</h2>
			<p>Number of likes...</p>
		</div>
	);
}

export default VideoCard;
