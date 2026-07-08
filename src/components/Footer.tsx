import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-cream border-opacity-20 text-cream">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 text-cream" style={{ fontFamily: 'Cinzel, serif' }}>{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium">Markys Billardcenter</p>
                  <p>Kantonsstrasse 51</p>
                  <p>CH-3902 Brig-Glis</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange flex-shrink-0" size={20} />
                <a href="tel:+41794368134" className="hover:text-orange transition-colors">
                  +41 79 436 81 34
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange flex-shrink-0" size={20} />
                <a href="mailto:markys@bluewin.ch" className="hover:text-orange transition-colors">
                  markys@bluewin.ch
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-cream" style={{ fontFamily: 'Cinzel, serif' }}>{t('footer.openingHours')}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Montag</span>
                <span>Geschlossen</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Dienstag – Donnerstag</span>
                <span>17:00 – 23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Freitag</span>
                <span>16:00 – 24:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Samstag</span>
                <span>14:00 – 24:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sonntag</span>
                <span>14:00 – 20:00</span>
              </div>
              
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-cream" style={{ fontFamily: 'Cinzel, serif' }}>{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/angebot" className="hover:text-orange transition-colors">
                  {t('nav.offer')}
                </Link>
              </li>
              <li>
                <Link href="/teamevents" className="hover:text-orange transition-colors">
                  {t('nav.teamevents')}
                </Link>
              </li>
              <li>
                <Link href="/turniere" className="hover:text-orange transition-colors">
                  {t('nav.tournaments')}
                </Link>
              </li>
              <li>
                <Link href="/preise-mitgliedschaften" className="hover:text-orange transition-colors">
                  {t('nav.prices')}
                </Link>
              </li>
              <li>
                <Link href="/kontakt-reservation" className="hover:text-orange transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61583063142741"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/markys_billardcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream border-opacity-20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream text-opacity-70">
          <div className="flex items-center gap-4">
            <img src="/logo/logo.webp" alt="Logo" className="h-20 w-auto" />
            <p>&copy; {currentYear} Markys Billardcenter. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-orange transition-colors">
              {t('footer.imprint')}
            </Link>
            <Link href="/datenschutz" className="hover:text-orange transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
