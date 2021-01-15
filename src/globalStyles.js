import styled, {createGlobalStyle} from 'styled-components';
import Poppins from './fonts/Poppins-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    background: #0d0d0d;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    color: #FFFFFF;
  }
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

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({primary}) => (primary ? '#BB46F0' : '#4B59F7' ) };
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  } 
`;
export default GlobalStyle;