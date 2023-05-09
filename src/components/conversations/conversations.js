import { useState } from "react";
import Conversation from "./conversation";
import { getAllConversations } from "./conversationsApi";
import { useEffect } from "react";

export default function Conversations(userID) {

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getAllConversations(userID.userID)
            .then(data => {
                return data.json()
            })
            .then(results => {
                setConversations(results.conversation)
            })
    }, []);

    let allConversations = <h3>No Conversations</h3>;

    console.log(conversations)
    console.log(conversations.length)

    if (conversations.length>0) {
        allConversations = conversations.map((conversation) => {
            return (
                <Conversation
                    key={conversation._id} 
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