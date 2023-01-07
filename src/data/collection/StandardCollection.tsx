import { Agent } from '../types/types';

import JettImg from  '../../img/Agents/Agents_Jett.webp';
import FadeImg from '../../img/Agents/Agents_Fade.webp';
import RazeImg from '../../img/Agents/Agents_Raze.webp';
import SkyeImg from '../../img/Agents/Agents_Skye.webp';
import BrimstoneImg from '../../img/Agents/Agents_Brimstone.webp';
import ViperImg from '../../img/Agents/Agents_Viper.webp';
import ChamberImg from '../../img/Agents/Agents_Chamber.webp';

const StandardCollection: Agent[] = [
    {
        name: "Jett",
        img: { url: JettImg, draggable: false },
        agentClass: "Duelist",
        description: "Jett is een Duelist die met hoogteverschillen, snelheid en tijdelijke blokkades van zichtlijnen opponenten kan desoriënteren.",
        price: "Gratis",
        misc: "Jett is een van de eerste agents die speelbaar is gemaakt.",
        addButton: false,
    },
    {
        name: "Fade",
        img: { url: FadeImg, draggable: false },
        agentClass: "Initiator",
        description: "Fade is een Initiator die specialiseert in mensen opsporen en ze in oncomfortabele plekken houden.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Fade is de 20e agent die in de game is toegevoegd.",
        addButton: false,
    },
    {
        name: "Raze",
        img: { url: RazeImg, draggable: false },
        agentClass: "Duelist",
        description: "Raze is een Duelist die op explosieven is gefocust.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Raze is de eerste agent die ooit is generft: ze had vroeger 2 Paint Shells.",
        addButton: false,
    },
    {
        name: "Skye",
        img: { url: SkyeImg, draggable: false },
        agentClass: "Initiator",
        description: "Skye is een Initiator die met haar krachten zowel agressief als informatie-gericht kan spelen.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Skye was één van de twee agents die 3 flashbangs had. Dit is vervangen door 2 flashbangs die na 40 seconden opladen.",
        addButton: false,
    },
    {
        name: "Brimstone",
        img: { url: BrimstoneImg, draggable: false },
        agentClass: "Controller",
        description: "Brimstone is een Controller die met rook en een brandgranaat niet alleen ervoor zorgt dat de vijand niet zomaar door kan lopen, maar ook zijn team kan helpen het punt op te komen.",
        price: "Gratis",
        misc: "Brimstone is de enige gratis Controller.",
        addButton: false,
    },
    {
        name: "Viper",
        img: { url: ViperImg, draggable: false },
        agentClass: "Controller",
        description: "Viper is een Controller wiens speelstijl focust op de tegenstander's HP verlagen om ze makkelijk af te kunnen maken.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Viper is de enige agent met 2 passieve abilities: haar Fuel die haar krachten opgebruiken, en de Decay die vijanden krijgen wanneer ze door haar gadgets lopen.",
        addButton: false,
    },
    {
        name: "Chamber",
        img: { url: ChamberImg, draggable: false },
        agentClass: "Sentinel",
        description: "Chamber is een non-traditionele Sentinel door het feit dat hij met wapens pushes moet stoppen, i.p.v. alleen maar zijn trap te kunnen gebruiken.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Chamber is de enige agent met 2 wapens in zijn kit: Headhunter, een Sheriff met een scope, en Tour de Force, een 'gratis' Operator.",
        addButton: false,
    },
    {
        name: "Add",
        addButton: true,
    }
];

export default StandardCollection;