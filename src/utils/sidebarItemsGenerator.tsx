import { NavLink } from "react-router-dom";
import { TSidebarPath, TUserRoute } from "../types";

export function sidebarItemsGenerator(items: TUserRoute[], role: string) {
    const sidebarPaths = items.reduce(
        (acc: TSidebarPath[], cur) => {
            if (cur.path && cur.element) {
                acc.push({
                    key: cur.name,
                    label: (
                        <NavLink to={`/${role}/${cur.path}`}> {cur.name}</NavLink>
                    ),
                });
            } else if (cur.children) {
                acc.push({
                    key: cur.name,
                    label: cur.name,
                    children: cur.children.map((child) => ({
                        key: child.name,
                        label: (
                            <NavLink to={`/${role}/${child.path}`}>
                                {child.name}
                            </NavLink>
                        ),
                    })),
                });
            }
            return acc;
        },
        []
    );
    return sidebarPaths
}
