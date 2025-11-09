import { prisma } from '@/lib/db';
import ReactMarkdown from 'react-markdown';

export async function PageRenderer({ slug }: { slug: string }) {
  const page = await prisma.page.findUnique({ where: { slug }, include: { images: { orderBy: { sort: 'asc' } } } });
  if (!page) {
    return <div className="card"><h1>Not found</h1><p>This page hasn't been created yet.</p></div>;
  }
  return (
    <div className="grid" style={{ gap: '1.25rem' }}>
      <div className="card">
        <h1 className="text-xl font-semibold mb-2">{page.title}</h1>
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
      {page.images.length > 0 && (
        <div className="grid grid-2">
          {page.images.map((img) => (
            <figure key={img.id} className="card">
              <img src={img.url} alt={img.caption ?? ''} />
              {img.caption && <figcaption className="text-sm opacity-70 mt-2">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
