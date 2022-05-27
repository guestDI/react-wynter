import React, { useCallback, useState } from "react";
import { Input, Button, FormItem } from "../components";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../components/AuthLayout";
import { StyledForm, StyledFormHeader, StyledSeparator } from "../components/StyledComponentsBase";
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";

const emailMessage = "Incorrect email"
const passwordMessage = "Incorrect password"

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const { checkIfUserExists, login } = useAuthContext()

    const onEmailChanged = (value: string) => {
        setEmail(value)
    }

    const onPasswordChanged = (value: string) => {
        setPassword(value)
    }

    const logIn = useCallback(() => {
        const emailError = !email.length ? emailMessage : ""
        const passwordError = !password.length ? passwordMessage : ""

        setErrors({
            email: emailError,
            password: passwordError
        })

        if(!checkIfUserExists(email)){
            setErrors({
                password: "",
                email: "User doesn't exists. Please sign up"
            })
        } else {
            login()
            navigate("/dashboard")
        }
    }, [checkIfUserExists, login, navigate, password.length, email])

    const onSuccess = (response: any) => {
        console.log(response, "success")
    }

    const onFailure = (response: any) => {
        console.log(response, "failure")
    }

    return (
        <AuthLayout>
            <StyledFormHeader>Welcome Back</StyledFormHeader>
			<StyledForm noValidate>
                <StyledSeparator>LOG IN WITH EMAIL</StyledSeparator>
                    <div className="form-controls">
                        <FormItem label="Email" error={errors.email}>
                            <Input value={email} onChange={onEmailChanged} placeholder="Please enter your email" />
                        </FormItem>
                        <FormItem label="Password" error={errors.password}>
                            <Input value={password} onChange={onPasswordChanged} placeholder="Please enter your password"/>
                        </FormItem>
                        <Button onClick={logIn} type="button">
                            Log in
                        </Button>
                    </div>
			</StyledForm>

            <StyledForm style={{ width: "40rem",}}>
                <StyledSeparator>LOG IN WITH GOOGLE</StyledSeparator>
                <div className="btn-container">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID!}
                        buttonText="Log in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'} 
                        className="google-btn"
                    />
                    <span>OR</span>
                    <button className="link" onClick={() => navigate("/signUp")}>Sign Up</button>  
                </div>   
            </StyledForm>
        </AuthLayout>
    )
}

export default Login