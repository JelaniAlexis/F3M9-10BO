import './Navbar.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.webp';
import { NavElement } from '../../data/types/types';

type Props = {
    content: NavElement[]
}

const Navbar = ({content}: Props) => {

    const [menuOpened, setMenuOpened] = useState(false);
    const [menuStateClass, setMenuStateClass] = useState('navbar__hamburgerClosed');

    let navbarContent = content.map((element: NavElement, index: number) => {
        if (element.elementType === "Anchor") {
            return (<li key={index} className={element.cta ? "navbar__li navbar__cta" : "navbar__li"}><a href={element.location}>{element.name}</a></li>);
        }
        if (element.elementType === "Link") {
            return (<li key={index} className={element.cta ? "navbar__li navbar__cta" : "navbar__li"}><Link to={element.location}>{element.name}</Link></li>)
        }
        return null;
    });

    return(
        <nav className={`navbar ${menuStateClass}`}>
            <div className='navbar__always'>
                <button className="navbar__hamburger" onClick={() => {
                    setMenuOpened(menuOpened);
                    setMenuStateClass(!menuOpened ? 'navbar__hamburgerOpen' : 'navbar__hamburgerClosed');
                }}></button>
                <Link className='navbar__imglink' to="/"><img className='navbar__img' alt="logo" src={Logo}></img></Link>
            </div>
            <ul className={`navbar__ul ${menuStateClass}`}>
                {navbarContent}
            </ul>
        </nav>
    )
}

export default Navbar;