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

export const CancelButton = styled(Button)`
  color: white;
  width: 100%;
  background: #333;
  &:hover {
    background: #444;
  }
`;

export const DeleteButton = styled(Button)`
  background: #f66e73;
  color: white;
  &:hover {
    background: #ff4d51;
  }
`;

export const IngredientsWrapper = styled.div`
  background-color: transparent;
  margin: 1rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  /* gap: 0.35rem; */
`;

export const Ingredient = styled.button`
  justify-self: flex-start;
  color: ${({ selected }) => (selected === true ? '#fff' : 'rgb(95, 99, 189)')};
  background: ${({ selected }) =>
    selected === true ? 'rgb(95, 99, 189)' : '#2f2f2f'};
  border: ${({ selected }) =>
    selected === true
      ? '1px solid rgb(95, 99, 189)'
      : '1px solid rgb(95, 99, 189)'};
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0.15rem;
  font-family: inherit;
  font-size: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  &:hover {
    background: ${({ selected }) =>
      selected === true ? 'rgb(95, 99, 189)' : '#333'};
    transform: scale(1.05);
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
