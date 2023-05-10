import { useState, useEffect } from "react";
import profile from "../static/images/avatar.png";
import Matches from "../components/matches";

export default function DashboardPage({ user }) {
  console.log(user);

  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    setMatches(user.matches)
  }, [user.matches])

  return (
    <div className="w-full">
      {/* profile section */}
      <div className="mx-4">
      <div className="sm:w-[70%] w-100 h-80 shadow mx-auto my-6 rounded-lg">  
          {/* profile pic */}
        <div className="mx-4 ">
          <img src={profile} className="object-cover w-40 rounded-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="uppercase text-2xl text-white bg-red-500 w-full py-4">Edit your profile</button>
        </div>
      </div>

      {/* matches section */}
      <div className="mt-16">
        <h2 className="text-center text-5xl my-16">Your Matches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Matches matches={matches} currentUser={user} />
        </div>
      </div>
    </div>
  );
}
