interface GlobalStateSlice {
    openModal: boolean;
    globalLoading: boolean;
    isStart: boolean;
}

const initialState: GlobalStateSlice = {
    openModal: false,
    globalLoading: false,
    isStart: false
}

export default initialState;