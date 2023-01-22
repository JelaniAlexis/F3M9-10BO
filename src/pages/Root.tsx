import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { NavElement } from "../common/types/types";
import Logo from "../assets/logo.webp";

import './Root.scss';

type ContextType = { setNavContent: React.Dispatch<React.SetStateAction<NavElement[]>> }

const Root = () => {
    
    const [navContent, setNavContent] = useState<NavElement[]>([]);
    const [menuOpened, setMenuOpened] = useState(false);
    const [menuStateClass, setMenuStateClass] = useState('navbar__hamburgerClosed');

    let navbarContent = navContent.map((element: NavElement, index: number) => {
        switch (element.elementType) {
            case "Anchor":
                return (<a href={element.location} key={index} className={element.cta ? "navbar__link navbar__cta" : "navbar__link"}>{element.name}</a>);
            case "Link":
                return (<Link to={element.location} key={index} className={element.cta ? "navbar__link navbar__cta" : "navbar__link"}>{element.name}</Link>);
            default:
                return (<p>How did you manage...</p>)
        }
    });

    useEffect(() => {
        console.log(menuStateClass);
    }, [menuStateClass])

    return (
        <>
            <nav className={`navbar ${menuStateClass}`}>
                <div className='navbar__always'>
                    <button className="navbar__hamburger" onClick={() => {
                        setMenuOpened(!menuOpened);
                        setMenuStateClass(menuOpened ? 'navbar__hamburgerClosed' : 'navbar__hamburgerOpen');
                    }}></button>
                    <Link className='navbar__imglink' to="/"><img className='navbar__img' alt="logo" src={Logo}></img></Link>
                </div>
                <ul className={`navbar__ul ${menuStateClass}`}>
                    {navbarContent}
                </ul>
            </nav>
            <Outlet context={{setNavContent}}/>
        </>
    )
}

export const useNavContent = () => {
    return useOutletContext<ContextType>();
}

export default Root