'use client';

import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function GalleryAdmin() {
  const { data: images, mutate } = useSWR('/api/image', fetcher);
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [pageSlug, setPageSlug] = useState('gallery');
  const [sort, setSort] = useState(0);

  async function add() {
    const res = await fetch('/api/image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, caption, pageSlug, sort: Number(sort) }),
    });
    if (res.ok) {
      setUrl(''); setCaption(''); setSort(0);
      mutate();
    } else {
      alert(await res.text());
    }
  }

  async function remove(id: string) {
    const res = await fetch('/api/image', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) mutate();
    else alert(await res.text());
  }

  return (
    <div className="grid" style={{ gap: '1rem' }}>
      <div className="card">
        <h1 className="text-xl font-semibold mb-4">Manage Images</h1>
        <div className="grid grid-2">
          <div>
            <label className="label">Image URL</label>
            <input className="input mb-2" value={url} onChange={(e) => setUrl(e.target.value)} />
            <label className="label">Caption (optional)</label>
            <input className="input mb-2" value={caption} onChange={(e) => setCaption(e.target.value)} />
            <label className="label">Page Slug (gallery, home, local, …)</label>
            <input className="input mb-2" value={pageSlug} onChange={(e) => setPageSlug(e.target.value)} />
            <label className="label">Sort (0..n)</label>
            <input className="input mb-2" type="number" value={sort} onChange={(e) => setSort(Number(e.target.value))} />
            <button className="button mt-2" onClick={add}>Add Image</button>
          </div>
          <div>
            <p className="text-sm opacity-70 mb-2">Tip: Host images on Cloudinary/Imgur/Google Photos (public link).</p>
            <div className="grid" style={{ gap: '0.75rem' }}>
              {images?.map((img: any) => (
                <div className="card" key={img.id}>
                  <div className="flex items-center" style={{ gap: '0.75rem' }}>
                    <img src={img.url} alt={img.caption || ''} style={{ width: 120 }} />
                    <div>
                      <div className="text-sm"><strong>{img.pageSlug}</strong> · sort {img.sort}</div>
                      <div className="text-sm">{img.caption}</div>
                      <button className="button secondary mt-2" onClick={() => remove(img.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
