import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpSection = styled.div`
  padding: 100px 0;
`;

export const SignUpRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const SignUpColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 355px;
  padding-top:0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  } 
`;
export const Heading = styled.h1`
  margin-bottom: 2rem;
  justify-content: center;
  font-size: 48px;
  line-height: 1.1;
  color: white;
`;

export const SignUpForm = styled.form`
  contain: content;
  display: grid;
  margin: 0 auto;
  max-width: 955px;
  height: 100%;
  width: 100%;
`;


export const EmailInput = styled.input`
  padding: 0 5%;
  margin-bottom: 5%;
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: #3c3c3c;
  width: 100%;
  line-height: 2rem;
  border-radius: 7px;
`;

export const PasswordInput = styled.input`
  padding: 0 5%;
  margin-bottom: 5%;
  font-size: 1em;
  outline: none;
  border: none;
  background-color: #3c3c3c;
  width: 100%;
  line-height: 2em;
  border-radius: 7px;
`;

export const ConfirmPasswordInput = styled.input`
  padding: 0 5%;
  margin-bottom: 2em;
  font-size: 1em;
  outline: none;
  border: none;
  background-color: #3c3c3c;
  width: 100%;
  line-height: 2em;
  border-radius: 7px;
`;

export const LogInLink = styled(Link)`
  padding: 0 5%;
`;

export const LogInText = styled.div`
  padding: 0 5%;
  margin: 5% 0 5% 0;
  font-size: 1rem;
  border: 0;
  width: 100%;
`;

export const Error = styled.div`
  z-index: 1;
  width: auto;
  max-width: 355px;
  margin: 5% auto;
  padding: 1%;
  color: #CD5C5C;
  border: 2px solid #CD5C5C;
  justify-content: center;
`;