import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./movie-card.css";


const MovieCard = ({type = "top_rated"}) => {
	const [movies, setMovies] = useState([]);
	const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";
	const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

	useEffect(() => {
		const fetchMovies = async () => {
			const fetchedMovies = await axios.get(
				`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY}&language=en-US&page=1`
			);
			setMovies(fetchedMovies.data.results);
		};

		fetchMovies();

	}, []);

	return (
		<>
			<div className="movie-grid">
				{movies.map((item) => {
					return (
						<div className="movie-item" key={item.id}>
							<Link to={'/movie/' + item.id} className="movie-wrapper">
								<img src={`${BASE_IMAGE_URL}${item.poster_path}`} alt={item.title}/>
								<h3 className="entry-title">{item.title}</h3>
							</Link>						
						</div>
					);
				})}
			</div>
		</>
	);
};

export default MovieCard;
