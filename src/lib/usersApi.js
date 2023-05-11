import apiRoute from "./apiRoute";

// For production i.e. Github Pages you need to figure out how to connect to the server

// Get all users
export const getAllUsers = () => {
  return fetch(`${apiRoute}users`);
};

// Get one user information
export const getUserInfo = (userID) => {
  return fetch(`${apiRoute}users/${userID}`);
};
