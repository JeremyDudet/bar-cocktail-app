import styled from 'styled-components';


export const InfoSec = styled.div`
  margin-top: 2rem;
  padding: 25px 0;
`;

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
  border: 1px solid #5F5AA2;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    padding: none;
  }
`;

