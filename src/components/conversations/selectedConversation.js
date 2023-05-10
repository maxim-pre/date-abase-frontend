import { getUserInfo } from "./conversationsApi";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Message from "./message";

export default function SelectedConversation ({participantOne, participantTwo, messages}) {
    
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const currentUserID = decodedToken.id;
    
    // figure out which participant is the other user
    const otherUserID = participantOne === currentUserID ? participantTwo : participantOne;
    const [otherUser, setOtherUser] = useState({});
    
    // Get the firstName and lastName of the other user
    useEffect(() => {
        getUserInfo(otherUserID)
        .then(data => {
            return data.json()
        })
        .then(results => {
            let newFirstName = "";
            let newLastName = "";
            if (results.user) {
                newFirstName = results.user.firstName;
                newLastName = results.user.lastName;
            }
            setOtherUser({firstName: newFirstName, lastName: newLastName});
        })
        .catch(err => {console.log(err)})
    }, [otherUserID]);

    
    // Sort messages by chronological order
    let sortedMessages = [];
    if (messages) {
        sortedMessages = messages.sort((a, b) => {
            return a.updatedAt - b.updatedAt;
        });
    }
    
    // Return the list of messages
    let displayMessages = () => {
        if (sortedMessages.length === 0) {
            return (
                <div>
                    <h2>Click on a conversation to see your messages.</h2>
                </div>
            )
        }
        else {
            sortedMessages.map(message => {
                return (
                    <Message 
                        key={message._id} 
                        sentBy={message.sentBy} 
                        content={message.content} 
                        createdAt={message.createdAt}
                        updatedAt={message.updatedAt}
                    />
                )
            })
        }
    }
    
    return (
        <div>
            {sortedMessages.length>0 && <h2>All your messages with {otherUser.firstName} {otherUser.lastName}</h2>}
            {displayMessages}
        </div>
    )
}