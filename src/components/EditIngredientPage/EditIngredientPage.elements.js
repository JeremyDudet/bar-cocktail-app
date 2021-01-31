import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const InfoSec = styled.div`
  margin-top: 4rem;
  padding: 25px 0;
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

export const IngredientsWrapper = styled.div`
  margin: 0.25rem 0 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
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
  background: #F66E73;
  color: white;
  margin-top: 5rem;
  &:hover { 
    background: #FF4d51; 
  }
  @media screen and (max-width: 960px) {
    width: 5.5rem; 
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
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 3em;
  @media screen and (max-width: 760px) {
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
  background: #FF4d51;
  color: white;
  width: 80%;
  &:hover {
    background: #FF4d51; 
  }
`;
