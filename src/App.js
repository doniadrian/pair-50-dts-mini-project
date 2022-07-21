import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetail from "./pages/MovieDetail";
import Searched from "./pages/Searched";
import ProtectedRoute from "./config/ProtectedRoute";
import NoMatch from "./pages/NoMatch";

function App() {
	return (
		<div className="App">
			<div id="page" className="site">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="login"
							element={
								<ProtectedRoute loginOnly={false}>
									<Login />
								</ProtectedRoute>
							}
						/>
						<Route
							path="register"
							element={
								<ProtectedRoute loginOnly={false}>
									<Register />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/movie/:name"
							element={
								<ProtectedRoute>
									<MovieDetail />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/searched/:search"
							element={<Searched />}
						/>
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</div>
		</div>
	);
}

export default App;
