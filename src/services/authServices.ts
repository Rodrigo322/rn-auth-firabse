import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firabase";

export interface User {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: User) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredentials.user;
};

export const login = async ({ email, password }: User) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredentials.user;
};

export const logout = async () => {
  await signOut(auth);
};
