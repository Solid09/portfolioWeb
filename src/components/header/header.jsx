import "./header.css";
import { HashLink } from "react-router-hash-link";

function header() {
  return (
    <div className="header">
      <div className="header__links">
        <HashLink to="/">HOME</HashLink>
        <HashLink to="#about">ABOUT</HashLink>
        <HashLink to="#project">PROJECT</HashLink>
        <HashLink to="#contact">CONTACT</HashLink>
      </div>
    </div>
  );
}

export default header;
