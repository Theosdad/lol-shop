import logo from '../logo.svg'

function Header() {
    return <nav className="blue darken-4">
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
                <img src={logo} width="50" alt="" />
                <span>LOL&nbsp;Shop</span>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#!">Repo</a></li>
            </ul>
        </div>
    </nav>
}

export { Header }