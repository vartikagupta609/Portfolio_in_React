import "../styles.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbarleft">
          <li>
            <a href="true">PORTFLIO</a>
          </li>
          <span className="navbarright">
            <li>
              <a href="true">Home</a>
            </li>
            <li>
              <a href="true">About Us</a>
            </li>
            <li>
              <a href="true">Skills</a>
            </li>
            <li>
              <a href="true">Blogs</a>
            </li>
            <li>
              <a href="true">Contact</a>
            </li>
            <li>
              <a href="true">Portfolio</a>
            </li>
          </span>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
