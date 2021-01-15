import React, {useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {Container, Button} from '../../globalStyles'
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
} from './LogIn.elements'

const LogIn = ({ heading, buttonLabel }) => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }
  
  return (
    <LogInSection>
      <Container>
        <LogInRow>
          <LogInColumn>
            <TextWrapper>
              <LogInForm onSubmit={handleSubmit}>
                <Heading>{heading}</Heading>
                {error && <Error>{error}</Error>}
                <EmailInput type="email" ref={emailRef} placeholder="Email" size="1" required/>
                <PasswordInput type="password" ref={passwordRef} placeholder="Password" size="1" required />
                <Button type="submit" disabled={loading} primary>{buttonLabel}</Button>
              </LogInForm>
              <SignUpText>Don't have an account?<SignUpLink to="/signup" disabled>Sign Up</SignUpLink></SignUpText>
            </TextWrapper>
          </LogInColumn>
        </LogInRow>
      </Container>
    </LogInSection>
  )
}

export default LogIn
