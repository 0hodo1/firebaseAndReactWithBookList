import { useState } from "react";

import { auth } from "../Firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "../Hooks/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        console.log("kullanıcı giriş yapamadı", err);
        setError(err.message);
      });
  };

  return { error, login };
};
