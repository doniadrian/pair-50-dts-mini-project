import { useState } from "react";
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
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

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;

				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential =
					GoogleAuthProvider.credentialFromError(error);

				setErrorMessage(errorMessage);
			});
	};

	return (
		<>
			<main id="site-main" className="site-main">
				<div className="form-box">
					<h2>LOGIN</h2>
					<form className="form-field" onSubmit={handleSubmit}>
						{errorMessage && (
							<span className="info-form error">
								{errorMessage}
							</span>
						)}
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
					<Link className="underline black" to="/register">
						Don't have an account? Sign Up
					</Link>
					<button
						className="btn-social-login google"
						type="button"
						onClick={signInWithGoogle}
					>
						<img src="/google.png" alt="" />
						sign in with google
					</button>
				</div>
			</main>
		</>
	);
};

export default Login;
