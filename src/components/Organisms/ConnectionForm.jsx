import {useState} from 'react'
import '../../styles/ConnectionForm.css'
import {Button} from "../molecules/button/Button.jsx";
import {Input} from "../molecules/Textinput/Input.jsx";
import {Form} from "./Form.jsx";

export function ConnectionForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form>
            <h1>Sign in</h1>

            <Input label={"Email"} type={"email"} required={true} value={email}
                   onChange={(e) => setEmail(e.target.value)}/>

            <Input label={"Password"} type={"password"} required={true} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>

            <Button
                onClick={() => {
                }}
                label={"Login"}
            />
        </Form>
    )
}