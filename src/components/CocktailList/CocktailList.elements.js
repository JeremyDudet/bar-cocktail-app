import styled from 'styled-components';

export const CocktailListGrid = styled.div`
  padding: 0;
  margin: 0;
  color: #fff;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry; 
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  } 
  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(3, 1fr);
  } 
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;