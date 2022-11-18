import React from 'react';
import Navbar from '../Navbar/Navbar';
import CollectionNavbar from '../../data/navbars/CollectionNavbar';
import StandardCollection from '../../data/collection/StandardCollection';
import missingImage from '../../img/missing-image.jpg';
import './Collection.scss';

class Collection extends React.Component {
    constructor(props){
        super(props);
        this.sidebar = this.renderSidebarItems();
        this.description = this.renderDescription(StandardCollection[0]);
        this.state = { bigPicture: missingImage, sidebar: this.sidebar, description: this.description };
    }

    renderDescription = (item) => {
        return (
            <div className="description">
                <button className="description__edit"><i className="fa-solid fa-pen"></i></button>
                <h2 className="description__title">{item.name}</h2>
                <p className="description__text">{item.description}</p>
                <p className="description__pricing">Kost: {item.price}</p>
                <p className="description__misc">Overige informatie: {item.misc}</p>
                <button className="description__save">Opslaan</button>
            </div>
        )
    }

    renderSidebarItems = () => {
        const items = StandardCollection.map((item, index) => {
            return <button key={index} className="sidebar__item">{item.img !== undefined ? <img className="sidebar__img" src={item.img} alt="An agent." onClick={() => this.setState({ bigPicture: item.img, description: this.renderDescription(item) })}/> : <img className="sidebar__img" src={missingImage} alt="Missing file." onClick={() => this.setState({ bigPicture: item.img, description: this.renderDescription(item) })}/>}</button>
        })

        return (
            <div className="sidebar">
                {items}
            </div>
        )
    }

    render() {
        return(
            <>
                <Navbar content={CollectionNavbar}/>
                <main className="collection">
                    <div className="filters">
                        <button className="filter">Filter #1</button>
                        <button className="filter">Filter #2</button>
                    </div>

                    <section className="items">
                        <div className="bigpicture">
                            <img className="bigpicture__img" src={this.state.bigPicture} alt="Missing file."/>
                        </div>
                        {this.state.sidebar}
                        {this.state.description}
                    </section>
                </main>
            </>
        )
    }
}

export default Collection;