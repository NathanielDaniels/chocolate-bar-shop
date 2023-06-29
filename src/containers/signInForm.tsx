import React, { useState, useContext, useEffect } from "react";
import { Form } from "../components";
// import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
// import { getAuth, signInWithCustomToken } from "firebase/auth";
import * as ROUTES from "../constants/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userData = JSON.parse(localStorage.getItem("authUser") as string);

export function FormContainer() {
  const { firebase } = useContext<any>(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const userProfileData = {
    Username: username,
    Email: emailAddress,
    "Email Verified": emailVerified,
    "User Photo": photoURL,
    "Anonymous?": isAnonymous,
    UID: uid,
  };

  const isInvalid = userPassword === "" || emailAddress === "";

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setLoading(true);
      if (user) {
        setLoading(false);
        // User is signed in.
        const {
          displayName,
          email,
          emailVerified,
          photoURL,
          isAnonymous,
          uid,
        } = user;
        setUsername(displayName);
        setEmailAddress(email);
        setEmailVerified(emailVerified);
        setPhotoURL(photoURL);
        setIsAnonymous(isAnonymous);
        setUid(uid);
      } else {
        // User is signed out.
        setLoading(false);
      }
    });
  }, [firebase]);

  type Event = React.FormEvent<HTMLFormElement>;

  const handleSignin = (event: Event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, userPassword)
      .then(() => {
        setEmailAddress(emailAddress);
        setUserPassword(userPassword);
        localStorage.setItem(
          "authUser",
          JSON.stringify(firebase.auth().currentUser)
        );
        toast(`Welcome, ${username}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error: any) => {
        setError(error.message);
        toast(`Error signing in: ${error.message}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  };

  const handleDemo = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("demo@demo.com", "nateflixdemo")
      .then(() => {
        setEmailAddress("demo@demo.com");
        setUserPassword("nateflixdemo");
        setUsername("Demo User");
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            email: "demo@demo.com",
            displayName: "Demo User",
            password: "nateflixdemo",
          })
        );
        toast(`Welcome, Demo User!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error: any) => {
        setError(error.message);
        toast(`Error signing in: ${error.message}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  };

  // const hiddenPassword = (password: string) => {
  //   return password.replace(/./g, "*");
  // };

  const userDataList = Object.entries(userProfileData).map(([key, value]) => {
    let valueString =
      typeof value === "object" ? JSON.stringify(value) : value.toString();

    switch (valueString) {
      case "true":
        valueString = "Yes";
        break;
      case "false":
        valueString = "No";
        break;
      case "null":
        valueString = "None";
        break;
      default:
        break;
    }

    return (
      <li key={key + value}>
        <strong>{key}:</strong> {valueString}
      </li>
    );
  });

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("authUser");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        toast(`Signed out successfully!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch((error: any) => {
        setError(error.message);
        toast(`Error signing out: ${error.message}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  };

  return (
    <>
      {!userData ? (
        <Form isSigninPage>
          <Form.InnerForm onSubmit={handleSignin} method="POST">
            <Form.Title>Sign In</Form.Title>
            <Form.Input
              type="email"
              placeholder="Email"
              value={emailAddress}
              onChange={({ target }: { target: HTMLInputElement }) =>
                setEmailAddress(target.value)
              }
              required
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={userPassword}
              onChange={({ target }: { target: HTMLInputElement }) =>
                setUserPassword(target.value)
              }
              required
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Tony's Chocolate?{" "}
              <Form.Link to={ROUTES.JOIN_IN}>Join in now.</Form.Link>
            </Form.Text>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Demo onClick={() => handleDemo()} type="button">
              Demo
            </Form.Demo>
            <ToastContainer />
          </Form.InnerForm>
        </Form>
      ) : (
        <>
          {loading ? (
            <Form.UserProfile>loading...</Form.UserProfile>
          ) : (
            <Form.UserProfile>
              <h1>Welcome Back, {username}!</h1>
              <p>Thank You for being a member of Tony's Chocolate.</p>
              <section>
                <h2>Account Details</h2>
                <ul>{userDataList}</ul>
              </section>
              <button
                type="button"
                style={{ zIndex: "1000" }}
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </Form.UserProfile>
          )}
        </>
      )}
      ;
    </>
  );
}
