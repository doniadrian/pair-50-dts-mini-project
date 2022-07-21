import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';
import "./slider-movies.css";

const SliderMovies = () => {
	const [slideMovies, setSlideMovies] = useState([]);
	const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";
	const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

	useEffect(() => {
		const fetchSlideMovies = async () => {
			const fetchedMovies = await axios.get(
				`https://api.themoviedb.org/3/movie/now_playing?api_key=${MY_API_KEY}&language=en-US&page=1`
			);
			setSlideMovies(fetchedMovies.data.results);
		};

		fetchSlideMovies();
	}, []);

	return (
		<>
			<Splide className="movie-slide">
				{slideMovies.map((item) => {
					return (
						<SplideSlide className="movie-slide-item" key={item.id}>
							<Link
								to={"/movie/" + item.id}
								className="movie-slide-wrapper"
							>
								<img
									src={`${BASE_IMAGE_URL}${item.poster_path}`}
									alt={item.title}
								/>
								<h3 className="entry-title">{item.title}</h3>
							</Link>
						</SplideSlide>
					);
				})}
			</Splide>
		</>
	);
};

export default SliderMovies;
