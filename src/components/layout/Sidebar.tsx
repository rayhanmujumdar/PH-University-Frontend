import { Layout, Menu } from "antd";
import { useCurrentUser } from "../../redux/features/auth/authSelector";
import { TUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

export default function Sidebar() {
    const user = useAppSelector(useCurrentUser) as TUser
    let sidebarItems;
    switch (user.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;
        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div className="text-white text-2xl text-center h-16 flex justify-center items-center">
                Ph University
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["Dashboard"]}
                items={sidebarItems}
            />
        </Sider>
    )
}
