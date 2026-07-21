import { useState } from "react";
import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Table,
  Modal,
  Tabs,
} from "antd";

const { Header, Sider, Content } = Layout;

function Lab() {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log("Đăng ký:", values);
  };

  const onAddUser = (values: any) => {
    console.log("User mới:", values);
    setOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  const data = [
    {
      key: 1,
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      role: "Admin",
    },
    {
      key: 2,
      name: "Trần Thị B",
      email: "b@gmail.com",
      role: "User",
    },
    {
      key: 3,
      name: "Lê Văn C",
      email: "c@gmail.com",
      role: "Editor",
    },
  ];

  return (
    <Tabs
      items={[
        {
          key: "1",
          label: "Bài 1",
          children: (
            <Layout style={{ minHeight: 400 }}>
              <Header style={{ color: "white" }}>
                Dashboard Header
              </Header>

              <Layout>
                <Sider>
                  <Menu
                    theme="dark"
                    items={[
                      { key: "1", label: "Dashboard" },
                      { key: "2", label: "Users" },
                      { key: "3", label: "Products" },
                    ]}
                  />
                </Sider>

                <Content style={{ padding: 20 }}>
                  Nội dung Dashboard
                </Content>
              </Layout>
            </Layout>
          ),
        },

        {
          key: "2",
          label: "Bài 2",
          children: (
            <Form
              layout="vertical"
              onFinish={onFinish}
              style={{ maxWidth: 400 }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true },
                  { type: "email" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          ),
        },

        {
          key: "3",
          label: "Bài 3",
          children: (
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          ),
        },

        {
          key: "4",
          label: "Bài 4",
          children: (
            <>
              <Button
                type="primary"
                onClick={() => setOpen(true)}
              >
                Add User
              </Button>

              <Modal
                title="Thêm User"
                open={open}
                footer={null}
                onCancel={() => setOpen(false)}
              >
                <Form layout="vertical" onFinish={onAddUser}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true },
                      { type: "email" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true }]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Button type="primary" htmlType="submit">
                    Thêm User
                  </Button>
                </Form>
              </Modal>
            </>
          ),
        },
      ]}
    />
  );
}

export default Lab;