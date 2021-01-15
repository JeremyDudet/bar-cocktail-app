import styled from 'styled-components';

export const Ingredient = styled.button`
  display: ${({disabled}) => (disabled === true ? "none" : "flex")};
  outline: none;
  justify-self: flex-start;
  color: ${ ({selected}) => (selected === true ? "#BFC0C0" : "#BFC0C0")};
  background-color: ${ ({selected}) => (selected === true ? "#5F5AA2" : "transparent")};
  border: ${ ({selected}) => (selected === true ? "1px solid #5F5AA2" : "1px solid #BFC0C0")};
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0.15rem;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
`;