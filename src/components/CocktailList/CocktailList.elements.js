import styled from 'styled-components';

export const CocktailListGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.7rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    display: grid;
    justify-content: space-evenly;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    justify-content: middle;
    grid-template-columns: repeat(1, 1fr);
  }
`;