import styled from 'styled-components'

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  @media screen and (max-width: 890px) {
    padding: 30px 0 0 0;
    }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: top;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row') };
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 890px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const CocktailListWrapper = styled.div`
  /* padding-top: 3.5rem; */
  padding-bottom: 60px;

  @media screen and (max-width: 890px) {
    padding-bottom: 0;
    padding-top: 1rem;
  } 
`;

export const FilterWrapper = styled.div`
  max-width: 350px;
  padding-top: 0;
`;

export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 5%;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) =>(lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const CocktailList = styled.ul`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;