import React from 'react'

interface InputProps {
    label: string
    error?: string
}

const Input: React.FC<InputProps> = ({error, label, ...props}) => {    
    return(
        <div style={{width: '100%'}}>
            <label>{label}</label>
            <input {...props}/>
            <div>{error}</div>
        </div>
    )
}

export default Input;