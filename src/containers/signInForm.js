import React, {useState, useContext, createContext} from 'react';
import { Form } from '../components'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase';

// export const FirebaseContext = createContext('')

export function FormContainer() {
  // const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
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
          // history.push('/ChocoShop');
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
        <Form.Title>Sign In</Form.Title>

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

        <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit>

        <Form.Text>
          New to Tony's Chocolates? <Form.Link to="/Join">Join in now.</Form.Link>
        </Form.Text>

        <Form.Demo 
          onClick={() => handleDemo()}
          type="button">
         Demo
        </Form.Demo>

        <Form.TextSmall>
          This page is protected by Google reCAPTCHA.
        </Form.TextSmall>

      </Form.InnerForm>
    </Form>
  )
}

         

            
              

  
