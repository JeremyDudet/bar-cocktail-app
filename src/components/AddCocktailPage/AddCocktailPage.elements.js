import styled from 'styled-components';

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CocktailFormColumn = styled.div`
  flex-direction: column;
  margin-bottom: 15px;
  padding: 1rem;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    padding: none;
  }
`;
export const InfoColumn = styled.div`
  flex-direction: column;
  margin-bottom: 15px;
  padding: 1rem;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    padding: none;
  }
`;
export const InnerInfoColumn = styled.div`
  background: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 15px;
  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    padding: none;
  }
`;

