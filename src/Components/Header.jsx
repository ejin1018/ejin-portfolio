import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{
  return(
    <nav className="nav-wrap">
      <h1 className="nav-logo">
        <Link to="/" className="en">EJIN</Link>
      </h1>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-btn nav-btn-on">INTRO</Link>
        </li>
        <li>
          <Link to="/" className="nav-btn">ABILITY</Link>
        </li>
        <li>
          <Link to="/" className="nav-btn">WORKS</Link>
        </li>
        <li>
          <Link to="/" className="nav-btn">SAMPLE</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;