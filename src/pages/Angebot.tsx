import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Coffee, Beer, UtensilsCrossed, Wine } from 'lucide-react';

export default function Angebot() {
  const { t } = useLanguage();

  const billardFeatures = [
    t('offer.billardFeature1'),
    t('offer.billardFeature2'),
    t('offer.billardFeature3'),
    t('offer.billardFeature4'),
    t('offer.billardFeature5'),
    t('offer.billardFeature6'),
  ];

  const dartFeatures = [
    t('offer.dartsFeature1'),
    t('offer.dartsFeature2'),
    t('offer.dartsFeature3'),
    t('offer.dartsFeature4'),
    t('offer.dartsFeature5'),
  ];

  const loungeFeatures = [
    t('offer.loungeFeature1'),
    t('offer.loungeFeature2'),
    t('offer.loungeFeature3'),
    t('offer.loungeFeature4'),
  ];

  const gastroHighlights = [
    {
      icon: Beer,
      title: 'Craft Beer & Bier',
      description: 'Regionale und internationale Biersorten',
      image: '/image.png',
    },
    {
      icon: Wine,
      title: 'Drinks & Cocktails',
      description: 'Premium-Spirituosen und klassische Cocktails',
      image: '/image.png',
    },
    {
      icon: Coffee,
      title: 'Kaffeespezialitäten',
      description: 'Espresso, Cappuccino und mehr',
      image: '/image.png',
    },
    {
      icon: UtensilsCrossed,
      title: 'Snacks & Bistro',
      description: 'Frische Snacks und kleine Gerichte',
      image: '/image.png',
    },
  ];

  return (
    <main id="main-content">
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 20, 35, 0.75), rgba(1, 20, 35, 0.75)), url('/header_images/billard.webp')`,
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-cream mb-6">{t('offer.title')}</h1>
            <p className="text-xl text-cream text-opacity-90 mb-8">
              {t('offer.subtitle')}
            </p>
            <Link href="/kontakt-reservation" className="btn-primary">
              {t('offer.contactReservation')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center px-4 mb-16">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-cream leading-relaxed md:leading-relaxed">
              {t('offer.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-cream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h2 className="text-ink mb-6">{t('offer.billardTitle')}</h2>
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src="/header_images/billard.webp"
                  alt={t('offer.billardAlt')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="space-y-3 text-ink flex-grow">
                {billardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt-reservation#billard"
                className="block mt-6 px-6 py-3 bg-orange text-ink font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 text-center"
              >
                {t('offer.reserveNow')}
              </Link>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h2 className="text-ink mb-6">{t('offer.dartsTitle')}</h2>
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src="/header_images/dart.webp"
                  alt={t('offer.dartsAlt')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="space-y-3 text-ink flex-grow">
                {dartFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt-reservation#darts"
                className="block mt-6 px-6 py-3 bg-orange text-ink font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 text-center"
              >
                {t('offer.reserveNow')}
              </Link>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h2 className="text-ink mb-6">{t('offer.loungeTitle')}</h2>
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src="/header_images/bar.webp"
                  alt={t('offer.loungeAlt')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <ul className="space-y-3 text-ink flex-grow">
                {loungeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#gastro"
                className="block mt-6 px-6 py-3 bg-orange text-ink font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gastro')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('offer.toGastro')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="gastro" className="py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-ink mb-6">{t('offer.gastroTitle')}</h2>
            <p className="text-xl text-ink text-opacity-80 mb-8">
              {t('offer.gastroText')}
            </p>
            <a
              href="/pdf/menu.pdf"
              className="inline-block px-10 py-5 bg-orange text-ink font-bold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-xl text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('offer.menuPdf')}
            </a>
            <div className="mt-12 max-w-2xl mx-auto">
              <img
                src="/12.jpeg"
                alt="Pinsa Menu Board"
                className="w-full h-auto rounded-2xl shadow-xl md:max-h-[600px] md:w-auto md:mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom text-center">
          <h2 className="text-cream mb-6">{t('offer.readyTitle')}</h2>
          <p className="text-xl text-cream text-opacity-80 mb-8 max-w-2xl mx-auto">
            {t('offer.readyText')}
          </p>
          <Link href="/kontakt-reservation#form" className="btn-primary">
            {t('offer.reserveNow')}
          </Link>
        </div>
      </section>
    </main>
  );
}
