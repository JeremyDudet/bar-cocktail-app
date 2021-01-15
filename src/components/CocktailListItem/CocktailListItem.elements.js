import styled from 'styled-components';

export const CocktailCard = styled.section`
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  &:hover{
    background: #5F5AA2;
  }
`;

export const CocktailCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  line-height: 1.1rem;
`;
export const CocktailName = styled.div`
  background: transparent;
  font-size: 1.2rem;
  font-weight: bold;
`;
export const CocktailSubHeading = styled.div`
  background: transparent;
  font-weight: normal;
  font-size: 0.7rem;
  color: #BFC0C0;
`;

export const CocktailCardBody = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CocktailRecipeIngredients = styled.ul`
  background: transparent;
  list-style-type: none;
`;
export const CocktailRecipeIngredient = styled.li`
  background: transparent;
  font-size: 0.9rem;
  line-height: 0.9rem;
`;

export const CocktailCardFooter = styled.div`
  background: transparent;
  display: flex;
  margin: 0.8rem 0 0 0;
  padding: none;
  justify-self: bottom;
`;
export const IbaIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: 0 0.3rem 0 0;
  border: none;
`;
export const NAIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: 0 0.3rem 0 0;
  border: none;
`;
export const NonVeganIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: none;
  border: none;
`;
export const Img = styled.img`
  background: transparent;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 40px;
`;