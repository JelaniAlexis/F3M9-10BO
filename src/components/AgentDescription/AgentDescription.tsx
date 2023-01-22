import { useState, useEffect } from "react";
import { Agent, AgentClass, agentClasses, DescriptionMode } from "../../common/types/types";

import './AgentDescription.scss';

interface Props {
    agent: Agent
    descriptionMode?: DescriptionMode
    onModeChange: (descriptionMode: DescriptionMode) => void
    onAgentEdit: (agent: Agent) => void
}

const AgentDescription = ({agent, descriptionMode, onModeChange, onAgentEdit}: Props) => {

    const [formInput, setFormInput] = useState<Agent>(agent);

    useEffect(() => {
        setFormInput(agent);
    }, [agent])
 
    return (
        <div className="description">
            {
                !descriptionMode || descriptionMode === "Display" ? 
                    (
                        <>
                            <button className="description__edit" onClick={() => onModeChange("Edit")}><i className="fa-solid fa-pen"></i></button>
                            <div className="description__main">
                                <div className="description__header">
                                    <h2 className="description__title">{agent.name}</h2>
                                    <p className="description__text">{agent.description}</p>
                                </div>
                                <div className="description__footer">
                                    <p className="description__class"><b>Rol: </b>{agent.agentClass}</p>
                                    <p className="description__pricing"><b>Kost:</b> {agent.price}</p>
                                    <p className="description__misc"><b>Overige informatie:</b> {agent.misc}</p>
                                </div>
                            </div>
                        </>
                    )
                : descriptionMode === "Edit"  ?
                    (
                        <>
                            <form id="agentForm" onSubmit={ e => { e.preventDefault(); onAgentEdit(formInput); onModeChange("Display"); }} className="description__main">
                                <div className="description__header">
                                    <div className="description__inputContainer">
                                        <label htmlFor="title" className='description__inputName'><b>Titel: </b></label>
                                        <input type="text" name="title" className="description__input" defaultValue={agent.name} onChange={e => setFormInput({ ...formInput, name: e.currentTarget.value })}/>
                                    </div>
                                    <div className="description__inputContainer">
                                        <label htmlFor="description" className='description__inputName'><b>Beschrijving: </b></label>
                                        <textarea name="description" className="description__input" defaultValue={agent.description} onChange={e => setFormInput({ ...formInput, description: e.currentTarget.value })}></textarea>
                                    </div>
                                </div>
                                <div className="description__footer">
                                    <div className="description__inputContainer">
                                        <label htmlFor="agentClass" className='description__inputName'><b>Rol: </b></label>
                                        <select name="agentClass" className="description__input" defaultValue={agent.agentClass} onChange={e => setFormInput({ ...formInput, agentClass: e.currentTarget.value as AgentClass })}>
                                            { agentClasses.map((agentClassName: string, index: number) => <option key={index} value={agentClassName}>{agentClassName}</option>) }
                                        </select>
                                    </div>
                                    <div className="description__inputContainer">
                                        <label htmlFor="pricing" className='description__inputName'><b>Kost: </b></label>
                                        <input type="text" name="pricing" className="description__input" defaultValue={agent.price} onChange={e => setFormInput({ ...formInput, price: e.currentTarget.value})} />
                                    </div>
                                    <div className="description__inputContainer">
                                        <label htmlFor="misc" className='description__inputName'><b>Overige informatie: </b></label>
                                        <textarea name="misc" className="description__input" defaultValue={agent.misc} onChange={e => setFormInput({ ...formInput, misc: e.currentTarget.value})}></textarea>
                                    </div>
                                </div>
                            </form>
                            <input type="submit" className="description__save" defaultValue="Opslaan" form="agentForm"></input>
                        </>
                    )
                :
                    (
                        <h1>add don't even exist bruh</h1>
                    )
            }
        </div>
    )
}

export default AgentDescription;