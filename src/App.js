import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
import DashBoard from "./components/dashBoard";


function App() {
  return (
    <div className="App">
      <LoginForm />
      <DashBoard />
      <SignUpForm />
    </div>
  );
}

export default App;
