import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import Pacifico from '../../fonts/Pacifico-Regular.ttf'


export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0px;
  z-index: 1;
  /* outline: 0.2em solid violet; */
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  background: none;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: baseline;
`;

export const Barley = styled.div`
  @font-face {
    font-family: Pacifico;
    src: url(${Pacifico}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  font-family: 'Pacifico';
  font-size: 2.25rem;  
  display: flex;
`;

export const At = styled.div`
  margin-left: 1rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: baseline;
`;

export const CurrentRestaurant = styled.div`
  background: none;
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

  @media screen and (max-width: 960px) {
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
  background: none;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: baseline;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => ( click ? 0 : '-100%' )};
    opacity: 0.95;
    transition: all 0.8s ease;
    background: #0D0D0D;
  }
`;

export const NavItem = styled.li`
  background: none;
  height: 80px;
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    background: none;
    width: 100% auto;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  background: none;
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
      color: #5F5AA2;
      transition: all 0.3s ease;
    }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #5F5AA2;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  } 
`;  

export const NavBtnLink = styled(Link)`
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
