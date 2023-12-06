import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

const Header = () => {
  return (
    <>
      <Nav className='navbar'>
        <NavItem>
          <NavLink
            active
            href="#"
          >
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Another Link
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default Header