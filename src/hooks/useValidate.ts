import { useCallback, useState } from "react"

interface UseValidateProps {
    email: string
    password: string
    confirmedPassword?: string
}

const errorMessages = {
    email: "Email cannot be empty",
    password: "Password cannot be empty",
    confirmedPassword: "Passwords not match"
}


export const useValidate = () => {
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const validate = useCallback(({ email, password }: UseValidateProps) => {
        setErrors({
            email: !email?.length ? errorMessages["email"] : "",
            password: !password?.length ? errorMessages["password"] : ""
        })

        return email?.length && password?.length
    }, [])

    return {
        errors, validate
    }
}