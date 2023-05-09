import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Routes, Route} from "react-router-dom";
import PageNotFound from './routes/PageNotFound';
import Login from "./routes/login";
import SignUp from "./routes/signup";
import DashBoard from "./components/dashBoard";

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
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
