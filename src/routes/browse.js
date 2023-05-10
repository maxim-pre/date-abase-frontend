<<<<<<< HEAD
import UserCard from "../components/userCard";
const BrowsePage = () => {
    return (
        <div>
            <h1 className="text-5xl justify-center flex items-center">Meet your match!</h1>
            <UserCard />
    </div>
=======
import React, {useEffect, useState} from'react';
import { getAllUsers } from '../lib/usersApi';

const BrowsePage = ({user}) =>{
    // Feed through user information to the UserCard component

    // current user information
    const currentUser = user;

    // all user information
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(data => {
                return data.json()
            })
            .then(results => {
                setAllUsers(results.users)
            })
    }, []);

    
    
    const displayUsers = allUsers.map(otherUser => {

        // Check if current user is in this user's matches array
        if (otherUser.matches.includes(currentUser._id)) {
            otherUser.isMatched=true;
        } else {
            otherUser.isMatched=false;
        }

        return (<UserCard 
            key={otherUser._id} 
            firstName={otherUser.firstName}
            lastName={otherUser.lastName}
            interestedInGender={otherUser.interestedInGender}
            createdAt={otherUser.createdAt}
            isMatched={otherUser.isMatched}
        />)
    })
    
    
    return (
        <div>
            <h1>Find your perfect (pair programming) partner!</h1>
            {displayUsers}
        </div>
>>>>>>> 7a2c7a3 (Add basic browse page logic)
    )
}

export default BrowsePage;