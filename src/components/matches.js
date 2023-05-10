import { getUserInfo } from "../lib/usersApi"
import { useState, useEffect } from "react"
import UserCard from "./userCard"

export default function Matches({currentUser, matches}) {

    console.log("current user is ", currentUser)
    
    const [allMatches, setAllMatches] = useState([])

    useEffect(() => {
        if (matches.length > 0) {
            matches.map((match) => {
                getUserInfo(match)
                    .then((res) => { return res.json()})
                    .catch((err) => console.log(err))
            })
        }
        setAllMatches(...matches)
    }, [matches])

    
    let displayMatches = <p>No matches yet!</p>
    

    useEffect(() => {
        if (allMatches) {
            allMatches.map((user) => {
                console.log(user)
                return (<UserCard 
                    currentUser={currentUser}
                    otherUser={user}
                    key={user._id} 
                    id={user._id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    interestedInGender={user.interestedInGender}
                    createdAt={user.createdAt}
                    isMatched={true}
                />)
            })
        }
    }, [allMatches])
    
    
    return (
        <>
            {displayMatches}
        </>
    )
}