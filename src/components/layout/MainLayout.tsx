import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;


export default function MainLayout() {
    return (
        <Layout className="h-full min-h-screen">
            <Sidebar />
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
