import React from 'react'
import "../styles/profil.css"
import {Form} from "../components/Organisms/Form.jsx";
import {Button} from "../components/molecules/button/Button.jsx";


const ProfilForm = () => {
    return (
        <div className={"form-container"}>
            <Form labels={["Email", "Full Name"]} btnLabel={"Save"} title={"Profile"}>
                    <span>Delete my profile</span>
                    <Button
                        onClick={() => {
                        }}
                        label="Delete"
                        mode="danger"
                    />
            </Form>
        </div>
    )
}

export default ProfilForm