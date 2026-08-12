import { PageRenderer } from './(site)/PageRenderer';

export default async function HomePage() {
  const directionsUrl = process.env.GOOGLE_MAPS_EMBED_URL || '';
  return (
    <PageRenderer
      slug="home"
      notice={
        <>
          <span aria-hidden="true">🔒</span> Private family apartment — not available for public rental. Access is by invitation only.
        </>
      }
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
