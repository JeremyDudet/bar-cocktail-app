import styled from 'styled-components'
import { Button } from '../../globalStyles'

export const InfoSec = styled.div`
  color: #0d0d0d;
  margin-top: 2rem;
  padding: 25px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row') };
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top:0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  } 
`;

export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
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

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => ((start === true) ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const MainButton = styled(Button)`
  @media screen and (max-width: 1366px) {
    width: 100%;
    background: linear-gradient(#5D7AE5, #9B5DE5, #E55DD5);
    background-size: 600% 600%;
    animation: AnimationName 5s ease infinite;
    } 
  &:hover {
    color: black;
    @keyframes AnimationName {
      0%{background-position:0% 92%}
      50%{background-position:100% 9%}
      100%{background-position:0% 92%}
  }
    background: linear-gradient(#5D7AE5, #9B5DE5, #E55DD5);
    background-size: 600% 600%;
    animation: AnimationName 5s ease infinite;
  }
`;