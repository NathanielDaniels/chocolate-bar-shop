import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles'

import Firebase from 'firebase/app';
// import 'firebase/firestore';
import 'firebase/auth';
import { FirebaseContext } from './context/firebase';
import Keys from './stash'

const FirebaseConfig = {
  apiKey: Keys().apiKey,
  authDomain: "chocolateshop-e8efb.firebaseapp.com",
  projectId: "chocolateshop-e8efb",
  storageBucket: "chocolateshop-e8efb.appspot.com",
  messagingSenderId: "292990123053",
  appId: "1:292990123053:web:dda14abf8d57aac0c3cca4",
  measurementId: "G-LWBVCQEDB2"
};

const firebase = Firebase.initializeApp(FirebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

