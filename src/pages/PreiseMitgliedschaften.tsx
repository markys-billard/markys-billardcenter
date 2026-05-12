import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import { Clock, Target, CreditCard, GraduationCap } from 'lucide-react';

export default function PreiseMitgliedschaften() {
  const { t } = useLanguage();

  return (
    <main id="main-content">
      <section className="min-h-screen flex flex-col justify-center bg-cream pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-ink mb-6 text-3xl md:text-5xl lg:text-7xl">{t('preise.title')}</h1>
            <p className="text-xl text-ink text-opacity-80 mb-8">
              {t('preise.subtitle')}
            </p>
            <div className="inline-flex items-center gap-3 bg-orange px-6 py-3 rounded-xl">
              <Clock className="text-ink" size={24} />
              <p className="text-ink font-semibold">
                {t('preise.billingInfo')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom">
          <h2 className="text-cream text-center mb-12">{t('preise.poolTitle')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-xl p-8 text-center">
              <div className="mb-6">
                <div className="text-5xl font-bold text-ink mb-2">CHF {t('preise.poolPrice')}</div>
                <div className="text-xl text-ink text-opacity-70">{t('preise.poolPriceLabel')}</div>
              </div>
              <div className="bg-ink bg-opacity-5 px-6 py-4 rounded-xl">
                <p className="text-ink text-sm">
                  <strong>{t('preise.includesLabel')}</strong> {t('preise.includesEquipment')}
                </p>
              </div>
            </div>

            <div className="mt-12 bg-cream rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif text-ink mb-4">{t('preise.dartsTitle')}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-ink font-medium text-lg">{t('preise.dartMachine')}</span>
                <span className="text-ink font-bold text-2xl">{t('preise.dartMachinePrice')}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-ink border-opacity-10">
                <span className="text-ink font-medium">{t('preise.dartRental')}</span>
                <span className="text-ink font-bold text-xl">{t('preise.dartRentalPrice')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-custom">
          <h2 className="text-ink text-center mb-4">{t('preise.membershipsTitle')}</h2>
          <p className="text-center text-ink text-opacity-70 mb-12 text-lg">
            {t('preise.membershipsSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-ink text-cream">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-orange">
                <Target size={28} className="text-ink" />
              </div>
              <h3 className="text-2xl font-serif mb-2 text-orange">
                {t('preise.membershipPool')}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">CHF {t('preise.membershipPoolPrice')}</span>
              </div>
              <p className="mb-6 text-cream text-opacity-80">
                {t('preise.membershipPoolDesc')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipPoolFeature1')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipPoolFeature2')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipPoolFeature3')}</span>
                </li>
              </ul>
              <Link
                href="/kontakt-reservation#mitgliedschaft"
                className="block text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-orange text-ink hover:bg-opacity-90"
              >
                {t('preise.requestNow')}
              </Link>
            </div>

            <div className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-ink text-cream">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-orange">
                <Target size={28} className="text-ink" />
              </div>
              <h3 className="text-2xl font-serif mb-2 text-orange">
                {t('preise.membershipDart')}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">CHF {t('preise.membershipDartPrice')}</span>
              </div>
              <p className="mb-6 text-cream text-opacity-80">
                {t('preise.membershipDartDesc')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipDartFeature1')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipDartFeature2')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipDartFeature3')}</span>
                </li>
              </ul>
              <Link
                href="/kontakt-reservation#mitgliedschaft"
                className="block text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-orange text-ink hover:bg-opacity-90"
              >
                {t('preise.requestNow')}
              </Link>
            </div>

            <div className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-orange text-ink border-4 border-sage scale-105">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1 bg-sage text-cream text-sm font-bold rounded-full">
                  {t('preise.membershipGoldBadge')}
                </span>
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-ink">
                <CreditCard size={28} className="text-orange" />
              </div>
              <h3 className="text-2xl font-serif mb-2 text-ink">
                {t('preise.membershipGold')}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">CHF {t('preise.membershipGoldPrice')}</span>
              </div>
              <p className="mb-6 text-ink text-opacity-90">
                {t('preise.membershipGoldDesc')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-sage">✓</span>
                  <span>{t('preise.membershipGoldFeature1')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-sage">✓</span>
                  <span>{t('preise.membershipGoldFeature2')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-sage">✓</span>
                  <span>{t('preise.membershipGoldFeature3')}</span>
                </li>
              </ul>
              <Link
                href="/kontakt-reservation#mitgliedschaft"
                className="block text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-ink text-cream hover:bg-opacity-90"
              >
                {t('preise.requestNow')}
              </Link>
            </div>

            <div className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-ink text-cream">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-orange">
                <GraduationCap size={28} className="text-ink" />
              </div>
              <h3 className="text-2xl font-serif mb-2 text-orange">
                {t('preise.membershipSenior')}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">CHF {t('preise.membershipSeniorPrice')}</span>
              </div>
              <p className="mb-6 text-cream text-opacity-80">
                {t('preise.membershipSeniorDesc')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipSeniorFeature1')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipSeniorFeature2')}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-orange">✓</span>
                  <span>{t('preise.membershipSeniorFeature3')}</span>
                </li>
              </ul>
              <Link
                href="/kontakt-reservation#mitgliedschaft"
                className="block text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-orange text-ink hover:bg-opacity-90"
              >
                {t('preise.requestNow')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-cream rounded-2xl p-12 shadow-2xl text-center">
            <h2 className="text-ink mb-6">{t('preise.coursesTitle')}</h2>
            <p className="text-xl text-ink text-opacity-80 mb-8">
              {t('preise.coursesDesc')}
            </p>
            <div className="bg-orange bg-opacity-10 rounded-xl p-6 mb-8">
              <p className="text-ink font-semibold text-lg">
                {t('preise.coursesPricing')}
              </p>
            </div>
            <Link href="/kontakt-reservation#kurs" className="btn-primary">
              {t('preise.coursesRequest')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
