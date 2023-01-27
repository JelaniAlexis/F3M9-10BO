import { useNavigate } from 'react-router-dom';

import Notes from '../../assets/notes.webp';
import './Login.scss';
import { useNavContent } from '../Root';
import { FormEvent, useEffect, useState } from 'react';
import { Collections } from '../../common/datasets';

const Login = () => {

    const  { setNavContent } = useNavContent();
    const navigate = useNavigate();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginError, setLoginError] = useState<string>("");

    const onSubmit = (event: FormEvent) => {
        let isNameMatching: boolean = false;
        let isPasswordMatching: boolean = false;

        event.preventDefault();


        if (username === "" && password === "") {
            setLoginError("Er zijn geen gegevens ingevoerd. Probeer het opnieuw.");
            return;
        }
        if (username === "") {
            setLoginError("Er is geen naam ingevoerd. Probeer het opnieuw.");
            return;
        }
        if (password === "") {
            setLoginError("Er is geen wachtwoord ingevoerd. Probeer het opnieuw.");
            return;
        }
        Collections.forEach((collection) => collection.userId === username ? isNameMatching = true : null);
        if (isNameMatching) Collections.forEach((collection) => collection.password === password ? isPasswordMatching = true : null);
        else setLoginError("De gegeven naam is niet gevonden. Probeer het opnieuw.");
        if (isPasswordMatching) {
            sessionStorage.setItem("userId", username);
            navigate(`/collection/${username}`);
        }
        else setLoginError("Het gegeven wachtwoord is niet juist. Probeer het opnieuw.");
    }

    useEffect(() => {
        setNavContent([]);
    }, [setNavContent]);

    useEffect(() => {
        if (sessionStorage.getItem("userId") !== null) navigate(`/collection/${sessionStorage.getItem("userId")}`);
    }, [navigate])

    return (
        <div className="login">
            <div className="login__imgWrapper">
                <img className="login__img" src={Notes} alt="Notities"/>
            </div>
            <form className="login__form" onSubmit={onSubmit}>
                <h1 className="login__title">Log in</h1>
                <div className="login__inputWrapper">
                    <p className="login__error">{loginError}</p>
                    <label htmlFor="username" className="login__inputLabel">Gebruikersnaam</label>
                    <input type="text" name="username" className="login__input login__username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="login__inputWrapper">
                    <label htmlFor="password" className="login__inputLabel">Wachtwoord</label>
                    <input type="password" name="password" className="login__input login__password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Inloggen" className="login__submit"/>
            </form>
        </div>
    )
}

export default Login;