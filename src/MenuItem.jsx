import React from 'react';

function MenuItem(props) {
  return (
    <li>
      <a href={props.MenuItem.link}>{props.MenuItem.text}</a>
    </li>
  );
}

export default MenuItem;
