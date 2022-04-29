import styled from 'styled-components';

export const InfoSec = styled.div`
  margin-top: 4rem;
  padding: 25px 0;
`;

export const InfoRow = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MakeableCocktails = styled.div``;
export const MakeableCocktailList = styled.div`
  margin-top: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 784px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CoktailName = styled.div`
  color: #fff;
  background-color: rgb(88, 183, 146);
  border: 2px solid rgb(88, 183, 146);
  border-radius: 5px;
  padding: 0.25em 0.5em;
  font-family: inherit;
  font-size: 0.75rem;
  text-align: center;
  justify-self: center;
  width: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CocktailGuage = styled.div`
  display: grid;
  max-height: 350px;
`;
export const CircularProgressBarContainer = styled.div`
  width: 100%;
  max-width: 330px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 2rem 2rem;
  justify-content: center;
  align-items: center;
`;

export const MissingPopularIngredients = styled.div``;
export const MissingIngredientsList = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.2rem;
  contain: content;
`;
export const MissingIngredientTableHeader = styled.div`
  margin-bottom: 5px;
`;
export const MissingIngredient = styled.div`
  line-height: 1.6rem;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  min-width: 250px;
`;
export const MissingIngredientAddIconContainer = styled.div`
  margin-left: 0.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
export const MissingIngredientName = styled.div`
  margin-left: 0.5rem;
  align-self: center;
  font-size: 1rem;
`;
export const MissingIngredientAppearances = styled.div`
  align-self: center;
  margin-right: 0.5rem;
  font-size: 1rem;
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
  color: ${({ selected }) => (selected === true ? '#fff' : 'rgb(95, 99, 189)')};
  background: ${({ selected }) =>
    selected === true ? 'rgb(95, 99, 189)' : '#2f2f2f'};
  border: ${({ selected }) =>
    selected === true
      ? '1px solid rgb(95, 99, 189)'
      : '1px solid rgb(95, 99, 189)'};
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0 0.35rem 0.35rem 0;
  font-family: inherit;
  font-size: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  &:hover {
    background: ${({ selected }) =>
      selected === true ? 'rgb(95, 99, 189)' : '#333'};
    transform: scale(1.05);
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
