import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
  return (
    <nav>
      <ul>
        {props.items.map(el => <MenuItem key={el.text} MenuItem={el} abc='123' />)}
      </ul>

    </nav>
  );
}

export default Menu;
