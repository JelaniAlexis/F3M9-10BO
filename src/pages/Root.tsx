import { useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { NavElement } from "../common/types/types";
import Hamburger from "../assets/hamburger.webp";
import Logo from "../assets/logo.webp";

import './Root.scss';

type ContextType = { setNavContent: React.Dispatch<React.SetStateAction<NavElement[]>> }

const Root = () => {
    
    const [navContent, setNavContent] = useState<NavElement[]>([]);
    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const [menuStateClass, setMenuStateClass] = useState<string>('navbar__hamburgerClosed');
    const [copyClicked, setCopyClicked] = useState<boolean>(false);

    return (
        <>
            <nav className={`navbar ${menuStateClass}`}>
                <div className='navbar__always'>
                    <img src={Hamburger} alt="De knop die het hamburgermenu opklapt en uitvouwt." className="navbar__hamburger" onClick={() => {
                        setMenuOpened(!menuOpened);
                        setMenuStateClass(menuOpened ? 'navbar__hamburgerClosed' : 'navbar__hamburgerOpen');
                    }}></img>
                    <Link className='navbar__imglink' to="/"><img className='navbar__img' alt="logo" src={Logo}></img></Link>
                </div>
                <ul className={`navbar__ul ${menuStateClass}`}>
                    {
                        navContent.map((element: NavElement, index: number) => {
                            switch (element.elementType) {
                                case "Anchor":
                                    return (<a href={element.target} key={index} className={element.cta ? "navbar__link navbar__cta" : "navbar__link"}>{element.name}</a>);
                                case "Link":
                                    return (<Link to={element.target} key={index} className={element.cta ? "navbar__link navbar__cta" : "navbar__link"}>{element.name}</Link>);
                                case "Copy-on-click":
                                    return(<button onClick={() => { navigator.clipboard.writeText(element.target); setCopyClicked(true); setTimeout(() => setCopyClicked(false), 500); }} key={index} className={element.cta ? "navbar__link navbar__cta" : "navbar__link"}>{copyClicked ? "Gekopiëerd!" : element.name}</button>);
                                default:
                                    return (<p>How did you manage...</p>)
                            }
                        })
                    }
                </ul>
            </nav>
            <Outlet context={{setNavContent}}/>
        </>
    )
}

export const useNavContent = () => {
    return useOutletContext<ContextType>();
}

export default Root;