import { createSlice } from "@reduxjs/toolkit";

type TUserState = {
    user: null | object;
    token: null | string;
};

const initialState: TUserState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});


export default authSlice.reducer
export const {logout, setUser} = authSlice.actions
