import React from 'react'
import '../styles/connection.css'
import {Form} from "../components/Organisms/Form.jsx";

const ResetPassword = () => {
    return (
        <div className={"form-container"}>
            <Form labels={["email"]} btnLabel={"Next"} title={"Reset Password"}/>
        </div>
    )
}

export default ResetPassword
