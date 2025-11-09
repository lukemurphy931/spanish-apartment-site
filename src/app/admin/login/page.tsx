'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      const params = new URLSearchParams(window.location.search);
      const next = params.get('next') || '/admin';
      window.location.href = next;
    } else {
      const msg = await res.text();
      setError(msg || 'Login failed');
    }
  }

  return (
    <div className="card" style={{ maxWidth: 480, margin: '2rem auto' }}>
      <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
      <form onSubmit={onSubmit}>
        <label className="label" htmlFor="password">Password</label>
        <input id="password" type="password" className="input mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-sm" style={{ color: 'crimson' }}>{error}</p>}
        <button className="button mt-2" type="submit">Login</button>
      </form>
    </div>
  );
}
