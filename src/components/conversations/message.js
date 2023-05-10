export default function Message({key, sentBy, content, createdAt, updatedAt}) {
    
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
    
    
    return (
        // If sentBy is the current user, message div is right-aligned
        // If sentBy is the other user, message div is left-aligned
        <div>
            <div>Photo placeholder</div>
            <h2>{createdAt}</h2>
            { createdAt === updatedAt ? null : <h3>{updatedAt}</h3> }
            <p>{content}</p>
        </div>

    )

}