import styled from 'styled-components';

export const SelectedIngredientsContainer = styled.div`
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px inset,
    rgba(0, 0, 0, 0.23) 0px 6px 6px inset;
  display: grid;
  padding: 1rem;
  gap: 0.6rem;
`;
export const Ingredient = styled.div`
  background: #2e2e2e;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 0.3rem 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const IngredientName = styled.div`
  background-color: transparent;
  align-self: center;
`;
export const InnerContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IngredientAmount = styled.input`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 0.25rem;
  width: 70px;
  cursor: pointer;
`;
export const IngredientUnits = styled.select`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 0.25rem;
  cursor: pointer;
  width: auto;
`;

export const RemoveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  transform: scale(1.2);
  &:hover {
    transform: scale(1.3);
  }
`;
