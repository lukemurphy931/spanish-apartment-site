import Link from 'next/link';

export default function AdminHome() {
  return (
    <div className="grid" style={{ gap: '1rem' }}>
      <div className="card">
        <h1 className="text-xl font-semibold mb-2">Admin Dashboard</h1>
        <p>Welcome. Choose an area to manage:</p>
        <ul className="mt-4">
          <li><Link href="/admin/editor">Edit Pages</Link></li>
          <li><Link href="/admin/gallery">Manage Gallery</Link></li>
          <li><Link href="/admin/calendar">Calendar</Link></li>
          <li><a href="/api/logout">Log out</a></li>
        </ul>
      </div>
    </div>
  );
}
