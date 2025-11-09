'use client';

import useSWR from 'swr';
import { useEffect, useMemo, useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function EditorPage() {
  const { data: pages, mutate } = useSWR('/api/page', fetcher);
  const [selected, setSelected] = useState<string>('home');
  const page = useMemo(() => pages?.find((p: any) => p.slug === selected), [pages, selected]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (page) {
      setTitle(page.title);
      setContent(page.content);
    }
  }, [page]);

  async function save() {
    const res = await fetch('/api/page', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: selected, title, content }),
    });
    if (res.ok) mutate();
    else alert(await res.text());
  }

  if (!pages) return <div>Loading…</div>;

  return (
    <div className="grid" style={{ gap: '1rem' }}>
      <div className="card">
        <h1 className="text-xl font-semibold mb-4">Edit Pages</h1>
        <div className="grid grid-2">
          <div>
            <label className="label">Select page</label>
            <select className="select mb-4" value={selected} onChange={(e) => setSelected(e.target.value)}>
              {pages.map((p: any) => (
                <option key={p.slug} value={p.slug}>{p.title} ({p.slug})</option>
              ))}
            </select>
            <label className="label">Title</label>
            <input className="input mb-4" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="label">Content (Markdown)</label>
            <textarea className="textarea" rows={18} value={content} onChange={(e) => setContent(e.target.value)} />
            <p className="text-sm opacity-70 mt-2">Tip: Use Markdown headings, lists, and links.</p>
          </div>
        </div>
        <button className="button mt-4" onClick={save}>Save changes</button>
      </div>
    </div>
  );
}
