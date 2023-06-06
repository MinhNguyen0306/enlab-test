import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./globalState.selector";

const globalStateSlice = createSlice({
    name: "globalState",
    initialState: initialState,
    reducers: {
        setOpenModal: (state, action: PayloadAction<boolean>) => {
            state.openModal = action.payload;
        },

        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.globalLoading = action.payload;
        },

        setIsStart: (state, action: PayloadAction<boolean>) => {
            state.isStart = action.payload;
        }
    }
})

export const {
    setOpenModal,
    setGlobalLoading,
    setIsStart
} = globalStateSlice.actions;

export default globalStateSlice.reducer;