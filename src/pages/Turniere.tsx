import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Trophy, Target, ChevronDown } from 'lucide-react';

export default function Turniere() {
  const { t } = useLanguage();

  const scrollToInfo = () => {
    document.getElementById('tournament-info')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main id="main-content">
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 20, 35, 0.75), rgba(1, 20, 35, 0.75)), url('/header_images/turniere.webp')`,
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-cream mb-6">{t('turniere.title')}</h1>
            <p className="text-2xl text-cream text-opacity-90 mb-10">
              {t('turniere.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt-reservation#turnier" className="btn-primary text-center">
                {t('turniere.registerNow')}
              </Link>
              <button
                onClick={scrollToInfo}
                className="btn-secondary inline-flex items-center gap-2 justify-center"
              >
                {t('turniere.moreInfo')}
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="tournament-info" className="py-20 bg-ink">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-cream text-center mb-12">{t('turniere.monthlyTitle')}</h2>
            <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-2xl mb-12">
              <p className="text-lg text-ink text-opacity-90 mb-6">
                {t('turniere.monthlyDesc')}
              </p>
              <p className="text-lg text-ink text-opacity-90 mb-4">
                <strong className="text-orange">{t('turniere.beginnerLabel')}</strong> {t('turniere.beginnerDesc')}
              </p>
              <p className="text-lg text-ink text-opacity-90 mb-6">
                <strong className="text-orange">{t('turniere.advancedLabel')}</strong> {t('turniere.advancedDesc')}
              </p>
              <p className="text-lg text-ink text-opacity-90">
                {t('turniere.registrationInfo')} <span className="font-bold text-orange">{t('turniere.firstInFirstPlay')}</span> {t('turniere.limitedParticipants')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-full mb-6">
                  <Trophy size={28} className="text-ink" />
                </div>
                <h3 className="text-2xl font-serif text-ink mb-4">{t('turniere.poolProcedureTitle')}</h3>
                <ul className="space-y-3 text-ink text-opacity-80">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>{t('turniere.poolProcedure1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>{t('turniere.poolProcedure2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>{t('turniere.poolProcedure3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>{t('turniere.poolProcedure4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-full mb-6">
                  <Target size={28} className="text-ink" />
                </div>
                <h3 className="text-2xl font-serif text-ink mb-4">{t('turniere.dartsProcedureTitle')}</h3>
                <ul className="space-y-3 text-ink text-opacity-80">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>{t('turniere.dartsProcedure1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>{t('turniere.dartsProcedure2')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-ink mb-4">{t('turniere.nextTitle')}</h2>
            <p className="text-lg text-ink text-opacity-70">
              {t('turniere.nextSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="bg-ink rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-6 flex gap-6">
                <div className="flex-shrink-0 text-center bg-orange rounded-xl p-4 w-20">
                  <div className="text-3xl font-bold text-ink">{t('turniere.tournamentDate')}</div>
                  <div className="text-sm font-semibold text-ink uppercase">{t('turniere.tournamentMonth')}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-orange mb-2">{t('turniere.tournamentTitle')}</h3>
                  <p className="text-cream text-opacity-90 mb-4">{t('turniere.tournamentDesc')}</p>
                  <Link href="/kontakt-reservation#turnier" className="text-orange font-semibold hover:underline">
                    {t('turniere.detailsRegistration')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
