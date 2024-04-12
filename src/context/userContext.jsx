import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginUser = (username) => {
    setForm(username);
  };

  const logoutUser = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        logoutUser,
        form,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
