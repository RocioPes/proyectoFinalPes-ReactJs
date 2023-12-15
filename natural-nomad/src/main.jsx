import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyB_bJiJ4rymjqa55j3Opr14t6TY0E_pvcw",
  authDomain: "natural-nomad.firebaseapp.com",
  projectId: "natural-nomad",
  storageBucket: "natural-nomad.appspot.com",
  messagingSenderId: "538310587961",
  appId: "1:538310587961:web:5c9f0ebce8d756b766bfe8"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
