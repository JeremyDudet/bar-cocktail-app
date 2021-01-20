import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth'; 
import { useHistory } from 'react-router-dom';
import {Container, Button} from '../../globalStyles';
import { 
  LogInSection,
  LogInRow,
  LogInColumn,
  TextWrapper,
  Heading,
  LogInForm,
  EmailInput,
  PasswordInput,
  SignUpText,
  SignUpLink,
  Error 
} from './LogIn.elements';

const LogIn = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }

  function loginEffect() {
    return auth.onAuthStateChanged(user => props.dispatch(login(user)));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    await logIn(email, password);
    loginEffect();
    history.push("/dashboard");
    setLoading(false);
  };
  
  return (
    <LogInSection>
      <Container>
        <LogInRow>
          <LogInColumn>
            <TextWrapper>
              <LogInForm onSubmit={handleSubmit}>
                <Heading>Log In</Heading>
                {error && <Error>{error}</Error>}
                <EmailInput value={email} onChange={handleSetEmailChange} type="email"  placeholder="Email" size="1" required/>
                <PasswordInput value={password} onChange={handleSetPasswordChange} type="password"  placeholder="Password" size="1" required />
                <Button type="submit" disabled={loading} primary>Log In</Button>
              </LogInForm>
              <SignUpText>Don't have an account?<SignUpLink to="/signup" disabled>Sign Up</SignUpLink></SignUpText>
            </TextWrapper>
          </LogInColumn>
        </LogInRow>
      </Container>
    </LogInSection>
  );
};

export default connect()(LogIn);
