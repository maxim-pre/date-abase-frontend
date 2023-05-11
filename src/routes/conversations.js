import Conversations from "../components/conversations/conversations";
import SelectedConversation from "../components/conversations/selectedConversation";

const ConversationsPage = ({user}) =>{
    return (
    <div>
        <h1>Conversations</h1>
        <p>This is the conversations page</p>
        <div>
            {/* Get all the conversations for this user */}
            <Conversations user={user}/>
            {/* Display the conversations in a list */}
        </div>
        <div>
            {/* When they click on a conversation, it shows all the messages on the right hand side */}
            {/* <SelectedConversation user={user}/> */}
            {/* On an individual conversation, show a form where the user can type and submit a reply */}
        </div>
        

        
    </div>
    )
}

export default ConversationsPage;