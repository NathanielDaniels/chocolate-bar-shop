import React, {useState, useContext, createContext} from 'react';
import { Form } from '../components'
import { About } from '../components'

export const FirebaseContext = createContext('')

export function FormContainer() {
  // const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = userPassword === '' || emailAddress === '';

  const handleSignin = event => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, userPassword)
      .then(() => {
          setEmailAddress('');
          setUserPassword('');
          setError('');
          // history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));
  }

  return (
    <>
      <About>
        <About.Inner>
          <About.Title>together we'll make all chocolate worldwide 100% slave free</About.Title>
          <About.Info>
            All chocolate 100% slave free. Worldwide. That's our mission. And we can't do it alone. We need your help! Become Serious Friends with Tony's and support the mission. We'll help you with tools, videos and information in the Tony's Toolbox. And 'cause we're friends, there'll be some presents in there sometimes too.
          </About.Info>
        </About.Inner>
        <Form right="-100px">
          {error && <Form.Error>{error}</Form.Error>}
          <Form.InnerForm onSubmit={handleSignin} method="POST">
            <Form.Title>Join In</Form.Title>

            <Form.Input 
              type="text" 
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              required
            />

            <Form.Input 
              type="email" 
              placeholder="Email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              required
            />

            <Form.Input 
              type="password" 
              placeholder="Password"
              value={userPassword}
              onChange={({ target }) => setUserPassword(target.value)}
              required
            />

            <Form.Submit type="submit" disabled={isInvalid}>Sign Up</Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/SignIn">Sign in now.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>

          </Form.InnerForm>
        </Form>

        <About.StoryImg src="../img/shareStoryHands.png" alt="Share Our Story"/>
      </About>
    </>
  )
}



            
              

  
