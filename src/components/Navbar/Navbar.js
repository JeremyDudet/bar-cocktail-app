import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  Crafted,
  At, 
  CurrentRestaurant, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavLogOut,
} from './Navbar.elements';


const Navbar = (props) => {

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
    <IconContext.Provider value={{background: '#111', color: "white"}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Crafted>crafted</Crafted>
            <At>at</At>
            <CurrentRestaurant>Oak&Violet</CurrentRestaurant>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {
              props.isAuthenticated 
              ? 
                (
                  <>
                    <NavItem>
                      <NavLinks activeClassName="active" to='/dashboard'>Dashboard</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks activeClassName="active" to='/myCocktails'>My Cocktails</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks activeClassName="active" to="/editIngredients">Edit Ingredients</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks activeClassName="active" to='/browse'>Browse Cocktails</NavLinks>
                    </NavItem>
                  </>
                )
              : 
                null
            }
            
            {
              props.isAuthenticated 
              ? 
                (
                  <NavItem>
                    <NavLogOut onClick={() => props.dispatch(startLogout())}>Log Out</NavLogOut>
                  </NavItem>
                )
              : 
                (
                  <NavItem>
                    <NavLinks activeClassName="active" to='/login'>Log In</NavLinks>
                  </NavItem>
                )
            }
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.user,
});

export default connect(mapStateToProps)(Navbar);
