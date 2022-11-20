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
            sDesc: 'Ark: Survival Evolved (gestileerd als ARK) is een actie-avontuur survival-videogame uit 2017, ontwikkeld door Studio Wildcard. In het spel moeten spelers overleven terwijl ze zijn gestrand op een van de verschillende kaarten vol met rondzwervende dinosaurussen, fictieve fantasiemonsters en andere prehistorische dieren, natuurlijke gevaren en mogelijk vijandige menselijke spelers.',
            desc: 'Ark: Survival Evolved is een action-adventure survival game die zich afspeelt in een open wereld omgeving met een dynamische dag-nacht cyclus en gespeeld wordt vanuit een third-person of first-person perspectief. Om te overleven moeten spelers een basis opzetten, met vuur en wapens; extra activiteiten, zoals het temmen en voeden van dinosaurussen, vereisen meer middelen. De wereld van het spel, bekend als de "Ark", is ongeveer 48 km2 groot. Er is ongeveer 36 km2 land en 12 km2 oceaan. Er zijn momenteel 176 wezens die de wereld van Ark bevolken. In de eerste versies van het spel waren bijna alle wezens echte dinosaurussen en andere prehistorische wezens, maar naarmate de verhaallijn vorderde, werden mythische wezens als de wyvern, griffioen, golem en feniks toegevoegd. Toen er uitbreidingen werden uitgebracht, kwamen er ook volledig originele wezens, zoals de Karkinos en de Velonasaurus, en originele robotwezens zoals de Enforcer en Scout. Een van de belangrijkste spelmechanismen van het spel is het temmen van wezens. De meeste wezens kunnen door de speler worden getemd, maar sommige, zoals Meganeura of Titanomyrma, kunnen dat niet. De manier van temmen verschilt per wezen. De meeste wezens worden "gewelddadig" getemd, wat betekent dat de spelers het wezen moeten uitschakelen met kalmeringsprojectielen zoals tranq darts of met botte wapens, zoals een knuppel. Vaak moeten spelers de dinosaurus verdoven voor de duur van het temmen. Sommige dinosaurussen doen er langer over dan andere om te temmen en hebben daarom meer narcotica nodig. Spelers kunnen narcoberries gebruiken, of narcotica maken van narcoberries en bedorven vlees. Eenmaal uitgeschakeld moet de speler het wezen het voedsel van zijn voorkeur geven, zoals bessen voor herbivoren of rauw vlees voor carnivoren. Verschillende soorten voedsel helpen de dieren met verschillende snelheden te temmen. De meeste wezens worden het meest effectief - en het snelst - tam met voedsel dat Kibble heet, een voorwerp dat is gemaakt met eieren van een ander wezen. Sommige wezens kunnen ook passief worden getemd, door ze te benaderen en voorzichtig voedsel te geven. Als een wezen eenmaal getemd is, volgt het de bevelen op van de speler die het heeft getemd. Ook kunnen de meeste wezens bereden worden, waardoor de speler de vaardigheden van het wezen kan gebruiken, zoals vliegen of snel bewegen onder water. Tijdens het berijden van bepaalde wezens kunnen spelers nog steeds wapens gebruiken. Ze kunnen ook worden gebruikt om voorwerpen te dragen, en spelers kunnen ze offensieve en defensieve commandos geven; een troep Utahraptors kan bijvoorbeeld worden aangewezen om de basis te verdedigen, of een groep Triceratops kan het bevel krijgen om een vijandelijke basis aan te vallen. Sommige van de grotere wezens, zoals een Brontosaurus of Mosasaurus, kunnen een bouwplatform op hun rug krijgen, waardoor spelers een mobiele, zij het kleine, basis hebben. Het spel bevat ook verschillende andere dieren, zoals de dodo, sabeltandtijger, wolharige mammoet, Meganeura, Titanomyrma en Doedicurus. Elk wezen in het spel heeft levende ecosystemen en roofdierhiërarchieën. Spelers moeten verschillende meters bijhouden, zoals gezondheid, uithoudingsvermogen, zuurstof, honger, dorst en "gewicht", of hoeveel ze kunnen dragen. Als spelers schade oplopen, zal hun gezondheidsmeter geleidelijk regenereren als ze het nodige voedsel hebben geconsumeerd, of als ze voorwerpen maken die de gezondheidsmeter sneller regenereren. Anders zal de gezondheidsmeter van een speler na verloop van tijd langzaam regenereren. Spelers kunnen ervaring opdoen door materialen te oogsten, te knutselen, te doden of ontdekkingsreizigersbriefjes te ontdekken. Zodra de speler genoeg ervaring heeft opgedaan, krijgt hij een levelpunt, dat kan worden besteed aan het verbeteren van een van de stats van de speler, waaronder maximale gezondheid, maximaal uithoudingsvermogen, maximale zuurstof, maximale voedselmeter, maximale watermeter, maximale draaggewicht, melee schade, bewegingssnelheid en ambachtelijke snelheid. Vanaf juni 2020 is het maximale spelerslevel 105, met 60 extra levels die je krijgt door eindbazen te verslaan, 5 door een chibi (een cosmetisch huisdier dat je via een evenement in het spel verkrijgt) op te waarderen en 10 extra levels door alle ontdekkingsreizigersbriefjes te bemachtigen in het basisspel en alle DLC. Getemde wezens kunnen ook ervaring en levelpunten verdienen, die kunnen worden besteed aan soortgelijke stats. Wezens verschijnen in het spel op niveaus van 1 tot 150, en als ze getemd zijn, kunnen ze tot 75 extra niveaus krijgen door ervaring op te doen. Er zijn ook dinosaurussen die op een hoger niveau getemd kunnen worden, de tek-dinosaurussen. Deze verschijnen op een maximum level van 180. Er zijn specifieke soorten wezens, bijvoorbeeld de Rock Drake, of de Wyvern varianten, die tot level 190 kunnen verschijnen, maar ze zijn niet te temmen in het wild, en moeten in plaats daarvan worden uitgebroed uit hun respectievelijke ei. Spelers kunnen overal in de wereld structuren bouwen. Om een basis te bouwen, moeten spelers structuurcomponenten verwerven - zoals vloeren, deuren en ramen - die worden gebouwd met de grondstoffen die overal in de wereld te vinden zijn. Deze onderdelen kunnen vervolgens worden bewerkt en in de wereld worden geplaatst. Spelers kunnen elk bouwwerk maken, zolang ze over de logistiek en de middelen beschikken; de structurele integriteit van het gebouw komt in gevaar als de pilaren en funderingen worden vernietigd. Structuren kunnen worden gebouwd van verschillende niveaus van materialen, waarbij betere niveaus meer bescherming bieden, maar meer middelen kosten om te maken. Spelers beginnen met het maken van rieten constructies, gaan dan verder met hout, steen, metaal en tenslotte tek, een futuristisch en laat spelmateriaal. Er zijn ook glazen constructies die gebruikt kunnen worden om een broeikaseffect te creëren voor de planten die erin groeien. Adobe structuren houden de warmte van buiten tegen voor een ideale temperatuur in het gebouw. Spelers kunnen in het spel ook voorwerpen maken, zoals wapens, door de middelen en technologie te verzamelen die nodig zijn voor het maken. Bovendien kunnen spelers accessoires voor hun wapens maken en bevestigen, zoals een richtkijker of zaklamp voor een pistool of aanvalsgeweer.',
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

    getBlogById(id: string|null): blog {
        console.log('getBlogById aangeroepen');
        let Id = Number(id);
        return this.blogs.filter((blog) => blog.id === Id)[0];
    }

    addBlog(newBlog : blog): blog[]{
        this.blogs.push(newBlog);
        return this.blogs;
    }
}