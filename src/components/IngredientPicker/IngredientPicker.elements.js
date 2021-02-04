import styled from 'styled-components';

export const IngredientPickerContainer = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px inset, rgba(0, 0, 0, 0.23) 0px 6px 6px inset;
  border-radius: 0.5rem;
  height: auto;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
`;

export const TopLine = styled.div`
  color: #BFC0C0;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin: 0.8em 0;
`;


export const FilterTypeRadio = styled.input`
  display: none;
  
  &:hover + label {
    cursor: pointer;
    background: #333;
    /* border: 2px solid #5F5AA2; */
    transform: scale(1.01);
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  &:checked + label {
    color: #0D0D0D;
    background-color: #5F5AA2;
    &:hover {
      background-color: #6F6AB2;
    }
  }
`;

export const Label = styled.label`
  color: #5F5AA2;
  background: #2f2f2f;
  padding: 0.75em;
  /* border: 2px solid #5F5AA2; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  font-size: 1.05em;
`;

export const RadioContainer = styled.div`
  line-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 1em;
  padding: 0;
`;

export const IngredientsWrapper = styled.div`
  background-color: transparent;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: none;
  height: auto;
  /* gap: 0.35rem; */
`;

export const Ingredient = styled.button`
  justify-self: flex-start;
  color: ${ ({selected}) => (selected === true ? "#fff" : "rgb(95, 99, 189)")};
  background: ${ ({selected}) => (selected === true ? "rgb(95, 99, 189)" : "#2f2f2f")};
  border: ${ ({selected}) => (selected === true ? "1px solid rgb(95, 99, 189)" : "1px solid rgb(95, 99, 189)")};
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0 0.35rem 0.35rem 0;
  font-family: inherit;
  font-size: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  &:hover {
    background: ${ ({selected}) => (selected === true ? "rgb(95, 99, 189)" : "#333")};;
    transform: scale(1.05);
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;