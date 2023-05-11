import apiRoute from './apiRoute'

// For production i.e. Github Pages you need to figure out how to connect to the server

// Get all conversations for this user
export const getAllConversations = (userID) => {
    console.log("getAllConversations")
    console.log(userID)
    return fetch(`${apiRoute}conversations/${userID}`)
}



// Get a single conversation 
export const getConversation = (userID, conversationID) => {
    console.log("getConversation")
    console.log(userID)
    console.log(conversationID)
    return fetch(`${apiRoute}conversations/${userID}/${conversationID}`)
}

// Create a new conversation
export const createConversation = (userID, conversation) => {
    console.log("createConversation")
    console.log(userID)
    console.log(conversation)
    return fetch(`${apiRoute}conversations/${userID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conversation)
    })
}

// Update a conversation
export const updateConversation = (userID, conversationID, conversation) => {
    console.log("updateConversation")
    console.log(userID)
    console.log(conversationID)
    console.log(conversation)
    return fetch(`${apiRoute}conversations/${userID}/${conversationID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conversation)
    })
}

// Delete a conversation
export const deleteConversation = (userID, conversationID) => {
    console.log("deleteConversation")
    console.log(userID)
    console.log(conversationID)
    return fetch(`${apiRoute}conversations/${userID}/${conversationID}`, {
        method: 'DELETE'
    })
}

