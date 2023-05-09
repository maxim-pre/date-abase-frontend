import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Routes, Route} from "react-router-dom";
import PageNotFound from './routes/pagenotfound';
import LoginPage from "./routes/login";
import SignUpPage from "./routes/signup";
import DashBoardPage from "./routes/dashboard";
import ConversationsPage from "./routes/conversations";
import BrowsePage from "./routes/browse";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/"
      element={<LoginPage/>} />
      
      <Route path="/dashboard"
      element={<DashBoardPage/>} />
      
      <Route path="/signup"
      element={<SignUpPage/>} />

      <Route path="/conversations"
      element={<ConversationsPage/>} />

      <Route path="/browse"
      element={<BrowsePage/>} />
      
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
