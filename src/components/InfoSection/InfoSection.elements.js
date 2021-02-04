import styled from 'styled-components'
import { Button } from '../../globalStyles'

export const InfoSec = styled.div`
  color: #0d0d0d;
  margin-top: 2rem;
  padding: 120px 0 55px 0;
  @media screen and (max-width: 758px) {
    padding: 25px 0;
  }
  @media screen and (max-width: 321px) {
    padding-bottom: 10px;
    margin-top: 1rem;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  max-width: 50%;
  flex-basis: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  } 
  @media screen and (max-width: 321px) {
    padding-bottom: 10px;
  }
`;

export const ImgWrapper = styled.div`
  justify-self: center;
  max-width: 555px;
  height: auto;
  @media screen and (max-width: 758px) {
    justify-self: flex-start;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: 300px;
  @media screen and (max-width: 758px) {
    max-height: 250px;
  }
`;

export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  @media screen and (max-width: 321px) {
    margin-bottom: 5px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) =>(lightText ? '#f7f8fa' : '#1c2237')};
  @media screen and (max-width: 321px) {
    line-height: 0.9;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;



export const MainButton = styled(Button)`
  @keyframes Gradient {
    0%{background-position:0% 92%}
    50%{background-position:100% 9%}
    100%{background-position:0% 92%}
  }
  width: 100%;
  background: linear-gradient(#5D7AE5, #9B5DE5, #E55DD5);
  background-size: 600% 600%;
  animation: Gradient 5s ease infinite;
`;