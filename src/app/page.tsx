import { PageRenderer } from './(site)/PageRenderer';

export default async function HomePage() {
  const directionsUrl = process.env.GOOGLE_MAPS_EMBED_URL || '';
  return (
    <PageRenderer
      slug="home"
      actions={
        directionsUrl ? (
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="button">
            📍 Get Directions
          </a>
        ) : undefined
      }
    />
  );
}
