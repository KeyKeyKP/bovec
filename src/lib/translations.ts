export type Lang = "sl" | "hr" | "it" | "en" | "de";

export interface SeasonCard {
  name: string;
  highlight: string;
}

export interface ActivityItem {
  name: string;
  description: string;
}

export interface Translation {
  nav: { home: string; about: string; activities: string; gallery: string; booking: string; contact: string };
  gallery: { title: string; subtitle: string };
  hero: { tagline: string; subtitle: string; cta: string };
  about: { title: string; body1: string; body2: string };
  romantic: { title: string; body1: string; body2: string; body3: string };
  activities: { title: string; subtitle: string; items: ActivityItem[] };
  seasons: { title: string; body: string; cards: SeasonCard[] };
  booking: { title: string; subtitle: string; cta: string };
  location: { title: string; body: string };
  footer: {
    aboutTitle: string;
    aboutBody: string;
    contactTitle: string;
    quickLinksTitle: string;
    socialTitle: string;
    rights: string;
    siteBy: string;
  };
  meta: { title: string; description: string };
}

const activitiesNames = {
  sl: ["Rafting & Kajakaštvo","Soteskanje","Kolesarjenje & MTB","Pohodništvo","Ribolov","Smučanje na Kaninu","Tolmin in sotočje","Kobarid & Pot miru","Slap Boka","Padalstvo & zmajarstvo"],
  hr: ["Rafting & Kajakaštvo","Kanjoning","Biciklizam & MTB","Planinarenje","Ribolov","Skijanje na Kaninu","Tolmin i sutok","Kobarid & Put mira","Vodopad Boka","Paraglajding"],
  it: ["Rafting e kayak","Canyoning","Ciclismo e MTB","Escursionismo","Pesca","Sci al Canin","Tolmin e confluenza","Caporetto e Sentiero della Pace","Cascata Boka","Parapendio"],
  en: ["Rafting & Kayaking","Canyoning","Cycling & MTB","Hiking","Fishing","Skiing at Kanin","Tolmin & Confluence","Kobarid & Walk of Peace","Boka Waterfall","Paragliding"],
  de: ["Rafting & Kajak","Canyoning","Radfahren & MTB","Wandern","Angeln","Skifahren am Kanin","Tolmin & Zusammenfluss","Kobarid & Friedensweg","Boka-Wasserfall","Gleitschirmfliegen"],
};

