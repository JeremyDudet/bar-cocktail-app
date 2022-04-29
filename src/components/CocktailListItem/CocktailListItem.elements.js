import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';

export const CocktailCard = styled.section`
  min-width: 200px;
  max-width: 280px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: left;
  background: #333;
  contain: content;
  cursor: pointer;
  &:hover {
    .ingredients {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px inset,
        rgba(0, 0, 0, 0.23) 0px 6px 6px inset;
    }
    background: #3a3a3a;
    /* transform: scale(1.05); */
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const CocktailCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`;
export const CocktailName = styled.div`
  background: transparent;
  font-weight: bolder;
  font-size: 1.5rem;
  margin-right: 1.2rem;
`;
export const CocktailSubHeading = styled.div`
  background: transparent;
  font-weight: normal;
  font-size: 0.9rem;
  color: #bfc0c0;
`;

export const CocktailCardBody = styled.div`
  background: transparent;
`;
export const CocktailRecipeIngredients = styled.ul`
  background: transparent;
  margin-top: 0.5rem;
  padding: 0.5rem;
  list-style-type: none;
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px inset;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
  line-height: 0.95rem;
  max-width: 95%;
`;

export const CocktailRecipeIngredient = styled.li`
  margin: 0.15rem 0;
  background: transparent;
  font-size: 1rem;
  text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.66);
`;

export const CocktailCardFooter = styled.div`
  background: transparent;
  display: flex;
  margin: 0.8em 0 0 0;
  padding: none;
  justify-self: bottom;
`;
export const IbaIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: 0 0.3em 0 0;
  border: none;
`;
export const NAIcon = styled.div`
  background-color: transparent;
  padding: none;
  margin: 0 0.3em 0 0;
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
export const InfoIcon = styled(BsInfoCircle)`
  display: ${({ display }) => (display ? 'block' : 'none')};
  position: absolute;
  background: transparent;
  width: 1em;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;
