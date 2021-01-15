import styled from 'styled-components'

export const IngredientsWrapper = styled.div`
  margin: 0.25rem 0 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const Ingredient = styled.button`
  display: flex;
  justify-self: flex-start;
  color: #BFC0C0;
  background-color: transparent;
  border: 1px solid;
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  :disabled{
    display: none;
  }
`;
