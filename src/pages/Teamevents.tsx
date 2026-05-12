import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Trophy, UtensilsCrossed, CheckCircle } from 'lucide-react';

export default function Teamevents() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Users,
      title: t('teamevents.benefit1Title'),
      description: t('teamevents.benefit1Desc'),
    },
    {
      icon: CheckCircle,
      title: t('teamevents.benefit2Title'),
      description: t('teamevents.benefit2Desc'),
    },
    {
      icon: Trophy,
      title: t('teamevents.benefit3Title'),
      description: t('teamevents.benefit3Desc'),
    },
    {
      icon: UtensilsCrossed,
      title: t('teamevents.benefit4Title'),
      description: t('teamevents.benefit4Desc'),
    },
  ];

  const eventTypes = [
    {
      title: t('teamevents.event1Title'),
      description: t('teamevents.event1Desc'),
      image: '/header_images/teamevent.webp',
    },
    {
      title: t('teamevents.event2Title'),
      description: t('teamevents.event2Desc'),
      image: '/header_images/dart.webp',
    },
    {
      title: t('teamevents.event3Title'),
      description: t('teamevents.event3Desc'),
      image: '/header_images/private-party.webp',
    },
  ];

  const services = [
    t('teamevents.service1'),
    t('teamevents.service2'),
    t('teamevents.service3'),
    t('teamevents.service4'),
    t('teamevents.service5'),
    t('teamevents.service6'),
  ];

  return (
    <main id="main-content">
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 20, 35, 0.75), rgba(1, 20, 35, 0.75)), url('/header_images/teamevent.webp')`,
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-cream mb-6 text-4xl md:text-5xl lg:text-7xl">{t('teamevents.title')}</h1>
            <p className="text-2xl text-cream text-opacity-90 mb-10">
              {t('teamevents.subtitle')}
            </p>
            <Link href="/kontakt-reservation#eventanfrage" className="btn-primary">
              {t('teamevents.inquiry')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom">
          <h2 className="text-cream text-center mb-12">{t('teamevents.offerTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-cream rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-full mb-6">
                    <Icon size={28} className="text-ink" />
                  </div>
                  <h3 className="text-xl font-serif text-ink mb-3">{benefit.title}</h3>
                  <p className="text-ink text-opacity-70">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-custom">
          <h2 className="text-ink text-center mb-12">{t('teamevents.possibilitiesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-ink rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-orange mb-4">{event.title}</h3>
                  <p className="text-cream text-opacity-90">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-cream text-center mb-12">{t('teamevents.serviceTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 text-cream">
                  <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange">
        <div className="container-custom text-center">
          <h2 className="text-ink mb-6">{t('teamevents.readyTitle')}</h2>
          <p className="text-xl text-ink text-opacity-90 mb-8 max-w-2xl mx-auto">
            {t('teamevents.readyText')}
          </p>
          <Link
            href="/kontakt-reservation#eventanfrage"
            className="inline-block px-10 py-5 bg-ink text-cream font-bold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-xl"
          >
            {t('teamevents.submitInquiry')}
          </Link>
        </div>
      </section>
    </main>
  );
}
