import Navbar from '../Navbar/Navbar';
import AgentDescription from '../AgentDescription/AgentDescription';

import CollectionNavbar from '../../data/navbars/CollectionNavbar';

import missingImage from '../../img/missing-image.webp';
import { useState } from 'react';
import { Agent, DescriptionMode } from '../../data/types/types';

import './CollectionPage.scss';

type Props = {
    collection: Agent[]
}

const CollectionPage = (props: Props) => {

    const [collection, setCollection] = useState(props.collection);
    const [bigPicture, setBigPicture] = useState(collection[0].img);
    const [currentAgent, setCurrentAgent] = useState<number>(0);
    const [descriptionMode, setDescriptionMode] = useState<DescriptionMode>("Display");

    const onModeChange = (newMode: DescriptionMode) => {
       setDescriptionMode(newMode);
    }

    const onAgentEdit = (newAgent: Agent) => {
        setCollection(collection.map((agent: Agent) => agent.id === newAgent.id ? newAgent : agent ));
    }

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
                        <img className="bigpicture__img" draggable={false} src={bigPicture?.url} alt="Geen bestand gevonden."/>
                    </div>
                    
                    <div className="sidebar">
                        { collection.map((item: Agent, index: number) => item.addButton
                            ?
                            <button key={index} className="sidebar__item">
                                <img className="sidebar__img" src={item.img.url} alt="Een agent." draggable={false}/>
                            </button>
                            :
                            <button key={index} className="sidebar__item">
                                {
                                    item.img !== undefined
                                    ?
                                    <img className="sidebar__img" src={item.img.url} alt="Een agent." draggable={item.img.draggable === undefined ? true : item.img.draggable} onClick={() => { setBigPicture(item.img); setCurrentAgent(index); }}/>
                                    :
                                    <img className="sidebar__img" src={missingImage} alt="Geen bestand gevonden." onClick={() => { setBigPicture(item.img); setCurrentAgent(index) }} />
                                }
                            </button>
                        )}
                    </div>
                    <AgentDescription descriptionMode={descriptionMode} agent={collection[currentAgent]} onModeChange={onModeChange} onAgentEdit={onAgentEdit}/>
                </section>
            </main>
        </>
    )
}

export default CollectionPage;