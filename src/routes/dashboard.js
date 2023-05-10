import { useState, useEffect } from "react";
import profile from "../static/images/avatar.png";
import Matches from "../components/matches";
import { Link } from "react-router-dom";

export default function DashboardPage({ user }) {

  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    console.log(user.matches)
    setMatches(user.matches)
  }, [user.matches])

  return (
    <div className="h-screen w-full flex">
      {/* profile section */}
      <div className="sm:w-[70%] w-full h-80 shadow ml-8 my-6 mr-4 rounded-lg">
        <h2>Your Profile</h2>
        {/* profile pic */}
        <div className="mx-4 ">
          <img src={profile} className="object-cover w-40 rounded-full" />
        </div>
        <Link to="/editprofile">Update your profile</Link>
      </div>

      {/* matches section */}
      <div>
        <h2>Your Matches</h2>
        <Matches matches={matches} currentUser={user} />
      </div>
    </div>
  );
}
