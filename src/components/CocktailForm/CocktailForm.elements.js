import styled from 'styled-components';
import { Button } from '../../globalStyles';

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
`;

export const FormSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
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
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  outline: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 0.7rem;
  max-width: 100%;
`;

export const MainButton = styled(Button)`
  margin-top: 0.7rem;
  width: 100%;
  background: rgb(88, 183, 146);
`;

export const DeleteButton = styled(Button)`
  margin-bottom: 1rem;
  background: #f66e73;
  color: white;
  &:hover {
    background: #ff4d51;
  }
`;

export const CancelButton = styled(Button)`
  margin-bottom: 1rem;
  color: white;
  width: 100%;
  background: #333;
  &:hover {
    background: #444;
  }
`;
