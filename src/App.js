import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./routes/pagenotfound";
import LoginPage from "./routes/login";
import SignUpPage from "./routes/signup";
import DashBoardPage from "./routes/dashboard";
import ConversationsPage from "./routes/conversations";
import BrowsePage from "./routes/browse";
import jwt_decode from "jwt-decode";
import apiRoute from "./lib/apiRoute";
import authAxios from "./lib/authAxios";
import { useEffect, useState } from "react";
import { element } from "prop-types";
import Logout from "./routes/logout";
function App() {
  const [user, setUser] = useState("");
  // fetches logged in user data
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const userId = jwt_decode(token).id;
        const response = await authAxios.get(`${apiRoute}users/${userId}`);
        setUser(response.data.user);
      } else {
        return setUser("");
      }
    };
    try {
      setUser(fetchData());
    } catch (error) {
      return "";
    }
  }, []);
  console.log(user);

  if (!user._id) {
    return (
      <div className="App varela">
        <Navbar user={user} />
        <Routes>
          <Route path={"/"} element={<LoginPage />} />

          <Route path={"/signup"} element={<SignUpPage />} />

          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App varela">
        <Navbar user={user} />
        <Routes>
          <Route path={"/"} element={<DashBoardPage user={user} />} />

          <Route path={"/logout"} element={<Logout />} />

          <Route path={"/conversations"} element={<ConversationsPage user={user} />} />

          <Route path={"/browse"} element={<BrowsePage />} />

          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
