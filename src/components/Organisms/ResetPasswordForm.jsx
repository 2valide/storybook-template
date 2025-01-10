import {useState} from 'react'
import '../../styles/ConnectionForm.css'
import {Button} from "../molecules/button/Button.jsx";
import {Input} from "../molecules/Textinput/Input.jsx";

export function ResetPasswordForm() {
    const [email, setEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempted with:', {email})
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Reset password</h1>

                <Input label={"Email"} type={"email"} required={true} value={email} onChange={(e) => setEmail(e.target.value)} />



                <Button
                    onClick={() => {}}
                    label={"send"}
                />
            </form>
        </div>
    )
}