// Attempt to use context, not currently working

import { addMatchApi, removeMatchApi } from "./lib/matchesApi";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import apiRoute from "./lib/apiRoute";
import authAxios from "./lib/authAxios";

// Create React context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  // Callback function for child to add a match to the database
  const addMatches = async (currentUser, otherUser) => {
    try {
      const updatedCurrentUser = await addMatchApi(currentUser, otherUser);
      const updatedOtherUser = await addMatchApi(otherUser, currentUser);
      setCurrentUser(updatedCurrentUser);
    } catch (error) {
      console.log("Error adding match: ", error);
    }
  }

  // Callback function for child to remove a match from the database
  const removeMatches = async (currentUser, otherUser) => {
    try {
      const updatedCurrentUser = await removeMatchApi(currentUser, otherUser);
      const updatedOtherUser = await removeMatchApi(otherUser, currentUser);
      setCurrentUser(updatedCurrentUser);
    } catch (error) {
      console.log("Error removing match: ", error);
    }
  }

  // fetches logged in user data
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = jwt_decode(token).id;
      const response = await authAxios.get(`${apiRoute}users/${userId}`);
      return response.data.user;
    } else {
      return "";
    }
  };
  

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser, addMatches, removeMatches }}>
      {children}
    </AppContext.Provider>
  );
};