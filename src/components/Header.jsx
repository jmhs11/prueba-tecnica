import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="bg-red-500 h-20 flex items-center justify-center">
			<Link to="/" className="text-white text-3xl">
				Store
			</Link>
		</header>
	);
}

export default Header;
