import React, { useState } from "react";
import { Input, Button } from "../../components";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../../components/AuthLayout";
import { StyledFormHeader, StyledSeparator, StyledForm } from "./styled"

// const emailRules = {
// 	required: "Please enter your email address",
// 	pattern: {
// 		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
// 		message: "Enter a valid e-mail address",
// 	},
// }

// const passwordRules = {
// 	required: "Please enter your password",
// }


const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                        <Input value={email} onChange={onEmailChanged} placeholder="Please enter your email" label="Email"/>
                        <Input value={password} onChange={onPasswordChanged} label="Password" placeholder="Please enter your password"/>
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
        </AuthLayout>
    )
}

export default Login