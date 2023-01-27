import { Feature, Subscription, NavElement, Agent } from './types/types';

import PlusImg from '../assets/plus.webp';
import JettImg from  '../assets/Agents/Agents_Jett.webp';
import FadeImg from '../assets/Agents/Agents_Fade.webp';
import RazeImg from '../assets/Agents/Agents_Raze.webp';
import SkyeImg from '../assets/Agents/Agents_Skye.webp';
import BrimstoneImg from '../assets/Agents/Agents_Brimstone.webp';
import ViperImg from '../assets/Agents/Agents_Viper.webp';
import ChamberImg from '../assets/Agents/Agents_Chamber.webp';

import missingImage from '../assets/missing-image.webp';

export const Collections: { userId: string, password: string, data: Agent[] }[] = [
    {
        userId: "test",
        password: "welkom123",
        data: [
            {
                id: 0,
                name: "Jett",
                img: { url: JettImg, draggable: false },
                agentRole: "Duelist",
                description: "Jett is een Duelist die met hoogteverschillen, snelheid en tijdelijke blokkades van zichtlijnen opponenten kan desoriënteren.",
                agentCost: 0,
                misc: "Jett is een van de eerste agents die speelbaar is gemaakt.",
                addButton: false,
            },
            {
                id: 1,
                name: "Fade",
                img: { url: FadeImg, draggable: false },
                agentRole: "Initiator",
                description: "Fade is een Initiator die specialiseert in mensen opsporen en ze in oncomfortabele plekken houden.",
                agentCost: 375000,
                misc: "Fade is de 20e agent die in de game is toegevoegd.",
                addButton: false,
            },
            {
                id: 2,
                name: "Raze",
                img: { url: RazeImg, draggable: false },
                agentRole: "Duelist",
                description: "Raze is een Duelist die op explosieven is gefocust.",
                agentCost: 375000,
                misc: "Raze is de eerste agent die ooit is generft: ze had vroeger 2 Paint Shells.",
                addButton: false,
            },
            {
                id: 3,
                name: "Skye",
                img: { url: SkyeImg, draggable: false },
                agentRole: "Initiator",
                description: "Skye is een Initiator die met haar krachten zowel agressief als informatie-gericht kan spelen.",
                agentCost: 375000,
                misc: "Skye was één van de twee agents die 3 flashbangs had. Dit is vervangen door 2 flashbangs die na 40 seconden opladen.",
                addButton: false,
            },
            {
                id: 4,
                name: "Brimstone",
                img: { url: BrimstoneImg, draggable: false },
                agentRole: "Controller",
                description: "Brimstone is een Controller die ervoor zorgt dat de vijand niet zomaar door kan lopen en ook zijn team kan helpen het punt op te komen.",
                agentCost: 0,
                misc: "Brimstone is de enige 0 Controller.",
                addButton: false,
            },
            {
                id: 5,
                name: "Viper",
                img: { url: ViperImg, draggable: false },
                agentRole: "Controller",
                description: "Viper is een Controller wiens speelstijl focust op de tegenstander's HP verlagen om ze makkelijk af te kunnen maken.",
                agentCost: 375000,
                misc: "Viper is de enige agent met 2 passieve abilities: haar Fuel die haar krachten opgebruiken, en de Decay die vijanden krijgen wanneer ze door haar gadgets lopen.",
                addButton: false,
            },
            {
                id: 6,
                name: "Chamber",
                img: { url: ChamberImg, draggable: false },
                agentRole: "Sentinel",
                description: "Chamber is een Sentinel die met zijn wapens pushes moet stoppen, i.p.v. alleen maar zijn trap te kunnen gebruiken.",
                agentCost: 375000,
                misc: "Chamber is de enige agent met 2 wapens in zijn kit: Headhunter, een Sheriff met een scope, en Tour de Force, een '0' Operator.",
                addButton: false,
            },
            {
                id: 7,
                name: "Add",
                img: { url: PlusImg, draggable: false },
                addButton: true,
            }
        ]
    },
    {
        userId: "jjmighty_",
        password: "valorantaddict",
        data: [
            {
                id: 0,
                name: "Jett",
                img: { url: JettImg, draggable: false },
                agentRole: "Duelist",
                description: "Jett is een Duelist die met hoogteverschillen, snelheid en tijdelijke blokkades van zichtlijnen opponenten kan desoriënteren.",
                agentCost: 0,
                misc: "Jett is een van de eerste agents die speelbaar is gemaakt.",
                addButton: false,
            },
            {
                id: 1,
                name: "Fade",
                img: { url: FadeImg, draggable: false },
                agentRole: "Initiator",
                description: "Fade is een Initiator die specialiseert in mensen opsporen en ze in oncomfortabele plekken houden.",
                agentCost: 375000,
                misc: "Fade is de 20e agent die in de game is toegevoegd.",
                addButton: false,
            },
            {
                id: 2,
                name: "Raze",
                img: { url: RazeImg, draggable: false },
                agentRole: "Duelist",
                description: "Raze is een Duelist die op explosieven is gefocust.",
                agentCost: 375000,
                misc: "Raze is de eerste agent die ooit is generft: ze had vroeger 2 Paint Shells.",
                addButton: false,
            },
            {
                id: 3,
                name: "Skye",
                img: { url: SkyeImg, draggable: false },
                agentRole: "Initiator",
                description: "Skye is een Initiator die met haar krachten zowel agressief als informatie-gericht kan spelen.",
                agentCost: 375000,
                misc: "Skye was één van de twee agents die 3 flashbangs had. Dit is vervangen door 2 flashbangs die na 40 seconden opladen.",
                addButton: false,
            },
            {
                id: 4,
                name: "Brimstone",
                img: { url: BrimstoneImg, draggable: false },
                agentRole: "Controller",
                description: "Brimstone is een Controller die ervoor zorgt dat de vijand niet zomaar door kan lopen en ook zijn team kan helpen het punt op te komen.",
                agentCost: 0,
                misc: "Brimstone is de enige 0 Controller.",
                addButton: false,
            },
            {
                id: 5,
                name: "Viper",
                img: { url: ViperImg, draggable: false },
                agentRole: "Controller",
                description: "Viper is een Controller wiens speelstijl focust op de tegenstander's HP verlagen om ze makkelijk af te kunnen maken.",
                agentCost: 375000,
                misc: "Viper is de enige agent met 2 passieve abilities: haar Fuel die haar krachten opgebruiken, en de Decay die vijanden krijgen wanneer ze door haar gadgets lopen.",
                addButton: false,
            },
            {
                id: 6,
                name: "Chamber",
                img: { url: ChamberImg, draggable: false },
                agentRole: "Sentinel",
                description: "Chamber is een Sentinel die met zijn wapens pushes moet stoppen, i.p.v. alleen maar zijn trap te kunnen gebruiken.",
                agentCost: 375000,
                misc: "Chamber is de enige agent met 2 wapens in zijn kit: Headhunter, een Sheriff met een scope, en Tour de Force, een '0' Operator.",
                addButton: false,
            },
            {
                id: 7,
                name: "Chamber",
                img: { url: ChamberImg, draggable: false },
                agentRole: "Sentinel",
                description: "Chamber is een Sentinel die met zijn wapens pushes moet stoppen, i.p.v. alleen maar zijn trap te kunnen gebruiken.",
                agentCost: 375000,
                misc: "Chamber is de enige agent met 2 wapens in zijn kit: Headhunter, een Sheriff met een scope, en Tour de Force, een '0' Operator.",
                addButton: false,
            },
            {
                id: 8,
                name: "Chamber",
                img: { url: ChamberImg, draggable: false },
                agentRole: "Sentinel",
                description: "Chamber is een Sentinel die met zijn wapens pushes moet stoppen, i.p.v. alleen maar zijn trap te kunnen gebruiken.",
                agentCost: 375000,
                misc: "Chamber is de enige agent met 2 wapens in zijn kit: Headhunter, een Sheriff met een scope, en Tour de Force, een '0' Operator.",
                addButton: false,
            },
            {
                id: 9,
                name: "Add",
                img: { url: PlusImg, draggable: false },
                addButton: true,
            }
        ]
    }
]

