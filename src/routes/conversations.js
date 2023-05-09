import Conversations from "../components/conversations/conversations";

const ConversationsPage = () =>{
    return (
    <div>
        <h1>Conversations</h1>
        <p>This is the conversations page</p>
        <div>
            {/* Get all the conversations for this user */}
            <Conversations userID="645a2327b9a26603a58d0b3c" />
            {/* Display the conversations in a list */}
        </div>
        <div>
            {/* When they click on a conversation, it shows all the messages on the right hand side */}

            {/* On an individual conversation, show a form where the user can type and submit a reply */}
        </div>
        

        
    </div>
    )
}

export default ConversationsPage;