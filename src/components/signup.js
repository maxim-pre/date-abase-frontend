import FormInput from "./common/formInput";
import { useState } from "react";
import Select from "react-select";
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

  const submit = () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      interestedInGender: gender,
    };
    console.log(user);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold my-4">Create an account!</h2>
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
          <button
            type="submit"
            className="bg-red-500 w-full rounded text-white"
          >
            Create
          </button>
        </form>
        <a className="text-xs text-blue-700 hover:border-b border-blue-700 cursor-pointer">
          Back to login
        </a>
      </div>
    </div>
  );
};

export default Signup;
