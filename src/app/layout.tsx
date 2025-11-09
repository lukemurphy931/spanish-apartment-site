import './globals.css';
import Link from 'next/link';
import { ensureSeed } from '@/lib/seed';

export const metadata = {
  title: 'Spanish Apartment',
  description: 'Info site for guests - check-in, guide, local tips, gallery, contact',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await ensureSeed();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-stone-900">
        <header className="border-b">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/check-in">Check-In</Link>
            <Link href="/guide">Apartment Guide</Link>
            <Link href="/local">Local Area</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <div className="ml-auto">
              <Link href="/admin" className="text-sm opacity-70 hover:opacity-100">Admin</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-70">
            © {new Date().getFullYear()} Spanish Apartment
          </div>
        </footer>
      </body>
    </html>
  );
}
