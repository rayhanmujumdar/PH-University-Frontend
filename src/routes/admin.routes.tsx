import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import AcademicSemester from "../pages/admin/academicSemester/AcademicSemester";

export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />,
    },
    {
        name: "Academic Semester",
        children: [
            {
                name: "Academic semester",
                path: "academic-semester",
                element: <AcademicSemester />,
            },
        ],
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />,
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />,
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />,
            },
        ],
    },
];

// ! imperative way to route defined
// export const adminPaths = [
//     {
//         index: true,
//         element: <AdminDashboard />,
//     },
//     {
//         path: "dashboard",
//         element: <AdminDashboard />,
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin />,
//     },
//     {
//         path: "create-faculty",
//         element: <CreateFaculty />,
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent />,
//     },
// ];

// * declarative way to route defined

// export const adminRoutes = adminPaths.reduce(
//     (acc: TAdminRoutes[], cur) => {
//         if (cur.path && cur.element) {
//             acc.push({
//                 path: cur.path,
//                 element: cur.element
//             })
//         } else if (cur.children) {
//             cur.children.forEach((child) => {
//                 acc.push({
//                     path: child.path,
//                     element: child.element
//                 })
//             })
//         }
//         return acc
//     },
//     [
//         {
//             index: true,
//             element: <AdminDashboard />,
//         },
//     ]
// );

//! imperative way to items object create
// const items: MenuProps["items"] = [
//     {
//         key: "Dashboard",
//         label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>,
//     },
//     {
//         key: "User Management",
//         label: "User Management",
//         children: [
//             {
//                 key: "Create Admin",
//                 label: <NavLink to='/admin/create-admin'>Create Admin</NavLink>,
//             },
//             {
//                 key: "Create Faculty",
//                 label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
//             },
//             {
//                 key: "Create Student",
//                 label: <NavLink to='/admin/create-student'>Create Student</NavLink>,
//             },
//         ],
//     },
// ];

// * declarative way to items object create

// export const adminSidebarPaths = adminPaths.reduce((acc: TAdminSidebarPath[], cur) => {
//     if (cur.path && cur.element) {
//         acc.push({
//             key: cur.name,
//             label: <NavLink to={`/admin/${cur.path}`}> {cur.name}</NavLink>
//         })
//     } else if (cur.children) {
//         acc.push({
//             key: cur.name,
//             label: cur.name,
//             children: cur.children.map((child) => ({ key: child.name, label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink> }))
//         })
//     }
//     return acc
// }, [])
