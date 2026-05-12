import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useRouter } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isScrolled, isMobileMenuOpen]);

  const navItems = [
    { path: '/angebot', label: t('nav.offer') },
    { path: '/teamevents', label: t('nav.teamevents') },
    { path: '/turniere', label: t('nav.tournaments') },
    { path: '/preise-mitgliedschaften', label: t('nav.prices') },
    { path: '/kontakt-reservation', label: t('nav.contact') },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-ink shadow-lg' : ''
        }`}
        style={!isScrolled && !isMobileMenuOpen ? {
          background: 'linear-gradient(to bottom, #011423 0%, rgba(1, 20, 35, 0) 100%)'
        } : undefined}
      >
        <nav className="container-custom" role="navigation" aria-label="Hauptnavigation">
          <div className={`flex items-center justify-between lg:grid lg:grid-cols-3 lg:gap-4 transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo/logo.webp"
                alt="Markys Billardcenter Brig Logo"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-24' : 'h-28'
                }`}
              />
            </Link>

            <div className="hidden lg:flex items-center justify-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active text-orange' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            <div className="hidden lg:flex justify-end">
              <Link href="/kontakt-reservation#form" className="btn-primary whitespace-nowrap">
                {t('hero.reserveNow')}
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-cream hover:text-orange transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Menü öffnen"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={2} />
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-ink flex flex-col"
            style={{ top: `${headerHeight}px` }}
          >
            <div className="flex-1 flex flex-col justify-center container-custom py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 text-center text-lg font-medium transition-colors min-h-[44px] ${
                    isActive(item.path) ? 'text-orange' : 'text-cream hover:text-orange'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 flex justify-center">
                <LanguageSwitcher mobile={true} />
              </div>
            </div>
            <div className="container-custom pb-8">
              <Link
                href="/kontakt-reservation#form"
                className="btn-primary block text-center w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('hero.reserveNow')}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}