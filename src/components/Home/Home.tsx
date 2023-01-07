import Navbar from '../Navbar/Navbar';
import PricingCard from '../PricingCard/PricingCard';

import HomeNavbar from '../../data/navbars/HomeNavbar';
import StandardFeatures from '../../data/homepage/StandardFeatures';
import StandardPricings from '../../data/homepage/StandardPricings';

import './Home.scss';

import boyGaming from '../../img/boy-gaming.webp';
import valorantClip from '../../img/valorant-clip-1.gif';
import FeatureCard from '../FeatureCard/FeatureCard';

import { Feature, Subscription } from '../../data/types/types';

const Home = () => {

    const renderFeatures = (features: Feature[]) => {
        return (
            features.map((feature: Feature, index: number)=> {
                return ( <FeatureCard key={index} featureObject={feature}/> )
            })
        )
    }

    const renderPricingCards = (pricingCards: Subscription[]) => {
        return (
            pricingCards.map((pricingCard: Subscription, index: number)=> {
                if (pricingCard.bestValue) return ( <PricingCard key={index} pricingsObject={pricingCard} cta={true} /> );
                return ( <PricingCard key={index} pricingsObject={pricingCard} cta={false}/> );
            })
        )
    }

    return(
        <>
            <Navbar content={HomeNavbar}/>

            <main className='home'>

                <section className="intro">
                    <img className='intro__img' src={boyGaming} alt="Een gamend kind."/>
                    <div className="intro__information">
                        <div className="intro__text">
                            <h1 className="intro__heading">Vallezione</h1>
                            <p className="intro__p">Dé app voor informatie over <b>Valorant</b>.</p>
                        </div>
                        <button className="intro__login">Meld je nu aan!</button>
                    </div>
                </section>

                <section className="about" id='over'>
                    <div className="about__text">
                        <h2 className="about__heading">Over Vallezione</h2>
                        <p className="about__p">Vallezione heeft alle informatie die je nodig hebt over Valorant's agents.</p>
                    </div>
                    <img src={valorantClip} alt="Een perfect voorbeeld van iets wat compleet fout, maar tegelijkertijd goed gaat." className="about__img" />
                </section>

                <section className="features" id='features'>
                    <h2 className="features__title">Features</h2>
                    <div className="features__container">
                        {renderFeatures(StandardFeatures)}
                    </div>
                </section>

                <section className="pricing" id="prijs">
                    <h2 className="pricing__title">Pricing</h2>
                    <div className="pricing__container">
                        {renderPricingCards(StandardPricings)}
                    </div>
                </section>

                <section className="contact" id='contact'>
                    <h2 className="contact__title">Contact</h2>
                    <form className="contact__form">
                        <div className="contact__inputWrapper contact__nameWrapper">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input type="input" name="name" className="contact__input contact__name"/>
                        </div>
                        <div className="contact__inputWrapper contact__emailWrapper">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" name="email" className="contact__input contact__email"/>
                        </div>
                        <div className="contact__inputWrapper contact__messageWrapper">
                            <label htmlFor="message" className="contact__label">Bericht of vraag</label>
                            <textarea name="message" cols={1} rows={1} className="contact__input contact__message"></textarea>
                        </div>
                        <input type="button" value="Verzenden" className="contact__submit"/>
                    </form>
                </section>

                <footer className="footer">
                    <div className="footer__columns">
                        <article className="footer__column">
                            <h3 className="footer__heading">Contact</h3>
                            <div className="footer__details">
                                <a href="https://goo.gl/maps/62AnnZCzT2kPujW46" className="footer__anchor">Contactweg 36, 1014 AN Amsterdam</a>
                                <p className="footer__p">Postbus 67003, 1060 JA Amsterdam</p>
                                <a href="mailto:31781@ma-web.nl" className="footer__anchor">31781@ma-web.nl</a>
                                <a href="tel:+31208509500" className="footer__anchor">020 850 9500</a>
                            </div>
                        </article>
                        <article className="footer__column">
                        <h3 className="footer__heading">Socials</h3>
                            <div className="footer__details">
                                <a href="https://twitter.com/mediacollege" className="footer__anchor">Twitter</a>
                                <a href="https://www.instagram.com/mediacollege" className="footer__anchor">Instagram</a>
                            </div>
                        </article>
                        <article className="footer__column footer__cta">
                            <button className="footer__button">Log in</button>
                        </article>
                    </div>
                    <p className="footer__copyright">&copy; Jelani Alexis</p>
                </footer>
            </main>
        </>
    )
}

export default Home;