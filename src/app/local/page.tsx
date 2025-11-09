import { prisma } from '@/lib/db';
import { PageRenderer } from '../(site)/PageRenderer';

export default async function LocalPage() {
  const page = await prisma.page.findUnique({ where: { slug: 'local' } });
  const mapUrl = process.env.GOOGLE_MAPS_EMBED_URL || '';
  return (
    <div className="grid" style={{ gap: '1.25rem' }}>
      <PageRenderer slug="local" />
      {mapUrl ? (
        <div className="card">
          <h2 className="text-lg font-semibold mb-2">Map</h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={mapUrl}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
