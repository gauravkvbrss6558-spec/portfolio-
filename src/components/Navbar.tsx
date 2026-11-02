import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import Logo from '@/components/Logo';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    links.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-gold-500/20 bg-ink-950/90 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl'
          : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="transition-transform duration-500 group-hover:rotate-[15deg]">
            <Logo size={40} />
          </span>
          <span className="font-display text-xl font-semibold text-cream">
            Gaurav<span className="text-gold-400"> Kumar</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold-300 after:w-full'
                    : 'text-cream/75 hover:text-gold-300 after:w-0'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/40 text-gold-300 transition-colors hover:bg-gold-500/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold-500/20 bg-ink-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-cream/85 transition-colors hover:bg-crimson-900/40 hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 px-3 text-xs text-cream/50">{profile.location}</p>
        </div>
      )}
    </header>
  );
}
