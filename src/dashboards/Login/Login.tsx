import React from "react";
import Input from "../../components/Input/Input";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../../components/AuthLayout";
import { StyledFormHeader, StyledSeparator, StyledForm } from "./styled"
import Button from "../../components/Button/Button";

const Login: React.FC = () => {
    return (
        <AuthLayout>
        <StyledFormHeader>Welcome Back</StyledFormHeader>
			<StyledForm noValidate>
                <StyledSeparator>LOG IN WITH EMAIL</StyledSeparator>
                    <div className="form-controls">
                        <Input label="Email"/>
                        <Input label="Password"/>
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