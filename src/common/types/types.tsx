export type NavbarElementTypes = "Anchor" | "Link" | "Copy-on-click"
/**
 * @description The attributes that make up an image.
 * 
 * @param {string} url - The URL to the image.
 * @param {string} altText - The alt text for screenreaders to use to describe images.
 */
export type Image = {
    url: string
    altText?: string
    draggable?: boolean
}

/**
 * @description A FeatureCard's contents.
 * 
 * @param {string} name - What the feature is called.
 * @param {string} description - Describes the feature in more detail.
 * @param {Image} img - The given image.
 */

export type Feature = {
    name: string
    description: string
    img: Image
}

/**
 * @description A PricingCard's contents
 * 
 * @param {string} name - The subscription's name.
 * @param {string} description - Describes what is included in the subscription.
 * @param {string} price - The subscription's price.
 * @param {string} ctaText - The text on the call-to-action button.
 * @param {boolean} bestValue - Whether or not the subscription is the best value.
 */

export type Subscription = {
    name: string
    description: string
    price: string
    ctaText: string
    bestValue: boolean
}

/**
 * @description Represents a Navbar element
 * 
 * @param {string} name - The text that shows in the Navbar element
 * @param {boolean} currentPage - Whether or not this is the current page.
 * @param {NavbarElementTypes} elementType - The type of element the Navbar element.
 * @param {string} location - The place the Navbar element send the user on click.
 * @param {boolean} cta - Whether or not the Navbar element is a call-to-action button.
 */

export type NavElement = {
    name: string
    currentPage: boolean
    elementType: NavbarElementTypes
    target: string
    cta: boolean
}

export const AgentRoles = [ "Duelist", "Initiator", "Controller", "Sentinel" ] as const;
/**
 * @description The 4 classifications of Agents.
 *
 */
export type AgentRole = typeof AgentRoles[number];

/**
 * @description The attributes that make up an Agent.
 * 
 * @param {number} id - The ID of the Agent in the array.
 * @param {string} name - The agent's name.
 * @param {Image} img - The image's attributes.
 * @param {AgentRole} agentRole - The agent's class.
 * @param {string} description - Describes the agent.
 * @param {AgentCost} agentCost - The price of the agent.
 * @param {string} misc - A miscellaneous fact.
 * @param {boolean} addButton - Whether or not this is an Agent or an add button.
 */

export type Agent = {
    id: number
    name: string
    img: Image
    agentRole?: AgentRole
    description?: string
    agentCost?: number
    misc?: string
    addButton: boolean
}

export const descriptionModes = [ "Display", "Add", "Edit" ] as const
/**
 * @description The mode in which the CollectionPage's description is in.
 * 
 */
export type DescriptionMode = typeof descriptionModes[number];

/**
 * @description The attributes that make up the description of the CollectionPage.
 * 
 * @param {string} title - The name of the highlighted Agent.
 * @param {string} description - More information on the Agent in question.
 * @param {AgentRole} agentRole - The Agent's class.
 * @param {string} pricing - The cost of unlocking this Agent.
 * @param {string} misc - Other miscellaneous fact about the Agent.
 */
export type DescriptionData = {
    title: string
    description: string
    agentRole: AgentRole
    pricing: string
    misc: string
}