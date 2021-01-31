import styled from 'styled-components'

export const IngredientsWrapper = styled.div`
  background-color: transparent;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 0.35rem;
`;

export const Ingredient = styled.button`
  display: flex;
  justify-self: flex-start;
  color: ${ ({selected}) => (selected ? "#fff" : "rgb(95, 99, 189)")};
  background: ${ ({selected}) => (selected ? "rgb(95, 99, 189)" : "transparent")};
  border: ${ ({selected}) => (selected ? "1px solid rgb(95, 99, 189)" : "1px solid rgb(95, 99, 189)")};
  border-radius: 1.5em;
  outline: none;
  padding: 0.25em 0.5em;
  margin: 0;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  :disabled{
    display: none;
  }
  &:hover {
    cursor: pointer;
    background: ${ ({selected}) => (selected ? "rgb(95, 99, 189)" : "#2f2f2f")};
    border: 1px solid #5F5AA2;
    transform: scale(1.01);
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;