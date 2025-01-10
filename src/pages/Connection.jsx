import React from 'react'
import '../styles/connection.css'
import {Form} from "../components/Organisms/Form.jsx";

const Connection = () => {
    return (
        <div className={"form-container"}>
            <Form labels={["email", "password"]} btnLabel={"login"}  title={"Sign in"}/>
        </div>
    )
}

export default Connection


