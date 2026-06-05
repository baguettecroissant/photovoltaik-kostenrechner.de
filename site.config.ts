/**
 * ⭐ SITE CONFIGURATION — photovoltaik-kostenrechner.de
 * EMD single-niche : Photovoltaik Kostenrechner (Photovoltaik)
 */
export const siteConfig = {
  // === IDENTITÄT ===
  domain: "photovoltaik-kostenrechner.de",
  name: "Photovoltaik Kostenrechner",
  tagline: "Photovoltaik Kostenrechner — Kosten & Ertrag kostenlos berechnen 2026",
  description: "Was kostet eine Solaranlage 2026? Berechnen Sie Kosten, Ertrag & Amortisation in 30 Sekunden. Kostenlose Angebote vergleichen. Kostenlos und unverbindlich.",
  editorialTone: "Online-Kalkulator",

  // === NICHE ===
  niche: {
    slug: "photovoltaik-rechner",
    name: "Solaranlage",
    nameShort: "Photovoltaik",
    emoji: "🔢",
    icon: "calculator",
    seoTitleTemplate: "Photovoltaik-Kostenrechner für {city} — Kosten & Ertrag berechnen {zip}",
    metaDescTemplate: "Solaranlage für {city} berechnen: Was kostet PV auf Ihrem Dach? Kosten, Ertrag & Amortisation in 30 Sekunden. Kostenlos und unverbindlich.",
    heroTitle: "Photovoltaik Kostenrechner — Kosten & Ertrag kostenlos berechnen 2026",
    heroSubtitle: "Finden Sie in 30 Sekunden heraus, was eine PV-Anlage auf Ihrem Dach kostet. Erhalten Sie eine detaillierte Berechnung zu Ertrag, Eigenverbrauch und Amortisation.",
  },

  // === MONETARISIERUNG (TAP TAP HOME) ===
  taptaphome: {
    // Mode can be: 'redirect' (tracking link), 'iframe', or 'api'
    mode: 'redirect' as 'redirect' | 'iframe' | 'api',
    trackingLinkPV: "https://www.taptaphome.com/?utm_source=affiliate&utm_campaign=photovoltaik_kostenrechner_de", // PV-Tracking-Link
    partnerName: "DAA GmbH (BOSCH-Gruppe)",
    contactPerson: "Tuuli Himme (tuuli.himme@taptaphome.com)",
    provisionPerLead: "35% des Lead-Umsatzes (ca. 80€ im Schnitt)",
    
    // Top-PV-Regionen (AVR >= 3.0)
    highAvrPrefixes: [
      "04", "06", "07", "08", "12", "13", "14", "15", "21", "22", "24", "25", "26", "27", "28",
      "30", "31", "32", "33", "38", "39", "40", "41", "42", "45", "46", "47", "48", "50", "51",
      "52", "53", "55", "56", "58", "61", "63", "64", "65", "67", "68", "69", "70", "71", "73",
      "74", "75", "76", "82", "83", "84", "86", "90", "91", "93", "94", "99"
    ],
  },

  // === PREISE FÜR PHOTOVOLTAIK (2026) ===
  pricing: [
    { service: "Klein (3–5 kWp) für kleines Einfamilienhaus", price: "5.500€ – 9.000€", details: "ca. 12-20 Solarmodule, Wechselrichter inklusive" },
    { service: "Mittel (6–10 kWp) für Standard-Einfamilienhaus", price: "9.000€ – 16.000€", details: "ca. 24-40 Solarmodule, optimaler Eigenverbrauch" },
    { service: "Groß (10–15 kWp) für großes EFH oder Zweifamilienhaus", price: "14.000€ – 24.000€", details: "Für hohen Strombedarf oder Wärmepumpe/E-Auto" },
    { service: "Komplettpaket mit Speicher (10 kWp + 10 kWh)", price: "18.000€ – 30.000€", details: "Maximale Autarkie durch Stromspeicher-System" },
  ],
  pricingNote: "Durchschnittliche Brutto-Preise für 2026 inkl. Montage und Netzanschluss. Förderung noch nicht abgezogen.",

  // === SPEICHER-KOSTEN SEPARAT ===
  storagePricing: [
    { size: "Kompakt (5 kWh Speicher)", price: "3.500€ – 5.500€", details: "Für kleine PV-Anlagen (bis 6 kWp)" },
    { size: "Standard (10 kWh Speicher)", price: "6.000€ – 9.000€", details: "Der Standard für 8-12 kWp Anlagen" },
    { size: "Groß (15 kWh Speicher)", price: "8.500€ – 12.000€", details: "Für hohe Lasten (Wärmepumpe & Wallbox)" },
  ],

  // === REGIONALE VARIATIONEN (Multiplikator & Sonnenstunden) ===
  regionalMultipliers: {
    south: { name: "Bayern, Baden-Württemberg", factor: 1.05, sunHours: "1.700 – 1.900h" },
    center: { name: "Mitteldeutschland", factor: 1.00, sunHours: "1.500 – 1.700h" },
    north: { name: "Norddeutschland", factor: 0.95, sunHours: "1.400 – 1.600h" },
    east: { name: "Ostdeutschland", factor: 0.90, sunHours: "1.500 – 1.700h" },
  },

  // === FÖRDERUNG 2026 (KfW-Programm 458 & BAFA) ===
  subsidies: [
    { name: "KfW-Grundförderung", amount: "30%", condition: "Basis-Zuschuss für alle berechtigten Antragsteller" },
    { name: "Klimageschwindigkeits-Bonus", amount: "+20%", condition: "Bei gleichzeitigem Austausch einer alten fossilen Heizung" },
    { name: "Einkommens-Bonus", amount: "+30%", condition: "Für Haushalte mit einem zvE < 40.000 € pro Jahr" },
    { name: "Effizienz-Bonus", amount: "+5%", condition: "Für den Einsatz natürlicher Kältemittel oder Erdwärme" },
    { name: "Maximaler Fördersatz", amount: "70%", condition: "Gedeckelt auf max. 30.000 € förderfähige Kosten" },
    { name: "Maximaler Zuschuss", amount: "21.000 €", condition: "Reine Zuschusshöhe, über KfW-Portal zu beantragen" },
  ],

  // === EINSPEISEVERGÜTUNG 2026 ===
  feedInTariff: [
    { type: "Überschusseinspeisung ≤ 10 kWp", rate: "ca. 8,0 ct/kWh", description: "Eigenverbrauch priorisiert, Rest wird eingespeist" },
    { type: "Volleinspeisung ≤ 10 kWp", rate: "ca. 12,9 ct/kWh", description: "Der gesamte erzeugte Strom wird ins Netz gespeist" },
  ],

  // === PROCESS STEPS ===
  process: [
    { title: "Daten eingeben", desc: "Geben Sie Ihre Dachfläche, Ausrichtung und Ihren Stromverbrauch ein.", icon: "📋", duration: "1 Min" },
    { title: "Ergebnis sehen", desc: "Unser Rechner zeigt Ihnen sofort die Kosten, den Ertrag und die Amortisation.", icon: "🧮", duration: "Sofort" },
    { title: "Angebote vergleichen", desc: "Erhalten Sie bis zu 3 Angebote von geprüften Betrieben aus Ihrer Region.", icon: "📨", duration: "24-48 Std" },
    { title: "Sparen & Installieren", desc: "Das beste Angebot auswählen, von 0% MwSt. profitieren und Kosten senken.", icon: "☀️", duration: "Flexibel" },
  ],

  // === FAQ ===
  faq: [
    {
      q: "Was kostet eine Solaranlage für ein Einfamilienhaus 2026?",
      a: "Eine schlüsselfertige Solaranlage mit 10 kWp Leistung kostet 2026 zwischen 9.000 und 16.000 Euro ohne Speicher. Inklusive einem 10 kWh Stromspeicher liegt der Preisbereich bei etwa 18.000 bis 30.000 Euro. Durch die aktuelle Nullsteuer (0% Umsatzsteuer auf PV-Anlagen in Deutschland) sparen Käufer zusätzlich 19%."
    },
    {
      q: "Lohnt sich eine Solaranlage mit Speicher in 2026?",
      a: "Ja, in den meisten Fällen lohnt sich ein Speicher. Ohne Speicher liegt die Eigenverbrauchsquote bei ca. 30%. Mit einem passenden Stromspeicher kann dieser Wert auf über 70% gesteigert werden. Da selbst erzeugter Solarstrom deutlich günstiger ist als Netzstrom (ca. 8-10 ct Herstellkosten vs. über 35 ct Bezugskosten), amortisiert sich der Speicher meist nach 8 bis 11 Jahren."
    },
    {
      q: "Welche Solarförderung gibt es 2026 in Deutschland?",
      a: "Die wichtigste Förderung ist der zinsgünstige KfW-Kredit (Programm 270) sowie regionale Zuschüsse der Bundesländer und Kommunen. Für die Kombination mit einer Wärmepumpe gibt es im KfW-Programm 458 Zuschüsse von bis zu 70% (maximal 21.000 €). Zudem gilt weiterhin der Wegfall der 19% Mehrwertsteuer auf PV-Komponenten."
    },
    {
      q: "Wie funktioniert die Einspeisevergütung 2026?",
      a: "Solarstrom, den Sie nicht selbst verbrauchen, fließt automatisch ins öffentliche Stromnetz. Dafür erhalten Sie eine gesetzlich garantierte Einspeisevergütung über einen Zeitraum von 20 Jahren plus das Inbetriebnahmejahr. Bei Überschusseinspeisung liegt diese aktuell bei rund 8,0 Cent pro Kilowattstunde."
    },
    {
      q: "Wie lange ist die Amortisationszeit einer PV-Anlage?",
      a: "Dank gesunkener Modulpreise amortisiert sich eine typische Photovoltaikanlage auf einem Einfamilienhaus ohne Speicher nach 7 bis 9 Jahren. Mit Speicher liegt die Amortisationszeit bei ca. 9 bis 12 Jahren. Bei einer Lebensdauer der Module von über 25 bis 30 Jahren liefert die Anlage danach über 15 Jahre lang kostenlosen Strom."
    },
    {
      q: "Welche Voraussetzungen muss mein Dach erfüllen?",
      a: "Das Dach sollte eine nutzbare Fläche von mindestens 20 m² aufweisen und statisch für das Gewicht der Module (ca. 20 kg/m²) geeignet sein. Die ideale Ausrichtung ist Süden, aber auch Ost-West-Dächer sind durch die Verteilung der Stromproduktion über den Tag hochgradig rentabel. Asbest- oder Schieferdächer sind aus Sicherheitsgründen oft von der Belegung ausgeschlossen."
    }
  ],

  // === TRUST BADGES ===
  trustBadges: ["100% kostenlos", "Sofort-Ergebnis", "Unverbindlich", "Geprüfte Fachbetriebe"],

  // === CONTENT BLOCKS ===
  introText: `Berechnen Sie in wenigen Sekunden, ob sich eine Photovoltaikanlage auf Ihrem Dach lohnt. Unser neutraler Kostenrechner ermittelt für Sie die Anschaffungskosten, den voraussichtlichen Jahresertrag und die Amortisationszeit – individuell abgestimmt auf Ihre Dachfläche, Ausrichtung und Ihren Stromverbrauch.
  
  Mit der Kombination aus moderner Solartechnik und einem passenden Stromspeicher decken Sie problemlos bis zu 80% Ihres täglichen Strombedarfs ab. Dank des historischen Preissturzes bei Solarmodulen und des dauerhaften 0%-Mehrwertsteuersatzes sind die Investitionskosten so niedrig wie nie zuvor. Ein anschließender Angebotsvergleich sichert Ihnen die besten regionalen Konditionen.`,

  whyChooseUs: [
    "Kostenloser und unverbindlicher Vergleich von bis zu 3 Angeboten",
    "Sofortige Berechnung von Kosten, Ertrag & Amortisation",
    "Geprüfte und zertifizierte Solar-Fachbetriebe aus Ihrer Region",
    "Maximale Preistransparenz ohne versteckte Gebühren",
    "Unterstützung bei der Beantragung aller KfW- und Regionalförderungen",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
