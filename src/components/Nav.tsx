import NavItem from './NavItem'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LOGO</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavItem href="/" label="HOME" />
                        </li>
                        <li className="nav-item">
                            <NavItem href="/about" label="ABOUT" />
                        </li>
                        <li className="nav-item">
                            <NavItem href="/users" label="USERS" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
