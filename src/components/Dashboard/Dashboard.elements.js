import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  @media screen and (max-width: 890px) {
    padding: 30px 0 0 0;
    }
`;

export const InfoRow = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


export const AvailableIngredientPicker = styled.div``;
export const IngredientsWrapper = styled.div`
  margin: 0.25rem 0 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
`;


export const MakeableCocktails = styled.div``;
export const MakeableCocktailList = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 1fr); 
  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  } 
  @media screen and (max-width: 784px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
`;
export const CoktailName = styled.div`
  color: #fff;
  background-color: ${ ({selected}) => (selected === true ? "#5F5AA2" : "transparent")};
  border: 1px solid #5F5AA2;
  border-radius: 5px;
  padding: 0.25em 0.5em;
  
  font-family: inherit;
  font-size: 0.75rem;
  text-align: center;
`;


export const CocktailGuage = styled.div`
  display: grid;
`;
export const CircularProgressBarContainer = styled.div`
  max-width: 300px;
  padding: 0.5rem 2rem 2rem 2rem;
  height: auto;
  justify-self: center;
  align-self: center;
`;

export const MissingPopularIngredients = styled.div``;
export const MissingIngredientsList = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.2rem;
  contain: content;
`;
export const MissingIngredient = styled.div`
  contain: content;
  border-bottom: 1px solid white;
  display: flex;
  flex-flow: row nowrap;
`;
export const MissingIngredientTableHeader = styled.div`
`;
export const MissingIngredientName = styled.div`
  position: relative;
  left: 5px;
  align-self: center;
  margin: none;
  padding: none;
  border: none;
  font-family: inherit;
  font-size: 0.75rem;
`;
export const MissingIngredientAppearances = styled.div`
  position: absolute;
  right: 2rem;
  align-self: center;
  margin: none;
  padding: none;
  border: none;
  font-family: inherit;
  font-size: 0.75rem;
`;
export const MissingIngredientAddIcon = styled(IoIosAddCircleOutline)`
  position: absolute;
  right: 5px;
  color: inherit;
  cursor: pointer;
`;

export const SectionHeader = styled.h2`
  text-align: left;
`;
export const SectionSubheader = styled.h6`
  text-align: left;
  word-wrap: break-word;
`;
