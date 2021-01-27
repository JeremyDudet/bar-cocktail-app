import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import Pacifico from '../../fonts/Pacifico-Regular.ttf'


export const Nav = styled.nav`
  background: #222;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

export const NavbarContainer = styled(Container)`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  background: transparent;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  justify-items: center;
`;

export const Barley = styled.div`
  @font-face {
    font-family: Pacifico;
    src: url(${Pacifico}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  background: transparent;
  font-family: 'Pacifico';
  font-size: 2.25rem;  
  display: flex;
`;

export const At = styled.div`
  background: transparent;
  margin-left: 1rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: baseline;
`;

export const CurrentRestaurant = styled.div`
  background: transparent;
  margin-right: 0.5rem;
  font-size: 1.25rem;
  display: flex;
  color: #BB46F0;
  line-height: 9vw;
  text-shadow: 0 0 4vw #F40A35;
  align-items: baseline;
`;

export const MobileIcon = styled.div`
  display : none;
  background: transparent;

  @media screen and (max-width: 960px) {
    background: transparent;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  background: transparent;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: baseline;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => ( click ? 0 : '-100%' )};
    opacity: 0.98;
    transition: all 0.6s ease;
    background: #222;
  }
`;

export const NavItem = styled.li`
  font-size: 0.9rem;
  background: transparent;
  height: 80px;
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    background: transparent;
    width: 100% auto;
    font-size: 1.4rem;

    &:hover {
      border: none;
    }
  }
`;

export const NavLogOut = styled.button`
  font-size: 0.9rem;
  background: transparent;
  border: none;
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #F66E73;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 1.2rem;
  }
`;

export const NavLinks = styled(NavLink)`
  background: transparent;
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &.active{
    color: #F66E73;
  }
  &:hover {
    color: #F66E73;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const NavItemBtn = styled.li`
  background: transparent;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  } 
`;  

export const NavBtnLink = styled(NavLink)`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
