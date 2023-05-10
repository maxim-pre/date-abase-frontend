
import FormInput from "./common/formInput";
import { useState } from "react";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await authAxios.post(`${apiRoute}login`, {user: user})
      console.log(response);
      localStorage.setItem("token", response.data.token);
      setError("");
    }
    catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
      <div className="p-4 rounded-lg max-w-[1000px] bg-[#e8e8e890] shadow-lg">
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
            className="text-xl bg-red-500 rounded text-white uppercase py-2 shadow-xl"
          >
            Submit
          </button>
          <div className="w-full h-[0.5px] bg-gray-300 my-2 "></div>

          <span className="text-xl py-4 text-shadow-white">
            New to DaterBase?
            <Link to="/signup" className=" text-shadow-none shadow-xl text-lg text-white bg- hover:border-b ml-3 px-5 rounded bg-red-500 border-blue-700 cursor-pointer uppercase py-2 ">
              Sign up!
            </Link>
          </span>
        </form>
        {error && <div className="bg-red-200 w-full rounded">
          Error: {error}
        </div>}
      </div>
  );
};

export default Login;
