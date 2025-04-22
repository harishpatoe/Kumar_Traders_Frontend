import React, { useState } from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // 🔹 State to store API response
  const [error, setError] = useState(""); // 🔹 State to store error messages

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", values)
        .then((res) => {
          if (res.status === 200) {
            setData(res.data); // 🔹 Store response data
            console.log("SignUp Success:", res.data);
            navigate("/Login"); // 🔹 Navigate after successful signup
          }
        });
    } catch (err) {
      setError("Sign Up failed. Please try again."); // 🔹 Handle errors
      console.error("SignUp Error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="bg-[rgba(255,255,255,0.2)] border shadow-[0_4px_10px_rgba(0,0,0,0.8)] gap-[15px] w-full max-w-[400px] text-center backdrop-blur-[5px] p-[30px] rounded-lg border-solid border-[#453236];">
        <h2 className="text-center text-[#453236] text-2xl font-semibold mb-6">Sign Up</h2>

        <Form name="signup" onFinish={onFinish}>
          {/* Username */}
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          {/* Terms & Conditions */}
          <Form.Item>
            <Checkbox>
              I agree to the <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          {/* Sign Up Button */}
          <Form.Item>
            <button
              type="primary"
              htmlType="submit"
              className="text-black w-full bg-[#453236] p-2 hover:bg-[#7e5f5f;] border rounded-[5px] border-solid"
            >
              Sign Up
            </button>
          </Form.Item>

          {/* Already have an account? */}
          <div className="text-center mt-2">
            <span>Already have an account? </span>
            <a href="/Login" className="text-gray-600 hover:text-gray-900">
              Log in
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
