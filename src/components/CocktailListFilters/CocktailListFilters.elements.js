import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/ti';


export const CocktailListFilter = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
`;

export const FilterWrapper = styled.div`
  max-width: 350px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  } 
`;

export const SearchByIngredientButton = styled.button`
  outline: none;
  appearance: none;
  color: #EF8354;
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin-top: 1rem;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const SelectedIngredientsWrapper = styled.div`
  margin: 0.25rem 0 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const SelectedIngredient = styled.button`
  outline: none;
  display: flex;
  justify-self: flex-start;
  color: #EF8354;
  background-color: transparent;
  border: 1px solid;
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
`;

export const SelectedIngredientDeleteIcon = styled(TiDeleteOutline)`
  margin-right: 0.2rem;
  padding: 0;
  min-width: 10px;
  height: auto;
  align-self: center;
  font-size: 1.25rem;
`;

export const Label = styled.label`
  font-size: 16px;
  width: 100%;
`;

export const NameInput = styled.input`
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const FormSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;
