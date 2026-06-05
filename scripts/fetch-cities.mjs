import fs from 'fs';
import path from 'path';

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function run() {
  console.log('Fetching communes from geo.api.gouv.fr...');
  try {
    const response = await fetch('https://geo.api.gouv.fr/communes?fields=nom,code,codesPostaux,population,centre,departement,region');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Filter and validate communes
    // Only metropolitan France and Corsica departments (01 to 95 + 2A + 2B) and pop >= 2000
    const filtered = data.filter(c => {
      if (!c.population || c.population < 2000) return false;
      if (!c.centre || !c.centre.coordinates) return false;
      if (!c.departement || !c.departement.code) return false;
      if (!c.region || !c.region.nom) return false;
      
      const dept = c.departement.code;
      // Keep only 01-95 and Corsica 2A/2B
      const isMetropolitan = /^(0[1-9]|[1-8]\d|9[0-5]|2[AB])$/.test(dept);
      return isMetropolitan;
    });

    console.log(`Found ${filtered.length} communes with population >= 2000 in metropolitan France.`);

    // Sort by population descending
    filtered.sort((a, b) => b.population - a.population);

    const seenSlugs = new Set();
    const formattedCities = [];

    for (const c of filtered) {
      const baseSlug = slugify(c.nom);
      let slug = baseSlug;
      let counter = 1;
      
      while (seenSlugs.has(slug)) {
        slug = `${baseSlug}-${c.departement.code.toLowerCase()}`;
        if (seenSlugs.has(slug)) {
          slug = `${baseSlug}-${c.codesPostaux[0]}`;
        }
        if (seenSlugs.has(slug)) {
          slug = `${baseSlug}-${c.codesPostaux[0]}-${counter}`;
          counter++;
        }
      }
      
      seenSlugs.add(slug);

      formattedCities.push({
        slug,
        name: c.nom.replace(/"/g, '\\"'),
        zip: c.codesPostaux[0],
        deptCode: c.departement.code,
        deptName: c.departement.nom.replace(/"/g, '\\"'),
        region: c.region.nom.replace(/"/g, '\\"'),
        pop: c.population,
        lat: c.centre.coordinates[1],
        lng: c.centre.coordinates[0]
      });
    }

    // Generate TypeScript content
    let fileContent = `export interface City {
  slug: string;
  name: string;
  zip: string;
  deptCode: string;
  deptName: string;
  region: string;
  pop: number;
  lat: number;
  lng: number;
}

/**
 * Auto-generated list of French communes with population >= 2000
 * Total: ${formattedCities.length} cities
 */
export const cities: City[] = [
`;

    for (const city of formattedCities) {
      fileContent += `  { slug: "${city.slug}", name: "${city.name}", zip: "${city.zip}", deptCode: "${city.deptCode}", deptName: "${city.deptName}", region: "${city.region}", pop: ${city.pop}, lat: ${city.lat}, lng: ${city.lng} },\n`;
    }

    fileContent += `];\n`;

    const outputPath = path.resolve('src/data/cities-fr.ts');
    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`Successfully generated ${outputPath} with ${formattedCities.length} cities!`);
  } catch (error) {
    console.error('Error fetching cities:', error);
    process.exit(1);
  }
}

run();
