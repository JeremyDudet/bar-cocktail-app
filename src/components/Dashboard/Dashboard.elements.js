import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';

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
  background-color: rgb(88, 183, 146);
  border: 2px solid rgb(88, 183, 146);
  border-radius: 5px;
  padding: 0.25em 0.5em;
  font-family: inherit;
  font-size: 0.75rem;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
`;


export const CocktailGuage = styled.div`
  display: grid;
`;
export const CircularProgressBarContainer = styled.div`
  max-width: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem 2rem 2rem;
  height: auto;
  justify-items: flex-start;
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
  line-height: 1.6rem;
  border-bottom: 1px solid white;
  display: flex;
  flex-flow: row nowrap;
`;
export const MissingIngredientTableHeader = styled.div`
margin-bottom: 5px;
`;
export const MissingIngredientName = styled.div`
  position: relative;
  left: 5px;
  align-self: center;
  margin: none;
  padding: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
`;
export const MissingIngredientAppearances = styled.div`
  position: absolute;
  right: 2.2rem;
  align-self: center;
  margin: none;
  padding: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
`;
export const MissingIngredientAddIcon = styled(AiOutlinePlusCircle)`
  position: absolute;
  right: 5px;
  top: 0px;
  width: 1.5rem;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background: rgb(95, 99, 189);
    transform: scale(1.05);
  }
`;

export const SectionHeader = styled.h2`
  text-align: left;
`;
export const SectionSubheader = styled.h6`
  text-align: left;
  word-wrap: break-word;
`;
