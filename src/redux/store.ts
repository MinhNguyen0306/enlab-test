import { configureStore } from "@reduxjs/toolkit";
import globalStateSlice from "./feature/GlobalState/globalState.slice";
import quizSlice from "./feature/Quiz/quiz.slice";

export const store = configureStore({
    reducer: {
        globalStateSlice: globalStateSlice,
        quizSlice: quizSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch