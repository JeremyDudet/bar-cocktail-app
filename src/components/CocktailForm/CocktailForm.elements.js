import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Form = styled.form`
  padding: 0;
  margin: 0;
  display: grid;
`;

export const Label = styled.label`
  font-size: 1rem;
  width: 100%;
  margin-top: 0.7rem;
`;

export const NameInput = styled.input`
  background-color: transparent;
  border: 1px solid;
  padding: 0.25em 0.5em;
  margin: 0;
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
  border-radius: 0.25em;
  padding: 0.25rem 0.5rem;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const TextArea = styled.textarea`
  outline: none;
  padding: 0.5rem;
  max-width: 100%;
`;

export const MainButton = styled(Button)`
  margin-top: 0.7rem;
  width: 100%;
  background: rgb(88, 183, 146);
`;