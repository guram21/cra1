import React from 'react'
import MenuItem from './MenuItem'

function Menu (props) {
  return (
    <nav>
      <ul>
        {props.menuItems.map(el => <MenuItem key={el.text} MenuItem={el}/>)}
      </ul>
    </nav>
  )
}

export default Menu
