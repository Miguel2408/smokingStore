import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWTgZgcAPYnDYJMhL_ZqVk_Ae2FTpadGA",
  authDomain: "smokingstore-b95e0.firebaseapp.com",
  projectId: "smokingstore-b95e0",
  storageBucket: "smokingstore-b95e0.appspot.com",
  messagingSenderId: "944365321255",
  appId: "1:944365321255:web:f57397900fbaf2d6802202"
};


initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
