import JettImg from '../../img/Agents/Agents_Jett.webp';
import FadeImg from '../../img/Agents/Agents_Fade.webp';
import RazeImg from '../../img/Agents/Agents_Raze.webp';
import SkyeImg from '../../img/Agents/Agents_Skye.webp';
import BrimstoneImg from '../../img/Agents/Agents_Brimstone.webp';
import ViperImg from '../../img/Agents/Agents_Viper.webp';
import ChamberImg from '../../img/Agents/Agents_Chamber.png';
import plus from '../../img/plus.png';

const StandardCollection = [
    {
        name: "Jett",
        img: JettImg,
        description: "Jett is een Duelist die met hoogteverschillen, snelheid en tijdelijke blokkades van zichtlijnen opponenten kan desoriënteren. Ze is ook de enige agent die in de lucht volledig accuraat is dankzij haar Blade Storm.",
        price: "Gratis",
        misc: "Jett is een van de eerste agents die speelbaar is gemaakt.",
        addButton: false,
    },
    {
        name: "Fade",
        img: FadeImg,
        description: "Fade is een Initiator die effectief is in mensen opsporen en vastzetten in oncomfortabele plekken. Ze kan ook haar krachten combineren om precies te weten waar mensen zitten.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Fade is de enige agent die het geluid van de tegenstander kan dempen.",
        addButton: false,
    },
    {
        name: "Raze",
        img: RazeImg,
        description: "Raze is een Duelist die een ding of twee van explosieven afweet. Ze kan razendsnel door de lucht vliegen met haar Blast Packs, of gewoon de vijand opblazen.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Raze is de eerste agent die met intentie is generft: ze had vroeger 2 Paint Shells.",
        addButton: false,
    },
    {
        name: "Skye",
        img: SkyeImg,
        description: "Skye is een Initiator die met haar krachten zowel agressief als informatie-gericht kan spelen. Haar taak is dan ook om haar team te helpen de site op te komen of om mensen op te sporen voordat ze de kans krijgen om aan te vallen.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Skye was een van de twee agents die 3 flashbangs had. Dit is vervangen door 2 flashbangs die over 40 seconden opladen.",
        addButton: false,
    },
    {
        name: "Brimstone",
        img: BrimstoneImg,
        description: "Brimstone is een Controller die ervoor zorgt dat de vijand niet zomaar door kan lopen, dankzij zijn zichtbelemmerende smokes en brandgranaat. Hij zorgt er ook voor dat zijn team makkelijker de site op kan komen met zijn Stim Beacon.",
        price: "Gratis",
        misc: "Brimstone is de enige gratis Controller.",
        addButton: false,
    },
    {
        name: "Viper",
        img: ViperImg,
        description: "Viper is een Controller die ervoor kan zorgen dat de Spike niet onschadelijk wordt gemaakt van veraf. Naast het feit dat ze hun zicht al blokkeert, zorgen al haar krachten ervoor dat de tegenstander minder HP heeft om mee te werken.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Viper is de enige agent met 2 passive abilities: haar Fuel die haar krachten opgebruiken, en de Decay die vijanden krijgen wanneer ze door haar gadgets lopen.",
        addButton: false,
    },
    {
        name: "Chamber",
        img: ChamberImg,
        description: "Chamber is een non-traditionele Sentinel op de manier dat hij, ondanks het feit dat hij met zijn langzamer makende trap,voornamelijk op de enemies moet schieten zodat ze niet pushen. Hij kan die trap ook gebruiken om voor de flank uit te kijken, of voor informatie of de vijand naar de andere site gaat.",
        price: "5 Agent Contract Tiers (375.000 XP)",
        misc: "Chamber is de enige agent met 2 alternatieve wapens in zijn kit: Headhunter, een wapen wat op de Sheriff lijkt met een scope, en Tour de Force, een wapen wat op de Operator lijkt maar sneller kan schieten.",
        addButton: false,
    },
    {
        name: "Add",
        img: plus,
        addButton: true,
    }
];

export default StandardCollection;