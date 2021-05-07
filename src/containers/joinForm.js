import React, {useState} from 'react';
import { Form } from '../components'

export function FormContainer() {
  const [error, setError] = useState('');

  return (
    <Form>
      <Form.Title>Join In</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.InnerForm>
        inner form
      </Form.InnerForm>
    </Form>
  )
}

  // <Form>

  //         <Form.Base onSubmit={handleSignin} method="POST">
  //           <Form.Input 
  //             type="email" 
  //             placeholder="Email"
  //             value={emailAddress}
  //             onChange={({ target }) => setEmailAddress(target.value)}
  //             required
  //           />
  //           <Form.Input 
  //             type="password" 
  //             placeholder="Password"
  //             value={userPassword}
  //             onChange={({ target }) => setUserPassword(target.value)}
  //           />
  //           <Form.Submit type="submit" disabled={isInvalid}>Sign In</Form.Submit>

  //           <Form.Text>
  //             New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
  //           </Form.Text>

  //           <Form.Demo 
  //             onClick={() => handleDemo()}
  //             // type="button"
  //           >
  //             Demo
  //           </Form.Demo>

  //           <Form.TextSmall>
  //             This page is protected by Google reCAPTCHA.
  //           </Form.TextSmall>

  //         </Form.Base>
  //       </Form>