import { useState, useEffect } from "react";
import ConversationPreview from "./conversationPreview";
import { getAllConversations } from "./conversationsApi";
import jwt_decode from "jwt-decode";

export default function Conversations() {

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const currentUserID = decodedToken.id;

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getAllConversations(currentUserID)
            .then(data => {
                return data.json()
            })
            .then(results => {
                setConversations(results.conversation)
            })
    }, [currentUserID]);


    let allConversations = <h3>No Conversations</h3>;

    console.log(conversations)
    console.log(conversations.length)

    if (conversations.length>0) {
        allConversations = conversations.map((conversation) => {
            return (
                <ConversationPreview
                    key={conversation._id} 
                    currentUserID={currentUserID}
                    participantOne={conversation.participantOne} 
                    participantTwo={conversation.participantTwo} 
                    messages={conversation.messages} 
                    id={conversation._id}
                />
            )
        })
    }

    return(
        <>
            <h2>Conversations</h2>
            {allConversations}
        </>
    )
}