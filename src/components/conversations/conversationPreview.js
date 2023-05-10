import { getUserInfo } from "./conversationsApi";
import { useState, useEffect } from "react";

export default function ConversationPreview ({currentUserID, participantOne, participantTwo, messages}) {
    console.log("current id is " , currentUserID);

    // figure out which participant is the other user
    const otherUserID = participantOne === currentUserID? participantTwo : participantOne;

    const [otherUser, setOtherUser] = useState({});
    
    // Get the firstName and lastName of the other user
    useEffect(() => {
        getUserInfo(otherUserID)
        .then(data => {
            return data.json()
        })
        .then(results => {
            setOtherUser({firstName: results.user.firstName, lastName: results.user.lastName});
        })
    }, [otherUserID]);

    // Sort messages by reverse chronological order
    const sortedMessages = messages.sort((a, b) => {
        return b.updatedAt - a.updatedAt;
    });
    
    return (
        <div>
            <h1>Conversation</h1>
            <p>
                Photo placeholder.
                This is a conversation with {otherUser.firstName} {otherUser.lastName}.
                The last message was sent on {sortedMessages[0].updatedAt}.
                First 50 characters of the last message were: {sortedMessages[0].content.slice (0, 50)}
            </p>
        </div>
    )
}