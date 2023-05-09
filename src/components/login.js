import loginBackground from "../static/images/loginbackground.jpg";
import FormInput from "./common/formInput";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    const user = {
      username: username,
      password: password,
    };
    console.log(user);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold mb-4">Daterbase</h1>
      <p className="text-2xl font-bold mb-16">Dating for tech workers</p>
      <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
      <div className="p-4 shadow-md rounded-lg max-w-[1000px]">
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <FormInput
            label={"username"}
            type={"text"}
            value={username}
            onChange={setUsername}
          />
          <FormInput
            label={"password"}
            type={"password"}
            value={password}
            onChange={setPassword}
          />
          <button
            type="submit"
            className="text-lg bg-red-600 rounded text-white"
          >
            Submit
          </button>
          <div className="w-full h-[0.5px] bg-gray-300 my-2 "></div>

          <span>
            New to daterbase?
            <a className="text-xs text-blue-700 mx-auto hover:border-b hover:border-blue-700 cursor-pointer pl-2">
              Signup
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
