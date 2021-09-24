import {useState} from 'react';

import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

import './app.scss';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Topbar {...{menuOpen, setMenuOpen}} />
            <Menu {...{menuOpen, setMenuOpen}} />
            <div className="sections">
                <Intro />
                <Works />
                <Portfolio />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
}

export default App;
