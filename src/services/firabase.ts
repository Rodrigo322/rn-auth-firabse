import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRMKfeVp_FZjr2gJfqQEcB9FZYtNbAXGE",
  authDomain: "rn-auth-72c48.firebaseapp.com",
  projectId: "rn-auth-72c48",
  storageBucket: "rn-auth-72c48.firebasestorage.app",
  messagingSenderId: "637247901516",
  appId: "1:637247901516:web:3d5fd1c27bd747ea6b49e9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
