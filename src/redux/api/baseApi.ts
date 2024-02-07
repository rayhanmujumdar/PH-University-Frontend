import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", token);
        }
        return headers;
    },
});

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
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
        if (getRefreshToken.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({ user, token: getRefreshToken.data?.accessToken })
            );
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
            toast.error("Access denied! Please login", {
                className: "!text-red-500",
            });
        }
    }
    return result;
};

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});
