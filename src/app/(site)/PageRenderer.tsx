import { prisma } from '@/lib/db';
import ReactMarkdown from 'react-markdown';
import { ImageToggle } from '@/components/ImageToggle';

export async function PageRenderer({
  slug,
  actions,
  collapsibleImages = false,
}: {
  slug: string;
  actions?: React.ReactNode;
  collapsibleImages?: boolean;
}) {
  const page = await prisma.page.findUnique({ where: { slug }, include: { images: { orderBy: { sort: 'asc' } } } });
  if (!page) {
    return <div className="card card--flat"><h1>Not found</h1><p>This page hasn't been created yet.</p></div>;
  }
  return (
    <div className="grid" style={{ gap: '1.25rem' }}>
      <div className="card card--flat">
        <h1>{page.title}</h1>
        <ReactMarkdown
          components={
            collapsibleImages
              ? { img: ({ src, alt }) => <ImageToggle src={typeof src === 'string' ? src : undefined} alt={alt} /> }
              : undefined
          }
        >
          {page.content}
        </ReactMarkdown>
        {actions && <div className="card__actions">{actions}</div>}
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
