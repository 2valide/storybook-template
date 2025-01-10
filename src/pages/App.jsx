import '../styles/App.css';
import Connection from "./Connection.jsx";
import ResetPassword from "./ResetPassword.jsx";
import Header from "./Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/connexion" element={<Connection />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
}

export default App;