const activitiesDesc: Record<Lang, string[]> = {
  sl: [
    "Reka Soča velja za eno najlepših rafting rek v Evropi. Divje valove izkušate med apnenčastimi skalami v čisti, ledeno modri vodi.",
    "Spust skozi ozke soteske, slapove in naravne tolmune — ena najatraktivnejših gorskih pustolovščin v Posočju.",
    "Stotine kilometrov kolesarskih poti za vse nivoje — od mirnih dolžinskih tras ob reki do zahtevnih gorskih spustov.",
    "Vzponi na Kanin, Rombon ali pot vzdolž Soče. Triglavski narodni park nudi steze za začetnike in izkušene gorniki enako.",
    "Soška postrv je ena najbolj cenjenih med ribiči. Fly-fishing v kristalno čisti reki je tukaj prava umetnost.",
    "Čezmejno smučišče Bovec–Kanin je najvišje ležeče smučišče v Sloveniji z izjemnimi razgledi na Jadran in Alpe.",
    "Sotočje Soče in Tolminke, Tolminska korita in Tolminska gorge — naravni biseri, vredni ogleda vsak letni čas.",
    "Muzej Kobarid (Nagrada Sveta Evrope), Napoleonov most in Pot miru — edinstvena mešanica narave in zgodovine prve svetovne vojne.",
    "Najvišji stalni slap v Sloveniji (144 m) je le kratek izlet od Bovca. Posebno impresiven v pomladanskih mesecih.",
    "Termika nad Bovškim poljem privablja padalce iz vse Evrope. Let nad dolino Soče je izkušnja, ki ostane za vedno.",
  ],
  hr: [
    "Rijeka Soča smatra se jednom od najljepših rafting rijeka u Europi. Divlje valove doživljavate između vapnenačkih stijena u čistoj, ledeno plavoj vodi.",
    "Spust kroz uske kanjone, slapove i prirodne bazene — jedna od najatraktivnijih gorskih avantura u Posočju.",
    "Stotine kilometara biciklističkih staza za sve razine — od mirnih ruta uz rijeku do zahtjevnih gorskih spustova.",
    "Usponi na Kanin, Rombon ili staza uz Sočo. Triglavski nacionalni park nudi staze za početnike i iskusne planinare podjednako.",
    "Soška pastrva jedna je od najcjenjenijih među ribiočima. Fly-fishing u kristalno čistoj rijeci ovdje je prava umjetnost.",
    "Prekogranično skijalište Bovec–Kanin najviše je skijalište u Sloveniji s izvanrednim pogledom na Jadran i Alpe.",
    "Sutok Soče i Tolminke, Tolminska korita i Tolminska gorge — prirodni dragulji vrijedni posjeta u svako godišnje doba.",
    "Muzej Kobarid (Nagrada Vijeća Europe), Napoleonov most i Put mira — jedinstvena mješavina prirode i povijesti Prvog svjetskog rata.",
    "Najviši stalni slap u Sloveniji (144 m) nalazi se samo kratak izlet od Bovca. Posebno impresivan u proljetnim mjesecima.",
    "Termika nad Bovškim poljem privlači jedriličare iz cijele Europe. Let iznad doline Soče iskustvo je koje ostaje zauvijek.",
  ],
  it: [
    "Il fiume Soča è considerato uno dei più bei fiumi da rafting in Europa. Le rapide selvagge si affrontano tra le rocce calcaree nell'acqua limpida e cristallina.",
    "Discesa attraverso gole strette, cascate e piscine naturali — una delle avventure montane più attraenti della Valle della Soča.",
    "Centinaia di chilometri di percorsi ciclabili per tutti i livelli — dalle tranquille piste lungo il fiume alle impegnative discese di montagna.",
    "Ascese al Canin, al Rombon o il sentiero lungo la Soča. Il Parco Nazionale del Triglav offre percorsi per principianti ed esperti.",
    "La trota della Soča è una delle più apprezzate dai pescatori. Il fly-fishing nel fiume cristallino è qui una vera arte.",
    "La stazione sciistica transfrontaliera Bovec–Canin è la più alta in Slovenia, con viste eccezionali sull'Adriatico e sulle Alpi.",
    "La confluenza di Soča e Tolminka, la gola di Tolmin — gioielli naturali da visitare in ogni stagione.",
    "Il Museo di Caporetto (Premio del Consiglio d'Europa), il Ponte di Napoleone e il Sentiero della Pace — un mix unico di natura e storia della Prima Guerra Mondiale.",
    "La cascata permanente più alta della Slovenia (144 m) si trova a breve distanza da Bovec. Particolarmente impressionante nei mesi primaverili.",
    "La termica sopra la piana di Bovec attira parapendisti da tutta Europa. Volare sopra la Valle della Soča è un'esperienza che rimane per sempre.",
  ],
  en: [
    "The Soča river is considered one of the most beautiful rafting rivers in Europe. Experience wild rapids between limestone rocks in clear, ice-blue water.",
    "Descend through narrow gorges, waterfalls and natural pools — one of the most exciting mountain adventures in the Soča region.",
    "Hundreds of kilometres of cycling routes for all levels — from peaceful riverside paths to demanding mountain descents.",
    "Ascend Kanin, Rombon or walk the path along the Soča. Triglav National Park offers trails for beginners and experienced hikers alike.",
    "The Soča trout is one of the most prized among anglers. Fly-fishing in the crystal-clear river is a true art here.",
    "The cross-border Bovec–Kanin ski resort is the highest in Slovenia with exceptional views of the Adriatic and the Alps.",
    "The confluence of the Soča and Tolminka, Tolmin Gorge — natural gems worth visiting in any season.",
    "The Kobarid Museum (Council of Europe Award), Napoleon's Bridge and the Walk of Peace — a unique blend of nature and WWI history.",
    "Slovenia's highest permanent waterfall (144 m) is just a short trip from Bovec. Particularly impressive in the spring months.",
    "The thermals above the Bovec plain attract paragliders from all over Europe. Flying above the Soča valley is an experience that stays with you forever.",
  ],
  de: [
    "Der Fluss Soča gilt als einer der schönsten Rafting-Flüsse Europas. Wilde Stromschnellen zwischen Kalksteinfelsen in klarem, eisblauem Wasser erwarten Sie.",
    "Abstieg durch enge Schluchten, Wasserfälle und natürliche Becken — eines der attraktivsten Bergabenteuer im Soča-Gebiet.",
    "Hunderte Kilometer Radwege für alle Niveaus — von ruhigen Flussrouten bis zu anspruchsvollen Gebirgsabfahrten.",
    "Aufstieg auf Kanin, Rombon oder Wanderweg entlang der Soča. Der Triglav-Nationalpark bietet Wege für Anfänger und erfahrene Bergwanderer.",
    "Die Soča-Forelle ist eine der begehrtesten unter Anglern. Fly-Fishing im kristallklaren Fluss ist hier eine wahre Kunst.",
    "Das grenzüberschreitende Skigebiet Bovec–Kanin ist das höchstgelegene in Slowenien mit außergewöhnlichem Blick auf die Adria und die Alpen.",
    "Der Zusammenfluss von Soča und Tolminka, die Tolminer Schlucht — Naturjuwelen, die zu jeder Jahreszeit einen Besuch wert sind.",
    "Das Kobarid-Museum (Europarat-Preis), Napoleons Brücke und der Friedensweg — eine einzigartige Verbindung von Natur und Geschichte des Ersten Weltkriegs.",
    "Sloweniens höchster permanenter Wasserfall (144 m) liegt nur einen kurzen Ausflug von Bovec entfernt. Besonders beeindruckend in den Frühlingsmonaten.",
    "Die Thermik über der Bovec-Ebene zieht Gleitschirmflieger aus ganz Europa an. Ein Flug über das Soča-Tal ist ein Erlebnis, das für immer bleibt.",
  ],
};

