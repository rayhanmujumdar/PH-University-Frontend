import { ReactNode } from "react";

export type TUserRoute = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserRoute[];
};

export type TRoute = {
    index?: boolean;
    path?: string;
    element: ReactNode;
};

export type TSidebarPath = {
    key: string;
    label: ReactNode;
    children?: TSidebarPath[];
};
