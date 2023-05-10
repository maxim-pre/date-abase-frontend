import FormInput from "./common/formInput";
import { useState } from "react";
import Select from "react-select";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const options = [
    { value: "F", label: "Females" },
    { value: "M", label: "Males" },
  ];

  const navigate = useNavigate();

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
      const response = await authAxios.post(`${apiRoute}users`, {user: user});
      setError("");
      navigate("/dashboard");
    }
    catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
      <div className="p-4 rounded-lg max-w-[1000px] bg-[#e8e8e890] shadow-lg">
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
          <label for="gender" className="uppercase text-xl">I would like to meet...</label>
          <Select
            options={options}
            onChange={(choice) => setGender(choice.value)}
            className="my-2 "
            id="gender"
          />
          <button
            type="submit"
            className="text-xl bg-red-500 rounded text-white uppercase py-2 w-full px-32"
          >
            Create
          </button>
        </form>
        <Link to="/" className="text-md text-black-700 hover:border-b border-black-100 cursor-pointer">
          Back to login
        </Link>
        {error && <div className="bg-red-200 w-full rounded">
          Error: {error}
        </div>}

      </div>
  );
};

export default Signup;
