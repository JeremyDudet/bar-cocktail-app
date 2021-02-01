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

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setLoading(false);
  //     props.dispatch(login(user.uid));
  //   });
  //   return unsubscribe;
  // }, []);

  function handleSetEmail(e){
    const email = e.target.value;
    setEmail(email);
  };
  function handleSetPassword(e){
    const password = e.target.value;
    setPassword(password);
  };

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password).catch((error) => (setError(error.message)));
  };

  function navigateToDashboard() {
    return history.push('/dashboard'); 
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await logIn(email, password);
      props.dispatch(login(user.user.uid));
      console.log(user.user);
      navigateToDashboard();
    } catch {
      alert(`something went wrong`);
    }
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
                <EmailInput value={email} onChange={handleSetEmail} type="email" placeholder="Email"  required autoComplete="username" />
                <PasswordInput value={password} onChange={handleSetPassword} type="password"  placeholder="Password" required autoComplete="current-password" />
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
