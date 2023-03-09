import {Link, Outlet} from "react-router-dom";
import Footer from '../components/Footer.js'

const Layout = () => {
  return (
    <div class="grey darken-3">
        <header>
            <div class="navbar-fixed">
                <nav class="grey darken-4">
                    <div class="nav-wrapper container">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"   
                        class="brand-logo left"
                        target="_blank" rel="noreferrer" 
                        style={{fontSize: 2 + "vmax"}}>
                            Компания "Вы нам не нужны"
                        </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down" style={{paddingRight: 5 + "px"}}>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/departments">Отделы</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <Outlet />

        <Footer />
    </div>
  )
};

export default Layout;