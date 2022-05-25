import React, { useState } from "react";
import { Input, Button, FormItem } from "../components";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../components/AuthLayout";
import { StyledForm, StyledFormHeader, StyledSeparator } from "../components/StyledComponentsBase";
import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onEmailChanged = (value: string) => {
        setEmail(value)
    }

    const onPasswordChanged = (value: string) => {
        setPassword(value)
    }

    return (
        <AuthLayout>
        <StyledFormHeader>Welcome Back</StyledFormHeader>
			<StyledForm noValidate>
                <StyledSeparator>LOG IN WITH EMAIL</StyledSeparator>
                    <div className="form-controls">
                        <FormItem label="Email">
                            <Input value={email} onChange={onEmailChanged} placeholder="Please enter your email" />
                        </FormItem>
                        <FormItem label="Password">
                            <Input value={password} onChange={onPasswordChanged} placeholder="Please enter your password"/>
                        </FormItem>
                        <Button onClick={() => {}}>
                            Log in
                        </Button>
                    </div>
			</StyledForm>

            <StyledForm style={{ width: "40rem",}}>
                <StyledSeparator>LOG IN WITH GOOGLE</StyledSeparator>
                <div className="btn-container">
                    <GoogleLogin
                        clientId="611176137432-nuq0crbc6gic387rb0pu4clglb2n7hrq.apps.googleusercontent.com"
                        buttonText="Log in with Google"
                        onSuccess={() => {console.log('success')}}
                        onFailure={() => {}}
                        cookiePolicy={'single_host_origin'} 
                    />
                </div>     
            </StyledForm>
            <StyledSeparator>OR</StyledSeparator>
            <Button onClick={() => navigate("/signUp")}>Sign Up</Button>
        </AuthLayout>
    )
}

export default Login