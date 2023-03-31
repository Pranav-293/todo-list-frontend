import React from "react";
import Search from "./Search";
import '../App.css'

function Header() {
  return (
    <div className="header">
      <div className="header-text">Todoz</div>
      <Search></Search>
    </div>
  );
}

export default Header;
