import styled from 'styled-components';
import { Container, Button } from '../../globalStyles';

export const InfoSec = styled.div`
  margin-top: 4rem;
  padding: 25px 0;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
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

export const CocktailsWrapper = styled.div`
  background-color: transparent;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 0.35rem;
`;

export const Cocktail = styled.button`
  display: flex;
  justify-self: flex-start;
  color: ${({ selected }) => (selected ? '#fff' : 'rgb(88, 183, 146)')};
  background: ${({ selected }) =>
    selected ? 'rgb(88, 183, 146)' : 'transparent'};
  border: ${({ selected }) =>
    selected ? '1px solid rgb(88, 183, 146)' : '1px solid rgb(88, 183, 146)'};
  border-radius: 1.5em;
  outline: none;
  padding: 0.25em 0.5em;
  margin: 0;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  :disabled {
    display: none;
  }
  &:hover {
    cursor: pointer;
    background: ${({ selected }) =>
      selected ? 'rgb(88, 183, 146)' : '#2f2f2f'};
    border: 1px solid rgb(88, 183, 146);
    transform: scale(1.01);
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const Form = styled.form`
  background-color: transparent;
  display: grid;
`;

export const Label = styled.label`
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
`;

export const NameInput = styled.input`
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.7rem;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
  min-width: 422p;
  max-width: 422px;
  @media screen and (max-width: 480px) {
    min-width: none;
    max-width: none;
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
  height: 120vh;
  z-index: ${({ displayInfo }) => (displayInfo ? 1000 : -1)};
  transition: all 0.8s ease;
  background: #222;
  opacity: 0.9;
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
  margin-bottom: 1rem;
  &:hover {
    background: #555;
  }
`;
export const ConfirmDeleteButton = styled(Button)`
  background: #ff4d51;
  color: white;
  width: 80%;
  &:hover {
    background: #ff4d51;
  }
`;
