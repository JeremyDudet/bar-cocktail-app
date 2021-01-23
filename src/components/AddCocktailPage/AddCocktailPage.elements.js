import styled from 'styled-components';


export const InfoSec = styled.div`
  color: #0d0d0d;
  margin-top: 2rem;
  padding: 25px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  /* align-items: center; */
  flex-direction: row;
`;

export const InfoInnerRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const CocktailFormColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 60%;
  flex-basis: 60%;

  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 40%;
  flex-basis: 40%;

  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
