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

  const Loading = () => {
    return (
      <div className="loading" style={{ height: "100vh" }}>
        <h1>Loading...</h1>
      </div>
    );
  };

  useEffect(() => {
    console.log({ loading });
  }, [loading]);

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
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, userPassword)
      .then(() => {
        setEmailAddress(emailAddress);
        setUsername(username);
        setUserPassword(userPassword);
        localStorage.setItem(
          "authUser",
          JSON.stringify(firebase.auth().currentUser)
        );
        setLoading(false);
        toast(`Welcome, ${emailAddress}!`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setTimeout(() => {
          // building Loading component - remove when complete
          window.location.reload();
        }, 3000);
      })
      .catch((error: any) => {
        setError(error.message);
        toast(`Error signing in: ${error.message}!`, {
          position: "bottom-right",
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
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setTimeout(() => {
          // building Loading component - remove when complete
          window.location.reload();
        }, 2000);
      })
      .catch((error: any) => {
        setError(error.message);
        toast(`Error signing in: ${error.message}!`, {
          position: "bottom-right",
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

  const SignOutButton = () => {
    const [isSignedOut, setIsSignedOut] = useState(false);
    const handleSignOut = () => {
      setLoading(true);
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("authUser");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          toast(`Signed out successfully!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          setIsSignedOut(true);
        })
        .catch((error: any) => {
          setError(error.message);
          toast(`Error signing out: ${error.message}!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        });
    };
    if (isSignedOut) {
      return null;
    }
    return (
      <button type="button" style={{ zIndex: "1000" }} onClick={handleSignOut}>
        Sign Out
      </button>
    );
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
            <Form.UserProfile>
              <Loading />
            </Form.UserProfile>
          ) : (
            <Form.UserProfile>
              <h1>Welcome Back, {username}!</h1>
              <p>Thank You for being a member of Tony's Chocolate.</p>
              <section>
                <h2>Account Details</h2>
                {/* {!loading ? <Loading /> : <ul>{userDataList}</ul>} */}
                <ul>{userDataList}</ul>
              </section>
              <SignOutButton />
            </Form.UserProfile>
          )}
        </>
      )}
      ;
    </>
  );
}
