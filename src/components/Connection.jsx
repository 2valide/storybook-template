import {useState} from 'react'
import '../styles/Connection.css'
import {Button} from "../stories/molecules/button/Button.jsx";

export function Connection() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempted with:', {email, password})
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Sign in</h1>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <Button
                    onClick={() => {}}
                    label={"Login"}
                />
            </form>
        </div>
    )
}