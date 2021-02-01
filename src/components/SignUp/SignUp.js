import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
      props.dispatch(login(user?.uid));
    });
    return unsubscribe;
  }, []);

  function handleSetEmail(e){
    const email = e.target.value;
    setEmail(email);
  };
  function handleSetPassword(e){
    const password = e.target.value;
    setPassword(password);
  };
  function handleSetPasswordConfirm(e){
    const passwordConfirm = e.target.value;
    setPasswordConfirm(passwordConfirm);
  };

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then(() => navigateToDashboard())
    .catch((error) => setError(error.message));
  }

  function navigateToDashboard() {
    return history.push('/dashboard'); 
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== passwordConfirm) {
      setLoading(false);
      return setError("Passwords do not match");
    };
    
    await signup(email, password);
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
                <EmailInput value={email} onChange={handleSetEmail} type="email" placeholder="Email" size="1" required/>
                <PasswordInput value={password} onChange={handleSetPassword} type="password" placeholder="Password" size="1" required />
                <ConfirmPasswordInput value={passwordConfirm} onChange={handleSetPasswordConfirm} type="password" placeholder="Confirm password" size="1" required />
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
