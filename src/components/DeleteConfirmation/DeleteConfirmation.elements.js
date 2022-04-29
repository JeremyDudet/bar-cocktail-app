import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const TransparentContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.95;
  z-index: 1000;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1rem;
`;

export const DeleteConfirmationSection = styled.div`
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
  opacity: 0.95;
  z-index: 1000;
`;
export const DeleteConfirmationCard = styled.div`
  /* Center vertically and horizontally */
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
