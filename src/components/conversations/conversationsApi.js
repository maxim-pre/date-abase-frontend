// For production i.e. Github Pages you need to figure out how to connect to the server

// Get all conversations for this user
export const getAllConversations = (userID) => {
    console.log("getAllConversations")
    console.log(userID)
    return fetch(`http://localhost:5007/api/conversations/${userID}`)
}