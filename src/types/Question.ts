export interface Question {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
}

export type QuestionState = Question & { answers: string[] };

export interface UserAnswer {
    question: Question,
    correct: boolean,
    choose: string,
    answerTime: number
  }