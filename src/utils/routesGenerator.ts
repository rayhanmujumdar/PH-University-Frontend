import { ReactNode } from "react";
import { TRoute, TUserRoute } from "../types";
export function routesGenerator(items: TUserRoute[], DefaultNode: ReactNode) {
    const routes = items.reduce(
        (acc: TRoute[], cur) => {
            if (cur.path && cur.element) {
                acc.push({
                    path: cur.path,
                    element: cur.element,
                });
            } else if (cur.children) {
                cur.children.forEach((child) => {
                    acc.push({
                        path: child.path,
                        element: child.element,
                    });
                });
            }
            return acc;
        },
        [
            {
                index: true,
                element: DefaultNode,
            },
        ]
    );
    return routes;
}
