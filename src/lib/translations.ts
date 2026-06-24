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
  hero: { title: string; tagline: string; subtitle: string; cta: string };
  about: { title: string; body1: string; body2: string; body3?: string; body4?: string; body5?: string; body6?: string; body7?: string; body8?: string };
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
  sl: ["Rafting & Kajakaštvo","Soteskanje","Kolesarjenje & MTB","Pohodništvo","Ribolov","Smučanje na Kaninu","Kobarid in sotočje","Kobarid & Pot miru","Slapovi","Padalstvo & zmajarstvo"],
  hr: ["Rafting & Kajakaštvo","Kanjoning","Biciklizam & MTB","Planinarenje","Ribolov","Skijanje na Kaninu","Kobarid i sutok","Kobarid & Put mira","Slapovi","Paraglajding"],
  it: ["Rafting e kayak","Canyoning","Ciclismo e MTB","Escursionismo","Pesca","Sci al Canin","Caporetto e confluenza","Caporetto e Sentiero della Pace","Cascate","Parapendio"],
  en: ["Rafting & Kayaking","Canyoning","Cycling & MTB","Hiking","Fishing","Skiing at Kanin","Kobarid & Confluence","Kobarid & Walk of Peace","Waterfalls","Paragliding"],
  de: ["Rafting & Kajak","Canyoning","Radfahren & MTB","Wandern","Angeln","Skifahren am Kanin","Kobarid & Zusammenfluss","Kobarid & Friedensweg","Wasserfälle","Gleitschirmfliegen"],
};

