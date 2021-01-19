import styled from 'styled-components';
import {BsInfoCircle} from 'react-icons/bs';
import Pacifico from '../../fonts/Pacifico-Regular.ttf';

export const CocktailCard = styled.section`
  contain: content;
  min-width: 200px;
  max-width: 200px;
  border: 1px solid white;
  border-radius: 0.5em;
  box-shadow: 5px 5px solid red;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: left;
  &:hover{
    background: #5F5AA2;
    transform: scale(1.025);
    transition: all 0.8s ease;
  }
`;

export const CocktailCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  line-height: 1.1em;
`;
export const CocktailName = styled.div`
  background: transparent;
  @font-face {
    font-family: Pacifico;
    src: url(${Pacifico}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  font-family: 'Pacifico';
  font-size: 1.25em;
  line-height: 1.2em;
`;
export const CocktailSubHeading = styled.div`
  background: transparent;
  font-weight: normal;
  font-size: 0.7em;
  color: #BFC0C0;
`;


export const CocktailCardBody = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CocktailRecipeIngredients = styled.ul`
  background: transparent;
  list-style-type: none;
`;
export const CocktailRecipeIngredient = styled.li`
  background: transparent;
  font-size: 0.9em;
  line-height: 0.9em;
`;


export const CocktailCardFooter = styled.div`
  background: transparent;
  display: flex;
  margin: 0.8em 0 0 0;
  padding: none;
  justify-self: bottom;
`;
export const IbaIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: 0 0.3em 0 0;
  border: none;
`;
export const NAIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: 0 0.3em 0 0;
  border: none;
`;
export const NonVeganIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: none;
  border: none;
`;
export const Img = styled.img`
  background: transparent;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 40px;
`;
export const InfoIcon = styled(BsInfoCircle)`
  position: absolute;
  background: transparent;
  width: 1em;
  right: 5px;
  top: 5px;
  color: rebeccapurple;
  cursor: pointer;
  &:hover{
    transform: scale(1.25);
    transition: all 0.8s ease;
  }
`;


export const CocktailInfoCard = styled.div`
  /* contain: content; */
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({displayInfo}) => ( displayInfo ? 1000 : -1 )};
  transition: all 0.8s ease;
  background: #0D0D0D;
  opacity: 0.95;
`;
export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-top: 25%;
  padding: 3em;
  @media screen and (max-width: 960px) {
    padding: 2em;
  }
`;
export const CocktailDescription = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CocktailPreparation = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CocktailInfoLabel = styled.div`
  color: #5F5AA2;
  margin: none;
  margin-top: 1em;
  border: none;
`;
export const CocktailInfoButton = styled.button`
  font-weight: bolder;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({primary}) => (primary ? '#BB46F0' : '#4B59F7' ) };
  }
`;


