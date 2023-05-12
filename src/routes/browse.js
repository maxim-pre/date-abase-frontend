import React, {useEffect, useState} from'react';
import { getAllUsers } from '../lib/usersApi';
import UserCard from '../components/userCard';

const BrowsePage = ({user, fetchData}) =>{
    // Feed through user information to the UserCard component
    useEffect(() => {
        fetchData();
      }, []);
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
                let otherUsers = results.users.filter(person => person._id !== currentUser._id)
                setAllUsers(otherUsers)
            })
    }, [user]);

    

    
    
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
            bio={otherUser.bio}
            interestedInGender={otherUser.interestedInGender}
            createdAt={otherUser.createdAt}
            isMatched={otherUser.isMatched}
            fetchData={fetchData}
        />)
    })
    

  return (
    <div className="bg-[url('../src/static/images/AdobeStock_88856691.jpeg')] bg-top bg-cover pb-16">
      <h1 className="text-5xl text-center  text-white text-shadow py-16">
        Find your perfect (pair programming) partner!
      </h1>
      <p className="text-center text-2xl mb-8 text-gray-100 special-text-shadow">
        Click that Y button and let the sparks fly - with just one tap, you
        could be on your way to a steamy romance that'll have your heart racing
        and your phone buzzing!
      </p>
      <div className="grid lg:grid-cols-3 place-items-center md:grid-cols-2">
        {displayUsers}
      </div>
    </div>
  );
};

export default BrowsePage;
