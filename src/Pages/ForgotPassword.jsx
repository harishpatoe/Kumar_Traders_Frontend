import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd'
import axios from "axios";


const ForgotPassword = () => {
  const [data, setData] = useState(null);     // 🔹 State to store API response
  const [error, setError] = useState("");     // 🔹 State to store error messages

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try {
      await axios.post("http://localhost:3000/api/auth/forgotPassword", values)
        .then(async (res) => {
          console.log(res)
          if (res.status === 200) {
            setData(res.data);
            const resMail = await axios.post("http://localhost:3000/api/auth/sendMail", values)
            console.log(resMail)
            console.log("Check Your mail");
          }
        })
    }
    catch (error) {
      console.log("Please check your credentials.")
      

    }
  };

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat font-[georgia]'
     >
      <div className="bg-white/80 p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-center text-2xl font-semibold text-[#453236] mb-6 ">Recover Account</h2>
        <p className="text-center text-gray-800 mb-6">Please enter your email id. We will send you a link to set a new password.</p>
        <Form
          name="Forgot-Password"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter registered email" />
          </Form.Item>
          <button type="primary" htmlType="submit" className="w-full bg-[#453236] hover:bg-[#7e5f5f] text-white p-1 border rounded-[5px] border-solid font-[georgia]">
            Send Reset Link
          </button>
          <a href='/Login' className="!text-[#453236] !text-center !hover:bg-[#7e5f5f] !font-[georgia]">Back to login</a>
        </Form>
      </div>
    </div>
  )
}

export default ForgotPassword;