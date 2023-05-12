import { useState } from "react";
import FormInput from "./common/formInput";
import Select from "react-select";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";

//State for userform update
const UpdateUserForm = ({ user, setModal }) => {
  const [username, setUsername] = useState(user.username);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.interestedInGender);
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [age, setAge] = useState(user.age ? user.age : 18);
  const [error, setError] = useState("");
  console.log(user);


  //  Allows user to add age
  const ageOptionsArray = Array.from(Array(120 + 1).keys()).slice(18);
  const ageOptions = ageOptionsArray.map((age) => {
    return { value: age, label: age.toString() };
  });

  // gender array
  const genderOptions = [
    { value: "F", label: "women" },
    { value: "M", label: "men" },
    { value: "O", label: "other" },
  ];


  //submit function
  const submit = async () => {
    try {
      const response = await authAxios.put(`${apiRoute}users/${user._id}`, {
        username: username,
        firstName: firstName,
        lastName: lastName,
        interestedInGender: gender,
        bio: bio,
        age: age,
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (

    // form input
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="max-w-[500px] mx-auto flex flex-col mb-8"
    >
      <FormInput
        label={"Username"}
        type={"text"}
        value={username}
        onChange={setUsername}
      />

      <FormInput
        label={"First Name"}
        type={"text"}
        value={firstName}
        onChange={setFirstName}
      />

      <FormInput
        label={"Last Name"}
        type={"text"}
        value={lastName}
        onChange={setLastName}
      />


      <label htmlFor="age">My age</label>
            <Select
              options={ageOptions}
              onChange={(choice) => setAge(choice.value)}
              className="my-2 "
              id="age"
            />

      <label htmlFor="gender">I would like to meet...</label>

      <Select
        isMulti
        options={genderOptions}
        onChange={(choice) => {
          setGender([...choice.map((obj) => obj.value)]);
        }}
        className="my-2 "
        id="gender"
      />


      
      <label htmlFor="bio">A bit about me...</label>
      <textarea
        className="border border-gray-200 p-2"
        id="bio"
        name="bio"
        rows={6}
        cols={40}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit" className="p-2 text-white bg-red-500 my-6 uppercase text-2xl">
        submit
      </button>
    </form>
  );
};

export default UpdateUserForm;
