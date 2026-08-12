'use client';

import { useState } from 'react';

export function ImageToggle({ src, alt }: { src?: string; alt?: string }) {
  const [open, setOpen] = useState(false);
  const label = alt?.trim() || 'image';

  return (
    <span className="image-toggle">
      <button type="button" className="image-toggle__btn" onClick={() => setOpen((v) => !v)}>
        {open ? '▴ Hide' : '▾ View'} {label}
      </button>
      {open && <img src={src} alt={alt ?? ''} />}
    </span>
  );
}