const buildActivities = (lang: Lang): ActivityItem[] =>
  activitiesNames[lang].map((name, i) => ({ name, description: activitiesDesc[lang][i] }));

export const translations: Record<Lang, Translation> = {
  sl: {
    nav: { home: "Domov", about: "O hiši", activities: "Aktivnosti", gallery: "Galerija", booking: "Rezerviraj", contact: "Kontakt" },
    gallery: { title: "Galerija", subtitle: "Fotografije hiše — zunaj in znotraj." },
    hero: {
      tagline: "Kjer Soča šepeta in gore molčijo",
      subtitle: "Vaš dom v srcu Triglavskega narodnega parka — izhodišče za pustolovščine, pribežališče za dušo.",
      cta: "Preveri razpoložljivost",
    },
    about: {
      title: "Vaš dom v dolini Soče",
      body1: "Tam, kjer reka Soča obarva svet v neverjetno turkizno in gore segajo visoko nad oblake, leži kraj, ki vas ne bo kar tako izpustil. Hiša, ki vam jo ponujamo, ni le nastanitev — je izhodišče za pustolovščine in tiho pribežališče za dušo hkrati.",
      body2: "Bovec, srce Triglavskega narodnega parka, je kraj, ki ga mnogi iščejo vse življenje. Naša hiša vas pričaka z vsem udobjem domačega ognjišča in vso divjino doline Soče pred pragom.",
    },
    romantic: {
      title: "Občutite dušo Bovca",
      body1: "Zjutraj vas zbudi šumenje potoka in vonj gorskega zraka. Na horizontu se zarišejo silhuete Julijskih Alp, Soča pa teče po dolini v svojem nezamenljivem turkizno-zelenem blesku. To je Bovec — in to je vaš dom za te dni.",
      body2: "Naša hiša je zasnovana za tiste, ki vedo, da pravi počitek ni brez občutka domačnosti. Pohištvo iz naravnih materialov, topla svetloba, prostrani balkoni z razgledom na gore in vrt, kjer čas teče drugače — vse to vas čaka.",
      body3: "Ponoči, ko lučke ugasnejo in zvezde zasijejo nad Bovškim poljem, boste razumeli, zakaj se sem vedno znova vračamo.",
    },
    activities: {
      title: "Kaj lahko počnete",
      subtitle: "Dolina Soče in okolica Bovca ponujata aktivnosti za vse letne čase in vse okuse.",
      items: buildActivities("sl"),
    },
    seasons: {
      title: "Kdaj priti",
      body: "Bovec vas razvaja skozi vse leto. Pomlad prinese zelenje in poln pretok Soče — idealen čas za rafting in prve gorske pohode. Poletje je čas za kopalce, pustolovce in tiste, ki iščejo svežino nad morjem vročine. Jesen zlati gozdove in prinaša mir — manj turistov, več prostora za vas. Zima pa odkrije tihi čar zasneženih gora in smučarskih pobočij Kanina.",
      cards: [
        { name: "Pomlad", highlight: "Zelenje, polna Soča in prvi pohodi v gore." },
        { name: "Poletje", highlight: "Kopanje, rafting in dolgi sončni dnevi." },
        { name: "Jesen", highlight: "Zlati gozdovi, mir in manj turistov." },
        { name: "Zima", highlight: "Zasnežene gore in smučanje na Kaninu." },
      ],
    },
    booking: { title: "Rezervirajte neposredno", subtitle: "Preverite razpoložljivost in rezervirajte prek Booking.com", cta: "Odpri na Booking.com" },
    location: {
      title: "Kje nas najdete",
      body: "Hiša se nahaja v Bovcu, v samem srcu doline Soče, obdana z Julijskimi Alpami in Triglavskim narodnim parkom. Do Trbiža (IT) je 45 minut, do Kobarida 30 minut, do Tolmina pa 45 minut vožnje. Letališče Ljubljana je oddaljeno približno 2 uri.",
    },
    footer: {
      aboutTitle: "O nas",
      aboutBody: "Hiša v Bovcu je vaš dom sredi Julijskih Alp — idealno izhodišče za odkrivanje čudes doline Soče. Ponosni smo, da vsakemu gostu zagotovimo nepozabno izkušnjo.",
      contactTitle: "Kontakt",
      quickLinksTitle: "Hitre povezave",
      socialTitle: "Sledite nam",
      rights: "© 2025 Cottage Kobarid. Vse pravice pridržane.",
      siteBy: "Spletna stran:",
    },
    meta: { title: "Cottage Kobarid — Najem hiše v dolini Soče", description: "Luksuzna hiša v Bovcu, v srcu Triglavskega narodnega parka. Idealno izhodišče za rafting, pohodništvo in pustolovščine v dolini Soče." },
  },
  hr: {
    nav: { home: "Početna", about: "O kući", activities: "Aktivnosti", gallery: "Galerija", booking: "Rezerviraj", contact: "Kontakt" },
    gallery: { title: "Galerija", subtitle: "Fotografije kuće — izvana i iznutra." },
    hero: {
      tagline: "Gdje Soča šapuće i planine šute",
      subtitle: "Vaš dom u srcu Triglavskog nacionalnog parka — polazište za avanture, utočište za dušu.",
      cta: "Provjeri dostupnost",
    },
    about: {
      title: "Vaš dom u dolini Soče",
      body1: "Tamo gdje rijeka Soča boji svijet nevjerojatnom tirkiznom bojom i planine sežu visoko iznad oblaka, leži mjesto koje vas neće tek tako pustiti. Kuća koju vam nudimo nije samo smještaj — ona je polazište za avanture i tiho utočište za dušu.",
      body2: "Bovec, srce Triglavskog nacionalnog parka, mjesto je koje mnogi traže cijeli život. Naša kuća dočekuje vas s udobnošću doma i divljinom doline Soče pred pragom.",
    },
    romantic: {
      title: "Osjetite dušu Bovca",
      body1: "Ujutro vas budi žuborenje potoka i miris gorskog zraka. Na horizontu se ocrtavaju siluete Julijskih Alpa, a Soča teče dolinom u svom nezamjenjivom tirkizno-zelenom sjaju. To je Bovec — i to je vaš dom za ove dane.",
      body2: "Naša kuća stvorena je za one koji znaju da pravi odmor nije bez osjećaja doma. Namještaj od prirodnih materijala, topla svjetlost, prostrane terase s pogledom na planine i vrt gdje vrijeme teče drukčije — sve to vas čeka.",
      body3: "Noću, kada se ugase svjetla i zvijezde zasvijetle nad Bovškim poljem, razumjet ćete zašto se uvijek iznova vraćamo ovamo.",
    },
    activities: {
      title: "Što možete raditi",
      subtitle: "Dolina Soče i okolica Bovca nude aktivnosti za sva godišnja doba i sve ukuse.",
      items: buildActivities("hr"),
    },
    seasons: {
      title: "Kada doći",
      body: "Bovec vas razmazuje tijekom cijele godine. Proljeće donosi zelenilo i puni protok Soče — idealno vrijeme za rafting i prve gorske ture. Ljeto je vrijeme za kupače, pustolove i one koji traže svježinu iznad mora vrućine. Jesen pozlaćuje šume i donosi mir — manje turista, više prostora za vas. Zima otkriva tihu čar zasniježenih planina i skijaških padina Kanina.",
      cards: [
        { name: "Proljeće", highlight: "Zelenilo, puna Soča i prvi gorski usponi." },
        { name: "Ljeto", highlight: "Kupanje, rafting i dugi sunčani dani." },
        { name: "Jesen", highlight: "Zlatne šume, mir i manje turista." },
        { name: "Zima", highlight: "Zasniježene planine i skijanje na Kaninu." },
      ],
    },
    booking: { title: "Rezervirajte izravno", subtitle: "Provjerite dostupnost i rezervirajte putem Booking.com", cta: "Otvori na Booking.com" },
    location: {
      title: "Gdje nas pronaći",
      body: "Kuća se nalazi u Bovcu, u samom srcu doline Soče, okružena Julijskim Alpama i Triglavskim nacionalnim parkom. Do Tarvisia (IT) je 45 minuta, do Kobarida 30 minuta, do Tolmina 45 minuta vožnje. Zračna luka Ljubljana udaljena je oko 2 sata.",
    },
    footer: {
      aboutTitle: "O nama",
      aboutBody: "Kuća u Bovcu vaš je dom usred Julijskih Alpa — idealno polazište za otkrivanje čuda doline Soče.",
      contactTitle: "Kontakt",
      quickLinksTitle: "Brze poveznice",
      socialTitle: "Pratite nas",
      rights: "© 2025 Cottage Kobarid. Sva prava pridržana.",
      siteBy: "Web stranica:",
    },
    meta: { title: "Cottage Kobarid — Najam kuće u dolini Soče", description: "Luksuzna kuća u Bovcu, u srcu Triglavskog nacionalnog parka. Idealno polazište za rafting, planinarenje i avanture." },
  },
  it: {
    nav: { home: "Home", about: "La casa", activities: "Attività", gallery: "Galleria", booking: "Prenota", contact: "Contatti" },
    gallery: { title: "Galleria", subtitle: "Foto della casa — esterni e interni." },
    hero: {
      tagline: "Dove la Soča sussurra e le montagne tacciono",
      subtitle: "La vostra casa nel cuore del Parco Nazionale del Triglav — punto di partenza per avventure, rifugio per l'anima.",
      cta: "Verifica disponibilità",
    },
    about: {
      title: "La vostra casa nella Valle della Soča",
      body1: "Lì dove il fiume Soča tinge il mondo di un turchese straordinario e le montagne si innalzano alte sopra le nuvole, si trova un luogo che non vi lascerà andare tanto facilmente. La casa che vi offriamo non è solo un alloggio — è il punto di partenza per avventure e un silenzioso rifugio per l'anima.",
      body2: "Bovec, cuore del Parco Nazionale del Triglav, è il luogo che molti cercano tutta la vita. La nostra casa vi accoglie con tutto il comfort di un focolare domestico e tutta la natura selvaggia della Valle della Soča a pochi passi.",
    },
    romantic: {
      title: "Sentite l'anima di Bovec",
      body1: "Al mattino vi sveglia il mormorio di un ruscello e il profumo dell'aria di montagna. All'orizzonte si stagliano le silhouette delle Alpi Giulie, mentre la Soča scorre nella valle nel suo inconfondibile bagliore turchese-verde. Questa è Bovec — e questa è la vostra casa per questi giorni.",
      body2: "La nostra casa è pensata per chi sa che il vero riposo non può fare a meno del senso di casa. Arredi in materiali naturali, luce calda, ampie terrazze con vista sulle montagne e un giardino dove il tempo scorre diversamente — tutto questo vi aspetta.",
      body3: "Di notte, quando le luci si spengono e le stelle brillano sopra la piana di Bovec, capirete perché ci si torna sempre.",
    },
    activities: {
      title: "Cosa potete fare",
      subtitle: "La Valle della Soča e i dintorni di Bovec offrono attività per tutte le stagioni e tutti i gusti.",
      items: buildActivities("it"),
    },
    seasons: {
      title: "Quando venire",
      body: "Bovec vi coccola tutto l'anno. La primavera porta il verde e la piena della Soča — il momento ideale per il rafting e le prime escursioni in montagna. L'estate è il tempo dei bagnanti, degli avventurieri e di chi cerca frescura sopra il mare di caldo. L'autunno indora i boschi e porta pace — meno turisti, più spazio per voi. L'inverno svela il fascino silenzioso delle montagne innevate e delle piste del Canin.",
      cards: [
        { name: "Primavera", highlight: "Verde, Soča piena e prime escursioni." },
        { name: "Estate", highlight: "Bagni, rafting e lunghe giornate di sole." },
        { name: "Autunno", highlight: "Boschi dorati, pace e meno turisti." },
        { name: "Inverno", highlight: "Montagne innevate e sci al Canin." },
      ],
    },
    booking: { title: "Prenota direttamente", subtitle: "Verifica la disponibilità e prenota tramite Booking.com", cta: "Apri su Booking.com" },
    location: {
      title: "Dove trovarci",
      body: "La casa si trova a Bovec, nel cuore stesso della Valle della Soča, circondata dalle Alpi Giulie e dal Parco Nazionale del Triglav. Tarvisio (IT) dista 45 minuti, Kobarid 30 minuti, Tolmino 45 minuti. L'aeroporto di Lubiana è a circa 2 ore.",
    },
    footer: {
      aboutTitle: "Chi siamo",
      aboutBody: "La casa a Bovec è la vostra casa nel cuore delle Alpi Giulie — punto di partenza ideale per scoprire le meraviglie della Valle della Soča.",
      contactTitle: "Contatti",
      quickLinksTitle: "Link rapidi",
      socialTitle: "Seguici",
      rights: "© 2025 Cottage Kobarid. Tutti i diritti riservati.",
      siteBy: "Sito web:",
    },
    meta: { title: "Cottage Kobarid — Affitto casa nella Valle della Soča", description: "Casa di lusso a Bovec, nel cuore del Parco Nazionale del Triglav. Punto di partenza ideale per rafting, escursioni e avventure." },
  },
  en: {
    nav: { home: "Home", about: "The House", activities: "Activities", gallery: "Gallery", booking: "Book", contact: "Contact" },
    gallery: { title: "Gallery", subtitle: "Photos of the house — outside and inside." },
    hero: {
      tagline: "Where the Soča whispers and mountains stand still",
      subtitle: "Your home in the heart of Triglav National Park — a base for adventure, a refuge for the soul.",
      cta: "Check Availability",
    },
    about: {
      title: "Your Home in the Soča Valley",
      body1: "Where the river Soča paints the world an extraordinary turquoise and mountains rise high above the clouds, lies a place that won't let you go easily. The house we offer you is not just accommodation — it is a starting point for adventures and a quiet refuge for the soul.",
      body2: "Bovec, the heart of Triglav National Park, is a place many search for their whole lives. Our house greets you with all the comfort of a home and all the wildness of the Soča Valley right at the doorstep.",
    },
    romantic: {
      title: "Feel the Soul of Bovec",
      body1: "In the morning you are woken by the murmur of a stream and the scent of mountain air. On the horizon, the silhouettes of the Julian Alps take shape, while the Soča flows through the valley in its unmistakable turquoise-green glow. This is Bovec — and this is your home for these days.",
      body2: "Our house is designed for those who know that true rest needs the feeling of home. Furniture from natural materials, warm light, spacious balconies with mountain views and a garden where time passes differently — all this awaits you.",
      body3: "At night, when the lights go out and the stars shine over the Bovec plain, you will understand why people always come back.",
    },
    activities: {
      title: "What You Can Do",
      subtitle: "The Soča Valley and the Bovec area offer activities for all seasons and all tastes.",
      items: buildActivities("en"),
    },
    seasons: {
      title: "When to Come",
      body: "Bovec pampers you all year round. Spring brings greenery and the full flow of the Soča — ideal for rafting and the first mountain hikes. Summer is for bathers, adventurers and those seeking coolness above a sea of heat. Autumn gilds the forests and brings peace — fewer tourists, more space for you. Winter reveals the quiet charm of snow-capped mountains and the ski slopes of Kanin.",
      cards: [
        { name: "Spring", highlight: "Greenery, a full Soča and first mountain hikes." },
        { name: "Summer", highlight: "Swimming, rafting and long sunny days." },
        { name: "Autumn", highlight: "Golden forests, peace and fewer tourists." },
        { name: "Winter", highlight: "Snow-capped peaks and skiing at Kanin." },
      ],
    },
    booking: { title: "Book Directly", subtitle: "Check availability and book via Booking.com", cta: "Open on Booking.com" },
    location: {
      title: "Where to Find Us",
      body: "The house is in Bovec, in the very heart of the Soča Valley, surrounded by the Julian Alps and Triglav National Park. Tarvisio (IT) is 45 minutes, Kobarid 30 minutes, and Tolmin 45 minutes by car. Ljubljana airport is about 2 hours away.",
    },
    footer: {
      aboutTitle: "About us",
      aboutBody: "The house in Bovec is your home in the heart of the Julian Alps — the ideal base for exploring the wonders of the Soča Valley.",
      contactTitle: "Contact",
      quickLinksTitle: "Quick links",
      socialTitle: "Follow us",
      rights: "© 2025 Cottage Kobarid. All rights reserved.",
      siteBy: "Website:",
    },
    meta: { title: "Cottage Kobarid — House Rental in the Soča Valley", description: "Luxury house in Bovec, in the heart of Triglav National Park. Ideal base for rafting, hiking and adventures in the Soča Valley." },
  },
  de: {
    nav: { home: "Start", about: "Das Haus", activities: "Aktivitäten", gallery: "Galerie", booking: "Buchen", contact: "Kontakt" },
    gallery: { title: "Galerie", subtitle: "Fotos des Hauses — außen und innen." },
    hero: {
      tagline: "Wo die Soča flüstert und die Berge schweigen",
      subtitle: "Ihr Zuhause im Herzen des Triglav-Nationalparks — Ausgangspunkt für Abenteuer, Zuflucht für die Seele.",
      cta: "Verfügbarkeit prüfen",
    },
    about: {
      title: "Ihr Zuhause im Soča-Tal",
      body1: "Dort, wo der Fluss Soča die Welt in ein außergewöhnliches Türkis taucht und die Berge hoch über die Wolken ragen, liegt ein Ort, der Sie nicht so leicht loslässt. Das Haus, das wir Ihnen anbieten, ist nicht nur eine Unterkunft — es ist ein Ausgangspunkt für Abenteuer und ein stilles Refugium für die Seele.",
      body2: "Bovec, das Herz des Triglav-Nationalparks, ist ein Ort, den viele ihr ganzes Leben suchen. Unser Haus empfängt Sie mit allem Komfort eines Heimes und der ganzen Wildheit des Soča-Tals vor der Tür.",
    },
    romantic: {
      title: "Spüren Sie die Seele von Bovec",
      body1: "Am Morgen weckt Sie das Murmeln eines Baches und der Duft der Bergluft. Am Horizont zeichnen sich die Silhouetten der Julischen Alpen ab, während die Soča im Tal in ihrem unverwechselbaren türkis-grünen Leuchten fließt. Das ist Bovec — und das ist Ihr Zuhause für diese Tage.",
      body2: "Unser Haus ist für diejenigen gestaltet, die wissen, dass echte Erholung das Gefühl von Zuhause braucht. Möbel aus natürlichen Materialien, warmes Licht, geräumige Balkone mit Bergblick und ein Garten, wo die Zeit anders verläuft — all das erwartet Sie.",
      body3: "Nachts, wenn die Lichter erlöschen und die Sterne über der Bovec-Ebene leuchten, werden Sie verstehen, warum man immer wieder zurückkommt.",
    },
    activities: {
      title: "Was Sie unternehmen können",
      subtitle: "Das Soča-Tal und die Umgebung von Bovec bieten Aktivitäten für alle Jahreszeiten und Geschmäcker.",
      items: buildActivities("de"),
    },
    seasons: {
      title: "Wann kommen",
      body: "Bovec verwöhnt Sie das ganze Jahr. Der Frühling bringt Grün und den vollen Lauf der Soča — ideal für Rafting und erste Bergwanderungen. Der Sommer ist die Zeit für Badegäste, Abenteurer und alle, die Frische über dem Hitze-Meer suchen. Der Herbst vergoldet die Wälder und bringt Ruhe — weniger Touristen, mehr Platz für Sie. Der Winter offenbart den stillen Zauber verschneiter Berge und der Skipisten des Kanin.",
      cards: [
        { name: "Frühling", highlight: "Grün, volle Soča und erste Bergtouren." },
        { name: "Sommer", highlight: "Baden, Rafting und lange Sonnentage." },
        { name: "Herbst", highlight: "Goldene Wälder, Ruhe und weniger Touristen." },
        { name: "Winter", highlight: "Verschneite Berge und Skifahren am Kanin." },
      ],
    },
    booking: { title: "Direkt buchen", subtitle: "Verfügbarkeit prüfen und über Booking.com buchen", cta: "Auf Booking.com öffnen" },
    location: {
      title: "Wo Sie uns finden",
      body: "Das Haus liegt in Bovec, im Herzen des Soča-Tals, umgeben von den Julischen Alpen und dem Triglav-Nationalpark. Tarvis (IT) ist 45 Minuten entfernt, Kobarid 30 Minuten, Tolmin 45 Minuten. Der Flughafen Ljubljana ist etwa 2 Stunden entfernt.",
    },
    footer: {
      aboutTitle: "Über uns",
      aboutBody: "Das Haus in Bovec ist Ihr Zuhause im Herzen der Julischen Alpen — idealer Ausgangspunkt für die Erkundung des Soča-Tals.",
      contactTitle: "Kontakt",
      quickLinksTitle: "Schnelllinks",
      socialTitle: "Folgen Sie uns",
      rights: "© 2025 Cottage Kobarid. Alle Rechte vorbehalten.",
      siteBy: "Webseite:",
    },
    meta: { title: "Cottage Kobarid — Hausvermietung im Soča-Tal", description: "Luxushaus in Bovec, im Herzen des Triglav-Nationalparks. Idealer Ausgangspunkt für Rafting, Wandern und Abenteuer im Soča-Tal." },
  },
};

export const SEASON_COLORS = ["#7A9A6B", "#5E8A7A", "#B07D4B", "#7A9AA8"];
