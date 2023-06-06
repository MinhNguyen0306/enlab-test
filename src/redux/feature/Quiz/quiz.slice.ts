import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./quiz.selector";
import { UserAnswer } from "../../../types/Question";

const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,
    reducers: {
        setUserAnswers: (state, action: PayloadAction<UserAnswer>) => {
            const newUserAnswers = [...state.userAnswers, action.payload];
            state.userAnswers = newUserAnswers;
        },

        clearUserAnswers: (state) => {
            state.userAnswers = initialState.userAnswers
        },
        
        setScore: (state, action: PayloadAction<number>) => {
            state.score += action.payload
        },

        resetScore: (state) => {
            state.score = 0
        }
    }
})

export const {
    setUserAnswers,
    clearUserAnswers,
    setScore,
    resetScore
} = quizSlice.actions;

export default quizSlice.reducer;