const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    result : null,
    isLoading: false,
}
const reducers = {
    fetchUserRequest: (state,{payload: name}) => {
        state.isLoading = true;
    },
    fetchUserSuccess: (state,{payload: result}) => {
        state.result = result;
        state.isLoading = false;
    },
    fetchUserFailure: (state,{payload: error}) =>{
        state.error = error;
        state.isLoading = false;
    },
}


export const searchSlice = createSlice({
    name : 'SearchUser',
    initialState,
    reducers : reducers
})

export const SearchUser = searchSlice.name;
export const searchUserReducer = searchSlice.reducer;
export const searchUserActions = searchSlice.actions;

export const searchUserSelector = state => state.SearchUser.result;
export const searchErrorSelector = state => state.SearchUser.error;
export const searchisLoadingSelector = state => state.SearchUser.isLoading;

