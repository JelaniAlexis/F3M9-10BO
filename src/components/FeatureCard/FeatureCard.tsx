import './FeatureCard.scss';
import React from 'react';
import { Feature } from '../../common/types/types';

type Props = {
    featureObject: Feature
    featureIndex: number
}

const FeatureCard = ({featureObject, featureIndex}: Props) => {
    return (
        <article className={`features__feature feature${featureIndex}`}>
            <img src={featureObject.img.url} alt={featureObject.img.altText} className="features__featureImg" />
            <div className="features__featureText">
                <h2 className="features__featureHeading">{featureObject.name}</h2>
                <p className="features__featureP">{featureObject.description}</p>
            </div>
        </article>
    )
}

export default FeatureCard;