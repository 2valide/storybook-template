import '../styles/App.css';
import Connection from "./Connection.jsx";
import ResetPassword from "./ResetPassword.jsx";
import {Header} from "../components/Organisms/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilForm from "./Profil.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/connexion" element={<Connection />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/profil" element={<ProfilForm />} />
            </Routes>
        </Router>
    );
}

export default App;
