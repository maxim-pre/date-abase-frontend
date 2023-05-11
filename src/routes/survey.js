import { useState, useEffect } from'react';
import Select from'react-select';
import FormInput from '../components/common/formInput';
import { getAllQuestions } from '../lib/surveyApi';
import apiRoute from '../lib/apiRoute';

export default function SurveyForm({user}) {

    const [questions, setQuestions] = useState([]);
    const [sql, setSql] = useState([]);
    const [techStack, setTechStack] = useState([]);
    const [comments, setComments] = useState([]);
    const [coding, setCoding] = useState([]);
    const [whiteSpace, setWhiteSpace] = useState([]);

    useEffect(() => {
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

  const [error, setError] = useState("");

  const submit = async () => {
    try {
        const survey = [
            {questionId: questions[0]._id, answer: sql},
            {questionId: questions[1]._id, answer: techStack},
            {questionId: questions[2]._id, answer: comments},
            {questionId: questions[3]._id, answer: coding},
            {questionId: questions[4]._id, answer: whiteSpace}
        ]

        console.log(survey);

        const response = await fetch(`${apiRoute}surveys`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                survey: {
                    completedBy: user._id,
                    answers: survey
                }
            })
        });
        const data = await response.json();
        console.log(data);
        setError("");
        return(data)
    } catch (err) {
        setError(err.message);
        return(err)
    }

    
  };

  return (
    <div className="bg-[url('../src/static/images/AdobeStock_88856691.jpeg')] bg-center bg-cover py-8">
        <div className="mx-auto p-4 rounded-lg max-w-[1000px] bg-[#e8e8e890]">
        {questions.length>0 &&  <form
                className="flex flex-col"
                onSubmit={(e) => {
                e.preventDefault();
                submit();
                }}
            >
                <h2>Let's find out more about you!</h2>
                <br></br>
                <p>Welcome to our quick survey! By answering a few questions, our machine learning algorithm will use your responses to match you with the most romantically compatible partner based on your programming preferences and personality traits.</p>
                <br></br>
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
    </div>
)}