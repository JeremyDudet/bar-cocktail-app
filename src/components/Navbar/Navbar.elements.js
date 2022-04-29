import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import Pacifico from '../../fonts/Pacifico-Regular.ttf';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -1px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  background: #272727;
  z-index: 1;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  height: 100%;
`;

export const NavLogo = styled(Link)`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  width: 250px;
  height: 100%;
  background: transparent;
  text-decoration: none;
  display: table-cell;
  vertical-align: middle;
  position: relative;
  top: 2px;
  cursor: pointer;
  @media screen and (max-width: 380px) {
    padding-left: 1rem;
  }
  @media screen and (max-width: 320px) {
    padding-left: 0;
  }
`;

export const Crafted = styled.span`
  @font-face {
    font-family: Pacifico;
    src: url(${Pacifico}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  background: transparent;
  font-family: 'Pacifico';
  font-size: 2.25rem;
`;

export const At = styled.span`
  background: transparent;
  font-size: 1rem;
  margin-left: 5px;
  margin-right: 5px;
`;

export const CurrentRestaurant = styled.span`
  background: transparent;
  font-size: 1.25rem;
  color: #bb46f0;
  text-shadow: 0 0 4vw #f40a35;
`;

export const MobileIcon = styled.div`
  display: none;
  background: transparent;
  color: white;

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
    height: 97vh;
    position: absolute;
    top: 79px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 0.98;
    transition: all 0.6s ease;
    background: #272727;
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
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #f66e73;
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
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &.active {
    color: #f66e73;
  }
  &:hover {
    color: #f66e73;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
  @media screen and (max-width: 380px) {
    padding: 3rem;
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
`;
