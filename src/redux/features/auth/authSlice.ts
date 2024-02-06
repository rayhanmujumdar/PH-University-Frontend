import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
};

type TUserState = {
    user: null | TUser;
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

export default authSlice.reducer;
export const { logout, setUser } = authSlice.actions;
