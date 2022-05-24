import React from "react";
import Input from "../../components/Input/Input";
import { GoogleLogin } from 'react-google-login';
import AuthLayout from "../../components/AuthLayout";
import { StyledFormHeader, StyledSeparator, StyledFormButton } from "./styled"

const Login: React.FC = () => {
    return (
        <AuthLayout>
        <StyledFormHeader>Welcome Back</StyledFormHeader>
			<form style={{ width: "40rem" }} noValidate>
            <StyledSeparator>LOG IN WITH EMAIL</StyledSeparator>
					<Input label="Email"/>
					<Input label="Password"/>
				<StyledFormButton type="submit">
                    Log in
				</StyledFormButton>
			</form>

            <div style={{ width: "40rem" }}>
            <StyledSeparator>LOG IN WITH GOOGLE</StyledSeparator>
            <GoogleLogin
                clientId="611176137432-nuq0crbc6gic387rb0pu4clglb2n7hrq.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={() => {console.log('success')}}
                onFailure={() => {}}
                cookiePolicy={'single_host_origin'} 
            />
            </div>
        </AuthLayout>
    )
}

export default Login