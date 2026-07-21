// // // import { Form, Input, Button } from "antd";

// // // function Lab31() {
// // //   const onFinish = (data: any) => {
// // //     console.log(data);
// // //   };

// // //   return (
// // //     <Form layout="vertical" onFinish={onFinish}>
// // //       <Form.Item
// // //         label="Email"
// // //         name="email"
// // //         rules={[
// // //           { required: true, message: "Hãy nhập email" },
// // //           { type: "email", message: "Email không đúng định dạng" },
// // //         ]}
// // //       >
// // //         <Input />
// // //       </Form.Item>

// // //       <Form.Item
// // //         label="Password"
// // //         name="password"
// // //         rules={[{ required: true, message: "Hãy nhập password" }]}
// // //       >
// // //         <Input.Password />
// // //       </Form.Item>

// // //       <Button type="primary" htmlType="submit">
// // //         Login
// // //       </Button>
// // //     </Form>
// // //   );
// // // }

// // // export default Lab31;
// // import { Form, Input, Button } from "antd";

// // function Lab32() {
// //   const onFinish = (data: any) => {
// //     console.log(data);
// //   };

// //   return (
// //     <Form layout="vertical" onFinish={onFinish}>
// //       <Form.Item
// //         label="Name"
// //         name="name"
// //         rules={[{ required: true, message: "Hãy nhập tên" }]}
// //       >
// //         <Input />
// //       </Form.Item>

// //       <Form.Item
// //         label="Email"
// //         name="email"
// //         rules={[
// //           { required: true },
// //           { type: "email", message: "Email không hợp lệ" },
// //         ]}
// //       >
// //         <Input />
// //       </Form.Item>

// //       <Form.Item
// //         label="Phone"
// //         name="phone"
// //         rules={[{ required: true }]}
// //       >
// //         <Input />
// //       </Form.Item>

// //       <Form.Item
// //         label="Password"
// //         name="password"
// //         rules={[
// //           { required: true },
// //           { min: 6, message: "Ít nhất 6 ký tự" },
// //         ]}
// //       >
// //         <Input.Password />
// //       </Form.Item>

// //       <Form.Item
// //         label="Confirm Password"
// //         name="confirmPassword"
// //         dependencies={["password"]}
// //         rules={[
// //           { required: true },
// //           ({ getFieldValue }) => ({
// //             validator(_, value) {
// //               if (!value || getFieldValue("password") === value) {
// //                 return Promise.resolve();
// //               }
// //               return Promise.reject(
// //                 new Error("Password không trùng nhau")
// //               );
// //             },
// //           }),
// //         ]}
// //       >
// //         <Input.Password />
// //       </Form.Item>

// //       <Button type="primary" htmlType="submit">
// //         Register
// //       </Button>
// //     </Form>
// //   );
// // }

// // export default Lab32;
// import { Form, Input, Button, InputNumber } from "antd";

// function Lab33() {
//   const onFinish = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <Form layout="vertical" onFinish={onFinish}>
//       <Form.Item
//         label="Tên sản phẩm"
//         name="name"
//         rules={[{ required: true }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Giá"
//         name="price"
//         rules={[
//           { required: true },
//           { type: "number", min: 0 },
//         ]}
//       >
//         <InputNumber style={{ width: "100%" }} />
//       </Form.Item>

//       <Form.Item
//         label="Số lượng"
//         name="quantity"
//         rules={[
//           { required: true },
//           { type: "number", min: 1 },
//         ]}
//       >
//         <InputNumber style={{ width: "100%" }} />
//       </Form.Item>

//       <Form.Item
//         label="Mô tả"
//         name="description"
//       >
//         <Input.TextArea rows={4} />
//       </Form.Item>

//       <Button type="primary" htmlType="submit">
//         Thêm sản phẩm
//       </Button>
//     </Form>
//   );
// }

// export default Lab33;
import { useState } from "react";
import { Form, Input, Button, Select } from "antd";

function Lab34() {
  const [post, setPost] = useState<any>();

  const onFinish = (data: any) => {
    setPost(data);
  };

  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
        >
          <Select
            options={[
              { label: "Technology", value: "technology" },
              { label: "Sport", value: "sport" },
              { label: "Education", value: "education" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
        >
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="image"
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {post && (
        <div style={{ marginTop: 20 }}>
          <h3>Dữ liệu đã nhập</h3>
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Lab34;