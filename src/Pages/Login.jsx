import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import {useNavigate} from "react-router"
import {baseURL} from "../../Config"
import axiosInstance from "../../axiosInstance"
const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState(null);     // 🔹 State to store API response
    const [error, setError] = useState("");     // 🔹 State to store error messages

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        try {
            const response = await axios.post(`${baseURL}/api/auth/Login`, values);
            console.log(response);

            if (response.data.success) {
                localStorage.setItem('token', response.data.access_token);
                console.log('Token saved:', response.data.access_token);
                navigate('/'); 
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid credentials, please try again.');
        }
    };
    
  return (  
    <div 
        className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat' >
        {/* style={{ backgroundImage: url(${bgImage}) }}  */}
            <div className="bg-[rgba(255,255,255,0.2)] border shadow-[0_4px_10px_rgba(0,0,0,0.8)] gap-[15px] w-full max-w-[400px] text-center backdrop-blur-[5px] p-[30px] rounded-lg border-solid border-[#453236];">
                <h2 className='text-center text-[#453236] text-2xl font-semibold mb-6'>Login</h2>

        <Form
            name="login"
            onFinish={onFinish} 
        >
            <Form.Item
                name="username"
                rules={[
                    {
                    required: true, message: 'Please input your username!',
                    },
                ]}
            >
            <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
            name="password"
            rules={[
                {
                required: true, message: 'Please input your password!',
                },
                ]}
            >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
            <div className="flex justify-between w-full">
                <Form.Item name="remember" valuePropName="checked" >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="/ForgotPassword" className="text-gray-600 hover:text-gray-900">Forgot password</a>
            </div>
            </Form.Item>

            <Form.Item>
                <button type="primary" htmlType="submit" className="text-black w-full bg-[#453236] p-2 hover:bg-[#7e5f5f;] border rounded-[5px] border-solid "> 
                    Log in 
                </button>
            </Form.Item>
        </Form>
    </div>
</div>
  )
}

export default Login