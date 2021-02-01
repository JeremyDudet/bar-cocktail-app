import styled from 'styled-components'

export const InfoSec = styled.div`
  margin-top: 4rem;
  padding: 25px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: top;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row') };
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  max-width: 65%;
  /* min-width: 40%; */
  @media screen and (max-width: 790px) {
    max-width: 100%;
    flex-basis: 80%;
    display: flex;
    justify-content: center;
  } 
`;

export const FilterWrapper = styled.div`
  max-width: 350px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  background: #2a2a2a;
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
  /* vertical-align: middle;
  display: inline-block; */
  max-height: 500px;
`;