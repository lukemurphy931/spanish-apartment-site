'use client';

import { useEffect, useRef, useState } from 'react';

const LOCATIONS = [{ id: 'la-cala', label: 'La Cala', active: true }];

export function LocationSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCATIONS.find((loc) => loc.active) ?? LOCATIONS[0];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="location-switcher" ref={ref}>
      <button
        type="button"
        className="location-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="location-pill__dot" aria-hidden="true" />
        {current.label}
        <span className="location-toggle__chevron" aria-hidden="true">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className="location-panel">
          <div className="location-panel__label">Location</div>
          <div className="location-panel__list">
            {LOCATIONS.map((loc) => (
              <span
                key={loc.id}
                className={`location-pill${loc.active ? ' location-pill--active' : ''}`}
              >
                <span className="location-pill__dot" aria-hidden="true" />
                {loc.label}
              </span>
            ))}
          </div>
          <p className="location-panel__hint">More apartments coming soon</p>
        </div>
      )}
    </div>
  );
}
