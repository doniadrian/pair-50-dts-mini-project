import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(user);
			navigate("/login");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<>
			<main id="site-main" className="site-main">
				<div className="form-box">
					{
						errorMessage && <span className="info-form error">{errorMessage}</span>
					}
					<h2>REGISTER</h2>
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
							REGISTER
						</button>
					</form>

					<Link className="underline black" to="/login">
						Already have an account? Sign in
					</Link>
				</div>
			</main>
		</>
	);
};

export default Register;
