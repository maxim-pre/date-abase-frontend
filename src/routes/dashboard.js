import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function DashboardPage() {
  const getUser = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const userId = decoded["user_id"];
    console.log(decoded, userId);
    return "";
  };
  const [user, setUser] = useState(getUser());
  return (
    <div className="h-screen w-full flex">
      {/* left section for profile */}
      <div className="absolute flex h-full w-56 bg-red-200"></div>
    </div>
  );
}
