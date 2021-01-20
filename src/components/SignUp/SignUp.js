import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth'; 
import { useHistory } from 'react-router-dom';
import {Container, Button} from '../../globalStyles';
import { 
  SignUpSection,
  SignUpRow,
  SignUpColumn,
  TextWrapper,
  Heading,
  SignUpForm,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  LogInText,
  LogInLink,
  Error
} from './SignUp.elements'

const SignUp = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  function handleSetEmailChange(e){
    const email = e.target.value;
    setEmail(email);
  };
  function handleSetPasswordChange(e){
    const password = e.target.value;
    setPassword(password);
  };
  function handleSetPasswordConfirmChange(e){
    const passwordConfirm = e.target.value;
    setPasswordConfirm(passwordConfirm);
  };

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }

  function signUpEffect() {
    return auth.onAuthStateChanged(user => props.dispatch(login(user)));
  }

  
  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      signUpEffect();
    } catch{
       
    }
    setLoading(false);
  };
  
  return (
    <SignUpSection>
      <Container>
        <SignUpRow>
          <SignUpColumn>
            <TextWrapper>
              <SignUpForm onSubmit={handleSubmit}>
                <Heading>Sign Up</Heading>
                {error && <Error>{error}</Error>}
                <EmailInput value={email} onChange={handleSetEmailChange} type="email" placeholder="Email" size="1" required/>
                <PasswordInput value={password} onChange={handleSetPasswordChange} type="password" placeholder="Password" size="1" required />
                <ConfirmPasswordInput value={passwordConfirm} onChange={handleSetPasswordConfirmChange} type="password" placeholder="Confirm password" size="1" required />
                <Button type="submit" disabled={loading} primary>Submit</Button>
              </SignUpForm>
              <LogInText>Already have an account?<LogInLink to="/login">Log In</LogInLink></LogInText>
            </TextWrapper>
          </SignUpColumn>
        </SignUpRow>
      </Container>
    </SignUpSection>
  );
};

export default connect()(SignUp);