const activitiesDesc: Record<Lang, string[]> = {
  sl: [
    "Reka Soča velja za eno najlepših rafting rek v Evropi. Divje valove izkušate med apnenčastimi skalami v čisti, ledeno modri vodi.",
    "Spust skozi ozke soteske, slapove in naravne tolmune — ena najatraktivnejših gorskih pustolovščin v Posočju.",
    "Stotine kilometrov kolesarskih poti za vse nivoje — od mirnih dolžinskih tras ob reki do zahtevnih gorskih spustov.",
    "Vzponi na Kanin, Rombon ali pot vzdolž Soče. Triglavski narodni park nudi steze za začetnike in izkušene gorniki enako.",
    "Soška postrv je ena najbolj cenjenih med ribiči. Fly-fishing v kristalno čisti reki je tukaj prava umetnost.",
    "Čezmejno smučišče Bovec–Kanin je najvišje ležeče smučišče v Sloveniji z izjemnimi razgledi na Jadran in Alpe.",
    "Sotočje Soče in Tolminke, soteske in skriti kotički — naravni biseri, vredni ogleda v vsakem letnem času.",
    "Muzej Kobarid (Nagrada Sveta Evrope), Napoleonov most in Pot miru — edinstvena mešanica narave in zgodovine prve svetovne vojne.",
    "Posočje je polno slapov — od mogočnih do skritih biserov v gozdu. Posebej impresivni so v pomladanskih mesecih.",
    "Termika nad Bovškim poljem privablja padalce iz vse Evrope. Let nad dolino Soče je izkušnja, ki ostane za vedno.",
  ],
  hr: [
    "Rijeka Soča smatra se jednom od najljepših rafting rijeka u Europi. Divlje valove doživljavate između vapnenačkih stijena u čistoj, ledeno plavoj vodi.",
    "Spust kroz uske kanjone, slapove i prirodne bazene — jedna od najatraktivnijih gorskih avantura u Posočju.",
    "Stotine kilometara biciklističkih staza za sve razine — od mirnih ruta uz rijeku do zahtjevnih gorskih spustova.",
    "Usponi na Kanin, Rombon ili staza uz Sočo. Triglavski nacionalni park nudi staze za početnike i iskusne planinare podjednako.",
    "Soška pastrva jedna je od najcjenjenijih među ribiočima. Fly-fishing u kristalno čistoj rijeci ovdje je prava umjetnost.",
    "Prekogranično skijalište Bovec–Kanin najviše je skijalište u Sloveniji s izvanrednim pogledom na Jadran i Alpe.",
    "Sutok Soče i Tolminke, kanjoni i skriveni kutci — prirodni dragulji vrijedni posjeta u svako godišnje doba.",
    "Muzej Kobarid (Nagrada Vijeća Europe), Napoleonov most i Put mira — jedinstvena mješavina prirode i povijesti Prvog svjetskog rata.",
    "Posočje je puno slapova — od moćnih do skrivenih bisera u šumi. Posebno su impresivni u proljetnim mjesecima.",
    "Termika nad Bovškim poljem privlači jedriličare iz cijele Europe. Let iznad doline Soče iskustvo je koje ostaje zauvijek.",
  ],
  it: [
    "Il fiume Soča è considerato uno dei più bei fiumi da rafting in Europa. Le rapide selvagge si affrontano tra le rocce calcaree nell'acqua limpida e cristallina.",
    "Discesa attraverso gole strette, cascate e piscine naturali — una delle avventure montane più attraenti della Valle della Soča.",
    "Centinaia di chilometri di percorsi ciclabili per tutti i livelli — dalle tranquille piste lungo il fiume alle impegnative discese di montagna.",
    "Ascese al Canin, al Rombon o il sentiero lungo la Soča. Il Parco Nazionale del Triglav offre percorsi per principianti ed esperti.",
    "La trota della Soča è una delle più apprezzate dai pescatori. Il fly-fishing nel fiume cristallino è qui una vera arte.",
    "La stazione sciistica transfrontaliera Bovec–Canin è la più alta in Slovenia, con viste eccezionali sull'Adriatico e sulle Alpi.",
    "La confluenza dell'Isonzo e del Tolminka, gole e angoli nascosti — gioielli naturali da visitare in ogni stagione.",
    "Il Museo di Caporetto (Premio del Consiglio d'Europa), il Ponte di Napoleone e il Sentiero della Pace — un mix unico di natura e storia della Prima Guerra Mondiale.",
    "La valle dell'Isonzo è ricca di cascate — da quelle imponenti a gioielli nascosti nel bosco. Particolarmente impressionanti in primavera.",
    "La termica sopra la piana di Bovec attira parapendisti da tutta Europa. Volare sopra la Valle della Soča è un'esperienza che rimane per sempre.",
  ],
  en: [
    "The Soča river is considered one of the most beautiful rafting rivers in Europe. Experience wild rapids between limestone rocks in clear, ice-blue water.",
    "Descend through narrow gorges, waterfalls and natural pools — one of the most exciting mountain adventures in the Soča region.",
    "Hundreds of kilometres of cycling routes for all levels — from peaceful riverside paths to demanding mountain descents.",
    "Ascend Kanin, Rombon or walk the path along the Soča. Triglav National Park offers trails for beginners and experienced hikers alike.",
    "The Soča trout is one of the most prized among anglers. Fly-fishing in the crystal-clear river is a true art here.",
    "The cross-border Bovec–Kanin ski resort is the highest in Slovenia with exceptional views of the Adriatic and the Alps.",
    "The confluence of the Soča and Tolminka, gorges and hidden corners — natural gems worth visiting in any season.",
    "The Kobarid Museum (Council of Europe Award), Napoleon's Bridge and the Walk of Peace — a unique blend of nature and WWI history.",
    "The Soča region is full of waterfalls — from mighty ones to hidden gems in the forest. Particularly impressive in the spring months.",
    "The thermals above the Bovec plain attract paragliders from all over Europe. Flying above the Soča valley is an experience that stays with you forever.",
  ],
  de: [
    "Der Fluss Soča gilt als einer der schönsten Rafting-Flüsse Europas. Wilde Stromschnellen zwischen Kalksteinfelsen in klarem, eisblauem Wasser erwarten Sie.",
    "Abstieg durch enge Schluchten, Wasserfälle und natürliche Becken — eines der attraktivsten Bergabenteuer im Soča-Gebiet.",
    "Hunderte Kilometer Radwege für alle Niveaus — von ruhigen Flussrouten bis zu anspruchsvollen Gebirgsabfahrten.",
    "Aufstieg auf Kanin, Rombon oder Wanderweg entlang der Soča. Der Triglav-Nationalpark bietet Wege für Anfänger und erfahrene Bergwanderer.",
    "Die Soča-Forelle ist eine der begehrtesten unter Anglern. Fly-Fishing im kristallklaren Fluss ist hier eine wahre Kunst.",
    "Das grenzüberschreitende Skigebiet Bovec–Kanin ist das höchstgelegene in Slowenien mit außergewöhnlichem Blick auf die Adria und die Alpen.",
    "Der Zusammenfluss von Soča und Tolminka, Schluchten und versteckte Winkel — Naturjuwelen, die zu jeder Jahreszeit einen Besuch wert sind.",
    "Das Kobarid-Museum (Europarat-Preis), Napoleons Brücke und der Friedensweg — eine einzigartige Verbindung von Natur und Geschichte des Ersten Weltkriegs.",
    "Das Soča-Tal ist voller Wasserfälle — von mächtigen bis zu versteckten Juwelen im Wald. Besonders beeindruckend in den Frühlingsmonaten.",
    "Die Thermik über der Bovec-Ebene zieht Gleitschirmflieger aus ganz Europa an. Ein Flug über das Soča-Tal ist ein Erlebnis, das für immer bleibt.",
  ],
};

