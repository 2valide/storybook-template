import {useState} from 'react'
import '../../styles/ConnexionForm.css'
import {Button} from "../molecules/button/Button.jsx";
import {Input} from "../molecules/Textinput/Input.jsx";

export function ConnexionForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempted with:', {email, password})

        setEmailError('')
        setPasswordError('')

        let hasError = false;

        if (!email) {
            setEmailError('Email required')
            hasError = true;
        }

        if (!password) {
            setPasswordError('Password required')
            hasError = true;
        }
        if (hasError) {
            return;
        }
    }



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Sign in</h1>

                <Input label={"Email"} type={"email"} required={true} value={email} onChange={(e) => setEmail(e.target.value)} />

                <Input label={"Password"} type={"password"} required={true} value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button
                    onClick={() => {}}
                    label={"Login"}
                />
            </form>
        </div>
    )
}