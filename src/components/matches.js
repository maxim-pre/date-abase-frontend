import { getUserInfo } from "../lib/usersApi"
import { useState, useEffect } from "react"
import UserCard from "./userCard"
import { Link } from "react-router-dom"

export default function Matches({currentUser, matches}) {

    console.log("current user is ", currentUser)
    
    const [allMatches, setAllMatches] = useState([])

    useEffect(() => {
        if (matches && matches.length > 0) {
            Promise.all( matches.map((match) => {
                return getUserInfo(match)
                    .then((res) => { 
                        return res.json()
                    })
                    .then((data) => {
                        return data.user})
                    .catch((err) => console.log(err))
            })
            )
            .then((newMatches) => {
            setAllMatches(newMatches)
            })
        }
        else {
            setAllMatches([])
        }
    }, [matches])

    
    const [displayMatches, setDisplayMatches] = useState(<p>No matches yet. Would you like to <Link to="/browse">browse potential partners</Link>?</p>)
    

    useEffect(() => {
        if (allMatches && allMatches.length > 0) {
            let newMatches = [...allMatches].map((user) => {
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
            setDisplayMatches(newMatches)
        }
        else {
            setDisplayMatches(<p>No matches yet. Would you like to <Link to="/browse">browse potential partners</Link>?</p>)
        }
    }, [allMatches])
    
    
    return (
        <>
            {displayMatches}
        </>
    )
}