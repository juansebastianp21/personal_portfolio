import './topbar.scss';
import {Person, Mail} from '@material-ui/icons';

const spLogoUrl =
    'https://juansebastianp21portfolio.s3.sa-east-1.amazonaws.com/logo-sp.png';
const spLogoUrlActive =
    'https://juansebastianp21portfolio.s3.sa-east-1.amazonaws.com/logo-sp-active.png';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img
                            src={menuOpen ? spLogoUrl : spLogoUrlActive}
                            alt="LogoSP"
                        />
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+57 313 872 28 36</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>juanpena@unicauca.edu.co</span>
                    </div>
                </div>
                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
