import React, { useCallback, useState } from "react";
import { Input, Button, FormItem } from "../components";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../components/AuthLayout";
import { StyledForm, StyledFormHeader, StyledSeparator } from "../components/StyledComponentsBase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const emailMessage = "Incorrect email"
const passwordMessage = "Incorrect password"
const confirmPasswordMessage = "Passwords not match"

const submit = async (email: string, cb: () => void ) => {
    await fetch(`${process.env.REACT_APP_DB}/users.json`, {
        method: "POST",
        body: JSON.stringify({
            email
        }) 
    }).then(() => {
        cb()
    })
}

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const { checkIfUserExists, login } = useAuthContext()

    const onEmailChanged = (value: string) => {
        setEmail(value)
    }

    const onPasswordChanged = (value: string) => {
        setPassword(value)
    }

    const onConfirmPasswordChanged = (value: string) => {
        setConfirmPassword(value)
    }

    const signUp = useCallback(() => {
        if(checkIfUserExists(email)){
            setErrors(prev => {
                return {
                    ...prev,
                    email: "User exists. Please sign In"
                }
            })
        } else {
            login()
            navigate("/dashboard")
        }
    }, [checkIfUserExists, login, navigate, email])

    const handleSubmit = useCallback(() => {
        const emailError = !email.length ? emailMessage : ""
        const passwordError = password.length && password === confirmPassword ? "" : password !== confirmPassword ? confirmPasswordMessage : passwordMessage

        setErrors({
            email: emailError,
            password: passwordError
        })

        if(!emailError && !passwordError){
            submit(email, signUp)
        }

    }, [email, password, confirmPassword, navigate])

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
                            <Input value={confirmPassword} onChange={onConfirmPasswordChanged} placeholder="Please repeat your password"/>
                        </FormItem>
                        <Button onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </div>
			</StyledForm>

            <StyledForm style={{ width: "40rem",}}>
                <StyledSeparator>SIGN UP WITH GOOGLE</StyledSeparator>
                <div className="btn-container">
                    <GoogleLogin
                        clientId="611176137432-nuq0crbc6gic387rb0pu4clglb2n7hrq.apps.googleusercontent.com"
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