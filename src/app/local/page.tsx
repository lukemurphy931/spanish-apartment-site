import { PageRenderer } from '../(site)/PageRenderer';

// Coordinates for Miguel Ángel Jiménez 5, Golf Gardens III, Riviera del Sol, Mijas.
const LAT = 36.4998056;
const LNG = -4.7046537;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

export default async function LocalPage() {
  return (
    <div className="grid" style={{ gap: '1.25rem' }}>
      <PageRenderer slug="local" />
      <div className="card card--flat">
        <h2>🗺️ Map</h2>
        <div className="map-frame">
          <iframe
            title="Map showing Murphy's Apartments"
            src={MAP_EMBED_URL}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="map-fallback">
          <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer">
            Open in Google Maps ↗
          </a>
        </p>
      </div>
    </div>
  );
}
