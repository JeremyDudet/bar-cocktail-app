import styled from 'styled-components';
import { Button } from '../../globalStyles';
import { BsInfoCircle } from 'react-icons/bs';
import Pacifico from '../../fonts/Pacifico-Regular.ttf';

export const CocktailCard = styled.section`
  min-width: 100px;
  max-width: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: left;
  background: #2a2a2a;
  contain: content;
  &:hover{
    .ingredients {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px inset, rgba(0, 0, 0, 0.23) 0px 6px 6px inset;
    }
    background: #2e2e2e;
    /* transform: scale(1.05); */
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const CocktailCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`;
export const CocktailName = styled.div`
  background: transparent;
  font-weight: bolder;
  font-size: 1.5rem;
  margin-right: 1.2rem;
`;
export const CocktailSubHeading = styled.div`
  background: transparent;
  font-weight: normal;
  font-size: 0.9rem;
  color: #BFC0C0;
`;


export const CocktailCardBody = styled.div`
  background: transparent;
`;
export const CocktailRecipeIngredients = styled.ul`
  background: transparent;
  margin-top: 0.5rem;
  padding: 0.5rem;
  list-style-type: none;
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px inset;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
  line-height: 0.95rem;
`;

export const CocktailRecipeIngredient = styled.li`
  background: transparent;
  font-size: 1rem;
  text-shadow: 0px 3px 7px rgba(0,0,0,0.66);
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
  display: ${({display}) => ( display ? 'block' : 'none' )};
  position: absolute;
  background: transparent;
  width: 1em;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;


export const CocktailInfoCard = styled.div`
  /* contain: content; */
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({displayInfo}) => ( displayInfo ? 1000 : -1 )};
  transition: all 0.8s ease;
  background: #222;
  opacity: 0.90;
  z-index: 100;
`;
export const InfoContainer = styled.div`
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  margin: -25% 0 0 -25%;
  z-index: 1000;
  opacity: 1;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: rgb(245, 163, 57);
  margin: none;
  margin-top: 1em;
  border: none;
`;
export const CocktailInfoButton = styled(Button)`
  max-width: 100px;
  background-color: rgb(245, 163, 57);
  opacity: 1;

`;


