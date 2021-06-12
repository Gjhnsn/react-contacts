import { children, useState } from "react";
import { AuthContext } from "./authContext";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginUser = (username, password) => {
    if (username === "garrett" && password === "reactisawesome") {
      setUser(username);
    }
  };
};

const logoutUser = () => {
  setUser(null);

  return (
    <AuthContext.Provider value={{ loginUser, logoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
