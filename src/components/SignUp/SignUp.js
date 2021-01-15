import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {Container, Button} from '../../globalStyles'
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

const SignUp = ({ heading, buttonLabel }) => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/login')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }
  
  return (
    <SignUpSection>
      <Container>
        <SignUpRow>
          <SignUpColumn>
            <TextWrapper>
              <SignUpForm onSubmit={handleSubmit}>
                <Heading>Sign Up</Heading>
                {error && <Error>{error}</Error>}
                <EmailInput type="email" ref={emailRef} placeholder="Email" size="1" required/>
                <PasswordInput type="password" ref={passwordRef} placeholder="Password" size="1" required />
                <ConfirmPasswordInput type="password" ref={passwordConfirmRef} placeholder="Confirm password" size="1" required />
                <Button type="submit" disabled={loading} primary>Submit</Button>
              </SignUpForm>
              <LogInText>Already have an account?<LogInLink to="/login">Log In</LogInLink></LogInText>
            </TextWrapper>
          </SignUpColumn>
        </SignUpRow>
      </Container>
    </SignUpSection>
  )
}

export default SignUp
