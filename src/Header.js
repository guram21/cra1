import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <div className="App-header">
      <Logo/>
      <Menu/>
    </div>
  );
}

export default Header;
