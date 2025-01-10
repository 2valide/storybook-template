import {useState} from 'react'
import '../../styles/ConnectionForm.css'
import {Button} from "../molecules/button/Button.jsx";
import {Input} from "../molecules/Textinput/Input.jsx";
import {Form} from "./Form.jsx";

export function ResetPasswordForm() {
    const [email, setEmail] = useState('')

    return (
        <Form>
            <h1>Reset password</h1>

            <Input label={"Email"} type={"email"} required={true} value={email}
                   onChange={(e) => setEmail(e.target.value)}/>


            <Button
                onClick={() => {
                }}
                label={"send"}
            />
        </Form>

    )
}