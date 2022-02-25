import { auth } from "../Firebase/config";
import { signOut } from "firebase/auth";

import { useAuthContext } from "../Hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log("kullanıcı çıkışı yapılamadı", err.message);
      });
  };

  return { logout };
};
