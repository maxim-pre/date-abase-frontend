import apiRoute from "./apiRoute";

// Add a match to a user
export const addMatch = (currentUser, otherUser) => {
    console.log("Adding match between " + currentUser.username + " and " + otherUser.username);
    return fetch(`${apiRoute}users/${currentUser._id}`, {
        method: "PUT",
        body: {
            $push: { matches: otherUser._id }
        }
    })
}

// Remove a match from a user
export const removeMatch = (currentUser, otherUser) => {
    console.log("Removing match between " + currentUser.username + " and " + otherUser.username);
    return fetch(`${apiRoute}users/${currentUser._id}`, {
        method: "PUT",
        body: {
            $pull: { matches: otherUser._id }
        }
    })
}
