import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles'
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FirebaseContext } from './context/firebase';

const firebase = Firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

