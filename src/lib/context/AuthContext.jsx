/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  async function loginUser(userInfo) {
    setLoading(true);
    try {
      const response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );

      const accountDetails = await account.get();

      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  function logoutUser() {
    account.deleteSession("current");
    setUser(null);
  }

  async function registerUser(userInfo) {
    setLoading(true);

    try {
      const response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );

      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  async function checkUserStatus() {
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>.</p> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
