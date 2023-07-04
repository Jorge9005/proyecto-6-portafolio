import './menu.css';
import Logo from '../../images/Logo-wallpaper-azul.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='body-wrapper'>
            <link rel="stylesheet" href="fonts/icomoon/style.css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />

            <div>
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>
                <header className="site-navbar site-navbar-target" role="banner">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-5">
                                <div className="site-logo mb-1">
                                    <NavLink to="/home"><img src={Logo} alt="logo" style={{ height: "60px" }} /></NavLink>
                                </div>
                            </div>
                            <div className="col-7 text-right">
                                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav ml-auto ">
                                        <li><NavLink to="/home" className="nav-link">Home</NavLink></li>
                                        <li><NavLink to="/proyecto1" className="nav-link">Proyecto 1</NavLink></li>
                                        <li><NavLink to="/proyecto2" className="nav-link">Proyecto 2</NavLink></li>
                                        <li><NavLink to="/proyecto3" className="nav-link">Proyecto 3</NavLink></li>
                                        <li><NavLink to="/proyecto4" className="nav-link">Proyecto 4</NavLink></li>
                                        <li><NavLink to="/proyecto5" className="nav-link">Proyecto 5</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Navbar;