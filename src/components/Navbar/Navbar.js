import "./navbar.css";
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Search from "../Search/Search";


const Navbar = () => {
	const [user] = useAuthState(auth);

	const navigate = useNavigate();

	const onLogout = async () => {
		try {
			await signOut(auth);
			navigate("/");
		} catch (err) {
			console.log(err);
		}

	};

	return (
		<header id="site-header" className="site-header">
			<Link className="branding-link" to="/">
				movie-pair-50
			</Link>

			<Search />

			{
				user?.email && <span className="current-user">{user?.email}</span>
			}
			
			{user ? (
				<button className="branding-link-login" onClick={onLogout}>
					logout
				</button>
			) : (
				<Link className="branding-link-login" to="/login">
					login
				</Link>
			)}
		</header>
	);
};

export default Navbar;
