import { getUserInfo } from "../lib/usersApi"
import { useState, useEffect } from "react"

export default function Matches({currentUser, matches}) {

    const [allMatches, setAllMatches] = useState([])

    useEffect(() => {
        matches.map((match) => {
            getUserInfo(match)
                .then((res) => { return res.json()})
                .catch((err) => console.log(err))
        })
        setAllMatches(...matches)
    }, [])

    
    const displayMatches = allMatches.map((user) => {
        return (<UserCard 
            currentUser={currentUser}
            key={user._id} 
            id={user._id}
            firstName={user.firstName}
            lastName={user.lastName}
            interestedInGender={user.interestedInGender}
            createdAt={user.createdAt}
            isMatched={true}
        />)
    })
    
    return (
        <>
            {displayMatches}
        </>
    )
}