import { Button, Space, Table } from "antd";

function Lab2() {
  const studentColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];

  const studentData = [
    {
      key: 1,
      id: 1,
      name: "Nam",
      age: 20,
      major: "IT",
    },
    {
      key: 2,
      id: 2,
      name: "Linh",
      age: 21,
      major: "Business",
    },
    {
      key: 3,
      id: 3,
      name: "Hà",
      age: 19,
      major: "Design",
    },
  ];

  const productColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  const productData = [
    {
      key: 1,
      id: 1,
      name: "Laptop",
      price: "$1000",
      category: "Electronics",
    },
    {
      key: 2,
      id: 2,
      name: "Mouse",
      price: "$20",
      category: "Accessories",
    },
    {
      key: 3,
      id: 3,
      name: "Keyboard",
      price: "$50",
      category: "Accessories",
    },
    {
      key: 4,
      id: 4,
      name: "Phone",
      price: "$700",
      category: "Electronics",
    },
    {
      key: 5,
      id: 5,
      name: "Headphone",
      price: "$80",
      category: "Audio",
    },
  ];

  const userColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <span style={{ color: status === "active" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      render: () => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const userData = [
    {
      key: 1,
      id: 1,
      name: "John",
      email: "john@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Anna",
      email: "anna@gmail.com",
      status: "inactive",
    },
    {
      key: 3,
      id: 3,
      name: "David",
      email: "david@gmail.com",
      status: "active",
    },
  ];

  return (
    <>
      <h2>Danh sách sinh viên</h2>
      <Table
        columns={studentColumns}
        dataSource={studentData}
        pagination={false}
      />

      <h2 style={{ marginTop: 30 }}>Danh sách sản phẩm</h2>
      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
      />

      <h2 style={{ marginTop: 30 }}>User Management</h2>
      <Table
        columns={userColumns}
        dataSource={userData}
        pagination={false}
      />
    </>
  );
}

export default Lab2;