const buildActivities = (lang: Lang): ActivityItem[] =>
  activitiesNames[lang].map((name, i) => ({
    name,
    description: activitiesDesc[lang][i],
  }));


export const translations: Record<Lang, Translation> = {
  sl: {
    nav: { home: "Domov", about: "O hiši", activities: "Aktivnosti", gallery: "Galerija", booking: "Rezerviraj", contact: "Kontakt" },
    gallery: { title: "Galerija", subtitle: "Fotografije hiše — zunaj in znotraj." },
    hero: {
      title: "Cottage Kobarid",
      tagline: "Kjer Soča šepeta in gore molčijo",
      subtitle: "Vaš dom v srcu soške doline — izhodišče za pustolovščine, pribežališče za dušo.",
      cta: "Preveri razpoložljivost",
    },
    about: {
      title: "Cottage Kobarid",
      body1: "Počitniška hišica se nahaja le 1 km od Kobarida, na mirnem robu vasi ob gozdu. Leta 2021 je bila popolnoma obnovljena in sodobno opremljena, zato gostom nudi popolno udobje za sproščene in nepozabne počitnice.",
      body2: "Njena posebnost je izjemno mirna lega v objemu narave, kjer vas namesto mestnega vrveža spremljajo le petje ptic, šumenje bližnjega potoka in pomirjujoči zvoki gozda. Z zgornje terase se odpira čudovit pogled na Krn ter okoliške hribe in dolino.",
      body3: "V pritličju vas pričaka prostoren dnevni prostor s udobno kotno garnituro, jedilno mizo s klopmi ter klimatsko napravo, ki zagotavlja prijetno temperaturo skozi vse leto. Kuhinja je popolnoma opremljena za pripravo obrokov in vključuje pomivalni stroj, indukcijsko kuhalno ploščo, pečico, napo, grelnik vode ter hladilnik z zamrzovalnikom.",
      body4: "Kopalnica je opremljena s tušem, umivalnikom, WC-jem, pralnim strojem, sušilcem za lase in električnim grelnikom vode.",
      body5: "V mansardi sta na voljo dve udobni zakonski postelji (150 × 200 cm) in ena enojna postelja (90 × 200 cm), kar omogoča udobno bivanje do petim osebam. Za dodatno udobje so v prostoru klimatska naprava, garderobna omara in otroška posteljica, zato je nastanitev primerna tudi za družine z majhnimi otroki.",
      body6: "Za prijetno druženje na prostem so na voljo pokrita terasa za hišo, pergola s sedežno garnituro pred hišo, zunanji žar ter prostor za posedanje ob ognju. Na zgornji terasi lahko ob jutranji kavi ali večernem sončnem zahodu uživate v neokrnjeni naravi in osupljivih razgledih.",
      body7: "Kobarid in njegova okolica ponujata številne možnosti za aktivno preživljanje prostega časa: najem koles, rafting, kanjoning, jadralno padalstvo, ribolov in še mnogo več. Ljubitelji mirnejšega oddiha lahko raziskujejo gozdne poti ali se osvežijo v bližnji reki Nadiži.",
      body8: "Med najbolj priljubljenimi znamenitostmi so Slap Kozjak, Kobariški muzej ter Italijanska kostnica Kobarid. Širša okolica navdušuje z bogato dediščino prve svetovne vojne, smaragdnimi rekami in neokrnjeno naravo, ki ponuja nešteto možnosti za raziskovanje, športne aktivnosti in popoln oddih.",
    },
    romantic: {
      title: "Občutite dušo Bovca",
      body1: "Zjutraj vas zbudi šumenje potoka in vonj gorskega zraka. Na horizontu se zarišejo silhuete Julijskih Alp, Soča pa teče po dolini v svojem nezamenljivem turkizno-zelenem blesku. To je Bovec — in to je vaš dom za te dni.",
      body2: "Naša hiša je zasnovana za tiste, ki vedo, da pravi počitek ni brez občutka domačnosti. Pohištvo iz naravnih materialov, topla svetloba, prostrani balkoni z razgledom na gore in vrt, kjer čas teče drugače — vse to vas čaka.",
      body3: "Ponoči, ko lučke ugasnejo in zvezde zasijejo nad Bovškim poljem, boste razumeli, zakaj se sem vedno znova vračamo.",
    },
    activities: {
      title: "Kaj lahko počnete",
      subtitle: "Dolina Soče in okolica Kobarida ponujata aktivnosti za vse letne čase in vse okuse.",
      items: buildActivities("sl"),
    },
    seasons: {
      title: "Kdaj priti",
      body: "Kobarid vas razvaja skozi vse leto. Pomlad prinese zelenje in poln pretok Soče — idealen čas za rafting in prve gorske pohode. Poletje je čas za kopalce, pustolovce in tiste, ki iščejo svežino nad morjem vročine. Jesen zlati gozdove in prinaša mir — manj turistov, več prostora za vas. Zima pa odkrije tihi čar zasneženih gora in smučarskih pobočij Kanina.",
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
      body: "Hiša se nahaja v Kobaridu, v srcu soške doline, obdana z Julijskimi Alpami in Triglavskim narodnim parkom. Do Bovca je 30 minut, do Tolmina 20 minut, do Trbiža (IT) pa približno uro vožnje. Letališče Ljubljana je oddaljeno približno 2 uri.",
    },
    footer: {
      aboutTitle: "O nas",
      aboutBody: "Hiša v Kobaridu je vaš dom sredi Julijskih Alp — idealno izhodišče za odkrivanje čudes doline Soče. Ponosni smo, da vsakemu gostu zagotovimo nepozabno izkušnjo.",
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
      title: "Cottage Kobarid",
      tagline: "Gdje Soča šapuće i planine šute",
      subtitle: "Vaš dom u srcu doline Soče — polazište za avanture, utočište za dušu.",
      cta: "Provjeri dostupnost",
    },
    about: {
      title: "Cottage Kobarid",
      body1: "Kuća za odmor nalazi se samo 1 km od Kobarida, na mirnom rubu sela uz šumu. Godine 2021. je u potpunosti obnovljena i moderno opremljena te gostima pruža potpunu udobnost za opušten i nezaboravan odmor.",
      body2: "Njezina posebnost je iznimno mirna lokacija u zagrljaju prirode, gdje vas umjesto gradske vreve prate samo pjev ptica, žubor obližnjeg potoka i smirujući zvuci šume. S gornje terase pruža se prekrasan pogled na Krn te okolne brežuljke i dolinu.",
      body3: "U prizemlju vas dočekuje prostran dnevni boravak s udobnom kutnom garniturom, blagovaonskim stolom s klupama te klima-uređajem koji osigurava ugodnu temperaturu tijekom cijele godine. Kuhinja je potpuno opremljena za pripremu obroka i uključuje perilicu posuđa, indukcijsku ploču za kuhanje, pećnicu, napu, bojler te hladnjak sa zamrzivačem.",
      body4: "Kupaonica je opremljena tušem, umivaonikom, WC-om, perilicom rublja, sušilom za kosu i električnim bojlerom.",
      body5: "Na potkrovlju su na raspolaganju dva udobna bračna kreveta (150 × 200 cm) i jedan jednokrevetni krevet (90 × 200 cm), što omogućuje ugodan boravak za do pet osoba. Za dodatnu udobnost u prostoru se nalaze klima-uređaj, ormar za odjeću i dječji krevetić, pa je smještaj prikladan i za obitelji s malom djecom.",
      body6: "Za ugodno druženje na otvorenom dostupni su natkrivena terasa iza kuće, pergola sa sjedećom garniturom ispred kuće, vanjski roštilj te prostor za sjedenje uz vatru. Na gornjoj terasi možete uz jutarnju kavu ili večernji zalazak sunca uživati u netaknutoj prirodi i zadivljujućim pogledima.",
      body7: "Kobarid i okolica nude brojne mogućnosti za aktivan odmor: najam bicikala, rafting, kanjoning, paragliding, ribolov i još mnogo toga. Ljubitelji mirnijeg odmora mogu istraživati šumske staze ili se osvježiti u obližnjoj rijeci Nadiži.",
      body8: "Među najpopularnijim znamenitostima su slap Kozjak, Kobaridski muzej te Talijanska kostnica u Kobaridu. Šira okolica oduševljava bogatom baštinom Prvog svjetskog rata, smaragdnim rijekama i netaknutom prirodom, koja nudi bezbroj mogućnosti za istraživanje, sportske aktivnosti i potpuni odmor.",
    },
    romantic: {
      title: "Osjetite dušu Bovca",
      body1: "Ujutro vas budi žuborenje potoka i miris gorskog zraka. Na horizontu se ocrtavaju siluete Julijskih Alpa, a Soča teče dolinom u svom nezamjenjivom tirkizno-zelenom sjaju. To je Bovec — i to je vaš dom za ove dane.",
      body2: "Naša kuća stvorena je za one koji znaju da pravi odmor nije bez osjećaja doma. Namještaj od prirodnih materijala, topla svjetlost, prostrane terase s pogledom na planine i vrt gdje vrijeme teče drukčije — sve to vas čeka.",
      body3: "Noću, kada se ugase svjetla i zvijezde zasvijetle nad Bovškim poljem, razumjet ćete zašto se uvijek iznova vraćamo ovamo.",
    },
    activities: {
      title: "Što možete raditi",
      subtitle: "Dolina Soče i okolica Kobarida nude aktivnosti za sva godišnja doba i sve ukuse.",
      items: buildActivities("hr"),
    },
    seasons: {
      title: "Kada doći",
      body: "Kobarid vas razmazuje tijekom cijele godine. Proljeće donosi zelenilo i puni protok Soče — idealno vrijeme za rafting i prve gorske ture. Ljeto je vrijeme za kupače, pustolove i one koji traže svježinu iznad mora vrućine. Jesen pozlaćuje šume i donosi mir — manje turista, više prostora za vas. Zima otkriva tihu čar zasniježenih planina i skijaških padina Kanina.",
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
      body: "Kuća se nalazi u Kobaridu, u srcu doline Soče, okružena Julijskim Alpama i Triglavskim nacionalnim parkom. Do Bovca je 30 minuta, do Tolmina 20 minuta, a do Tarvisia (IT) otprilike sat vremena vožnje. Zračna luka Ljubljana udaljena je oko 2 sata.",
    },
    footer: {
      aboutTitle: "O nama",
      aboutBody: "Kuća u Kobaridu vaš je dom usred Julijskih Alpa — idealno polazište za otkrivanje čuda doline Soče.",
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
      title: "Cottage Kobarid",
      tagline: "Dove la Soča sussurra e le montagne tacciono",
      subtitle: "La vostra casa nel cuore della Valle dell'Isonzo — punto di partenza per avventure, rifugio per l'anima.",
      cta: "Verifica disponibilità",
    },
    about: {
      title: "Cottage Kobarid",
      body1: "La casa vacanze si trova a soli 1 km da Kobarid (Caporetto), sul tranquillo margine del villaggio accanto al bosco. Nel 2021 è stata completamente ristrutturata e arredata con stile moderno, offrendo agli ospiti il massimo comfort per una vacanza rilassata e indimenticabile.",
      body2: "La sua particolarità è la posizione estremamente tranquilla, immersa nella natura, dove al posto del trambusto cittadino vi accompagnano solo il canto degli uccelli, il mormorio del vicino ruscello e i suoni rilassanti del bosco. Dalla terrazza superiore si apre una splendida vista sul monte Krn, sulle colline circostanti e sulla valle.",
      body3: "Per piacevoli momenti all'aperto sono a disposizione una terrazza coperta sul retro della casa, una pergola con divani davanti, un barbecue esterno e uno spazio per sedersi attorno al fuoco. Sulla terrazza superiore potete godervi il caffè del mattino o il tramonto serale circondati da natura incontaminata e panorami mozzafiato.",
      body4: "Kobarid e i suoi dintorni offrono numerose possibilità per trascorrere il tempo libero in modo attivo: noleggio biciclette, rafting, canyoning, parapendio, pesca e molto altro. Gli amanti di una vacanza più tranquilla possono esplorare i sentieri nel bosco o rinfrescarsi nel vicino fiume Natisone (Nadiža).",
      body5: "Tra le attrazioni più popolari ci sono la cascata di Kozjak, il Museo di Caporetto e l'Ossario italiano di Caporetto. La zona più ampia affascina con la ricca eredità della Prima guerra mondiale, fiumi color smeraldo e natura incontaminata, che offre infinite possibilità di esplorazione, attività sportive e completo relax.",
    },
    romantic: {
      title: "Sentite l'anima di Bovec",
      body1: "Al mattino vi sveglia il mormorio di un ruscello e il profumo dell'aria di montagna. All'orizzonte si stagliano le silhouette delle Alpi Giulie, mentre la Soča scorre nella valle nel suo inconfondibile bagliore turchese-verde. Questa è Bovec — e questa è la vostra casa per questi giorni.",
      body2: "La nostra casa è pensata per chi sa che il vero riposo non può fare a meno del senso di casa. Arredi in materiali naturali, luce calda, ampie terrazze con vista sulle montagne e un giardino dove il tempo scorre diversamente — tutto questo vi aspetta.",
      body3: "Di notte, quando le luci si spengono e le stelle brillano sopra la piana di Bovec, capirete perché ci si torna sempre.",
    },
    activities: {
      title: "Cosa potete fare",
      subtitle: "La Valle della Soča e i dintorni di Kobarid offrono attività per tutte le stagioni e tutti i gusti.",
      items: buildActivities("it"),
    },
    seasons: {
      title: "Quando venire",
      body: "Kobarid vi coccola tutto l'anno. La primavera porta il verde e la piena della Soča — il momento ideale per il rafting e le prime escursioni in montagna. L'estate è il tempo dei bagnanti, degli avventurieri e di chi cerca frescura sopra il mare di caldo. L'autunno indora i boschi e porta pace — meno turisti, più spazio per voi. L'inverno svela il fascino silenzioso delle montagne innevate e delle piste del Canin.",
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
      body: "La casa si trova a Kobarid (Caporetto), nel cuore della Valle dell'Isonzo, circondata dalle Alpi Giulie e dal Parco Nazionale del Triglav. Bovec dista 30 minuti, Tolmino 20 minuti e Tarvisio (IT) circa un'ora di auto. L'aeroporto di Lubiana è a circa 2 ore.",
    },
    footer: {
      aboutTitle: "Chi siamo",
      aboutBody: "La casa a Kobarid è la vostra casa nel cuore delle Alpi Giulie — punto di partenza ideale per scoprire le meraviglie della Valle della Soča.",
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
      title: "Cottage Kobarid",
      tagline: "Where the Soča whispers and mountains stand still",
      subtitle: "Your home in the heart of the Soča Valley — a base for adventure, a refuge for the soul.",
      cta: "Check Availability",
    },
    about: {
      title: "Cottage Kobarid",
      body1: "The holiday cottage is located just 1 km from Kobarid, on the peaceful edge of the village next to the forest. In 2021 it was completely renovated and modernly furnished, offering guests full comfort for a relaxed and unforgettable holiday.",
      body2: "Its special feature is an exceptionally quiet setting in the embrace of nature, where instead of the bustle of the city you are accompanied only by birdsong, the murmur of a nearby stream and the soothing sounds of the forest. From the upper terrace, a wonderful view opens onto Mount Krn and the surrounding hills and valley.",
      body3: "For pleasant gatherings outdoors there is a covered terrace at the back of the house, a pergola with a seating set in front, an outdoor grill and a fire pit area. On the upper terrace, you can enjoy your morning coffee or an evening sunset surrounded by pristine nature and breathtaking views.",
      body4: "Kobarid and its surroundings offer numerous opportunities for an active holiday: bike rental, rafting, canyoning, paragliding, fishing and much more. Lovers of a quieter break can explore forest trails or cool off in the nearby Nadiža river.",
      body5: "Among the most popular attractions are the Kozjak Waterfall, the Kobarid Museum and the Italian Charnel House in Kobarid. The wider area captivates with its rich First World War heritage, emerald rivers and untouched nature, offering countless opportunities for exploration, sport and complete relaxation.",
    },
    romantic: {
      title: "Feel the Soul of Bovec",
      body1: "In the morning you are woken by the murmur of a stream and the scent of mountain air. On the horizon, the silhouettes of the Julian Alps take shape, while the Soča flows through the valley in its unmistakable turquoise-green glow. This is Bovec — and this is your home for these days.",
      body2: "Our house is designed for those who know that true rest needs the feeling of home. Furniture from natural materials, warm light, spacious balconies with mountain views and a garden where time passes differently — all this awaits you.",
      body3: "At night, when the lights go out and the stars shine over the Bovec plain, you will understand why people always come back.",
    },
    activities: {
      title: "What You Can Do",
      subtitle: "The Soča Valley and the Kobarid area offer activities for all seasons and all tastes.",
      items: buildActivities("en"),
    },
    seasons: {
      title: "When to Come",
      body: "Kobarid pampers you all year round. Spring brings greenery and the full flow of the Soča — ideal for rafting and the first mountain hikes. Summer is for bathers, adventurers and those seeking coolness above a sea of heat. Autumn gilds the forests and brings peace — fewer tourists, more space for you. Winter reveals the quiet charm of snow-capped mountains and the ski slopes of Kanin.",
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
      body: "The house is in Kobarid, in the heart of the Soča Valley, surrounded by the Julian Alps and Triglav National Park. Bovec is 30 minutes away, Tolmin 20 minutes, and Tarvisio (IT) about an hour by car. Ljubljana airport is about 2 hours away.",
    },
    footer: {
      aboutTitle: "About us",
      aboutBody: "The house in Kobarid is your home in the heart of the Julian Alps — the ideal base for exploring the wonders of the Soča Valley.",
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
      title: "Cottage Kobarid",
      tagline: "Wo die Soča flüstert und die Berge schweigen",
      subtitle: "Ihr Zuhause im Herzen des Soča-Tals — Ausgangspunkt für Abenteuer, Zuflucht für die Seele.",
      cta: "Verfügbarkeit prüfen",
    },
    about: {
      title: "Cottage Kobarid",
      body1: "Das Ferienhaus liegt nur 1 km von Kobarid entfernt, am ruhigen Rand des Dorfes am Wald. 2021 wurde es vollständig renoviert und modern eingerichtet und bietet seinen Gästen vollen Komfort für einen entspannten und unvergesslichen Urlaub.",
      body2: "Seine Besonderheit ist die außergewöhnlich ruhige Lage inmitten der Natur, wo Sie statt Stadttrubel nur Vogelgesang, das Plätschern des nahen Baches und die beruhigenden Geräusche des Waldes begleiten. Von der oberen Terrasse öffnet sich ein wunderschöner Blick auf den Krn sowie die umliegenden Berge und das Tal.",
      body3: "Für gemütliches Beisammensein im Freien stehen eine überdachte Terrasse hinter dem Haus, eine Pergola mit Sitzgarnitur vor dem Haus, ein Außengrill sowie ein Sitzbereich am Feuer zur Verfügung. Auf der oberen Terrasse können Sie bei Morgenkaffee oder Abendsonnenuntergang unberührte Natur und atemberaubende Aussichten genießen.",
      body4: "Kobarid und seine Umgebung bieten zahlreiche Möglichkeiten für aktive Freizeitgestaltung: Fahrradverleih, Rafting, Canyoning, Gleitschirmfliegen, Angeln und vieles mehr. Liebhaber ruhigerer Erholung können Waldwege erkunden oder sich im nahen Fluss Nadiža erfrischen.",
      body5: "Zu den beliebtesten Sehenswürdigkeiten zählen der Kozjak-Wasserfall, das Kobarid-Museum sowie das italienische Beinhaus in Kobarid. Die weitere Umgebung begeistert mit dem reichen Erbe des Ersten Weltkriegs, smaragdgrünen Flüssen und unberührter Natur, die unzählige Möglichkeiten für Erkundung, sportliche Aktivitäten und vollkommene Erholung bietet.",
    },
    romantic: {
      title: "Spüren Sie die Seele von Bovec",
      body1: "Am Morgen weckt Sie das Murmeln eines Baches und der Duft der Bergluft. Am Horizont zeichnen sich die Silhouetten der Julischen Alpen ab, während die Soča im Tal in ihrem unverwechselbaren türkis-grünen Leuchten fließt. Das ist Bovec — und das ist Ihr Zuhause für diese Tage.",
      body2: "Unser Haus ist für diejenigen gestaltet, die wissen, dass echte Erholung das Gefühl von Zuhause braucht. Möbel aus natürlichen Materialien, warmes Licht, geräumige Balkone mit Bergblick und ein Garten, wo die Zeit anders verläuft — all das erwartet Sie.",
      body3: "Nachts, wenn die Lichter erlöschen und die Sterne über der Bovec-Ebene leuchten, werden Sie verstehen, warum man immer wieder zurückkommt.",
    },
    activities: {
      title: "Was Sie unternehmen können",
      subtitle: "Das Soča-Tal und die Umgebung von Kobarid bieten Aktivitäten für alle Jahreszeiten und Geschmäcker.",
      items: buildActivities("de"),
    },
    seasons: {
      title: "Wann kommen",
      body: "Kobarid verwöhnt Sie das ganze Jahr. Der Frühling bringt Grün und den vollen Lauf der Soča — ideal für Rafting und erste Bergwanderungen. Der Sommer ist die Zeit für Badegäste, Abenteurer und alle, die Frische über dem Hitze-Meer suchen. Der Herbst vergoldet die Wälder und bringt Ruhe — weniger Touristen, mehr Platz für Sie. Der Winter offenbart den stillen Zauber verschneiter Berge und der Skipisten des Kanin.",
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
      body: "Das Haus liegt in Kobarid, im Herzen des Soča-Tals, umgeben von den Julischen Alpen und dem Triglav-Nationalpark. Bovec ist 30 Minuten entfernt, Tolmin 20 Minuten und Tarvis (IT) etwa eine Stunde mit dem Auto. Der Flughafen Ljubljana ist etwa 2 Stunden entfernt.",
    },
    footer: {
      aboutTitle: "Über uns",
      aboutBody: "Das Haus in Kobarid ist Ihr Zuhause im Herzen der Julischen Alpen — idealer Ausgangspunkt für die Erkundung des Soča-Tals.",
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
