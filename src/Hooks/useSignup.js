import { useState } from "react";

import { auth } from "../Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "../Hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log("kullanıcı oluştu", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        console.log("kullanıcı oluşturulamadı", err);
        setError(err.message);
      });
  };

  return { error, signup };
};
