import './menu.css';

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
                            <div className="col-3">
                                <div className="site-logo">
                                    <a href="index.html" className="font-weight-bold">Brand</a>
                                </div>
                            </div>
                            <div className="col-9  text-right">
                                <span className="d-inline-block d-lg-none"><a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-white" /></a></span>
                                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav ml-auto ">
                                        <li className="active"><a href="#" className="nav-link">Home</a></li>
                                        <li><a href="#" className="nav-link">Portfolio</a></li>
                                        <li><a href="#" className="nav-link">About</a></li>
                                        <li><a href="#" className="nav-link">Services</a></li>
                                        <li><a href="#" className="nav-link">Blog</a></li>
                                        <li><a href="#" className="nav-link">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div class="hero"></div>
        </div>
    );
}

export default Navbar;