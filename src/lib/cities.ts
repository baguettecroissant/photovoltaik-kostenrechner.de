import { cities, type City } from '../data/cities-de';

export function getAllCities(): City[] {
  return cities.sort((a, b) => b.pop - a.pop);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getNearbyCities(city: City, limit = 8): City[] {
  return cities
    .filter(c => c.slug !== city.slug)
    .map(c => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.lat - city.lat, 2) + Math.pow(c.lng - city.lng, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

export function getCitiesByState(bundesland: string): City[] {
  return cities.filter(c => c.bundesland === bundesland).sort((a, b) => b.pop - a.pop);
}

export function getAllStates() {
  const stateMap = new Map<string, { name: string; count: number }>();
  for (const city of cities) {
    if (!stateMap.has(city.bundesland)) {
      stateMap.set(city.bundesland, {
        name: city.bundesland,
        count: 0,
      });
    }
    stateMap.get(city.bundesland)!.count++;
  }
  return Array.from(stateMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

/** Returns the main Netzbetreiber for a Bundesland with official URL */
export function getNetzbetreiber(bundesland: string): { name: string; url: string } {
  const map: Record<string, { name: string; url: string }> = {
    'Bayern': { name: 'Bayernwerk Netz GmbH', url: 'https://www.bayernwerk-netz.de/' },
    'Baden-Württemberg': { name: 'Netze BW GmbH', url: 'https://www.netze-bw.de/' },
    'Nordrhein-Westfalen': { name: 'Westnetz GmbH', url: 'https://www.westnetz.de/' },
    'Niedersachsen': { name: 'Avacon Netz GmbH', url: 'https://www.avacon-netz.de/' },
    'Hessen': { name: 'e-netz Südhessen AG', url: 'https://www.e-netz-suedhessen.de/' },
    'Sachsen': { name: 'MITNETZ STROM mbH', url: 'https://www.mitnetz-strom.de/' },
    'Berlin': { name: 'Stromnetz Berlin GmbH', url: 'https://www.stromnetz.berlin/' },
    'Hamburg': { name: 'Stromnetz Hamburg GmbH', url: 'https://www.stromnetz-hamburg.de/' },
    'Brandenburg': { name: 'E.DIS Netz GmbH', url: 'https://www.e-dis-netz.de/' },
    'Schleswig-Holstein': { name: 'Schleswig-Holstein Netz AG', url: 'https://www.sh-netz.com/' },
    'Rheinland-Pfalz': { name: 'Westnetz GmbH', url: 'https://www.westnetz.de/' },
    'Sachsen-Anhalt': { name: 'MITNETZ STROM mbH', url: 'https://www.mitnetz-strom.de/' },
    'Thüringen': { name: 'TEN Thüringer Energienetze', url: 'https://www.thueringer-energienetze.com/' },
    'Mecklenburg-Vorpommern': { name: 'E.DIS Netz GmbH', url: 'https://www.e-dis-netz.de/' },
    'Saarland': { name: 'energis-Netzgesellschaft mbH', url: 'https://www.energis-netzgesellschaft.de/' },
    'Bremen': { name: 'Wesernetz Bremen GmbH', url: 'https://www.wesernetz.de/' },
  };
  return map[bundesland] || { name: 'Regionaler Netzbetreiber', url: 'https://www.bundesnetzagentur.de/' };
}

/** Returns the Solar-Kataster URL for a Bundesland (if available) */
export function getSolarKatasterUrl(bundesland: string): { name: string; url: string } | null {
  const map: Record<string, { name: string; url: string }> = {
    'Nordrhein-Westfalen': { name: 'Solarkataster NRW', url: 'https://www.energieatlas.nrw.de/site/karte_solarkataster' },
    'Bayern': { name: 'Energie-Atlas Bayern', url: 'https://www.energieatlas.bayern.de/' },
    'Baden-Württemberg': { name: 'Energieatlas BW', url: 'https://www.energieatlas-bw.de/' },
    'Hessen': { name: 'Solarkataster Hessen', url: 'https://www.solarkataster.hessen.de/' },
    'Niedersachsen': { name: 'Solarpotenzialstudie Niedersachsen', url: 'https://www.klimaschutz-niedersachsen.de/' },
    'Rheinland-Pfalz': { name: 'Solarkataster Rheinland-Pfalz', url: 'https://solarkataster.rlp.de/' },
    'Thüringen': { name: 'Solarrechner Thüringen', url: 'https://www.thega.de/' },
    'Sachsen': { name: 'Energieportal Sachsen', url: 'https://www.energie.sachsen.de/' },
    'Berlin': { name: 'Solarwende Berlin', url: 'https://www.solarwende-berlin.de/' },
    'Hamburg': { name: 'Solaratlas Hamburg', url: 'https://www.hamburg.de/solaratlas/' },
    'Brandenburg': { name: 'Energieportal Brandenburg', url: 'https://energieportal-brandenburg.de/' },
    'Schleswig-Holstein': { name: 'Solaratlas SH', url: 'https://www.schleswig-holstein.de/DE/landesregierung/themen/energie/solar' },
    'Saarland': { name: 'Solarkataster Saarland', url: 'https://geoportal.saarland.de/mapbender/php/mod_iso19444ts_saarland.php' },
  };
  return map[bundesland] || null;
}

/** Returns the solar ranking position and percentile for a city */
export function getSolarRanking(city: City): { rank: number; total: number; percentile: number; label: string } {
  const sorted = [...cities].sort((a, b) => b.sonnenstunden - a.sonnenstunden);
  const rank = sorted.findIndex(c => c.slug === city.slug) + 1;
  const total = sorted.length;
  const percentile = Math.round((1 - rank / total) * 100);
  let label = 'durchschnittlich';
  if (percentile >= 80) label = 'hervorragend';
  else if (percentile >= 60) label = 'überdurchschnittlich';
  else if (percentile >= 40) label = 'gut';
  else if (percentile < 20) label = 'unterdurchschnittlich';
  return { rank, total, percentile, label };
}

/** Estimates number of PV installations in a city based on population */
export function getEstimatedPvInstallations(pop: number): number {
  // ~3.7M residential PV systems in Germany (2026), ~84M pop → ~4.4% of pop
  // Approximate: 1 installation per ~23 inhabitants (household-based)
  return Math.round(pop / 23);
}

/** Returns the average national sonnenstunden for comparison */
export function getNationalAvgSonnenstunden(): number {
  const total = cities.reduce((sum, c) => sum + c.sonnenstunden, 0);
  return Math.round(total / cities.length);
}

export { type City };

