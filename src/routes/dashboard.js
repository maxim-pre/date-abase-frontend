import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function DashboardPage() {
  const [user, setUser] = useState("");
  return (
    <div className="h-screen w-full flex">
      {/* left section for profile */}
      <div className="absolute flex h-full w-56 bg-red-200"></div>
    </div>
  );
}
