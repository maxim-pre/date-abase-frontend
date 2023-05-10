import { useState, useEffect } from'react';
import Select from'react-select';
import FormInput from '../components/common/formInput';
import { getAllQuestions } from '../lib/surveyApi';
import apiRoute from '../lib/apiRoute';

export default function EditProfilePage({user}) {

    const [questions, setQuestions] = useState([]);
    const [sql, setSql] = useState([]);
    const [techStack, setTechStack] = useState([]);
    const [comments, setComments] = useState([]);
    const [coding, setCoding] = useState([]);
    const [whiteSpace, setWhiteSpace] = useState([]);

    useEffect(() => {
        console.log('getting some data')
        getAllQuestions()
        .then((data) => { 
            data.sort((a, b) => (a.questionText > b.questionText? 1 : -1))
                .map((question) => {
                    question.possibleAnswers = question.possibleAnswers.map((answer) => {
                        
                        return { value: answer, label: answer }
                    })
                    return question
            })
            setQuestions(data) 
        })
    }, []);

  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const options = [
    { value: "F", label: "Female" },
    { value: "M", label: "Male" },
    { value: "NB", label: "Non-Binary" },
    { value: "O", label: "Other" }
  ];

  const [error, setError] = useState("");

  const submit = async () => {
    try {
        console.log(user._id);
        const response = await fetch(`${apiRoute}users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bio: bio, location: location, gender: gender
            })
        });
        const data = await response.json();
        console.log(data);
        setError("");
    } catch (err) {
        setError(err.message);
    }

    // try {
    //     console.log(user._id);
    //     const response = await fetch(`${apiRoute}users/${user._id}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             bio: bio, location: location, gender: gender
    //         })
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     setError("");
    // } catch (err) {
    //     setError(err.message);
    // }

    
  };

  return (
    <div className="p-4 rounded-lg max-w-[1000px] bg-[#e8e8e890]">
      {questions.length>0 &&  <form
            className="flex flex-col"
            onSubmit={(e) => {
            e.preventDefault();
            submit();
            }}
        >
            <FormInput
            label={"Write a nice little bio about yourself!"}
            type={"text"}
            value={bio}
            onChange={setBio}
            />
            <FormInput
            label={"Where are you?"}
            type={"text"}
            value={location}
            onChange={setLocation}
            />
            <label htmlFor="gender">What is your gender?</label>
            <Select
            options={options}
            onChange={(choice) => setGender(choice.value)}
            className="my-2 "
            id="gender"
            />
            
            <label htmlFor="sql">{questions[0].questionText}</label>
            <Select
            options={questions[0].possibleAnswers}
            onChange={(choice) => setSql(choice.value)}
            className="my-2 "
            id="sql"
            />
            <label htmlFor="techStack">{questions[1].questionText}</label>
            <Select
            options={questions[1].possibleAnswers}
            onChange={(choice) => setTechStack(choice.value)}
            className="my-2 "
            id="techStack"
            />
            <label htmlFor="comments">{questions[2].questionText}</label>
            <Select
            options={questions[2].possibleAnswers}
            onChange={(choice) => setComments(choice.value)}
            className="my-2 "
            id="comments"
            />
            <label htmlFor="coding">{questions[3].questionText}</label>
            <Select
            options={questions[3].possibleAnswers}
            onChange={(choice) => setCoding(choice.value)}
            className="my-2 "
            id="coding"
            />
            <label htmlFor="whiteSpace">{questions[4].questionText}</label>
            <Select
            options={questions[4].possibleAnswers}
            onChange={(choice) => setWhiteSpace(choice.value)}
            className="my-2 "
            id="whiteSpace"
            />
            
            <button type="submit" className="text-lg bg-red-600 rounded text-white">
            Submit
            </button>
            <div className="w-full h-[0.5px] bg-gray-300 my-2 "></div>
            </form>}
    </div>
)}