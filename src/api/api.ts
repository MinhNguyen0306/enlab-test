import { Question, QuestionState } from "../types/Question";
import { shufferAnswer } from "../utils/ShufferAnswer";

export const fetchQuestionsApi = async (amount: number) => {
    const url = `https://opentdb.com/api.php?amount=${amount}`;
    const response = await fetch(url);
    const data = await (response.json());
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shufferAnswer([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }
    )) as QuestionState[]
}