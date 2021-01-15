import styled from 'styled-components'

export const IngredientListFilter = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  color: #fff;
`;

export const Label = styled.label`
  font-size: 16px;
  width: 100%;
  color: #5F5AA2;
`;


export const NameInput = styled.input`
  color: #5F5AA2;
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin-top: 0.8em;
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
  color: #5F5AA2;
`;

export const FilterWrapper = styled.div`
border-top: 2px solid #5F5AA2;
  max-width: 350px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  } 
`;