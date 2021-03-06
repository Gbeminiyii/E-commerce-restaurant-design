import React, {  } from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = ({toggle}) => {
  
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Pizza
        </NavLink>
        <NavIcon>
          <p> Menu </p>
          <Bars onClick={toggle}/>
        </NavIcon>
      </Nav>  
    </>
  )
}

export default Navbar