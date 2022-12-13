import './PricingCard.scss';
import React from 'react';
import { Subscription } from '../../data/types/types';

type Props = {
    pricingsObject: Subscription
    cta: boolean
}

const PricingCard = ({pricingsObject, cta}: Props) => {
    if (cta) return(
        <article className="pricing__card pricing__cta">
        <div className="pricing__bestValue">Beste waarde!</div>
            <div className="pricing__icon">
                <i className="fa-solid fa-dollar-sign"></i>
            </div>
            <header className="pricing__header">
                <h3 className="pricing__heading">{pricingsObject.name}</h3>
                <p className="pricing__description">{pricingsObject.description}</p>
            </header>
            <footer className="pricing__footer">
                <p className="pricing__price">&euro;{pricingsObject.price}</p>
                <button className="pricing__button">{pricingsObject.ctaText}</button>
            </footer>
        </article>
    )

    return(
        <article className="pricing__card">
            <div className="pricing__icon">
                <i className="fa-solid fa-sack-xmark"></i>
            </div>
            <header className="pricing__header">
                <h3 className="pricing__heading">{pricingsObject.name}</h3>
                <p className="pricing__description">{pricingsObject.description}</p>
            </header>
            <footer className="pricing__footer">
                <p className="pricing__price">&euro;{pricingsObject.price}</p>
                <button className="pricing__button">{pricingsObject.ctaText}</button>
            </footer>
        </article>
    )
}

export default PricingCard;