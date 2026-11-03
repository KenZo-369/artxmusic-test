'use strict';
(() => {
  const translations = {
  "t000": {
    "de": "Zum Inhalt",
    "en": "Skip to content"
  },
  "t001": {
    "de": "Menü",
    "en": "Menu"
  },
  "t002": {
    "de": "Über uns",
    "en": "About us"
  },
  "t003": {
    "de": "Kontakt",
    "en": "Contact"
  },
  "t004": {
    "de": "Mitmachen",
    "en": "Get involved"
  },
  "t005": {
    "de": "KUNST × MUSIK × MENSCHEN",
    "en": "ART × MUSIC × PEOPLE"
  },
  "t006": {
    "de": "KUNST",
    "en": "ART"
  },
  "t007": {
    "de": "MUSIK",
    "en": "MUSIC"
  },
  "t008": {
    "de": "Und du",
    "en": "And you"
  },
  "t009": {
    "de": "Eine Plattform für neue Stimmen.",
    "en": "A platform for new voices."
  },
  "t010": {
    "de": "Ein Raum für das, was uns verbindet.",
    "en": "A space for what brings us together."
  },
  "t011": {
    "de": "Unsere Events entdecken",
    "en": "Discover our events"
  },
  "t012": {
    "de": "Mehr als ein Moment.",
    "en": "More than a moment."
  },
  "t013": {
    "de": "Eine Verbindung.",
    "en": "A connection."
  },
  "t014": {
    "de": "UNABHÄNGIG. OFFEN. MITEINANDER.",
    "en": "INDEPENDENT. OPEN. TOGETHER."
  },
  "t015": {
    "de": "Das ist ArtXMusic",
    "en": "This is ArtXMusic"
  },
  "t016": {
    "de": "KUNST VERBINDET",
    "en": "ART CONNECTS"
  },
  "t017": {
    "de": "MUSIK VERBINDET",
    "en": "MUSIC CONNECTS"
  },
  "t018": {
    "de": "Events & Begegnungen",
    "en": "Events & encounters"
  },
  "t020": {
    "de": "Momente,",
    "en": "Moments"
  },
  "t021": {
    "de": "die verbinden.",
    "en": "that connect."
  },
  "t022": {
    "de": "Zukünftige Events",
    "en": "Upcoming events"
  },
  "t023": {
    "de": "Vergangene Events",
    "en": "Past events"
  },
  "t024": {
    "de": "DAS NÄCHSTE KAPITEL",
    "en": "THE NEXT CHAPTER"
  },
  "t025": {
    "de": "Hier geht es weiter.",
    "en": "There is more to come."
  },
  "t026": {
    "de": "Aktuell ist kein neuer Termin angekündigt.",
    "en": "No new dates have been announced yet."
  },
  "t027": {
    "de": "Bis dahin: Entdecke unseren ersten Festivalrückblick.",
    "en": "In the meantime, explore our first festival recap."
  },
  "t028": {
    "de": "Zum Rückblick 2026",
    "en": "Explore the 2026 recap"
  },
  "t029": {
    "de": "IN VERBINDUNG BLEIBEN",
    "en": "STAY CONNECTED"
  },
  "t030": {
    "de": "Folge uns auf Instagram ↗",
    "en": "Follow us on Instagram ↗"
  },
  "t031": {
    "de": "RÜCKBLICK / 2026",
    "en": "RECAP / 2026"
  },
  "t032": {
    "de": "04.–05. SEPTEMBER 2026 · DORNACH",
    "en": "04–05 SEPTEMBER 2026 · DORNACH"
  },
  "t033": {
    "de": "Kunst und Musik an einem Ort.",
    "en": "Art and music in one place."
  },
  "t034": {
    "de": "Unser Festival in der Tipioase.",
    "en": "Our festival at Tipioase."
  },
  "t035": {
    "de": "Zum Rückblick",
    "en": "Explore the recap"
  },
  "t036": {
    "de": "DER VEREIN",
    "en": "THE ASSOCIATION"
  },
  "t037": {
    "de": "Ein Verein. Viele Perspektiven.",
    "en": "One association. Many perspectives."
  },
  "t038": {
    "de": "Für neue",
    "en": "For new"
  },
  "t039": {
    "de": "Stimmen.",
    "en": "voices."
  },
  "t040": {
    "de": "Für uns alle.",
    "en": "For all of us."
  },
  "t041": {
    "de": "Nicht jede starke Idee steht schon im Rampenlicht. Wir schaffen Raum dafür.",
    "en": "Not every great idea is already in the spotlight. We make room for it."
  },
  "t042": {
    "de": "ArtXMusic verbindet Kunst und Musik. Unser «X» steht für die Begegnung dazwischen – zwischen Menschen, Ausdrucksformen und neuen Perspektiven.",
    "en": "ArtXMusic brings art and music together. Our “X” is the connection in between — between people, forms of expression and new perspectives."
  },
  "t043": {
    "de": "Als Verein geben wir besonders aufstrebenden Kunstschaffenden, Musiker:innen und DJs eine Plattform. Für erste Auftritte, neue Verbindungen und kreative Entwicklung.",
    "en": "As an association, we give emerging artists, musicians and DJs a platform. For first performances, new connections and creative growth."
  },
  "t044": {
    "de": "Mit Events, Projekten und Kooperationen fördern wir Austausch, Gemeinschaft und kulturelle Vielfalt.",
    "en": "Through events, projects and collaborations, we encourage exchange, community and cultural diversity."
  },
  "t045": {
    "de": "Deine Idee hat hier Platz",
    "en": "There is room for your idea"
  },
  "t046": {
    "de": "Die Menschen dahinter",
    "en": "The people behind it"
  },
  "t047": {
    "de": "Vier Perspektiven. Eine gemeinsame Idee.",
    "en": "Four perspectives. One shared idea."
  },
  "t048": {
    "de": "Events & kreative Begegnungen",
    "en": "Events & creative encounters"
  },
  "t049": {
    "de": "Mehr über Michelle",
    "en": "More about Michelle"
  },
  "t050": {
    "de": "Michelle kommt ursprünglich aus dem Transport- und Zollbereich. Über praktische Projekte und ihre Ausbildung zur Eventmanagerin fand sie zur Veranstaltungswelt – und lernte dabei Vincent kennen.",
    "en": "Michelle originally worked in transport and customs. Practical projects and her training in event management led her into the world of events — where she also met Vincent."
  },
  "t051": {
    "de": "Mit ihrem gemeinsamen Abschlussprojekt «ArtConnection» legten sie den Grundstein für die Idee, neuen kreativen Stimmen eine Plattform zu geben. Diese Erfahrung bringt sie in ArtXMusic ein.",
    "en": "Their joint graduation project, “ArtConnection”, laid the foundation for giving new creative voices a platform. She brings that experience to ArtXMusic."
  },
  "t052": {
    "de": "Kunst, Raum & Licht",
    "en": "Art, space & light"
  },
  "t053": {
    "de": "Mehr über Adriano",
    "en": "More about Adriano"
  },
  "t054": {
    "de": "Adriano ist Galerist, Kurator, Lichtdesigner und Inhaber von arkadia-design.ch. Er verbindet Kunst, Raum und Licht zu erlebbaren Atmosphären.",
    "en": "Adriano is a gallerist, curator, lighting designer and owner of arkadia-design.ch. He brings art, space and light together to create immersive atmospheres."
  },
  "t055": {
    "de": "Mit der Programmgestaltung von Halle 80 und dem Hair Atelier schafft er Raum für zeitgenössische Kunst und Dialog. Offenheit, Experimentierfreude, klare Formen und ein bewusster Umgang mit Materialien prägen seine Arbeit.",
    "en": "Through his programming at Halle 80 and the Hair Atelier, he creates space for contemporary art and dialogue. Openness, experimentation, clear forms and a thoughtful approach to materials shape his work."
  },
  "t056": {
    "de": "Musik, Visuals & Verbindung",
    "en": "Music, visuals & connection"
  },
  "t057": {
    "de": "Mehr über Vincent",
    "en": "More about Vincent"
  },
  "t058": {
    "de": "Vincent beschäftigt sich mit visueller Kommunikation und digitalen Räumen an der Hochschule für Gestaltung und Kunst Basel. Seine kreativen Felder reichen von DJing und Musikproduktion bis zu Visuals und Kunst.",
    "en": "Vincent explores visual communication and digital spaces at the Basel Academy of Art and Design. His creative practice ranges from DJing and music production to visuals and art."
  },
  "t059": {
    "de": "Aus seiner Erfahrung mit Kunst- und Musikevents wächst der Wunsch, Menschen zusammenzubringen. Er möchte Orte schaffen, an denen Austausch, gemeinsame kreative Energie und Zugehörigkeit entstehen.",
    "en": "His experience organising art and music events fuels his desire to bring people together. He wants to create places for exchange, shared creative energy and a sense of belonging."
  },
  "t060": {
    "de": "GEMEINSAM GESTALTEN",
    "en": "CREATE WITH US"
  },
  "t061": {
    "de": "Gute Ideen brauchen",
    "en": "Good ideas need"
  },
  "t062": {
    "de": "gute Gesellschaft.",
    "en": "good company."
  },
  "t063": {
    "de": "Du machst Kunst oder Performances, legst auf, singst oder spielst ein Instrument? Möchtest du – gerne auch mit deinen Freunden – mitgestalten oder mit uns zusammenarbeiten? Tell us please!",
    "en": "Do you make art or perform, DJ, sing or play an instrument? Would you like to get involved or collaborate with us — perhaps with your friends? Please let us know!"
  },
  "t064": {
    "de": "Lass uns etwas bewegen",
    "en": "Let’s make something happen"
  },
  "t065": {
    "de": "Interesse an einer Mitgliedschaft? Schreib uns. ↗",
    "en": "Interested in becoming a member? Get in touch. ↗"
  },
  "t066": {
    "de": "Sag",
    "en": "Say"
  },
  "t067": {
    "de": "Hallo.",
    "en": "Hello."
  },
  "t068": {
    "de": "ARTXMUSIC · SCHWEIZ",
    "en": "ARTXMUSIC · SWITZERLAND"
  },
  "t069": {
    "de": "Kunst. Musik. Miteinander.",
    "en": "Art. Music. Together."
  },
  "t070": {
    "de": "Festival 2026 — Rückblick · ArtXMusic",
    "en": "Festival 2026 — Recap · ArtXMusic"
  },
  "t071": {
    "de": "Alle vergangenen Events",
    "en": "All past events"
  },
  "t072": {
    "de": "AUS DEM ARCHIV / 2026",
    "en": "FROM THE ARCHIVE / 2026"
  },
  "t073": {
    "de": "KUNST × MUSIK × BEGEGNUNG",
    "en": "ART × MUSIC × CONNECTION"
  },
  "t074": {
    "de": "WANN",
    "en": "WHEN"
  },
  "t075": {
    "de": "04.–05. September 2026",
    "en": "04–05 September 2026"
  },
  "t076": {
    "de": "WO",
    "en": "WHERE"
  },
  "t077": {
    "de": "ADRESSE",
    "en": "ADDRESS"
  },
  "t078": {
    "de": "Vergangenes Event",
    "en": "Past event"
  },
  "t079": {
    "de": "ARTXMUSIC FESTIVAL / 2026 — BILDMOTIV DER FESTIVALWEBSITE",
    "en": "ARTXMUSIC FESTIVAL / 2026 — IMAGE FROM THE FESTIVAL WEBSITE"
  },
  "t080": {
    "de": "LICHT. RAUM. ATMOSPHÄRE.",
    "en": "LIGHT. SPACE. ATMOSPHERE."
  },
  "t081": {
    "de": "Zwei Tage.",
    "en": "Two days."
  },
  "t082": {
    "de": "Am 4. und 5. September 2026 fand das ArtXMusic Festival in der Tipioase in Dornach statt.",
    "en": "The ArtXMusic Festival took place on 4 and 5 September 2026 at Tipioase in Dornach."
  },
  "t083": {
    "de": "Die Idee dahinter: Kunst und Musik verbinden, neuen Stimmen Raum geben und Menschen zusammenbringen. Hier bleibt Platz für die Erinnerungen daran.",
    "en": "The idea: bring art and music together, make room for new voices and connect people. This is a space to keep those memories alive."
  },
  "t084": {
    "de": "Bild trifft",
    "en": "Picture meets"
  },
  "t085": {
    "de": "FILME / 2026",
    "en": "FILMS / 2026"
  },
  "t086": {
    "de": "Festivalvideo auf YouTube laden",
    "en": "Load festival video from YouTube"
  },
  "t087": {
    "de": "Beim Laden des Videos wird eine Verbindung zu YouTube hergestellt.",
    "en": "Loading this video connects your browser to YouTube."
  },
  "t088": {
    "de": "Video direkt auf YouTube öffnen ↗",
    "en": "Watch directly on YouTube ↗"
  },
  "t089": {
    "de": "Das nächste Kapitel?",
    "en": "The next chapter?"
  },
  "t090": {
    "de": "Wir bleiben verbunden.",
    "en": "Let’s stay connected."
  },
  "t091": {
    "de": "Bildmotiv der bisherigen ArtXMusic-Festivalwebsite · 2026",
    "en": "Image from the original ArtXMusic festival website · 2026"
  },
  "t092": {
    "de": "ArtXMusic – zur Startseite",
    "en": "ArtXMusic — home"
  },
  "t093": {
    "de": "Hauptnavigation",
    "en": "Main navigation"
  },
  "t094": {
    "de": "Grafische Komposition aus Festivalmotiv und weißem X",
    "en": "Graphic composition of the festival image and a white X"
  },
  "t095": {
    "de": "Bäume in leuchtendem Blau, Pink und Grün bei Nacht",
    "en": "Trees lit in vivid blue, pink and green at night"
  },
  "t096": {
    "de": "Veranstaltungen filtern",
    "en": "Filter events"
  },
  "t097": {
    "de": "ArtXMusic Festival 2026 – Rückblick ansehen",
    "en": "ArtXMusic Festival 2026 — explore the recap"
  },
  "t098": {
    "de": "Ein beleuchtetes Tipi, Palmen und Lichtprojektionen auf dem Festivalgelände bei Nacht.",
    "en": "A lit tipi, potted palms and light projections on the festival grounds at night."
  },
  "t099": {
    "de": "Zurück nach oben",
    "en": "Back to top"
  },
  "t100": {
    "de": "Festivalmotiv vergrößern",
    "en": "Enlarge festival image"
  },
  "t101": {
    "de": "Bäume in farbigem Licht – Bildmotiv der bisherigen Festivalwebsite",
    "en": "Trees in coloured light — image from the original festival website"
  },
  "t102": {
    "de": "Vergrößertes Festivalmotiv",
    "en": "Enlarged festival image"
  },
  "t103": {
    "de": "Bildansicht schließen",
    "en": "Close image viewer"
  },
  "t104": {
    "de": "Blau, pink und grün beleuchtete Bäume bei Nacht",
    "en": "Trees lit in blue, pink and green at night"
  },
  "t105": {
    "de": "ArtXMusic in der Galerie Arkadia Design: 21.–24. Januar 2027, Gerbergasse 16, 4051 Basel. Bewirb dich mit deinen Arbeiten per E-Mail.",
    "en": "ArtXMusic at Gallery Arkadia Design: 21–24 January 2027, Gerbergasse 16, 4051 Basel. Apply by emailing us your work."
  },
  "t106": {
    "de": "Der Rückblick auf das ArtXMusic Festival vom 4.–5. September 2026 in der Tipioase in Dornach. Kunst, Musik und Begegnung.",
    "en": "A look back at the ArtXMusic Festival on 4–5 September 2026 at Tipioase in Dornach. Art, music and connection."
  },
  "t107": {
    "de": "Mit TWINT spenden",
    "en": "Donate with TWINT"
  },
  "t108": {
    "de": "UNTERSTÜTZEN",
    "en": "SUPPORT"
  },
  "t109": {
    "de": "Neue Stimmen brauchen",
    "en": "New voices need"
  },
  "t110": {
    "de": "Raum zum Wachsen.",
    "en": "room to grow."
  },
  "t111": {
    "de": "Mit deiner Unterstützung schaffen wir Raum für Kunst, Musik und Begegnungen.",
    "en": "Your support helps us create space for art, music and encounters."
  },
  "t112": {
    "de": "Mit TWINT spenden",
    "en": "Donate with TWINT"
  },
  "t113": {
    "de": "Betrag frei wählen und in TWINT bestätigen.",
    "en": "Choose your amount and confirm in TWINT."
  },
  "t114": {
    "de": "Danke, dass du neue Stimmen unterstützt.",
    "en": "Thank you for supporting new voices."
  },
  "t115": {
    "de": "Online-Spenden sind hier noch nicht aktiviert. Wenn du ArtXMusic schon jetzt unterstützen möchtest, schreib uns gerne.",
    "en": "Online donations are not active here yet. If you would like to support ArtXMusic now, please get in touch."
  },
  "t116": {
    "de": "Kontakt aufnehmen",
    "en": "Get in touch"
  },
  "t117": {
    "de": "Spendenfenster schließen",
    "en": "Close donation window"
  },
  "t118": {
    "de": "Sprache wählen",
    "en": "Choose language"
  },
  "t119": {
    "de": "Auf Deutsch wechseln",
    "en": "Switch to German"
  },
  "t120": {
    "de": "Auf Englisch wechseln",
    "en": "Switch to English"
  },
  "t122": {
    "de": "AUS DER SCHWEIZ",
    "en": "FROM SWITZERLAND"
  },
  "t123": {
    "de": "AXM / UNABHÄNGIGE KULTUR",
    "en": "AXM / INDEPENDENT CULTURE"
  },
  "t124": {
    "de": "KUNST TRIFFT KLANG.",
    "en": "ART MEETS SOUND."
  },
  "t125": {
    "de": "01 — WO ALLES ZUSAMMENKOMMT",
    "en": "01 — WHERE IT ALL CONNECTS"
  },
  "t126": {
    "de": "mailto:artxmusicfestival@outlook.com?subject=Bei%20ArtXMusic%20mitmachen",
    "en": "mailto:artxmusicfestival@outlook.com?subject=Get%20involved%20with%20ArtXMusic"
  },
  "t127": {
    "de": "mailto:artxmusicfestival@outlook.com?subject=Interesse%20an%20einer%20Mitgliedschaft",
    "en": "mailto:artxmusicfestival@outlook.com?subject=ArtXMusic%20membership%20enquiry"
  },
  "t128": {
    "de": "mailto:artxmusicfestival@outlook.com?subject=ArtXMusic%20unterst%C3%BCtzen",
    "en": "mailto:artxmusicfestival@outlook.com?subject=Support%20ArtXMusic"
  },
  "adriano.gallery": {
    "de": "Heute ist Adriano als selbstständiger Galerist tätig. Seine Galerie befindet sich in der Kunstpassage an der Gerbergasse 16.",
    "en": "Today, Adriano works as an independent gallerist. His gallery is located in the Kunstpassage at Gerbergasse 16."
  },
  "donate.header": {
    "de": "Spenden",
    "en": "Donate"
  },
  "donate.header.label": {
    "de": "Jetzt mit TWINT spenden",
    "en": "Donate now with TWINT"
  },
  "design.archive": {
    "de": "AUS DEM ARCHIV",
    "en": "FROM THE ARCHIVE"
  },
  "design.events": {
    "de": "Events & Begegnungen",
    "en": "Events & encounters"
  },
  "design.upcoming": {
    "de": "DEMNÄCHST",
    "en": "UPCOMING"
  },
  "design.association": {
    "de": "Raum für neue Stimmen",
    "en": "Room for new voices"
  },
  "design.sound": {
    "de": "Klang.",
    "en": "sound."
  },
  "design.manifesto": {
    "de": "ArtXMusic – unser Leitgedanke",
    "en": "ArtXMusic manifesto"
  },
  "quiet.identity": {
    "de": "Kunst und Musik. Gemeinsam.",
    "en": "Art and music. Together."
  },
  "quiet.hero.first": {
    "de": "Kunst, Musik",
    "en": "Art, music"
  },
  "quiet.hero.second": {
    "de": "und du",
    "en": "and you"
  },
  "quiet.events": {
    "de": "Veranstaltungen",
    "en": "Events"
  },
  "quiet.about": {
    "de": "Über ArtXMusic",
    "en": "About ArtXMusic"
  },
  "quiet.participate": {
    "de": "Mitmachen",
    "en": "Get involved"
  },
  "quiet.support": {
    "de": "ArtXMusic unterstützen",
    "en": "Support ArtXMusic"
  },
  "quiet.back": {
    "de": "Nach oben",
    "en": "Back to top"
  },
  "background.pause": {
    "de": "Hintergrund pausieren",
    "en": "Pause background"
  },
  "background.play": {
    "de": "Hintergrund abspielen",
    "en": "Play background"
  },
  "event.arkadia.label": {
    "de": "Nächster Event:",
    "en": "Next event:"
  },
  "event.arkadia.gallery": {
    "de": "Galerie",
    "en": "Gallery"
  },
  "event.arkadia.venue": {
    "de": "Galerie Arkadia Design",
    "en": "Gallery Arkadia Design"
  },
  "event.arkadia.date": {
    "de": "21.–24. Januar 2027",
    "en": "21–24 January 2027"
  },
  "event.arkadia.apply": {
    "de": "Jetzt bewerben",
    "en": "Submit your work"
  },
  "event.arkadia.note": {
    "de": "Schick uns deine Arbeiten oder einen Link zu deinem Portfolio per E-Mail.",
    "en": "Email us your work or a link to your portfolio."
  },
  "event.arkadia.mailto": {
    "de": "mailto:artxmusicfestival@outlook.com?subject=Bewerbung%20%E2%80%93%20ArtXMusic%20in%20der%20Galerie%20Arkadia%20Design%20%E2%80%93%2021.%E2%80%9324.%20Januar%202027",
    "en": "mailto:artxmusicfestival@outlook.com?subject=Application%20%E2%80%93%20ArtXMusic%20at%20Arkadia%20Design%20%E2%80%93%2021%E2%80%9324%20January%202027"
  },
  "event.arkadia.all": {
    "de": "Alle Veranstaltungen",
    "en": "All events"
  },
  "event.arkadia.title": {
    "de": "ArtXMusic — Arkadia Design · Januar 2027",
    "en": "ArtXMusic — Arkadia Design · January 2027"
  },
  "gallery.label": {
    "de": "Fototagebuch · 2026",
    "en": "Photo diary · 2026"
  },
  "gallery.title": {
    "de": "Momente aus Dornach",
    "en": "Moments from Dornach"
  },
  "gallery.note": {
    "de": "Licht, Kunst und Begegnungen.",
    "en": "Light, art and encounters."
  },
  "gallery.enlarge": {
    "de": "Foto vergrössern",
    "en": "Enlarge photo"
  },
  "gallery.dialog": {
    "de": "Festivalfotos in Grossansicht",
    "en": "Festival photo viewer"
  },
  "gallery.previous": {
    "de": "Vorheriges Foto",
    "en": "Previous photo"
  },
  "gallery.next": {
    "de": "Nächstes Foto",
    "en": "Next photo"
  },
  "gallery.tipioase-night.caption": {
    "de": "Die Tipioase bei Nacht",
    "en": "Tipioase after dark"
  },
  "gallery.tipioase-night.alt": {
    "de": "Ein beleuchtetes Tipi, Palmen und Lichtprojektionen auf dem Festivalgelände bei Nacht.",
    "en": "A lit tipi, potted palms and light projections on the festival grounds at night."
  },
  "gallery.industrial-light.caption": {
    "de": "Farbe trifft Industriearchitektur",
    "en": "Colour meets industrial architecture"
  },
  "gallery.industrial-light.alt": {
    "de": "Ein grosser Industrietank und Rohrleitungen in blauem, grünem und pinkem Licht.",
    "en": "A large industrial tank and pipework lit in blue, green and pink."
  },
  "gallery.terrace-night.caption": {
    "de": "Ein Abend draussen",
    "en": "An evening outdoors"
  },
  "gallery.terrace-night.alt": {
    "de": "Eine überdachte Terrasse mit Pflanzen, Holzmöbeln und warmen Lichterketten bei Nacht.",
    "en": "A covered terrace with plants, wooden furniture and warm string lights at night."
  },
  "gallery.facade-projection.caption": {
    "de": "Projektionen auf der Fassade",
    "en": "Projections on the façade"
  },
  "gallery.facade-projection.alt": {
    "de": "Eine grosse Illustration wird auf eine Gebäudefassade hinter Pflanzen und einem Holzzaun projiziert.",
    "en": "A large illustration projected onto a building behind plants and a wooden fence."
  },
  "gallery.tattoo-session.caption": {
    "de": "Tattoo-Kunst aus der Nähe",
    "en": "Tattoo art, up close"
  },
  "gallery.tattoo-session.alt": {
    "de": "Eine tätowierende Person arbeitet am Oberarm eines sitzenden Festivalgastes.",
    "en": "A tattoo artist works on the upper arm of a seated festival visitor."
  },
  "gallery.axm-tattoo.caption": {
    "de": "AXM als Tattoo",
    "en": "AXM in ink"
  },
  "gallery.axm-tattoo.alt": {
    "de": "Ein kleines Tattoo mit dem Schriftzug AXM auf einem Oberarm.",
    "en": "A small AXM lettering tattoo on an upper arm."
  },
  "gallery.projection-setup.caption": {
    "de": "Visuals und gemeinsame Momente",
    "en": "Visuals and shared moments"
  },
  "gallery.projection-setup.alt": {
    "de": "Zwei Projektoren neben einem Laptop in einem warm beleuchteten Bereich mit Holzboden.",
    "en": "Two projectors beside a laptop in a warmly lit space with wooden flooring."
  },
  "gallery.video.title": {
    "de": "Vorher, nachher.",
    "en": "Before and after."
  },
  "gallery.video.setup": {
    "de": "Hinter den Kulissen",
    "en": "Behind the scenes"
  },
  "gallery.video.facade": {
    "de": "Licht auf der Fassade",
    "en": "Light on the façade"
  },
  "gallery.video.silent": {
    "de": "Ohne Ton",
    "en": "No audio"
  },
  "gallery.youtube": {
    "de": "Erste Schritte des Festivals auf YouTube ansehen.",
    "en": "Watch the festival’s first steps on YouTube."
  },
  "editorial.film.label": {
    "de": "Kunst in Bewegung",
    "en": "Art in motion"
  },
  "editorial.film.caption": {
    "de": "Aus dem Festivalarchiv · 04.–05.09.2026",
    "en": "From the festival archive · 04–05.09.2026"
  },
  "editorial.archive.label": {
    "de": "Aus dem Archiv",
    "en": "From the archive"
  },
  "editorial.archive.title": {
    "de": "Eindrücke des ArtXMusic-Festivals in der",
    "en": "Impressions of the ArtXMusic Festival at"
  },
  "editorial.archive.copy": {
    "de": "Kunst, Musik und Begegnungen in der Tipioase. Ein Blick zurück auf unser Festival in Dornach.",
    "en": "Art, music and encounters at Tipioase. A look back at our festival in Dornach."
  },
  "editorial.archive.count": {
    "de": "7 Fotos · 2 Videos",
    "en": "7 photos · 2 videos"
  },
  "editorial.archive.link": {
    "de": "Den Rückblick entdecken",
    "en": "Explore the recap"
  },
  "editorial.archive.date": {
    "de": "04.–05. September 2026 · Dornach",
    "en": "04–05 September 2026 · Dornach"
  },
  "editorial.join.title": {
    "de": "Deine Idee hat hier Platz",
    "en": "There is room for your idea"
  },
  "editorial.support.title": {
    "de": "Raum für Kultur.",
    "en": "Room for culture."
  },
  "editorial.about.caption": {
    "de": "ArtXMusic Festival · Tipioase, Dornach · 2026",
    "en": "ArtXMusic Festival · Tipioase, Dornach · 2026"
  },
  "editorial.program": {
    "de": "Programm",
    "en": "Programme"
  },
  "ivan.caption": {
    "de": "Ein geheimnisvoller Zauberer aus einer unbekannten Dimension.",
    "en": "A mysterious wizard from an unknown dimension."
  },
  "donate.continued": {
    "de": "Jeder Beitrag hilft uns, diese Idee weiterzutragen.",
    "en": "Every contribution helps us take this idea further."
  },
  "editorial.support.thanks": {
    "de": "Dank dir.",
    "en": "Thanks to you."
  },
  "editorial.archive.venue": {
    "de": "Tipi Oase, Dornach.",
    "en": "Tipi Oase, Dornach."
  }
};

  let language = 'en';
  function applyLanguage(next, remember = false) {
    if (next !== 'de' && next !== 'en') return;
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const entry = translations[element.dataset.i18n];
      if (entry) element.textContent = entry[next];
    });
    ['alt', 'aria-label', 'content', 'href'].forEach(attribute => {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        const entry = translations[element.getAttribute(`data-i18n-${attribute}`)];
        if (entry) element.setAttribute(attribute, entry[next]);
      });
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === next));
    });
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!/^(index|festival-2026)\.html(?:[?#]|$)/.test(href)) return;
      const target = new URL(href, location.href);
      target.searchParams.set('lang', next);
      link.setAttribute('href', target.pathname.split('/').pop() + target.search + target.hash);
    });
    const video = document.querySelector('.video-shell iframe');
    if (video) video.title = next === 'de' ? 'ArtXMusic Festival 2026 – Video' : 'ArtXMusic Festival 2026 — Video';
    if (remember) {
      try { localStorage.setItem('artxmusic-language', next); } catch (_) {}
      try {
        const address = new URL(location.href);
        address.searchParams.set('lang', next);
        history.replaceState(null, '', address);
      } catch (_) {}
    }
  }
  let stored;
  try { stored = localStorage.getItem('artxmusic-language'); } catch (_) {}
  const requested = new URLSearchParams(location.search).get('lang');
  applyLanguage(['de', 'en'].includes(requested) ? requested : ['de', 'en'].includes(stored) ? stored : 'en');
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language, true));
  });
  window.ArtXMusicLocale = { get language() { return language; } };
})();
