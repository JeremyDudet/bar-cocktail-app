import styled from 'styled-components';
import { Button } from '../../globalStyles';

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
  align-items: flex-start;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  flex-direction: column; 
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 758px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const IngredientsWrapper = styled.div`
  margin: 0.25rem 0 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const SectionHeader = styled.h2`
  text-align: left;
  font-size: 2rem; 
  line-height: 1.9rem;
  margin-bottom: 10px;
`;
export const SectionSubheader = styled.h6`
  text-align: left;
  word-wrap: break-word;
`;

export const CancelButton = styled(Button)`
  color: white; 
  width: 100%;
  background: #333;
  margin-bottom: 2rem;
  &:hover {
    background: #444;
  }
`;

export const DeleteButton = styled(Button)`
  background: transparent;
  color: white;
  margin-top: 5rem;
  &:hover {
    background: #F66E73; 
  }
`;

export const DeleteConfirmation = styled.div`
  /* contain: content; */
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({displayInfo}) => ( displayInfo ? 1000 : -1 )};
  transition: all 0.8s ease;
  background: #222;
  opacity: 0.90;
  z-index: 1000;
`;
export const DeleteConfirmationCard = styled.div`
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  margin: -25% 0 0 -25%;
  z-index: 10000;
  opacity: 1;
  border: 1px solid white;
  border-radius: 0.5em;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  @media screen and (max-width: 960px) {
    padding: 1em;
    width: 80%;
    left: 35%;
    gap: 1rem; 
  }
  `;
  export const WarningDescription = styled.div`
  background: transparent;
  margin: none;
  border: none;
`;
export const CancelDeleteButton = styled(Button)`
  background: #333;
  color: white;
  width: 80%;
  margin-bottom: 2rem;
  &:hover {
    background: #555; 
  }
`;
export const ConfirmDeleteButton = styled(Button)`
  background: #F66E73;
  color: white;
  width: 80%;
  &:hover {
    background: #FF4d51; 
  }
`;
