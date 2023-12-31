import './Header.scss'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'

const Header = ({variant = false}) => {

    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                {/* <img src='/img/vite.svg' alt='logo'/> */}
                <img src={logo} alt='logo'/>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/panaderia">Panaderia</Link>
                    <Link className="header__link" to="/productos/carniceria">Carniceria</Link>
                    <Link className="header__link" to="/productos/perfumeria">Perfumeria</Link>
                    <Link className="header__link" to="/productos/verduleria">Verduleria</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header