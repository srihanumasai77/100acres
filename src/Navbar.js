import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Contact Header */}
      <div className="container">
        <a className="px-4" href="tel:+91 9959956789">
          <div className="d-flex justify-content-end py-2">
            <p className="text-dark">Contact No -</p>
            <p>+91 9959956789</p>
          </div>
        </a>
      </div>

      {/* Main Header */}
      <header>
        <div className="container">
          <div className="header-block">
            <div className="header-lt">
              <Link to="/">
                <img src="images/logo.png" alt="img" width="164" height="72" />
              </Link>
            </div>
            <div className="header-rt">
              <nav>
                <ul className="clear">
                  <li className="animated fadeInUp wow">
                    <Link to="/" className="active">HOME</Link>
                  </li>
                  <li className="animated fadeInUp wow">
                    <Link to="/about-us" className="">ABOUT US</Link>
                  </li>
                  <li className="animated fadeInUp wow">
                    <a href="#" className="">HYDERABAD</a>
                  </li>
                  <li className="animated fadeInUp wow">
                    <a href="#" className="">BANGALORE</a>
                  </li>
                  <li className="animated fadeInUp wow">
                    <a href="#" className="">CHENNAI</a>
                  </li>
                  <li className="animated fadeInUp wow">
                    <a href="#" className="">CAREERS</a>
                  </li>
                  <li className="animated fadeInUp wow">
                    <a href="#" className="">MEDIA & GALLERY</a>
                  </li>
                  <li className="animated fadeInUp wow">
                    <a href="#" className="">BLOG</a>
                  </li>
                  <li className="animated fadeInUp wow">
                    <Link to="/contact-us" className="">CONTACT US</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="menu">
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className="side_bar"></div>
    </>
  );
}

export default Navbar;