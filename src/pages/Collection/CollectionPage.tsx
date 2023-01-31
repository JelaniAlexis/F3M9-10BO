import AgentDescription from '../../components/AgentDescription/AgentDescription';

import { Navbars, Collections } from '../../common/datasets';

import missingImage from '../../assets/missing-image.webp';
import { useEffect, useState } from 'react';
import { Agent, AgentRole, DescriptionMode, NavElement } from '../../common/types/types';

import './CollectionPage.scss';
import { useNavContent } from '../Root';
import { useParams } from 'react-router-dom';
import CollectionFilter from '../../components/CollectionFilter/CollectionFilter';

const CollectionPage = () => {

    const { setNavContent } = useNavContent();
    const params = useParams();
    const userId = params.userId as string

    const [collection, setCollection] = useState<Agent[]>(findUserCollection());
    const [filteredCollection, setFilteredCollection] = useState<Agent[]>(collection);
    const [bigPicture, setBigPicture] = useState(collection[0].img);
    const [currentAgent, setCurrentAgent] = useState<number>(0);
    const [descriptionMode, setDescriptionMode] = useState<DescriptionMode>("Display");

    const [currentFilters, setCurrentFilters] = useState<{ costFilter: AgentCost | -1, roleFilter: AgentRole | "" }>({
        costFilter: -1,
        roleFilter: ""
    });

    const allAgentsCosts = collection.map((agent: Agent) => agent.agentCost as number)
    const AgentCosts = [...allAgentsCosts] as const;
    type AgentCost = typeof AgentCosts[number];

    function findUserCollection () {
        let foundIndex: number = 0;
        return Collections.map((userCollection, index: number) => {
            if (userCollection.userId === userId) {
                foundIndex = index;
                return userCollection.data
            } else return null
        })[foundIndex] as Agent[]
    }

    const onModeChange = (newMode: DescriptionMode) => {
       setDescriptionMode(newMode);
    }

    const onAgentEdit = (newAgent: Agent) => {
        console.log(newAgent);
        setCollection(collection.map((agent: Agent) => agent.id === newAgent.id ? newAgent : agent ));
    }
    
    useEffect(() => {
        const navbar = Navbars.collectionNavbar.map((navElement: NavElement) => {
            let newNavElement = navElement;
            if (navElement.target === "/collection/null") newNavElement.target = `/collection/${sessionStorage.getItem("userId")}`;
            if (navElement.target === "/backlog/null") newNavElement.target = `/backlog/${sessionStorage.getItem("userId")}`;
            return newNavElement
        })
        setNavContent(navbar);
    }, [setNavContent]);

    useEffect(() => {
        setFilteredCollection(collection);
        setCurrentFilters({ costFilter: -1, roleFilter: "" });
    }, [collection])

    useEffect(() => {
        setBigPicture(filteredCollection[0].img);
        setCurrentAgent(0);
    }, [filteredCollection])

    return (
        <main className="collection">

            <section className="items">
                <div className="bigpicture">
                    <div className="filters">
                        <CollectionFilter collection={collection} output={setFilteredCollection} filter={{currentFilters, setCurrentFilters}} filterType="Cost" />
                        <CollectionFilter collection={collection} output={setFilteredCollection} filter={{currentFilters, setCurrentFilters}} filterType="Role" />
                    </div>
                    <img className="bigpicture__img" draggable={false} src={bigPicture?.url} alt="Geen bestand gevonden."/>
                </div>
                
                <div className="sidebar">
                    {
                        filteredCollection.map((item: Agent, index: number) => item.addButton
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
                        )
                    }
                </div>
                <AgentDescription descriptionMode={descriptionMode} agent={filteredCollection[currentAgent]} onModeChange={onModeChange} onAgentEdit={onAgentEdit}/>
            </section>
        </main>
    )
}

export default CollectionPage;