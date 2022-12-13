import AgentClass from "../enums/AgentClass"
import NavbarElementTypes from "../enums/NavElementTypes"

/**
 * The attributes that make up an image.
 * 
 * @param {string} url - The URL to the image.
 * @param {string} altText - The alt text for screenreaders to use to describe images.
 */
export type Image = {
    url: string,
    altText: string
}

/**
 * A FeatureCard's contents.
 * 
 * @param {string} name - What the feature is called.
 * @param {string} description - Describes the feature in more detail.
 * @param {Image} img - The image's attributes.
 */

export type Feature = {
    name: string
    description: string
    img: Image
}

/**
 * A PricingCard's contents
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
 * Represents a Navbar element
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
    location: string
    cta: boolean
}

/**
 * The attributes that make up an Agent.
 * 
 * @param {string} name - The agent's name.
 * @param {Image} img - The image's attributes.
 * @param {AgentClass} agentClass - The agent's class.
 * @param {string} description - Describes the agent.
 * @param {string} price - The price of the agent.
 * @param {string} misc - A miscellaneous fact.
 * @param {boolean} addButton - Whether or not this is an Agent or an add button.
 */

export type Agent = {
    name: string,
    img?: Image,
    agentClass?: AgentClass,
    description?: string,
    price?: string,
    misc?: string,
    addButton: boolean,
}