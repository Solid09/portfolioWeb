import "./header.css";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <Link to="/" className="header__name">
        Minhal
      </Link>
      <div className="header__links">
        <Link to="#about">ABOUT</Link>
        <Link to="#project">PROJECT</Link>
        <Link to="#contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default header;
