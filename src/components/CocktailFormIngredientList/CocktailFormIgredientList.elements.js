import styled from "styled-components";


export const SelectedIngredientsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding-bottom: 1rem;
  min-width: 300px;
  flex-wrap: wrap;
`;
export const Ingredient = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem; 
  align-items: center;
  max-width: 100%;
  border-bottom: 1px solid rgb(95, 99, 189);
`;
export const IngredientName = styled.div`
  justify-self: flex-start;
  align-self: center;
  color: rgb(95, 99, 189);
  font-size: 1.2rem;
  line-height: 1.2rem;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: none;
  border: none;
  padding: none;
`;
export const IngredientAmount = styled.input`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 0.25rem;
  max-width: 6rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
export const IngredientUnits = styled.select`
  align-self: center;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  align-self: center;
  border: none;
  font-size: 1.4rem;
  background: none;
  color: #F66E73;
  width: 3rem;
  height: 100%;
  &:hover {
    transform: scale(1.1); 
  }
  @media screen and (max-width: 960px) {
    background: transparent;
    flex-basis: 10%;
  }
`;
