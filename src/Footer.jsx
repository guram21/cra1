import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <Logo />
        <Menu items={props.items}/>
      </div>
    </footer>
  );
}

export default Footer;
