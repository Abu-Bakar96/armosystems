import { Link } from 'react-router-dom';
import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to={`/`}>
          <button className="btn navbar-brand" style={{textDecoration: "none"}}>ARMOSYSTEMS</button>
        </Link>
      </div>
    </nav>
  );
}

export { Header };
