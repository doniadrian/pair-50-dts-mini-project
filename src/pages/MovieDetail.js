import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MovieDetail = () => {
	const [details, setDetails] = useState({});
    const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";
    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

	let params = useParams();

	const fetchDetails = async () => {
		const data = await fetch(
            `https://api.themoviedb.org/3/movie/${params.name}?api_key=${MY_API_KEY}&language=en-US`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.name]);

	return (
		<>
			<Navbar />
			<main id="site-main" className="site-main">
				<div id="site-banner" className="site-banner">
					<img
						src={`${BASE_IMAGE_URL}${details.poster_path}`}
						alt={details.title}
						className="thumbnail-banner"
					/>
					<div className="content-banner">
						<h1>{details.title}</h1>
						<p>{details.overview}</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default MovieDetail