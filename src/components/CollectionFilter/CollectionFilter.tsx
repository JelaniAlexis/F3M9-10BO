import { Agent, AgentRole, AgentRoles } from '../../common/types/types';
import './CollectionFilter.scss';

type Props = {
    collection: Agent[]
    output: React.Dispatch<React.SetStateAction<Agent[]>>
    filterType: "Role" | "Cost"
    filter: {
        currentFilters: {
            costFilter: number | -1;
            roleFilter: AgentRole | "";
        }
        setCurrentFilters: React.Dispatch<React.SetStateAction<{
            costFilter: number | -1;
            roleFilter: AgentRole | "";
        }>>
    }
}

const CollectionFilter = ({ collection, output, filterType, filter }: Props) => {

    const allAgentsCosts = collection.map((agent: Agent) => agent.agentCost as number)
    const AgentCosts = [...allAgentsCosts] as const;
    type AgentCost = typeof AgentCosts[number];

    const filterByCost = (input: Agent[]) => {
        let newCost: number = 375000;
        AgentCosts.forEach((agentCost: number, index: number) => {
            if (filter.currentFilters?.costFilter !== agentCost) return;
            AgentCosts[index + 1] ? newCost = AgentCosts[index + 1] : newCost = AgentCosts[0];
        });

        filter.setCurrentFilters({ costFilter: newCost, roleFilter: "" });
        return input.filter((agent: Agent) => agent.agentCost === newCost);
    }

    const filterByRole = (input: Agent[]) => {
        let newRole: AgentRole = "Controller";
        AgentRoles.forEach((agentRole: AgentRole, index: number) => {
            if (filter.currentFilters?.roleFilter !== agentRole) return;
            AgentRoles[index + 1] ? newRole = AgentRoles[index + 1] : newRole = AgentRoles[0];
        });
        
        filter.setCurrentFilters({ costFilter: -1 as AgentCost, roleFilter: newRole });
        return input.filter((agent: Agent) => agent.agentRole === newRole);
    }

    let button;
    switch (filterType) {
        case "Cost":
            button = (
                <div className="filter">
                    { filter.currentFilters?.costFilter !== -1 ? <button className="filter__reset" onClick={() => { filter.setCurrentFilters({ costFilter: -1, roleFilter: "" }); output(collection); }}>x</button> : <></> }
                    <button className="filter__filter" onClick={() => output(filterByCost(collection))}>{filter.currentFilters?.costFilter !== -1 ? `Kost: ${filter.currentFilters.costFilter}` : "Filteren op: Kost"}</button>
                </div>
            );
            break;
        case "Role":
            button = (
                <div className="filter">
                    { filter.currentFilters?.roleFilter !== "" ? <button className="filter__reset" onClick={() => { filter.setCurrentFilters({ costFilter: -1, roleFilter: "" }); output(collection);}}>x</button> : <></> }
                    <button className="filter__filter" onClick={() => output(filterByRole(collection))}>{filter.currentFilters?.roleFilter !== "" ? `Rol: ${filter.currentFilters.roleFilter}` : "Filteren op: Rol"}</button>
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