import './Backlog.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Collections, Navbars } from '../../common/datasets';
import { Agent, AgentRole } from '../../common/types/types';
import { useNavContent } from '../Root';

const Backlog = () => {

    const { setNavContent } = useNavContent();
    const navigate = useNavigate();
    const params = useParams();
    const userId = params.userId as string
    
    const [match, setMatch] = useState<Agent| null>(); // don't forget to set to null!
    const [roleFilter, setRoleFilter] = useState<AgentRole>("Duelist");
    const [isFree, setIsFree] = useState<boolean>(false);
    
    const collection = findUserCollection();
    
    function findUserCollection () {
        let foundIndex: number = 0;
        return Collections.map((userCollection, index: number) => {
            if (userCollection.userId === userId) {
                foundIndex = index;
                return userCollection.data
            } else return null
        })[foundIndex] as Agent[]
    }

    const findMatch = () => {
        const filteredCollection = collection.filter((agent: Agent) => isFree ? agent.agentCost === 0 && agent.agentRole === roleFilter : agent.agentCost as number > 0 && agent.agentRole === roleFilter);
        return filteredCollection.length > 0 ? filteredCollection[Math.floor(Math.random() * filteredCollection.length)] : null
    }

    useEffect(() => {
        // geen toegang als je niet ingelogd bent, feature voor "members"
        if (!sessionStorage.getItem("userId")) navigate('/login');
    }, [navigate])

    useEffect(() => {
        setNavContent(Navbars.collectionNavbar);
    }, [setNavContent])

    return(
        <div className="backlog">
            <div className="backlog__form">
                <div className="backlog__roleField">
                    <label className="backlog__label" htmlFor="role">Wat is je speelstijl?</label>
                    <select className="backlog__dropdown" name="role" onChange={e => setRoleFilter(e.target.value as AgentRole)}>
                        <option value="Duelist">Als eerste ingaan</option>
                        <option value="Initiator">Informatie verzamelen om makkelijker in te gaan</option>
                        <option value="Controller">Informatie van de tegenstander weerhouden</option>
                        <option value="Sentinel">De tegenstander onder controle houden</option>
                    </select>
                </div>
                <div className="backlog__costField">
                    <label className="backlog__label" htmlFor="cost">Moet hij gratis zijn?</label>
                    <input className="backlog__input" type="checkbox" name="cost" onChange={e => setIsFree(e.target.checked)}/>
                </div>
                <div className="backlog__footer">
                    <button className="backlog__submit" onClick={e => { e.preventDefault(); setMatch(findMatch()); }}>Zoek een match</button>
                </div>
            </div>
            <div className="backlog__result">
                {
                    match ?
                        <>
                           <img className="backlog__img" src={match?.img.url} alt={match?.img.altText} />
                            <div className="backlog__stats">
                                <h1 className="backlog__h1">Jouw match is {match?.name}!</h1>
                                <p className="backlog__p">{match?.description}</p>
                                <p className="backlog__p"><b>{match.agentCost} XP</b></p>
                            </div>
                        </>
                    :

                    <></>
                }
            </div>
        </div>
    )
}

export default Backlog;