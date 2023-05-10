import apiRoute from "./apiRoute";

// Get all questions
export const getAllQuestions = async () => {
  try {
    const response = await fetch(`${apiRoute}questions`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

