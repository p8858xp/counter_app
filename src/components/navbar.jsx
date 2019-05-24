import React, { Component } from "react";

//stateless functional component shortcut key -> sfc
//you need to add props as a parameter
// you cannot use lifestyle hooks in stateless functional components
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
