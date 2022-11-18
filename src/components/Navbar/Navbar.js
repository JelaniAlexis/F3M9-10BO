import './Navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png';
import NavElementTypes from '../../data/enums/NavElementTypes';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuOpened: false, menuStateClass: 'navbar__hamburgerClosed' };
    }

    onMenuStateChange = () => {
        this.setState({
            menuOpened: !this.state.menuOpened,
            menuStateClass: !this.state.menuOpened ? 'navbar__hamburgerOpen' : 'navbar__hamburgerClosed'
        }, () => console.log(`Menu opened: ${this.state.menuOpened} and <ul> classname: ${this.state.menuStateClass}`));
    }

    render() {
        let content = this.props.content.map((element, index) => {
            if (element.elementType === NavElementTypes.Anchor) {
                return (<li key={index} className={element.cta ? "navbar__li navbar__cta" : "navbar__li"}><a href={element.location}>{element.name}</a></li>);
            }
            if (element.elementType === NavElementTypes.Link) {
                return (<li key={index} className={element.cta ? "navbar__li navbar__cta" : "navbar__li"}><Link to={element.location}>{element.name}</Link></li>)
            }
            return null;
        });

        console.log(content);

        return(
            <nav className={`navbar ${this.state.menuStateClass}`}>
                <div className='navbar__always'>
                    <button className="navbar__hamburger" onClick={this.onMenuStateChange}></button>
                    <img className='navbar__img' alt="logo" src={Logo}></img>
                </div>
                <ul className={`navbar__ul ${this.state.menuStateClass}`}>
                    {content}
                </ul>
            </nav>
        )
    }
}

export default Navbar;