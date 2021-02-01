import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const Form = styled.form`
  background-color: transparent;
  padding: 0;
  display: grid;
`;

export const Label = styled.label`
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.2;
`;

export const FormSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  padding: 0.5rem;
  max-width: 100%;
  border-radius: 0.25em;
`;

export const MainButton = styled(Button)`
  margin-top: 0.7rem;
  width: 100%;
  background: #5F5AA2;
  color: #eee;
  &:hover {
    /* background: #6e6aac; */
  }
`;