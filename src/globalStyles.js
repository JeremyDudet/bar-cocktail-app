import styled, {createGlobalStyle} from 'styled-components';
import Poppins from './fonts/Poppins-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  html{
    background: #222;
  }

  * {
    background: transparent;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    color: #FFFFFF;
  }
`;


export const InfoSec = styled.div`
  margin-top: 4rem;
  padding: 25px 0;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Button = styled.button`
  background: ${({primary}) => (primary ? '#BB46F0' : '#4B59F7' ) };
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: #000;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  font-weight: bolder;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transform: scale(1.005);
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  } 
`;

export const PageTitle = styled.h1`
  text-align: left;
  background-color: transparent;
`;
export const SectionHeader = styled.h3`
  text-align: left;
  background-color: transparent;
`;
export const SectionSubheader = styled.h5`
  text-align: left;
  word-wrap: break-word;
  background-color: transparent;
`;

export default GlobalStyle;

// rgb(88, 183, 146) green
// rgb(245, 163, 57) orange #F66E73
// rgb(95, 99, 189) blue/purpleish
// rgb(135, 206, 245) light blue