import { useState } from 'react';
import { Agent, AgentCost, AgentCosts, AgentRole, AgentRoles } from '../../common/types/types';
import './CollectionFilter.scss';

type Props = {
    collection: Agent[]
    output: React.Dispatch<React.SetStateAction<Agent[]>>
    filterType: "Role" | "Cost"
}

const CollectionFilter = ({ collection, output, filterType }: Props) => {

    const [currentFilters, setCurrentFilters] = useState<{ costFilter: AgentCost | undefined, roleFilter: AgentRole | undefined }>();

    const filterByCost = (input: Agent[]) => {
        let newCost: AgentCost = 375000;
        AgentCosts.forEach((agentCost: AgentCost, index: number) => {
            if (currentFilters?.costFilter !== agentCost) return;
            AgentCosts[index + 1] ? newCost = AgentCosts[index + 1] : newCost = AgentCosts[0];
        });

        setCurrentFilters({ costFilter: newCost, roleFilter: currentFilters?.roleFilter as AgentRole });
        return input.filter((agent: Agent) => agent.agentCost === newCost);
    }

    const filterByRole = (input: Agent[]) => {
        let newRole: AgentRole = "Controller";
        AgentRoles.forEach((agentRole: AgentRole, index: number) => {
            if (currentFilters?.roleFilter !== agentRole) return;
            AgentRoles[index + 1] ? newRole = AgentRoles[index + 1] : newRole = AgentRoles[0];
        });
        
        setCurrentFilters({ costFilter: currentFilters?.costFilter as AgentCost, roleFilter: newRole });
        return input.filter((agent: Agent) => agent.agentRole === newRole);
    }

    const resetFilter = (filter: "Cost" | "Role") => {

        if (filter === "Cost") setCurrentFilters({ costFilter: undefined, roleFilter: currentFilters?.roleFilter });
        else setCurrentFilters({ costFilter: currentFilters?.costFilter, roleFilter: undefined });
        output(collection);
    }    

    let button;
    switch (filterType) {
        case "Cost":
            button = (
                <div className="filter">
                    { currentFilters?.costFilter || currentFilters?.costFilter === 0 ? <button className="filter__reset" onClick={() => resetFilter("Cost")}>x</button> : <></> }
                    <button className="filter__filter" onClick={() => output(filterByCost(collection))}>{currentFilters?.costFilter !== undefined ? `Kost: ${currentFilters.costFilter}` : "Filteren op: Kost"}</button>
                </div>
            );
            break;
        case "Role":
            button = (
                <div className="filter">
                    { currentFilters?.roleFilter ? <button className="filter__reset" onClick={() => resetFilter("Role")}>x</button> : <></> }
                    <button className="filter__filter" onClick={() => output(filterByRole(collection))}>{currentFilters?.roleFilter !== undefined ? `Rol: ${currentFilters.roleFilter}` : "Filteren op: Rol"}</button>
                </div>
            );
            break;
        default:
            button = <></>;
            break;
    }

    return button
}

export default CollectionFilter;