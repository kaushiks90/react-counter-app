import React from "react";

const Navbar = ({ counters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Count {counters}</span>
      </nav>
    </div>
  );
};

export default Navbar;
