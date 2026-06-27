import HeroSlider from '../components/HeroSlider';
import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Clock, Star } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const offerings = [
    {
      image: '/header_images/billard.webp',
      titleKey: 'home.billardTitle',
      subtitleKey: 'home.billardSubtitle',
      descriptionKey: 'home.billardDesc',
      link: '/angebot',
    },
    {
      image: '/header_images/dart.webp',
      titleKey: 'home.dartsTitle',
      subtitleKey: 'home.dartsSubtitle',
      descriptionKey: 'home.dartsDesc',
      link: '/angebot',
    },
    {
      image: '/header_images/bar.webp',
      titleKey: 'home.barTitle',
      subtitleKey: 'home.barSubtitle',
      descriptionKey: 'home.barDesc',
      link: '/gastro',
    },
    {
      image: '/header_images/teamevent.webp',
      titleKey: 'home.teamTitle',
      subtitleKey: 'home.teamSubtitle',
      descriptionKey: 'home.teamDesc',
      link: '/teamevents',
    },
  ];

  const upcomingEvents = [
    {
      date: '27',
      month: 'Juni',
      titleKey: 'home.tournamentTitle',
      descriptionKey: 'home.tournamentDesc',
      link: '/turniere',
    },
  ];

  return (
    <main id="main-content">
      <h1 className="sr-only">
        Markys Billardcenter in Brig - Bestes Billard, Darts Lounge, Bar & Bistro Erlebnis in deiner Nähe
      </h1>
      <HeroSlider />

      <section className="py-16 md:py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-ink leading-relaxed md:leading-relaxed">
              {t('home.welcomeTitle')} <span className="font-bold text-orange">{t('home.welcomeBrand')}</span> –<br className="hidden sm:inline" /> {t('home.welcomeSubtitle')}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-ink text-opacity-80 mt-6 leading-relaxed">
              {t('home.welcomeText')}
            </p>
          </div>
        </div>
      </section>

      {/* Rating bar temporarily hidden until real Google reviews are available
      <section className="py-6 bg-ink border-b border-steel border-opacity-20">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 text-cream">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange fill-orange" />
              ))}
            </div>
            <span className="text-sm md:text-base">
              <span className="font-bold">4.9/5</span> basierend auf <span className="font-semibold">127 Bewertungen</span>
            </span>
          </div>
        </div>
      </section>
      */}

      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-ink mb-4">{t('home.offerTitle')}</h2>
            <p className="text-xl text-ink text-opacity-80 max-w-2xl mx-auto">
              {t('home.offerSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <Link
                key={index}
                href={offering.link}
                className="group text-center bg-ink text-cream rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={offering.image}
                    alt={t(offering.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-2 text-orange" style={{ fontFamily: 'Cinzel, serif' }}>{t(offering.titleKey)}</h3>
                  <p className="text-sm font-semibold text-cream text-opacity-70 mb-3">{t(offering.subtitleKey)}</p>
                  <p className="text-cream text-opacity-90">{t(offering.descriptionKey)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream" data-component="events">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-ink mb-4">{t('home.nextTournament')}</h2>
            <p className="text-lg text-ink text-opacity-70">
              {t('home.tournamentSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-ink rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-6 flex gap-6">
                  <div className="flex-shrink-0 text-center bg-orange rounded-xl p-4 w-20">
                    <div className="text-3xl font-bold text-ink">{event.date}</div>
                    <div className="text-sm font-semibold text-ink uppercase">{event.month}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-orange mb-2">{t(event.titleKey)}</h3>
                    <p className="text-cream text-opacity-90 mb-4">{t(event.descriptionKey)}</p>
                    <Link href={event.link} className="text-orange font-semibold hover:underline">
                      {t('home.detailsRegistration')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom">
          <h2 className="text-cream text-center mb-12" id="oeffnung">{t('home.openingAndLocation')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-cream rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif text-ink mb-6 flex items-center gap-3">
                <Clock className="text-orange" />
                {t('home.openingHoursTitle')}
              </h3>
              <div className="space-y-4 text-ink">
                <div className="flex justify-between py-2 border-b border-ink border-opacity-20">
                  <span className="font-semibold">Montag – Donnerstag</span>
                  <span>17:00 – 23:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-ink border-opacity-20">
                  <span className="font-semibold">Freitag</span>
                  <span>16:00 – 24:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-ink border-opacity-20">
                  <span className="font-semibold">Samstag</span>
                  <span>14:00 – 24:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Sonntag</span>
                  <span>14:00 – 22:00</span>
                </div>
                <p className="text-sm text-ink text-opacity-70 mt-4 pt-4 border-t border-ink border-opacity-20">
                  {t('home.winterNote')}
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif text-ink mb-6 flex items-center gap-3">
                <MapPin className="text-orange" />
                {t('home.locationTitle')}
              </h3>
              <div className="mb-4 text-ink">
                <p className="font-semibold text-lg mb-2">Markys Billardcenter</p>
                <p>Kantonsstrasse 51</p>
                <p className="mb-4">CH-3902 Brig-Glis</p>
                <a
                  href="https://maps.app.goo.gl/kAYq2YxmdJY2Z6Xo9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-orange text-ink font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  {t('home.openInMaps')}
                </a>
              </div>
              <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5512.25787102712!2d7.964480175808763!3d46.307276776794815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f69488d03dab3%3A0x895a2811274bbe53!2sKantonsstrasse%2051%2C%203902%20Brig-Glis!5e0!3m2!1sen!2sch!4v1759759733695!5m2!1sen!2sch"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Markys Billardcenter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
