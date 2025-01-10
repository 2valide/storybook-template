import '../../styles/header.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">Storybook</h1>
                <nav className="header-nav">
                    <Link to="/profil" className="header-button">Profil</Link>
                    <Link to="/connexion" className="header-button">Connexion</Link>
                    <Link to="/resetpassword" className="header-button">Reset Password</Link>
                </nav>
            </div>
            <hr className="header-border" />
        </header>
    );
}