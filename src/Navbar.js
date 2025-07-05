import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about-us">About Us</Link> |{" "}
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  );
}

export default Navbar;
