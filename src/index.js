import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";

import Firebase from "firebase/app";
// import 'firebase/firestore';
import "firebase/auth";
import { FirebaseContext } from "./context/firebase";
import { ContextProvider } from "./context/Context";
import Keys from "./stash";

const FirebaseConfig = {
  apiKey: Keys().apiKey,
  authDomain: "chocolateshop-e8efb.firebaseapp.com",
  projectId: "chocolateshop-e8efb",
  storageBucket: "chocolateshop-e8efb.appspot.com",
  messagingSenderId: "292990123053",
  appId: "1:292990123053:web:dda14abf8d57aac0c3cca4",
  measurementId: "G-LWBVCQEDB2",
};

const firebase = Firebase.initializeApp(FirebaseConfig);

    render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ContextProvider>
        <GlobalStyles />
        <App />
      </ContextProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
