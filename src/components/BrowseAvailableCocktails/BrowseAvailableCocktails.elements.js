import styled from 'styled-components';

export const InfoSec = styled.div`
  padding: 5px 40px;
`;

export const LastUpdated = styled.div`
  font-size: 0.85rem;
  margin-left: 0.5rem;
  margin-bottom: 0.15rem;
  color: #f0ebd8;
`;
export const TimeAgo = styled.span`
  font-size: 1rem;
  color: #ffc15e;
`;

export const InfoRow = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  height: 82vh;
  width: 100%;
`;

export const Filters = styled.div`
  margin-right: 1rem;
  width: 320px;
  max-width: 320px;
  min-width: 320px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  background: #2a2a2a;
  height: 100%;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Cocktails = styled.div`
  width: auto;
  display: flex;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 5%;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const CocktailList = styled.ul`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  /* vertical-align: middle;
  display: inline-block; */
  max-height: 500px;
`;
