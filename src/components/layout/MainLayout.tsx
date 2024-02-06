import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;


export default function MainLayout() {
    const dispatch = useAppDispatch()
    return (
        <Layout className="h-full min-h-screen">
            <Sidebar />
            <Header>
                <Button className="bg-white" onClick={() => dispatch(logout())}>Logout</Button>
            </Header>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
