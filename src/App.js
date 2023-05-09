import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Routes, Route} from "react-router-dom";
import PageNotFound from './routes/pagenotfound';
import Login from "./routes/login";
import SignUp from "./routes/signup";
import DashBoard from "./components/dashBoard";
import Conversations from "./routes/conversations";
import Browse from "./routes/browse";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/"
      element={<Login/>} />
      
      <Route path="/dashboard"
      element={<DashBoard/>} />
      
      <Route path="/signup"
      element={<SignUp/>} />

      <Route path="/conversations"
      element={<Conversations/>} />

      <Route path="/browse"
      element={<Browse/>} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
