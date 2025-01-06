import '../Styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <div className="overlay-navbar">
        <div className="nav-container-top">
          <a href="" className="button">get a quote</a>
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-icon">
          <img className="nav-logo" src="images/logo.png" alt="" />
        </div>
        <div className="nav-links">
          <a href="">Cases</a>
          <a href="">Machine Trending</a>
          <a href="">Palletizing</a>
          <a href="">Welding</a>
          <a href="">Resources</a>
          <a href="">Distributors</a>
          <a href="">Contacts</a>
          <a href="">News</a>
          <a href="">Brochures</a>
        </div>

      </div>
    </div>
  );
}