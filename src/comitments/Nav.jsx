import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-center gap-x-5">
            <Link to="/">Home</Link>
            <Link to="/gallery" className="ml-5">
                Gallery
            </Link>
        </nav>
    );
};

export default Nav;