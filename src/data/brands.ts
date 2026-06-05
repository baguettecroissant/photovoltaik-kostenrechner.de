/**
 * Brands data — 6 leading solar and battery manufacturers
 */
export interface Brand {
  slug: string;
  name: string;
  country: string;
  flag: string;
  positioning: string;
  flagship: string;
  priceRange: string;
  description: string;
  models: { name: string; power: string; price: string; rendement: string; features: string }[];
  pros: string[];
  cons: string[];
  warranty: string;
  sav: string;
  content: string;
}

export const brands: Brand[] = [
  {
    slug: "meyer-burger",
    name: "Meyer Burger",
    country: "Schweiz / DE",
    flag: "🇨🇭",
    positioning: "Premium / Heterojunction",
    flagship: "Meyer Burger Black (HJT)",
    priceRange: "180€ – 280€ pro Modul",
    description: "Meyer Burger ist ein führendes europäisches Solarunternehmen mit Schweizer Wurzeln. Die High-End-Solarmodule basieren auf der innovativen Heterojunction-Technologie (HJT) und bieten maximale Erträge auch bei diffusem Licht und hohen Temperaturen. Die Module werden komplett in Deutschland gefertigt.",
    models: [
      { name: "Meyer Burger Black (HJT)", power: "385 - 400 Wp", price: "220 €", rendement: "21.5%", features: "Vollschwarz, HJT-Zellen, hervorragendes Schwachlichtverhalten" },
      { name: "Meyer Burger White", power: "390 - 410 Wp", price: "190 €", rendement: "21.7%", features: "Weiße Rückseitenfolie, optimales Preis-Leistungs-Verhältnis" },
    ],
    pros: [
      "Heterojunction-Technologie (HJT) sorgt für bis zu 20% höhere Solarerträge",
      "Hervorragender Temperaturkoeffizient — weniger Leistungseinbußen bei Sommerhitze",
      "Komplette Produktion in Deutschland (Sachsen und Sachsen-Anhalt)",
      "25 Jahre Produkt- und Leistungsgarantie",
      "100% frei von Blei und PFAS, umweltfreundliche Herstellung",
    ],
    cons: [
      "Deutlich teurer in der Anschaffung als asiatische Standardmodule",
      "Begrenzte Produktionskapazitäten führen teilweise zu Lieferzeiten",
    ],
    warranty: "25 Jahre Produktgarantie, 25 Jahre Leistungsgarantie (mind. 92% nach 25 Jahren)",
    sav: "Zentraler Kundenservice in Bitterfeld-Wolfen, Deutschland. Schnelle Abwicklung über autorisierte Fachpartner.",
    content: `<p>Die <strong>Meyer Burger Technology AG</strong> ist der europäische Innovationsführer im Solarmarkt. Das traditionsreiche Unternehmen, das jahrzehntelang als Maschinenbauer die gesamte globale Solarindustrie mit Produktionstechnologie versorgte, fertigt seit 2021 selbst PV-Module der absoluten Spitzenklasse.</p>
    
    <h2>Die Heterojunction-Technologie (HJT)</h2>
    <p>Das Herzstück der Module von Meyer Burger ist die patentierte <strong>Heterojunction-Zelltechnologie (HJT)</strong> in Verbindung mit der SmartWire-Verbindungstechnologie. Durch die Kombination verschiedener Siliziumschichten erreichen die HJT-Zellen eine deutlich höhere Energieausbeute als herkömmliche PERC-Zellen.</p>
    
    <p>Besonders bei bewölktem Himmel (diffuses Licht) und in den heißen Sommermonaten spielen Meyer Burger Module ihre Vorteile aus: Ihr Temperaturkoeffizient ist extrem niedrig, was bedeutet, dass sie bei starker Hitze kaum an Effizienz einbüßen.</p>

    <h2>Qualität „Made in Germany“</h2>
    <p>Während fast alle Solarmodule heute aus Asien importiert werden, fertigt Meyer Burger seine Solarzellen und Module in modernsten Werken in <strong>Freiberg (Sachsen)</strong> und <strong>Bitterfeld-Wolfen (Sachsen-Anhalt)</strong>. Das sichert europäische Lieferketten, lokale Arbeitsplätze und garantiert höchste Qualitäts- und Umweltstandards.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Meyer Burger Module sind die perfekte Wahl für anspruchsvolle Eigenheimbesitzer, die Wert auf <strong>regionale Wertschöpfung, hervorragende Optik (Full Black) und maximale Erträge</strong> auf begrenzter Dachfläche legen. Der höhere Anschaffungspreis amortisiert sich durch die Mehrerträge über die 25-jährige Garantiezeit hinweg.</p>`
  },
  {
    slug: "solarwatt",
    name: "Solarwatt",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Glas-Glas-Pionier",
    flagship: "Solarwatt Vision AM 4.0",
    priceRange: "160€ – 240€ pro Modul",
    description: "Solarwatt ist der deutsche Vorreiter bei Doppelglas-Solarmodulen. Das Dresdner Traditionsunternehmen fertigt extrem robuste Glas-Glas-Module mit höchster Langlebigkeit und bietet integrierte Systemlösungen inkl. Stromspeicher (Solarwatt Battery flex) und Energiemanager.",
    models: [
      { name: "Solarwatt Vision AM 4.0 (Glas-Glas)", power: "400 - 420 Wp", price: "180 €", rendement: "21.3%", features: "Doppelglas, bifazial, extreme Witterungsbeständigkeit" },
      { name: "Solarwatt Panel Classic H 1.1", power: "375 - 390 Wp", price: "140 €", rendement: "20.2%", features: "Glas-Folie, günstigerer Einstieg" },
    ],
    pros: [
      "Glas-Glas-Technologie bietet extremen Schutz vor mechanischer Belastung (Hagel, Schneelast)",
      "Integrierter Komplettschutz (Allgefahren-Versicherung) für 5 Jahre inklusive",
      "30 Jahre Produkt- und Leistungsgarantie auf alle Glas-Glas-Module",
      "Komplettanbieter (Module, Speicher, Energiemanagement aus einer Hand)",
      "Entwicklung und Großteil der Produktion in Dresden, Deutschland",
    ],
    cons: [
      "Glas-Glas-Module sind spürbar schwerer bei der Montage auf dem Dach",
      "Höheres Preisniveau im Vergleich zu Standard-Asienimporten",
    ],
    warranty: "30 Jahre Produkt- und Leistungsgarantie (Glas-Glas), 15 Jahre (Classic)",
    sav: "Firmensitz und Kundendienst in Dresden. Schnelle Ersatzteillieferung und deutsches Support-Team.",
    content: `<p>Die <strong>Solarwatt GmbH</strong> mit Sitz in Dresden ist einer der ältesten deutschen Solarhersteller (gegründet 1993). Das Unternehmen ist europäischer Marktführer bei Glas-Glas-Solarmodulen und gilt als Spezialist für intelligente Sektorenkopplung (Strom, Wärme und Mobilität).</p>
    
    <h2>Der Vorteil von Glas-Glas-Modulen</h2>
    <p>Klassische Solarmodule bestehen aus einer Glasscheibe auf der Vorderseite und einer Kunststofffolie auf der Rückseite. Solarwatt setzt bei seiner Premium-Linie <strong>Vision</strong> auf eine Doppelglas-Konstruktion. Die Solarzellen sind wie in einem Sandwich zwischen zwei je 2 mm dicken Glasscheiben eingebettet.</p>
    
    <p>Dies verhindert das Eindringen von Feuchtigkeit, schützt die Zellen vor mechanischen Mikrorissen (z. B. durch Hagel oder hohe Schneelasten) und macht die Module nahezu unverwüstlich. Solarwatt unterstreicht dies mit einer branchenweit einzigartigen <strong>30-jährigen Garantie</strong>.</p>

    <h2>Komplettsysteme für maximale Autarkie</h2>
    <p>Solarwatt liefert nicht nur Module, sondern aufeinander abgestimmte Gesamtsysteme. Der Stromspeicher <strong>Solarwatt Battery flex</strong> wurde in Zusammenarbeit mit BMW entwickelt und nutzt Batteriemodule aus der E-Mobilität. Gesteuert wird das System vom <strong>Solarwatt Manager</strong>, der den Eigenverbrauch optimiert.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Wer ein Solarsystem sucht, das für die nächsten 30 Jahre wartungsfrei und zuverlässig läuft, ist bei Solarwatt richtig. Die Glas-Glas-Module bieten maximale Sicherheit und Robustheit, besonders in schneereichen oder sturmanfälligen Regionen.</p>`
  },
  {
    slug: "sma-solar",
    name: "SMA Solar",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Wechselrichter",
    flagship: "Sunny Tripower Smart Energy",
    priceRange: "1.200€ – 2.800€",
    description: "SMA Solar Technology AG aus Niestetal (Hessen) ist der bekannteste deutsche Hersteller von Solar-Wechselrichtern. Die Geräte zeichnen sich durch höchste Wirkungsgrade, Zuverlässigkeit und intelligentes Energiemanagement (Sunny Home Manager) aus.",
    models: [
      { name: "Sunny Tripower Smart Energy", power: "5.0 - 10.0 kW (Hybrid)", price: "2.400 €", rendement: "98.2%", features: "Hybrid-Wechselrichter, Ersatzstromfunktion, integrierter Speicheranschluss" },
      { name: "Sunny Boy", power: "1.5 - 5.0 kW (1-phasig)", price: "1.100 €", rendement: "97.0%", features: "Für Kleinanlagen, leicht, lüfterlos" },
    ],
    pros: [
      "Herausragende Effizienz und Wirkungsgrade von über 98%",
      "Sunny Home Manager 2.0 ermöglicht intelligente Steuerung von Wärmepumpe & Wallbox",
      "Sehr robustes Gehäuse und bewährte Langlebigkeit im Außeneinsatz",
      "Hervorragender deutschsprachiger Support und App-Überwachung (Sunny Portal)",
      "Integrierte Schattenmanagement-Software (SMA ShadeFix)",
    ],
    cons: [
      "Höheres Preisniveau als chinesische Mitbewerber",
      "Lieferengpässe bei den gefragten Hybrid-Modellen in Stoßzeiten",
    ],
    warranty: "5 bis 10 Jahre Herstellergarantie, optional verlängerbar auf 20 Jahre",
    sav: "Zentraler Service und Reparaturwerk in Niestetal/Kassel. Schneller Austausch-Service.",
    content: `<p>Die <strong>SMA Solar Technology AG</strong> ist ein weltweites Urgestein der Solartechnik (gegründet 1981). Als Herzstück jeder PV-Anlage wandeln SMA Wechselrichter den Gleichstrom der Module hocheffizient in netzkonformen Wechselstrom um.</p>
    
    <h2>Intelligentes Energiemanagement</h2>
    <p>SMA zeichnet sich vor allem durch seine Software aus. Das System <strong>SMA ShadeFix</strong> optimiert den Ertrag auch bei teilweiser Verschattung einzelner Module (z. B. durch Schornsteine oder Bäume) ganz ohne teure Moduloptimierer.</p>
    
    <p>Der <strong>Sunny Home Manager 2.0</strong> lernt das Verbrauchsverhalten des Haushalts und steuert steuerbare Verbraucher wie Waschmaschinen, Wärmepumpen oder die Wallbox für das E-Auto so, dass möglichst viel kostenloser Solarstrom direkt genutzt wird.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Ein SMA Wechselrichter ist die Standardempfehlung für alle, die eine <strong>hochwertige, langlebige und erweiterbare PV-Anlage</strong> planen. Durch die Kompatibilität mit vielen verschiedenen Batteriespeichern (z. B. BYD) bietet SMA maximale Flexibilität bei der Systemkonfiguration.</p>`
  },
  {
    slug: "fronius",
    name: "Fronius",
    country: "Österreich",
    flag: "🇦🇹",
    positioning: "Premium / Wechselrichter",
    flagship: "Fronius Symo Gen24 Plus",
    priceRange: "1.300€ – 3.000€",
    description: "Das österreichische Familienunternehmen Fronius fertigt seit den 1990er Jahren Solar-Wechselrichtersysteme der Spitzenklasse. Die 'Gen24 Plus'-Serie gehört zu den am besten bewerteten Hybrid-Wechselrichtern am Markt.",
    models: [
      { name: "Symo Gen24 Plus", power: "3.0 - 10.0 kW (Hybrid)", price: "2.600 €", rendement: "98.2%", features: "Hybrid, PV Point (Notstrom ohne Batterie), aktives Kühlsystem" },
      { name: "Primo Gen24 Plus", power: "3.0 - 6.0 kW (1-phasig)", price: "1.800 €", rendement: "97.6%", features: "Einphasiger Hybrid-Wechselrichter für kleinere Dächer" },
    ],
    pros: [
      "PV Point integriert: Bietet eine Notstrom-Steckdose direkt am Gerät, auch ohne teure Batterie",
      "Aktive Belüftung sorgt für kühle Elektronik und maximale Lebensdauer des Geräts",
      "Service-Freundlichkeit: Einzelne Platinen können im Fehlerfall vom Installateur vor Ort getauscht werden",
      "100% europäische Wertschöpfung, Entwicklung und Fertigung in Österreich",
      "Sehr einfache Installation und Inbetriebnahme per App",
    ],
    cons: [
      "Lüftergeräusche durch die aktive Kühlung hörbar (Montage im Wohnbereich nicht empfohlen)",
      "Deutlich teurer als asiatische Standard-Wechselrichter",
    ],
    warranty: "2 Jahre Garantie standardmäßig, kostenlose Verlängerung auf 5 bis 7 Jahre bei Online-Registrierung",
    sav: "Hauptsitz in Wels, Österreich. Sehr gut geschultes Fachpartner-Netzwerk in ganz Deutschland.",
    content: `<p>Die <strong>Fronius International GmbH</strong> ist ein österreichisches Familienunternehmen, das sich neben Schweißtechnik und Batterieladesystemen seit 1992 intensiv mit Solarelektronik beschäftigt. Fronius Wechselrichter gelten als die robustesten 'Arbeitspferde' der PV-Branche.</p>
    
    <h2>Notstrom-Funktion out of the box: PV Point</h2>
    <p>Ein Highlight der <strong>Gen24 Plus Hybrid-Wechselrichter</strong> ist der sogenannte <strong>PV Point</strong>. Dabei handelt es sich um eine im Wechselrichter integrierte Steckdose, die im Falle eines Netzausfalls automatisch mit Notstrom versorgt wird — und zwar rein aus der Solarenergie vom Dach, selbst wenn kein Stromspeicher installiert ist.</p>
    
    <h2>Aktive Kühlung für lange Lebensdauer</h2>
    <p>Fronius setzt konsequent auf eine aktive Lüfterkühlung. Dies hält die Leistungselektronik auch unter Volllast kühl, verhindert Leistungsdrosselungen (Derating) bei hohen Temperaturen und erhöht die Lebensdauer des Wechselrichters erheblich.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Fronius Wechselrichter sind ideal für Anlagenbesitzer, die eine <strong>sichere Notstrom-Basisversorgung</strong> wünschen und Wert auf europäische Fertigungsqualität sowie hervorragende mechanische Reparierbarkeit legen.</p>`
  },
  {
    slug: "senec",
    name: "Senec",
    country: "Deutschland",
    flag: "🇩🇪",
    positioning: "Premium / Speicherlösungen",
    flagship: "SENEC.Home V4 Hybrid",
    priceRange: "6.000€ – 12.000€",
    description: "Senec ist eine Tochtergesellschaft des Energiekonzerns EnBW und einer der führenden deutschen Entwickler von Stromspeichern. Mit der 'SENEC.Cloud' bietet das Unternehmen zudem ein virtuelles Stromkonto an.",
    models: [
      { name: "SENEC.Home V4 Hybrid", power: "5.0 - 20.0 kWh (Speicher)", price: "8.500 €", rendement: "95.0%", features: "Integriertes Hybrid-System, modulares Design, LFP-Technologie" },
      { name: "SENEC.Home V3 AC", power: "5.0 - 10.0 kWh", price: "6.500 €", rendement: "94.0%", features: "AC-gekoppelter Speicher zum Nachrüsten für bestehende PV-Anlagen" },
    ],
    pros: [
      "SENEC.Cloud: Solarstrom-Guthaben ansparen und flexibel im Winter verbrauchen",
      "Hohe Sicherheit durch fortschrittliche Kobalt-freie LFP-Akkuzellen (Lithium-Eisenphosphat)",
      "Modulare Erweiterbarkeit der Kapazität auch nach Jahren der Nutzung möglich",
      "Starke finanzielle Absicherung und Vertrauenswürdigkeit durch den Mutterkonzern EnBW",
      "Formschönes, kompaktes Gehäuse, das sich gut in Kellern oder Hausanschlussräumen einfügt",
    ],
    cons: [
      "SENEC.Cloud-Tarife erfordern monatliche Grundgebühren und binden an den Anbieter",
      "Software-Sicherheitsupdates führten in der Vergangenheit temporär zu Lade-Einschränkungen",
    ],
    warranty: "10 Jahre Herstellergarantie auf 100% der Nennkapazität",
    sav: "Sitz in Leipzig. Umfassender Support durch geschulte Fachinstallateure und EnBW-Infrastruktur.",
    content: `<p>Die <strong>Senec GmbH</strong> mit Sitz in Leipzig ist seit 2018 eine 100%ige Tochtergesellschaft der <strong>EnBW AG</strong> (Energie Baden-Württemberg). Senec hat sich voll auf die Maximierung des Eigenverbrauchs durch intelligente Speicherung spezialisiert.</p>
    
    <h2>Der Batteriespeicher SENEC.Home</h2>
    <p>Die Batteriespeicher von Senec nutzen modernste <strong>Lithium-Eisenphosphat-Zellen (LFP)</strong>. Diese Technologie gilt als die sicherste und langlebigste auf dem Markt, da sie nicht entflammbar ist und eine extrem hohe Zyklenfestigkeit aufweist.</p>
    
    <h2>Das virtuelle Stromkonto: SENEC.Cloud</h2>
    <p>Senec löst das Problem des Sommer-Überschusses mit der <strong>SENEC.Cloud</strong>. Überschüssiger Solarstrom, der im Sommer nicht verbraucht oder im Heimspeicher gespeichert werden kann, wird virtuell auf ein Stromkonto eingezahlt. Im Winter, wenn die PV-Anlage zu wenig Strom liefert, rufen Sie dieses Guthaben einfach wieder ab. Das ermöglicht eine rechnerische Autarkie von bis zu 100%.</p>

    <h2>Unsere Empfehlung</h2>
    <p>Senec-Systeme eignen sich besonders für Hausbesitzer, die eine <strong>schlüsselfertige Komplettlösung mit maximaler Autarkie</strong> suchen und von einem der größten deutschen Energieversorger (EnBW) als Partner im Hintergrund profitieren möchten.</p>`
  },
  {
    slug: "jinkosolar",
    name: "JinkoSolar",
    country: "China",
    flag: "🇨🇳",
    positioning: "Preis-Leistungs-Sieger",
    flagship: "Jinko Tiger Neo N-Type",
    priceRange: "80€ – 140€ pro Modul",
    description: "JinkoSolar ist der größte Solarmodul-Hersteller der Welt. Die Tiger Neo-Serie setzt auf moderne N-Type TOPCon-Zelltechnologie und bietet extrem hohe Wirkungsgrade zu einem hervorragenden Preis-Leistungs-Verhältnis.",
    models: [
      { name: "Tiger Neo N-Type 54HL4R-B", power: "420 - 440 Wp", price: "110 €", rendement: "22.0%", features: "Full Black Optik, N-Type TOPCon, hoher Wirkungsgrad" },
      { name: "Tiger Neo N-Type 72HL4-V", power: "560 - 580 Wp", price: "150 €", rendement: "22.4%", features: "Großes Modul für Gewerbedächer oder Flachdach-Aufständerung" },
    ],
    pros: [
      "Hervorragendes Preis-Leistungs-Verhältnis (unschlagbarer Watt-pro-Euro-Preis)",
      "N-Type TOPCon Technologie mit sehr hohem Modulwirkungsgrad (bis zu 22.4%)",
      "Weltweit millionenfach bewährt und extrem hohe Verfügbarkeit bei Großhändlern",
      "Geringe Degradation (nur 0,4% jährlicher Leistungsverlust über 30 Jahre)",
      "Sehr gute mechanische Belastbarkeit des Modulrahmens",
    ],
    cons: [
      "Keine Produktion in Europa (reiner Import aus asiatischen Werken)",
      "Kürzere Produktgarantien bei sehr günstigen Modellreihen",
    ],
    warranty: "15 Jahre Produktgarantie, 30 Jahre Leistungsgarantie (N-Type)",
    sav: "Europäisches Büro in München für Garantieabwicklungen. Support primär über Großhändler.",
    content: `<p>Die <strong>JinkoSolar Holding Co., Ltd.</strong> ist der weltweit führende Hersteller in der Solarindustrie. Das an der New Yorker Börse notierte Unternehmen mit Hauptsitz in Shanghai betreibt Fabriken in Asien und beliefert globale Großprojekte sowie private Endkunden.</p>
    
    <h2>N-Type TOPCon Zelltechnologie</h2>
    <p>JinkoSolar war einer der ersten Großhersteller, der seine Produktion komplett auf die fortschrittliche <strong>N-Type TOPCon-Technologie</strong> umgestellt hat. Im Vergleich zu älteren P-Type Modulen weisen N-Type Module einen höheren Wirkungsgrad, ein besseres Temperaturverhalten und eine deutlich geringere Alterung (Degradation) auf. Nach 30 Jahren Betrieb garantieren Jinko Module noch immer 87,4% ihrer ursprünglichen Nennleistung.</p>
    
    <h2>Optik und Leistung</h2>
    <p>Die Modulserie <strong>Tiger Neo Full Black</strong> bietet eine durchgehend schwarze Oberfläche (Zellen, Rahmen und Rückseitenfolie), die sich optisch harmonisch in jedes Hausdach einfügt und dabei Leistungen von über 430 Wp erreicht.</p>

    <h2>Unsere Empfehlung</h2>
    <p>JinkoSolar ist die unumstrittene Empfehlung für alle <strong>wirtschaftlich optimierten Projekte</strong>. Wer ein maximal effizientes Solardach zum besten Marktpreis realisieren möchte und auf die Kennzeichnung 'Made in Germany' verzichten kann, findet bei JinkoSolar den absoluten Preis-Leistungs-Sieger.</p>`
  },
];
