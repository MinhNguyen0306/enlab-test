import { QuestionState, UserAnswer } from "../../../types/Question"

interface AnswersSlice {
    userAnswers: UserAnswer[],
    score: number
}

const initialState: AnswersSlice = {
    userAnswers: [],
    score: 0,
}

export default initialState;