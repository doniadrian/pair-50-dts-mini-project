import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<>
			<main id="site-main" className="site-main">
				<div className="form-box">
					<h3>LOGIN</h3>
					<form className="form-field" onSubmit={handleSubmit}>
						<input
							name="email"
							type="email"
							placeholder="email-address"
						/>
						<input
							name="password"
							type="password"
							placeholder="password"
						/>
						<button type="submit" className="btn-submit">
							LOGIN
						</button>
					</form>
					<span className="info-form error">{errorMessage}</span>
					<Link className="underline black" to="/register">Don't have an account? Sign Up</Link>
				</div>
			</main>
		</>
	);
};

export default Login;