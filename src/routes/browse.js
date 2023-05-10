import React, {useEffect, useState} from'react';
import { getAllUsers } from '../lib/usersApi';
import UserCard from '../components/userCard';

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
            currentUser={currentUser}
            otherUser={otherUser}
            key={otherUser._id} 
            id={otherUser._id}
            firstName={otherUser.firstName}
            lastName={otherUser.lastName}
            interestedInGender={otherUser.interestedInGender}
            createdAt={otherUser.createdAt}
            isMatched={otherUser.isMatched}
        />)
    })
    
    
    return (
        <div>
            <h1 className='text-5xl text-center my-8'>Find your perfect (pair programming) partner!</h1>
            <div className='grid lg:grid-cols-3 place-items-center md:grid-cols-2'>
                {displayUsers}
            </div>
        </div>
    )
}

export default BrowsePage;