export const Navbars: { collectionNavbar: NavElement[], homeNavbar: NavElement[] } = {
    collectionNavbar: [
        {
            name: "Collectie",
            currentPage: true,
            elementType: "Link",
            target: `/collection/${sessionStorage.getItem("userId")}`,
            cta: false,
        },
        {
            name: "Backlog",
            currentPage: false,
            elementType: "Link",
            target: `/backlog/${sessionStorage.getItem("userId")}`,
            cta: false,
        },
        {
            name: "Contact",
            currentPage: false,
            elementType: "Link",
            target: "/#contact",
            cta: false,
        },
        {
            name: "Uitloggen",
            currentPage: false,
            elementType: "Link",
            target: "/logout",
            cta: false,
        },
        {
            name: "Delen",
            currentPage: false,
            elementType: "Copy-on-click",
            target: "currentlocation",
            cta: true,
        },
    ],
    homeNavbar: [
        {
            name: "Over",
            currentPage: false,
            elementType: "Anchor",
            target: "#over",
            cta: false,
        },
        {
            name: "Features",
            currentPage: false,
            elementType: "Anchor",
            target: "#features",
            cta: false,
        },
        {
            name: "Prijs",
            currentPage: false,
            elementType: "Anchor",
            target: "#prijs",
            cta: false,
        },
        {
            name: "Contact",
            currentPage: false,
            elementType: "Anchor",
            target: "#contact",
            cta: false,
        },
        {
            name: "Log in",
            currentPage: false,
            elementType: "Link",
            target: "/login",
            cta: true,
        },
    ]
}

export const Features: Feature[] = [
    {
        name: "Verbeter je gameplay",
        description: "Leer wat alle agents doen en hoe je je rol in het team kan vervullen.",
        img: { url: missingImage, altText: "Geen bestand gevonden." },
    },
    {
        name: "Overige informatie",
        description: "Alle overige informatie die te maken heeft met alle Valorant agents.",
        img: { url: missingImage, altText: "Geen bestand gevonden." },
    },
    {
        name: "Bewerk informatie",
        description: "Bewerk alle informatie die je invoert. Hiermee kan je wat je leert over een agent opslaan in de database, en later weer bekijken.",
        img: { url: missingImage, altText: "Geen bestand gevonden." },
    }
]

export const Pricings: Subscription[] = [
    {
        name: "Free Edition",
        description: "De 0 versie van Collezione. Alle basisfeatures inbegrepen.",
        price: "0,-",
        ctaText: "Aanmelden",
        bestValue: false,
    },
    {
        name: "Basic Edition",
        description: "De 0 versie van Collezione. Alle basisfeatures inbegrepen.",
        price: "2,99",
        ctaText: "Nu kopen",
        bestValue: true,
    },
    {
        name: "VIP Edition",
        description: "De premiumversie van Collezione. Alles wat inbegrepen wordt in de basisversie, plus een groot aantal extra functionaliteiten.",
        price: "4,99",
        ctaText: "Nu kopen",
        bestValue: false,
    },

]