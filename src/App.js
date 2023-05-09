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
function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const userId = jwt_decode(token).id;
      const response = await authAxios.get(`${apiRoute}users/${userId}`);
      console.log(response.data.user);
      setUser(response.data.user);
    };
    try {
      setUser(fetchData());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App varela">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<LoginPage />} />

        <Route path={"/dashboard"} element={<DashBoardPage />} />

        <Route path={"/signup"} element={<SignUpPage />} />

        <Route path={"/conversations"} element={<ConversationsPage />} />

        <Route path={"/browse"} element={<BrowsePage />} />

        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
