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
import EditProfilePage from "./routes/survey";
import SurveyForm from "./routes/survey";

function App() {
  const [user, setUser] = useState("");

  // fetches logged in user data and sets user state
  async function fetchData () {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = jwt_decode(token).id;
      const response = await authAxios.get(`${apiRoute}users/${userId}`);
      setUser(response.data.user);
    } else {
      setUser("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!user._id) {
    return (
      <div className="App varela" id="app">
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
      <div className="App varela" id="app">
        <Navbar user={user} />
        <Routes>
          <Route path={"/"} element={<DashBoardPage user={user} fetchData={fetchData} />} />

          <Route
            path={"/survey"}
            element={<SurveyForm user={user} />}
          />

          <Route path={"/logout"} element={<Logout />} />

          <Route
            path={"/conversations"}
            element={<ConversationsPage user={user} />}
          />

          <Route path={"/browse"} element={<BrowsePage user={user} fetchData={fetchData} />} />

          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
