import { Button, Form, Input } from "antd";
import { useMutation,useQuery,useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Lab6() {
  const onFinish = () => {};
  return (
    <div>
      <h2>Lab 6</h2>
      <Form onFinish={onFinish}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Lab6;