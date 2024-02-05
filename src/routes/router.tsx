import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <App />,
        children: routesGenerator(adminPaths, <AdminDashboard />)
    },
    {
        path: "/faculty",
        element: <App />,
        children: routesGenerator(facultyPaths, <FacultyDashboard />)
    },
    {
        path: "/student",
        element: <App />,
        children: routesGenerator(studentPaths, <StudentDashboard />)
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);

export default router;