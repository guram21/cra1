import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

function Footer (props) {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-menu">
          <Menu menuItems={props.menu1}/>
          <Menu menuItems={props.menu2}/>
        </div>
        <div className="footer-logo">
          <Logo/><br/>
          <br/>
          {props.text}<br/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
