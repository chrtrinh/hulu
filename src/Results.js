import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// run this code EVERY time the Results compnent loads/ mounts
		const fetchData = async () => {
			const { data } = await axios.get(selectedOption);
			setMovies(data.results);
			return data;
		};
		fetchData();
	}, [selectedOption]);

	return (
		<div className="results">
			<FlipMove>
				{movies.map((movie) => (
					<VideoCard key={movie.id} movie={movie} />
				))}
			</FlipMove>
		</div>
	);
}

export default Results;
