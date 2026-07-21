import { useState } from "react";
import {
  Table,
  Image,
  Spin,
  Button,
  Input,
  Popconfirm,
  message,
} from "antd";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

function Lab4() {
  const [keyword, setKeyword] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      message.success("Xóa thành công");

      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
    onError: () => {
      message.error("Xóa thất bại");
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "cover",
      render: (url: string) => (
        <Image src={url} width={60} />
      ),
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        date
          ? new Date(date).toLocaleDateString("vi-VN")
          : "-",
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Popconfirm
          title="Xóa truyện này?"
          onConfirm={() => handleDelete(record.id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <Button danger>Xóa</Button>
        </Popconfirm>
      ),
    },
  ];

  if (isLoading) return <Spin />;

  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return (
    <div>
      <h2>Danh sách truyện</h2>

      {/* Search */}
      <Input
        placeholder="Tìm theo tên truyện"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ width: 300, marginBottom: 16 }}
      />

      <Table
        rowKey="id"
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default Lab4;