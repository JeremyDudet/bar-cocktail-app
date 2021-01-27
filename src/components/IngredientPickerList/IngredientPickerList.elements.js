import styled from 'styled-components';

export const Ingredient = styled.button`
  display: ${({disabled}) => (disabled === true ? "none" : "flex")};
  outline: none;
  justify-self: flex-start;
  color: ${ ({selected}) => (selected === true ? "#fff" : "rgb(95, 99, 189)")};
  background: ${ ({selected}) => (selected === true ? "rgb(95, 99, 189)" : "transparent")};
  border: ${ ({selected}) => (selected === true ? "2px solid rgb(95, 99, 189)" : "2px solid rgb(95, 99, 189)")};
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0.15rem;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    background: ${ ({selected}) => (selected === true ? "rgb(95, 99, 189)" : "#2f2f2f")};;
    transform: scale(1.05);
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

// rgb(88, 183, 146) green
// rgb(245, 163, 57) orange
// rgb(95, 99, 189) blue/purpleish
// rgb(135, 206, 245) light blue