import {useState} from 'react'
import {Button} from "../../molecules/button/Button.jsx";
import {Input} from "../../molecules/Textinput/Input.jsx";
import "../../../index.css"
import './profilForm.css'
import {Form} from "../Form.jsx";


export function ProfilForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form>
            <section className="profile-details">
                <h1 className="profile-title">Profile</h1>

                <Input
                    label="Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    label="Full Name"
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    onClick={() => {
                    }}
                    label="Save"
                />
            </section>

            <section className="profile-actions">
                <span className="profile-delete-text">Delete my profile</span>
                <Button
                    onClick={() => {
                    }}
                    label="Delete"
                    mode="danger"
                />
            </section>
        </Form>
    )
}