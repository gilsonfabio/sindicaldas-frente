import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/">CaldasCard</a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="menu-btn">Home</a></li>
                    <li><a href="/logConvenio" className="menu-btn">Convênios</a></li>
                    <li><a href="/logServidor" className="menu-btn">Servidores</a></li>
                    <li><a href="/logConvenio" className="menu-btn">Entrar</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
);

export default Menu;
