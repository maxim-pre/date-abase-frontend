import apiRoute from "./apiRoute";

// Add a match to a user
export const addMatch = (currentUser, otherUser) => {
  return fetch(`${apiRoute}users/${currentUser._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      $push: { matches: otherUser._id },
    }),
  });
};

// Remove a match from a user
export const removeMatch = (currentUser, otherUser) => {
  return fetch(`${apiRoute}users/${currentUser._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      $pull: { matches: otherUser._id },
    }),
  });
};
