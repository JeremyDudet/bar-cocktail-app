import styled from 'styled-components';

export const IngredientListFilter = styled.div`
  background-color: #232323;
  display: grid;
`;

export const Label = styled.label`
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
`;

export const NameInput = styled.input`
  background-color: #232323;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const FormSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  background-color: #232323;
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

export const FilterWrapper = styled.div`
  border-top: 2px solid #bb46f0;
  max-width: 350px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;
