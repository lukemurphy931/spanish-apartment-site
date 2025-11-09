'use client';

import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function CalendarAdmin() {
  const { data: events, mutate } = useSWR('/api/event', fetcher);
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [type, setType] = useState('guest');
  const [notes, setNotes] = useState('');

  async function add() {
    const res = await fetch('/api/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, start, end, type, notes }),
    });
    if (res.ok) {
      setTitle(''); setStart(''); setEnd(''); setType('guest'); setNotes('');
      mutate();
    } else {
      alert(await res.text());
    }
  }

  async function remove(id: string) {
    const res = await fetch('/api/event', {
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
        <h1 className="text-xl font-semibold mb-4">Calendar</h1>
        <div className="grid grid-2">
          <div>
            <label className="label">Title</label>
            <input className="input mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label className="label">Start</label>
            <input className="input mb-2" type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
            <label className="label">End</label>
            <input className="input mb-2" type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
            <label className="label">Type</label>
            <input className="input mb-2" value={type} onChange={(e) => setType(e.target.value)} />
            <label className="label">Notes</label>
            <textarea className="textarea mb-2" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} />
            <button className="button mt-2" onClick={add}>Add Event</button>
          </div>
          <div>
            <div className="grid" style={{ gap: '0.75rem' }}>
              {events?.map((ev: any) => (
                <div className="card" key={ev.id}>
                  <div className="text-lg font-semibold">{ev.title}</div>
                  <div className="text-sm opacity-70">{new Date(ev.start).toLocaleString()} → {new Date(ev.end).toLocaleString()}</div>
                  <div className="text-sm">Type: {ev.type || '-'}</div>
                  {ev.notes && <div className="text-sm mt-2">{ev.notes}</div>}
                  <button className="button secondary mt-2" onClick={() => remove(ev.id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
