import React, { useEffect, useState } from "react";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import app from '../firebase_config'
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const auth = getAuth(app);
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
