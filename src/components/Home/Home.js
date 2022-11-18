import Navbar from '../Navbar/Navbar';
import HomeNavbar from '../../data/navbars/HomeNavbar';

import './Home.scss';

import boyGaming from '../../img/boy-gaming.jpg';
import valorantClip from '../../img/valorant-clip-1.gif';
import missingImage from '../../img/missing-image.jpg';

const Home = () => {
    return(
        <>
            <Navbar content={HomeNavbar}/>

            <main className='home'>

                <section className="intro">
                    <img className='intro__img' src={boyGaming} alt="Kid playing a game."/>
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
                    <img src={valorantClip} alt="Please try to learn proper tracking, rather than doing this." className="about__img" />
                </section>

                <section className="features" id='features'>
                    <h2 className="features__title">Features</h2>
                    <div className="features__container">
                        <article className="features__feature" id='feature1'>
                            <img src={missingImage} alt="Missing file." className="features__featureImg" />
                            <div className="features__featureText">
                                <h2 className="features__featureHeading">Verbeter je gameplay</h2>
                                <p className="features__featureP">Leer wat alle agents doen en hoe je je rol in het team kan vervullen.</p>
                            </div>
                        </article>

                        <article className="features__feature" id='feature2'>
                            <img src={missingImage} alt="Missing file." className="features__featureImg" />
                            <div className="features__featureText">
                                <h2 className="features__featureHeading">Feature</h2>
                                <p className="features__featureP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, possimus.</p>
                            </div>
                        </article>

                        <article className="features__feature" id='feature3'>
                            <img src={missingImage} alt="Missing file." className="features__featureImg" />
                            <div className="features__featureText">
                                <h2 className="features__featureHeading">Overige informatie</h2>
                                <p className="features__featureP">Alle overige informatie te maken met alle Valorant agents.</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="pricing" id="prijs">
                    <h2 className="pricing__title">Pricing</h2>
                    <div className="pricing__container">
                        <article className="pricing__card">
                            <div className="pricing__icon">
                                <i className="fa-solid fa-sack-xmark"></i>
                            </div>
                            <header className="pricing__header">
                                <h3 className="pricing__heading">Free Edition</h3>
                                <p className="pricing__description">De gratis versie van Vallezione. Alle basisfeatures inbegrepen.</p>
                            </header>
                            <footer className="pricing__footer">
                                <p className="pricing__price">&euro;0,-</p>
                                <button className="pricing__button">Log in</button>
                            </footer>
                        </article>

                        <article className="pricing__card pricing__cta">
                        <div className="pricing__bestValue">Beste waarde!</div>
                            <div className="pricing__icon">
                                <i className="fa-solid fa-dollar-sign"></i>
                            </div>
                            <header className="pricing__header">
                                <h3 className="pricing__heading">Basic Edition</h3>
                                <p className="pricing__description">De basisversie van Vallezione. Alle gratis functionaliteiten, plus extra's.</p>
                            </header>
                            <footer className="pricing__footer">
                                <p className="pricing__price">&euro;2,49/maand</p>
                                <button className="pricing__button">Koop Basic Edition</button>
                            </footer>
                        </article>

                        <article className="pricing__card">
                            <div className="pricing__icon">
                                <i className="fa-solid fa-sack-dollar"></i>
                            </div>
                            <header className="pricing__header">
                                <h3 className="pricing__heading">VIP Edition</h3>
                                <p className="pricing__description">De premiumversie van Vallezione. Alles wat inbegrepen wordt in de basisversie, plus een groot aantal extra functionaliteiten.</p>
                            </header>
                            <footer className="pricing__footer">
                                <p className="pricing__price">&euro;4,99/maand</p>
                                <button className="pricing__button">Koop VIP Edition</button>
                            </footer>
                        </article>
                    </div>
                </section>

                <section className="contact" id='contact'>
                    <h2 className="contact__title">Contact</h2>
                    <form className="contact__form">
                        <div className="contact__inputWrapper">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input type="input" name="name" className="contact__input contact__name"/>
                        </div>
                        <div className="contact__inputWrapper">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" name="email" className="contact__input contact__email"/>
                        </div>
                        <div className="contact__inputWrapper">
                            <label htmlFor="message" className="contact__label">Bericht of vraag</label>
                            <textarea name="message" cols="1" rows="1" className="contact__input contact__message"></textarea>
                        </div>
                        <input type="submit" value="Verzenden" className="contact__submit"/>
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