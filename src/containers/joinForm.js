import React, {useState, useContext, createContext} from 'react';
import { Form } from '../components'

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

  const handleDemo = () => {
    setEmailAddress("demo@demo.com")
    setUserPassword("nateflixdemo")
    // history.push(ROUTES.BROWSE);
  }

  return (
    <Form>
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
          Already a user? 
          {/* <Form.Link to="/signin">Sign in now.</Form.Link> */}
        </Form.Text>

        {/* <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit> */}
        {/* <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text> */}

        <Form.Demo 
          onClick={() => handleDemo()}
          type="button">
         Demo
        </Form.Demo>

        {/* <Form.TextSmall>
          This page is protected by Google reCAPTCHA.
        </Form.TextSmall> */}

      </Form.InnerForm>
    </Form>
  )
}

         

            
              

  
