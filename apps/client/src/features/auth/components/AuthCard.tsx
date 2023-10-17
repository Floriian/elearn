import { Alert, Button, Card, Form, Input, Space } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { SignIn, signInSchema } from "@/features/auth/schemas";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "@/app";
import { signIn } from "@/features";
import { useNavigate } from "react-router-dom";
const flexCenter = {
    width: '100%',
    justifyContent: 'center',
}

export function AuthCard() {

    const [error, setError] = useState<ApiErrorResponse>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { control, formState: { errors }, handleSubmit } = useForm<SignIn>({
        resolver: zodResolver(signInSchema)
    });

    const submitData = async (data: SignIn) => {
        try {
            const { data: response } = await axios.post<{ accessToken: string; refreshToken: string }>("http://localhost:3000/api/auth/signin", {
                ...data,
            })
            console.log({ response })
            dispatch(signIn({ isAuthenticated: true, ...response }))
            navigate("/")

        } catch (apiError) {
            if (apiError instanceof AxiosError) {
                setError(apiError.response?.data);
            }
        }
    }

    return (
        <Space direction="horizontal">
            <Card title="Authentication">
                <Space direction="horizontal" style={flexCenter}>
                    <Form
                        name="loginForm"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 20 }}
                        onSubmitCapture={handleSubmit(submitData)}>
                        <Space direction="vertical" style={{ width: '100%', marginBottom: '1rem' }}>
                            <Alert type="error" message={error?.message} style={{ display: error ? 'block' : 'none' }} />
                        </Space>
                        <Form.Item
                            label="Email"
                            help={errors?.email?.message}
                        >

                            <Controller
                                name="email"
                                defaultValue=""
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} />
                                )}
                            />
                        </Form.Item>
                        <Form.Item label="Password" help={errors?.password?.message}>
                            <Controller
                                name="password"
                                defaultValue=""
                                control={control}
                                render={({ field }) => (
                                    <Input.Password {...field} />
                                )}
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Log In</Button>
                    </Form>
                </Space>
            </Card >
        </Space >
    )
}