import styled from 'styled-components';

export const CocktailInfoCard = styled.div`
  /* contain: content; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 120vh;
  z-index: ${({ displayInfo }) => (displayInfo ? 1000 : -1)};
  transition: all 0.8s ease;
  background: #222;
  opacity: 0.95;
  z-index: 100;
`;
export const TransparentContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.95;
  z-index: 1000;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1rem;
`;
export const InfoContainer = styled.div`
  background: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
  flex-wrap: nowrap;
  contain: content;
  overflow-y: scroll;
  max-height: 80%;
  max-width: 500px;
`;

export const CocktailDescription = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CocktailMethod = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CocktailIngredients = styled.div`
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px inset,
    rgba(0, 0, 0, 0.23) 0px 6px 6px inset;
  display: grid;
  padding: 1rem;
  gap: 0.6rem;
  width: 100%;
`;
export const Ingredient = styled.div`
  background: #2e2e2e;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 0.3rem 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CocktailInfoLabel = styled.div`
  color: #bb46f0;
  margin: none;
  margin-top: 1em;
  border: none;
`;
export const CocktailInfoButton = styled(Button)`
  background: #bb46f0;
  opacity: 1;
  margin-top: 1rem;
  &:hover {
    background: #cc57f1;
  }
`;
