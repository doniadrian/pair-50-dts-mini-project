import React from "react";
import MovieCard from "../components/ListingMovies";
import Navbar from "../components/Navbar/Navbar";
import SliderMovies from "../components/SliderMovies/SliderMovies";

const Home = () => {
	return (
		<>
			<Navbar />

			<main id="site-main" className="site-main">
				<section className="is-section nowplaying-movies">
					<SliderMovies/>
				</section>
				<section className="is-section toprated-movies">
					<h2 className="title-section pd-screen">Top Rated</h2>
					<MovieCard type="top_rated"/>
				</section>
				<section className="is-section popular-movies">
					<h2 className="title-section pd-screen">Popular</h2>
					<MovieCard type="popular" />
				</section>
			</main>
		</>
	);
};

export default Home;
