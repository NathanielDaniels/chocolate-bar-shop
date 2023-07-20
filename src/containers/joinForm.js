import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { About } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

// export const FirebaseContext = createContext('')

export function FormContainer() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  //* If logins are blank, Submit button is Disabled ( isInvalid = true )
  const isInvalid = userPassword === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, userPassword)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            // photoURL: Math.floor(Math.random() * 5 ) + 1,
          })
          .then(() => {
            setEmailAddress("");
            setUserPassword("");
            setError("");
            history.push(ROUTES.SIGN_IN);
          });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <About>
        <About.Inner>
          <About.Title>
            Together we'll make all chocolate worldwide 100% slave free
          </About.Title>
          <About.Info>
            Join the movement with Tony's and help us achieve our mission of
            ensuring that all chocolate is 100% slave-free worldwide. Together,
            let's revolutionize the industry!
          </About.Info>
        </About.Inner>
        <Form>
          <Form.InnerForm onSubmit={handleSignup} method="POST">
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
              autoComplete="new-password"
              placeholder="Password"
              value={userPassword}
              onChange={({ target }) => {
                setUserPassword(target.value);
                userPassword.split("").length = 0 && "not valid password";
              }}
            />
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?{" "}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
            </Form.Text>
            {/* 
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall> */}
          </Form.InnerForm>
        </Form>

        <About.StoryImg
          src="../img/shareStoryHands.png"
          alt="Share Our Story"
        />
      </About>
    </>
  );
}
