import {
    BaseQueryApi,
    FetchArgs,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        console.log({ token });
        if (token) {
            headers.set("authorization", token);
        }
        return headers;
    },
});

const baseQueryWithRefreshToken = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: Record<string, unknown>
) => {
    const result = await baseQuery(args, api, extraOptions);
    const errorStatus = result.error?.status;
    if (errorStatus === 401 || errorStatus === 403) {
        const res = await fetch(
            "http://localhost:5000/api/v1/auth/refresh-token",
            {
                method: "POST",
                credentials: "include",
            }
        );
        const getRefreshToken = await res.json();
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(
            setUser({ user, token: getRefreshToken.data.accessToken })
        );
    }
    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});
