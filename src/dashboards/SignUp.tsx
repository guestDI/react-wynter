import React, { useCallback, useState } from "react";
import { Input, Button, FormItem } from "../components";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../components/AuthLayout";
import { StyledForm, StyledFormHeader, StyledSeparator } from "../components/StyledComponentsBase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useFetch, useValidate } from "../hooks";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const { errors, validate } = useValidate()
    const { data: users } = useFetch(`${process.env.REACT_APP_DB}/users.json` || "")
    
    const navigate = useNavigate()
    const { checkIfUserExists, login } = useAuthContext()

    const onEmailChanged = (value: string) => {
        setEmail(value)
    }

    const onPasswordChanged = (value: string) => {
        setPassword(value)
    }

    const onConfirmPasswordChanged = (value: string) => {
        setConfirmedPassword(value)
    }

    const signUp = useCallback(() => {
        const isFormValid = validate({email, password})
        if(isFormValid && !checkIfUserExists(users, email)){
            login()
            navigate("/dashboard")
        } else {
            alert("User already exists. Please Sign In")
        }
    }, [login, navigate, email, password, checkIfUserExists, users])

    return (
        <AuthLayout>
        <StyledFormHeader>Sign Up</StyledFormHeader>
			<StyledForm >
                <StyledSeparator>SIGN UP WITH EMAIL</StyledSeparator>
                    <div className="form-controls">
                        <FormItem label="Email" error={errors.email}>
                            <Input value={email} onChange={onEmailChanged} placeholder="Please enter your email" />
                        </FormItem>
                        <FormItem label="Password" error={errors.password}>
                            <Input value={password} onChange={onPasswordChanged} placeholder="Please enter your password"/>
                        </FormItem>
                        <FormItem label="Confirm Password">
                            <Input value={confirmedPassword} onChange={onConfirmPasswordChanged} placeholder="Please repeat your password"/>
                        </FormItem>
                        <Button onClick={signUp} type="button">
                            Sign Up
                        </Button>
                    </div>
			</StyledForm>

            <StyledForm style={{ width: "40rem",}}>
                <StyledSeparator>SIGN UP WITH GOOGLE</StyledSeparator>
                <div className="btn-container">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID!}
                        buttonText="Sign up with Google"
                        onSuccess={() => {console.log('success')}}
                        onFailure={() => {}}
                        cookiePolicy={'single_host_origin'} 
                    />
                    <span>OR</span>
                    <button className="link" onClick={() => navigate("/")}>Sign In</button>  
                </div> 
            </StyledForm>
        </AuthLayout>
    )
}

export default SignUp