import Navbar from '../Navbar/Navbar';
import CollectionNavbar from '../../data/navbars/CollectionNavbar';
// import DescriptionModes from '../../data/enums/DescriptionModes';
import missingImage from '../../img/missing-image.webp';
import plus from '../../img/plus.webp';
import './CollectionPage.scss';
import React, { useState, useEffect } from 'react';
import { Agent } from '../../data/types/types';

type Props = {
    collection: Array<Agent>
}

const CollectionPage = ({ collection }: Props) => {

    const [bigPicture, setBigPicture] = useState(collection[0].img);
    const [sidebar, setSidebar] = useState<JSX.Element>();
    const [description, setDescription] = useState<JSX.Element>()
    // const [descriptionMode, setDescriptionMode] = useState(DescriptionModes.Display);

    const renderDescription = (item: Agent) => {
        return (
            <div className="description">
                <button className="description__edit"><i className="fa-solid fa-pen"></i></button>
                <div className="description__main">
                    <div className="description__header">
                        <h2 className="description__title">{item.name}</h2>
                        <p className="description__text">{item.description}</p>
                    </div>
                    <div className="description__footer">
                        <p className="description__class"><b>Rol: </b>{item.agentClass}</p>
                        <p className="description__pricing"><b>Kost:</b> {item.price}</p>
                        <p className="description__misc"><b>Overige informatie:</b> {item.misc}</p>
                    </div>
                </div>
                <button className="description__save"><b>Opslaan</b></button>
            </div>
        )
    }

    useEffect(() => {
        setSidebar(() => {
            const items = collection.map((item: Agent, index: number) => {
                if (item.addButton) return <button key={index} className="sidebar__item"><img className="sidebar__img" src={plus} alt="Een agent." onClick={() => console.log("add button pressed.")}/></button>;
                return <button key={index} className="sidebar__item">{item.img !== undefined ? <img className="sidebar__img" src={item.img.url} alt="Een agent." onClick={() => { setBigPicture(item.img); setDescription(renderDescription(item)); }}/> : <img className="sidebar__img" src={missingImage} alt="Geen bestand gevonden." onClick={() => { setBigPicture(item.img); setDescription(renderDescription(item)); }} />}</button>;
            })
    
            return (
                <div className="sidebar">
                    {items}
                </div>
            )
        });
        setDescription(renderDescription(collection[0]));
    }, [collection]);

    return(
        <>
            <Navbar content={CollectionNavbar}/>
            <main className="collection">

                <section className="items">
                    <div className="bigpicture">
                        <div className="filters">
                            <button className="filter">Filter #1</button>
                            <button className="filter">Filter #2</button>
                        </div>
                        <img className="bigpicture__img" src={bigPicture?.url} alt="Geen bestand gevonden."/>
                    </div>
                    {sidebar}
                    {description}
                </section>
            </main>
        </>
    )
}

export default CollectionPage;