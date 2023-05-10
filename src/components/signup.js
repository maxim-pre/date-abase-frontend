import FormInput from "./common/formInput";
import { useState } from "react";
import Select from "react-select";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import { Link } from "react-router-dom";

const Signup = () => {
  const options = [
    { value: "F", label: "Females" },
    { value: "M", label: "Males" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      interestedInGender: gender,
    };
    try {
      const response = await authAxios.post(`${apiRoute}users`, { user: user });
      if (response.status === 200) {
        const loginResponse = await authAxios.post(`${apiRoute}login`, {
          user: { username: user.username, password: user.password },
        });
        localStorage.setItem("token", loginResponse.data.token);
        setError("");
        window.location.href = "/";
      }
      console.log(response);
      setError("");
      // window.location.href = "/";
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="shadow-md p-4 max-w-[1000px]">
      <form
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
          type={"text"}
          value={password}
          onChange={setPassword}
        />
        <FormInput
          label={"firstName"}
          type={"text"}
          value={firstName}
          onChange={setFirstName}
        />
        <FormInput
          label={"lastName"}
          type={"text"}
          value={lastName}
          onChange={setLastName}
        />
        <label for="gender">I would like to meet...</label>
        <Select
          options={options}
          onChange={(choice) => setGender(choice.value)}
          className="my-2 "
          id="gender"
        />
        <button type="submit" className="bg-red-500 w-full rounded text-white">
          Create
        </button>
      </form>
      <Link
        to="/"
        className="text-xs text-blue-700 hover:border-b border-blue-700 cursor-pointer"
      >
        Back to login
      </Link>
      {error && <div className="bg-red-200 w-full rounded">Error: {error}</div>}
    </div>
  );
};

export default Signup;
