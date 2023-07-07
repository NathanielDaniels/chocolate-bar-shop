import React, { useState, useContext, useEffect } from "react";
import { Form } from "../components";
// import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
// import { getAuth, signInWithCustomToken } from "firebase/auth";
import * as ROUTES from "../constants/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// let userData = JSON.parse(localStorage.getItem("authUser") as string) || {};

export function FormContainer() {
  const { firebase } = useContext<any>(FirebaseContext);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("authUser") as string) || null
  );
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [uid, setUid] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSignedOut, setIsSignedOut] = useState<boolean>(true);

  // console.log("userData", userData);
  // console.log("Current State", {
  //   emailAddress,
  //   username,
  //   userPassword,
  //   // userPassword: userPassword.replace(/./g, "*") || "",
  //   error,
  //   emailVerified,
  //   photoURL,
  //   isAnonymous,
  //   uid,
  // });
  // console.log("current Firebase User", firebase.auth().currentUser);

  useEffect(() => {
    // console.log({ isLoading, isSignedOut });
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading, isSignedOut]);

  const Loader = () => {
    return (
      <span className="loading">
        <h1>Loading</h1>
        <div className="snippet" data-title="dot-pulse">
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
      </span>
    );
  };

  const userProfileData = {
    "Name ": username,
    "Email ": emailAddress,
    "Email Verified ": emailVerified,
    "Profile Photo ": photoURL,
    "Anonymous ": isAnonymous,
    "ID ": uid,
  };

  const isInvalid = userPassword === "" || emailAddress === "";

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        const {
          displayName,
          email,
          emailVerified,
          photoURL,
          isAnonymous,
          uid,
        } = user;
        setUserData({ ...user });
        if (displayName) setUsername(displayName);
        if (email) setEmailAddress(email);
        if (emailVerified) setEmailVerified(emailVerified);
        if (photoURL) setPhotoURL(photoURL);
        if (isAnonymous) setIsAnonymous(isAnonymous);
        if (uid) setUid(uid);
      }
    });
  }, [firebase]);

  type Event = React.FormEvent<HTMLFormElement>;

  const handleSignin = (event: Event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, userPassword)
        .then((data: any) => {
          setIsSignedOut(false);
          localStorage.setItem("authUser", JSON.stringify(data.user));
          if (userData) {
            toast(`Welcome, ${data.user.displayName}!`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
          }
        })
        .catch((error: any) => {
          setError(error.message);
        });
    } catch {
      toast(`Error signing in!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const handleDemo = async () => {
    setIsLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword("demo@demo.com", "nateflixdemo")
      .then((data: any) => {
        if (data.user) {
          setEmailAddress(data.user.email);
          setUserPassword("nateflixdemo");
          setUsername(data.user.displayName);
          setIsSignedOut(false);
          setUserData(data.user);
          localStorage.setItem("authUser", JSON.stringify(data.user));
        }
        if (userData) {
          toast(`Welcome, Demo User!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      })
      .catch((error: any) => {
        setError(error.message);
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

  interface SignOutButtonProps {
    isSignedOut: boolean;
  }

  const SignOutButton: React.FC<SignOutButtonProps> = ({ isSignedOut }) => {
    const handleSignOut = () => {
      if (!isLoading) setIsLoading(true);
      try {
        firebase
          .auth()
          .signOut()
          .then(() => {
            if (userData) localStorage.removeItem("authUser");
            setIsSignedOut(true);
            setUserData(null);
            toast(`Signed out successfully!`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
          })
          .catch((error: any) => {
            setError(error.message);
          });
      } catch {
        setError(error);
        toast(`Error signing out!`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!userData || isSignedOut ? (
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
            <Form.UserProfile>
              <h1>Welcome Back, {username}!</h1>
              <p>Thank You for being a member of Tony's Chocolate.</p>
              <section>
                <h2>Account Details</h2>
                <ul>{userDataList}</ul>
              </section>
              <SignOutButton isSignedOut={isSignedOut} />
            </Form.UserProfile>
          )}
          ;
        </>
      )}
    </>
  );
}
