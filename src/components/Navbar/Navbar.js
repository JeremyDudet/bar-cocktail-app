import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  Barley,
  At, 
  CurrentRestaurant, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavItemBtn,
  NavBtnLink,
 } from './Navbar.elements'


const Navbar = () => {

  const [ click, setClick ] = useState(false);
  const [ button, setButton ] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Barley>crafted</Barley>
            <At>at</At>
            <CurrentRestaurant>Oak&Violet</CurrentRestaurant>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/browse'>Cocktails</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/login'>LogIn</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
