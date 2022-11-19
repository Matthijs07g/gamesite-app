import { Injectable } from '@angular/core';
import { blog } from './blog';


@Injectable({
    providedIn: 'root',
})

export class BlogService {
    readonly blogs: blog[] = [
        {
            id:0,
            name: 'Gta V',
            sDesc: 'Grand Theft Auto V is een computerspel uit de Grand Theft Auto-serie van Rockstar Games. Het spel is ontwikkeld door Rockstar North en kwam op 17 september 2013 uit voor PlayStation 3 en Xbox 360. Het spel is voor de PlayStation 4 en Xbox One op 18 november 2014 uitgekomen; de Windows-versie kwam op 14 april 2015 uit.',
            desc: 'Grand Theft Auto V is een action-adventurespel dat gespeeld kan worden vanuit een derde en eerste persoonsperspectief in een open wereld-omgeving. Het eerste persoonsperspectief is enkel beschikbaar op de pc, Playstation 4 en Xbox One. De speler kan rennen, springen, zwemmen, varen, vliegen of in voertuigen rijden om in het spel te navigeren. Tijdens het spel kan de speler verschillende missies voltooien om in het verhaal van het spel te vorderen. Het uitvoeren en voltooien van deze missies is echter geheel vrijblijvend en er kan ook vrij in de wereld worden gespeeld. Wanneer de speler illegale handelingen onderneemt in het spel, kan de politie daarop reageren in verschillende gradaties van intensiteit (getoond via een "wanted"-meter in de head-up display) waarbij 5 sterren het maximaal haalbare is.',
            createDate: new Date(),
            img: "../../../../assets/gtav.jpg",
        },
        {
            id:1,
            name: 'Ark: Survial Evolved',
            sDesc: '',
            desc: '',
            createDate: new Date(),
            img: '../../../../assets/ark.jpg',
        },
        {
            id:2,
            name: 'Dead by Daylight',
            sDesc: 'Dead by Daylight is een asymmetrische multiplayer survival horror online game ontwikkeld door de Canadese studio Behaviour Interactive.',
            desc: "Dead by Daylight is een asymmetrisch horrorspel waarin één speler de Killer is en de andere vier de Survivors. Het doel van de overlevenden is om uit de map te ontsnappen door vijf van de zeven generatoren te repareren die over de map verspreid staan om de twee uitgangspoorten van stroom te voorzien. De moordenaar moet alle overlevenden aan haken spietsen voordat ze ontsnappen, waardoor ze worden geofferd aan een kwaadaardige kracht die bekend staat als de Entity. Als er nog maar één overlevende over is, gaat er een ontsnappingsluik open.[9] Als de Killer het luik sluit of een uitgangspoort wordt geopend, begint de 'Endgame Collapse' en moeten de overlevenden binnen twee minuten ontsnappen. Bij de jacht op Survivors moet de Killer ze vangen door ze ofwel te slaan met hun wapen (één slag verwondt Survivors en twee slagen brengt ze in stervende staat) of door ze in één beweging te grijpen door ze onverwachts te vangen. Hoewel Survivors kunnen proberen te ontsnappen aan de haak als ze de eerste keer gespietst worden, is succes onwaarschijnlijk. Ze kunnen ook gered worden door andere Survivors. Als ze een tweede keer aan de haak worden geslagen, komen ze in een 'strijdfase', waarin ze de Entiteit moeten weerstaan terwijl deze hen uit het spel probeert te halen door vaardigheidscontroles uit te voeren totdat ze gedood of gered worden. Als ze een derde keer aan de haak worden geslagen, worden ze geofferd aan de Entiteit. De bewegingsmogelijkheden van de overlevenden bestaan uit sprinten, lopen, hurken en kruipen. Ze moeten de Killer ontwijken door hun gezichtsveld te verliezen tijdens een achtervolging of door zich met succes voor hen te verbergen. De meeste Killers kunnen zich slechts bewegen in een tempo dat iets sneller is dan dat van een sprintende Survivor. De Killer is echter langzamer in andere bewegingen, zoals het overwinnen van obstakels. Op enkele uitzonderingen na kunnen Killers niet over obstakels springen die Survivors op hun pad kunnen gooien en moeten ze er in plaats daarvan omheen of ze vernietigen. De Killer heeft ook een aura-leesvermogen, dat voortdurend de locatie van generatoren, haken en soms Survivors onthult. Elke Killer heeft zijn eigen unieke kracht. De Wraith kan bijvoorbeeld onzichtbaar worden en zich sneller verplaatsen (maar kan geen overlevenden raken als hij verborgen is) en de Hillbilly heeft een kettingzaag waarmee hij snel over de kaart kan rennen en onmiddellijk alle overlevenden op zijn pad kan neerhalen. Deze krachten kunnen worden aangepast met behulp van add-ons die je tijdens het spel verkrijgt. Overlevenden kunnen kisten doorzoeken om nuttige voorwerpen te vinden, zoals kaarten, sleutels, gereedschapskisten, med-kits en zaklampen. De meeste Killers hebben een aangeboren 'terreurradius' die hen omringt. Overlevenden binnen die straal horen een hartslag, die intenser wordt naarmate ze dichter bij de moordenaar komen. Ze kunnen ook een rood licht zien (de 'rode vlek' genoemd) dat van het hoofd van de moordenaar op de grond valt, wat de richting aangeeft waarin hij kijkt en de overlevenden kan helpen bepalen wanneer de moordenaar de hoek om komt. Sommige Killers kunnen onder bepaalde omstandigheden hun schrikstraal en rode vlek onderdrukken, waardoor ze onwetende Survivors kunnen verrassen.",
            createDate: new Date(),
            img: '../../../../assets/dbd.jpg',
        },
        {
            id:3,
            name: 'Rainbow six Siege',
            sDesc: "Tom Clancy's Rainbow Six: Siege is een first-person shooter ontwikkeld door Ubisoft Montreal. Het spel werd uitgegeven door Ubisoft voor PlayStation 4, Playstation 5, Windows en Xbox One. Tom Clancy's Rainbow 6: Patriots was initieel in ontwikkeling voor de PlayStation 3 en Xbox 360.",
            desc: "Tom Clancy s Rainbow Six: Siege is een first-person shooter ontwikkeld door Ubisoft Montreal. Het spel werd uitgegeven door Ubisoft voor PlayStation 4, Playstation 5, Windows en Xbox One. Tom Clancy s Rainbow 6: Patriots was initieel in ontwikkeling voor de PlayStation 3 en Xbox 360. Nadat de opvolgers van beide consoles waren aangekondigd, besloten de ontwikkelaars dat de ideeën voor het spel beter geschikt waren voor de nieuwe consoles en om alle ontwikkeling voor Patriots te stoppen en vanaf nul te beginnen aan Rainbow Six: Siege. Het spel heeft begin januari 2019 12 seizoenen en 44 operators. Iedere operator heeft zijn eigen specialiteit. Elk seizoen komt er 1 operator bij: meestal zijn dit een aanvaller of een verdediger.",
            createDate: new Date(),
            img: '../../../../assets/r6.jpg',
        },
        {
            id:4,
            name: 'Fifa 23',
            sDesc: 'FIFA 23 is een voetbalsimulatiespel uit de FIFA-computerspellenreeks. Het spel wordt uitgebracht op 30 september 2022. Dit keer prijkt Kylian Mbappé samen met Sam Kerr op de cover van alle edities. Het spel verschijnt voor Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series en Google Stadia.',
            desc: 'komt nog',
            createDate: new Date(),
            img: '../../../../assets/fifa.jpg',
        },
        {
            id:5,
            name: 'Overwatch 2',
            sDesc: 'Overwatch 2 is een 2022 first-person shooter van Blizzard Entertainment. Als een vervolg op de 2016 held shooter Overwatch, het spel van plan een gedeelde omgeving voor speler-tegen-speler (PvP) modi terwijl de invoering van persistente coöperatieve modi. Overwatch 2 is free-to-play op Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One en Xbox Series X/S in early access op 4 oktober en bevat volledige cross-platform play.',
            desc: "Overwatch 2 is een hero-shooter, waarbij spelers in twee teams worden verdeeld en een 'held' kiezen uit een rooster van 35 personages. De personages zijn verdeeld in een 'schade' klasse, verantwoordelijk voor offensieve inspanningen; een 'ondersteuning' klasse, verantwoordelijk voor genezing en buffing; en een 'tank' klasse, verantwoordelijk voor de bescherming van het team. Elk personage heeft een unieke set vaardigheden, bestaande uit actieve, passieve en ultieme vaardigheden. Overwatch 2 draait, net als zijn voorganger, vooral om speler-tegen-speler (PvP) gevechten in verschillende modes en maps, en omvat zowel casual als gerangschikte competitieve wedstrijden. Het originele Overwatch was ontworpen voor zes-op-zes teamgevechten, met twee van elke klasse in een team. In Overwatch 2 is het aantal tankslots met één verminderd, waardoor het totale aantal spelers per team op vijf komt. Volgens game director Aaron Keller hoopten de ontwikkelaars dat het verlies van een tank de gameplay zou versnellen, omdat ze geloofden dat het oorspronkelijke schema met zes spelers de gameplay traag maakte. Het is ook bedoeld om de hoeveelheid dingen waar spelers en toeschouwers op moeten letten te verminderen. Nieuwe maps werden ontworpen met meer coveropties om de verminderde bescherming door tanks te compenseren. Daarnaast hebben helden van de schadeklasse nu een verhoogde bewegingssnelheid, regenereren ondersteunende helden langzaam, en werden tankhelden opnieuw ontworpen zodat ze een offensievere rol kunnen spelen. Helden werden visueel opgeknapt om het verstrijken van de tijd sinds de gebeurtenissen van het eerste spel weer te geven. Overwatch 2 bevat een ping-systeem om de aandacht van teamgenoten te richten op specifieke punten op de kaart. Het spel introduceert ook een nieuwe PvP-modus genaamd 'Push', vergelijkbaar met touwtrekken, waarin teams strijden om de controle over een robot die de lading van een team naar de kant van de tegenstander op de kaart duwt. Push is niet alleen opgenomen in Unranked en Competitive play, maar maakt ook deel uit van de standaard maprotatie van de Overwatch League, ter vervanging van Assault. Sommige bestaande spelmodi kunnen in Overwatch 2 komen te vervallen; voormalig spelleider Jeff Kaplan heeft verklaard dat sommige Assault-maps (in de volksmond '2CP' genoemd, wat 'twee controlepunten' betekent), zoals Paris en Horizon Lunar Colony, waarschijnlijk niet beschikbaar zullen zijn in Overwatch 2, omdat deze in reactie op feedback van de community als onevenwichtig zijn aangemerkt. Andere Assault maps, zoals Hanamura en Temple of Anubis, zijn mogelijk wel beschikbaar in de vorm van custom games of niet-competitieve arcade modes. Het spel bevat speler versus omgeving (PvE) spelmodi. Vergelijkbaar met de speciale seizoensgebonden evenementen, zullen deze bestaan uit coöperatieve missies voor vier spelers tegen niet-speelbare personages en zijn beschikbaar op een permanente in tegenstelling tot een seizoensgebonden basis. In deze modus kunnen spelers ervaringspunten verzamelen voor hun held en nieuwe passieve vaardigheden vrijspelen, 'talenten' genaamd, waarmee ze invloed kunnen uitoefenen op hoe de held speelt. Er zijn ten minste twee PvE-modi: een verhaalgebaseerde missiemodus, waarin spelers beperkt zijn tot hun heldenselectie bij het naspelen van missies die gebaseerd zijn op de Overwatch lore, en heldenmissies waarbij alle helden kunnen worden gebruikt bij het afweren van golven vijanden op verschillende locaties. Blizzard verwacht dat Overwatch 2 meer dan 100 verschillende PvE-missies zal bieden, waarbij nieuwe kaarten worden gebruikt en bestaande multiplayer-maps worden uitgebreid met nieuwe gebieden, en dynamische effecten worden toegevoegd, zoals dag- en nachttijden en wisselende weersomstandigheden. Vijandelijke types zijn uitgebreid van de Null Sector-robots die werden geïntroduceerd in de oorspronkelijke seizoensgebonden PvE-evenementen, met toevoeging van nieuwe types met uniek gedrag. Overwatch 2 werd uitgebracht als free-to-play in tegenstelling tot het premium monetization model van zijn voorganger. Het stopte ook met loot boxes ten gunste van een battle pass systeem dat op seizoensbasis wordt aangeboden en overeenkomt met de introductie van nieuwe maps en helden. Het spel bevat ook een in-game winkel waar spelers rechtstreeks cosmetica kunnen kopen. Blizzard verklaarde dat nieuwe helden zullen worden geïntroduceerd als beloningen op de gratis tier van de battle pass, en spelers die de bijbehorende tier niet halen zullen andere routes hebben om de held gratis te verkrijgen in latere seizoenen. Een Battle.net-account is vereist om Overwatch 2 te spelen, ongeacht het platform. Overwatch 2 bevat cross-progressie, waarbij in-game cosmetische items en voortgang worden gedeeld tussen de PC- en consoleversie. Vrijgespeelde cosmetische items, in-game valuta en spelersstatistieken van elk Overwatch-profiel dat aan zo'n account is gekoppeld, worden samengevoegd en zijn beschikbaar op alle platforms. Competitieve vaardigheidsbeoordelingen zijn gescheiden, waarbij de console- en pc-rangen onafhankelijk van elkaar blijven.",
            createDate: new Date(),
            img: '../../../../assets/overwatch.jpg',
        }
    ];

    constructor(){
        console.log('Service constructor aangeroepen');
    }

    getBlogs(): blog[] {
        console.log('getBlogs aangeroepen');
        return this.blogs;
    }

    getBlogById(id: number): blog {
        console.log('getBlogById aangeroepen');
        return this.blogs.filter((blog) => blog.id === id)[0];
    }
}