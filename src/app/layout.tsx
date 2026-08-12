import './globals.css';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import { ensureSeed } from '@/lib/seed';
import { Logo } from '@/components/Logo';
import { LocationSwitcher } from '@/components/LocationSwitcher';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: "Murphy's Apartments",
  description: 'Everything you need for your stay - check-in, guide, local tips, gallery, contact',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await ensureSeed();

  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col text-stone-900" style={{ position: 'relative' }}>
        <div className="page-wash" aria-hidden="true" />
        <header className="site-header">
          <nav className="site-header__inner">
            <Link href="/" className="site-logo site-header__left">
              <Logo />
            </Link>
            <div className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/check-in">Check-In</Link>
              <Link href="/guide">Apartment Guide</Link>
              <Link href="/local">Local Area</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="site-header__right">
              <LocationSwitcher />
            </div>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="site-footer__inner">
            <span>© {new Date().getFullYear()} Murphy&rsquo;s Apartments</span>
            <img
              className="site-footer__crest"
              src="/logo/murphys-apartments-shield.png"
              alt="Murphy family crest"
              width={44}
              height={54}
            />
            <Link href="/admin">Admin</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
