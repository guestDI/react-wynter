import React, { useCallback, useState } from "react";
import { Input, Button, FormItem } from "../components";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../components/AuthLayout";
import { StyledForm, StyledFormHeader, StyledSeparator } from "../components/StyledComponentsBase";
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";
import { useFetch, useValidate } from "../hooks";

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { data: users } = useFetch(`${process.env.REACT_APP_DB}/users.json` || "")

    const { checkIfUserExists, login } = useAuthContext()
    const { errors, validate } = useValidate()

    const onEmailChanged = (value: string) => {
        setEmail(value)
    }

    const onPasswordChanged = (value: string) => {
        setPassword(value)
    }

    const handleLogIn = useCallback(() => {
        const isFormValid = validate({email, password})

        if(isFormValid && checkIfUserExists(users, email)){
            login()
            navigate("/dashboard")
        } else {
            //ugly notification to notify that user doesn't exist
            alert("User doesn't exist. Please Sign up")
        }
    }, [validate, email, password, login, navigate, checkIfUserExists, users])

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
                        <Button onClick={handleLogIn} type="button">
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