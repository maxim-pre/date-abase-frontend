import { useState } from "react";
import profile from "../static/images/avatar.png";

export default function DashboardPage({ user }) {
  console.log(user);
  return (
    <div className="h-screen w-full flex">
      {/* profile section */}
      <div className="sm:w-[70%] w-full h-80 shadow ml-8 my-6 mr-4 rounded-lg">
        {/* profile pic */}
        <div className="mx-4 ">
          <img src={profile} className="object-cover w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}
