import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, ArrowLeft, CheckCircle, X } from 'lucide-react';
import { useRouter } from '../router';
import { useLanguage } from '../contexts/LanguageContext';

type RequestType = 'billard' | 'darts' | 'lounge' | 'turnier' | 'teamevent' | 'mitgliedschaft' | 'kurs' | 'anderes';

export default function KontaktReservation() {
  const { navigate } = useRouter();
  const { t } = useLanguage();
  const [requestType, setRequestType] = useState<RequestType>('billard');
  const [membershipType, setMembershipType] = useState<string>('');
  const [step, setStep] = useState<1 | 2>(1);
  const [step1Data, setStep1Data] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    const typeMap: Record<string, RequestType> = {
      '#billard': 'billard',
      '#darts': 'darts',
      '#lounge': 'lounge',
      '#turnier': 'turnier',
      '#eventanfrage': 'teamevent',
      '#teamevent': 'teamevent',
      '#mitgliedschaft': 'mitgliedschaft',
      '#kurs': 'kurs',
    };

    if (typeMap[hash]) {
      setRequestType(typeMap[hash]);
    }

    if (hash === '#form' || hash in typeMap) {
      setTimeout(() => {
        const form = document.getElementById('form');
        form?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = { requestType };
    formData.forEach((value, key) => {
      data[key] = value;
    });
    setStep1Data(data);
    setStep(2);
  };

  const generateSummary = (allData: any): string => {
    const requestTypeLabels: Record<RequestType, string> = {
      billard: 'Pool / Billard',
      darts: 'Darts',
      lounge: 'Lounge',
      turnier: 'Turnier',
      teamevent: 'Teamevent',
      mitgliedschaft: 'Mitgliedschaft',
      kurs: 'Kursanfrage',
      anderes: 'Anderes',
    };

    let summary = 'Neue Anfrage\n\n';
    summary += `Typ: ${requestTypeLabels[allData.requestType] || allData.requestType}\n`;
    summary += `Name: ${allData.name}\n`;
    summary += `E-Mail: ${allData.email}\n`;
    summary += `Telefon: ${allData.telefon}\n`;
    summary += `Newsletter: ${allData.newsletter ? 'Ja' : 'Nein'}\n`;

    if (allData.datum) {
      summary += `\nDatum: ${allData.datum}\n`;
    }

    if (allData.ankunftszeit) {
      summary += `Ankunftszeit: ${allData.ankunftszeit}\n`;
    }

    if (allData.dauer) {
      summary += `Dauer: ${allData.dauer} Stunden\n`;
    }

    if (allData.personen) {
      const label = allData.requestType === 'billard' ? 'Tische' : 'Personen';
      summary += `${label}: ${allData.personen}\n`;
    }

    if (allData.firma) {
      summary += `Firma: ${allData.firma}\n`;
    }

    if (allData.niveau) {
      const niveauLabels: Record<string, string> = {
        anfaenger: 'Anfänger',
        fortgeschritten: 'Fortgeschritten',
      };
      summary += `Niveau: ${niveauLabels[allData.niveau] || allData.niveau}\n`;
    }

    if (allData.membershipType) {
      const membershipLabels: Record<string, string> = {
        'monatsabo-pool': 'Monatsabo Pool (CHF 275.–)',
        'monatsabo-dart': 'Monatsabo Dart (CHF 125.–)',
        'jahreskarte-gold': 'Jahreskarte Gold (CHF 1\'850.–)',
        'senior-junior': 'Senior / Junior (CHF 975.–)',
      };
      summary += `Mitgliedschaft: ${membershipLabels[allData.membershipType] || allData.membershipType}\n`;
    }

    if (allData.nachricht) {
      summary += `\nNachricht:\n${allData.nachricht}\n`;
    }

    return summary;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.target as HTMLFormElement);
    const step2Data: any = {};
    formData.forEach((value, key) => {
      if (key !== 'honeypot') {
        step2Data[key] = value;
      }
    });

    const allData = {
      ...step1Data,
      ...step2Data,
      newsletter: formData.get('newsletter') === 'on',
    };

    const payload = {
      requestType: allData.requestType,
      name: allData.name,
      email: allData.email,
      telefon: allData.telefon,
      newsletter: allData.newsletter,
      summary: generateSummary(allData),
    };

    try {
      const response = await fetch('https://hook.eu1.make.com/lmlner1rkxsdl5rxs1gt6ked5gxkconm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessModal(true);
        (e.target as HTMLFormElement).reset();
        setStep(1);
        setStep1Data({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  const showDateTimeFields = ['billard', 'darts', 'lounge'].includes(requestType);
  const showPeopleCount = !['mitgliedschaft', 'turnier', 'anderes'].includes(requestType);
  const showEventFields = requestType === 'teamevent';
  const showTournamentFields = requestType === 'turnier';
  const showMembershipFields = requestType === 'mitgliedschaft';

  return (
    <main id="main-content">
      <section className="min-h-screen flex flex-col justify-center bg-cream pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-ink mb-4 md:mb-6">{t('kontakt.title')}</h1>
            <p className="text-lg md:text-xl text-ink text-opacity-80 mb-8">
              {t('kontakt.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
              <a
                href="#form"
                className="w-full sm:w-auto bg-gradient-to-r from-orange to-orange/90 text-ink font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t('kontakt.reserveOnline')}
              </a>
              <a
                href="tel:+41794368134"
                className="w-full sm:w-auto bg-ink text-cream font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                +41 79 436 81 34
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-12 md:py-20 bg-ink">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-cream text-center mb-6 md:mb-8 text-2xl md:text-4xl">{t('kontakt.formTitle')}</h2>

            <div className="mb-8 flex items-center justify-center gap-3">
              <div className={`flex items-center gap-2 transition-all duration-300 ${step === 1 ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step === 1 ? 'bg-orange text-ink scale-110' : 'bg-cream/20 text-cream'}`}>1</div>
                <span className="text-cream font-medium hidden sm:inline">{t('kontakt.step1')}</span>
              </div>
              <div className="w-12 h-0.5 bg-cream/20"></div>
              <div className={`flex items-center gap-2 transition-all duration-300 ${step === 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step === 2 ? 'bg-orange text-ink scale-110' : 'bg-cream/20 text-cream'}`}>2</div>
                <span className="text-cream font-medium hidden sm:inline">{t('kontakt.step2')}</span>
              </div>
            </div>

            {step === 1 ? (
              <form onSubmit={handleNextStep} className="backdrop-blur-sm bg-cream/95 rounded-3xl p-8 md:p-10 shadow-2xl border border-orange/10">
                <div className="space-y-4">
                <div className="group">
                  <label htmlFor="requestType" className="block text-ink/80 font-medium mb-3 text-sm uppercase tracking-wide">
                    {t('kontakt.requestFor')}
                  </label>
                  <select
                    id="requestType"
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value as RequestType)}
                    className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] bg-white text-ink shadow-sm hover:border-orange/30 appearance-none cursor-pointer"
                    style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '44px'}}
                  >
                    <option value="billard">{t('kontakt.optionBillard')}</option>
                    <option value="darts">{t('kontakt.optionDarts')}</option>
                    <option value="lounge">{t('kontakt.optionLounge')}</option>
                    <option value="turnier">{t('kontakt.optionTurnier')}</option>
                    <option value="teamevent">{t('kontakt.optionTeamevent')}</option>
                    <option value="mitgliedschaft">{t('kontakt.optionMitgliedschaft')}</option>
                    <option value="kurs">{t('kontakt.optionKurs')}</option>
                    <option value="anderes">{t('kontakt.optionAnderes')}</option>
                  </select>
                </div>

                {showDateTimeFields && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group">
                        <label htmlFor="datum" className="block text-ink/80 font-medium mb-2 text-sm uppercase tracking-wide">
                          {t('kontakt.date')}
                        </label>
                        <input
                          type="date"
                          id="datum"
                          name="datum"
                          required
                          className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="ankunftszeit" className="block text-ink/80 font-medium mb-2 text-sm uppercase tracking-wide">
                          {t('kontakt.time')}
                        </label>
                        <input
                          type="time"
                          id="ankunftszeit"
                          name="ankunftszeit"
                          required
                          className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="group">
                        <input
                          type="number"
                          id="dauer"
                          name="dauer"
                          min="1"
                          step="0.5"
                          required
                          placeholder={t('kontakt.duration')}
                          className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="number"
                          id="personen"
                          name="personen"
                          min="1"
                          required
                          placeholder={requestType === 'billard' ? t('kontakt.numTables') : t('kontakt.numPeople')}
                          className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                        />
                      </div>
                    </div>
                  </>
                )}

                {showPeopleCount && !showDateTimeFields && (
                  <div className="group">
                    <input
                      type="number"
                      id="personen"
                      name="personen"
                      min="1"
                      required
                      placeholder={t('kontakt.numPeopleAlt')}
                      className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                    />
                  </div>
                )}

                {showEventFields && (
                  <>
                    <div className="group">
                      <label htmlFor="datum" className="block text-ink/80 font-medium mb-2 text-sm uppercase tracking-wide">
                        {t('kontakt.date')}
                      </label>
                      <input
                        type="date"
                        id="datum"
                        name="datum"
                        required
                        className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30"
                      />
                    </div>
                    <div className="group">
                      <input
                        type="text"
                        id="firma"
                        name="firma"
                        className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                        placeholder={t('kontakt.firma')}
                      />
                    </div>
                  </>
                )}

                {showTournamentFields && (
                  <div className="group">
                    <select
                      id="niveau"
                      name="niveau"
                      required
                      className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] bg-white text-ink shadow-sm hover:border-orange/30 appearance-none cursor-pointer"
                      style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '44px'}}
                    >
                      <option value="">{t('kontakt.niveau')}</option>
                      <option value="anfaenger">{t('kontakt.niveauAnfaenger')}</option>
                      <option value="fortgeschritten">{t('kontakt.niveauFortgeschritten')}</option>
                    </select>
                  </div>
                )}

                {showMembershipFields && (
                  <div className="group">
                    <select
                      id="membershipType"
                      name="membershipType"
                      value={membershipType}
                      onChange={(e) => setMembershipType(e.target.value)}
                      required
                      className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] bg-white text-ink shadow-sm hover:border-orange/30 appearance-none cursor-pointer"
                      style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '44px'}}
                    >
                      <option value="">{t('kontakt.membership')}</option>
                      <option value="monatsabo-pool">{t('kontakt.membershipPool')}</option>
                      <option value="monatsabo-dart">{t('kontakt.membershipDart')}</option>
                      <option value="jahreskarte-gold">{t('kontakt.membershipGold')}</option>
                      <option value="senior-junior">{t('kontakt.membershipSenior')}</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange to-orange/90 text-ink font-bold text-base md:text-lg py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg min-h-[44px] mt-6 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {t('kontakt.next')}
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
            ) : (
              <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-cream/95 rounded-3xl p-8 md:p-10 shadow-2xl border border-orange/10">
                <div className="space-y-4">
                  <div className="group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                      placeholder={t('kontakt.name')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                        placeholder={t('kontakt.email')}
                      />
                    </div>
                    <div className="group">
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        required
                        className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 min-h-[44px] text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40"
                        placeholder={t('kontakt.phone')}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={4}
                      className="w-full px-4 py-4 border border-ink/10 rounded-xl focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all duration-300 text-ink shadow-sm hover:border-orange/30 placeholder:text-ink/40 resize-none"
                      placeholder={t('kontakt.message')}
                    ></textarea>
                  </div>

                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="flex items-start gap-3 mt-4 group">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 w-4 h-4 rounded border-ink/20 text-orange focus:ring-orange focus:ring-2 cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-sm text-ink/70 cursor-pointer select-none">
                      {t('kontakt.newsletter')}
                    </label>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      disabled={isSubmitting}
                      className="px-6 py-4 border-2 border-orange text-ink font-bold rounded-xl hover:bg-orange/10 transition-all duration-300 min-h-[44px] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={20} />
                      {t('kontakt.back')}
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-orange to-orange/90 text-ink font-bold text-base md:text-lg py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg min-h-[44px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? t('kontakt.submitting') : t('kontakt.submit')}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl text-center">
                      {t('kontakt.errorMessage')}
                    </div>
                  )}

                  {submitStatus === 'idle' && (
                    <p className="text-xs md:text-sm text-ink/60 text-center pt-2">
                      {t('kontakt.responseTime')}
                    </p>
                  )}
                </div>
              </form>
            )}

            {showSuccessModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm">
                <div className="bg-cream rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-300">
                  <button
                    onClick={handleCloseSuccessModal}
                    className="absolute top-4 right-4 text-ink/40 hover:text-ink transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-orange rounded-full mb-6">
                      <CheckCircle size={40} className="text-ink" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                      {t('kontakt.successTitle')}
                    </h3>

                    <p className="text-lg text-ink/80 mb-8">
                      {t('kontakt.successMessage')}
                    </p>

                    <button
                      onClick={handleCloseSuccessModal}
                      className="w-full bg-gradient-to-r from-orange to-orange/90 text-ink font-bold text-lg py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg active:scale-[0.98]"
                    >
                      {t('kontakt.toHome')}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 backdrop-blur-sm bg-cream/95 rounded-2xl p-6 md:p-8 border border-orange/20 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock size={24} className="text-orange" />
                <h3 className="text-ink text-xl md:text-2xl font-bold">{t('kontakt.todayTitle')}</h3>
              </div>
              <p className="text-ink/70 mb-6 text-sm md:text-base">
                {t('kontakt.todayMessage')}
              </p>
              <a
                href="tel:+41794368134"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange to-orange/90 text-ink font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg active:scale-[0.98]"
              >
                <Phone size={20} />
                {t('kontakt.callNow')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-ink mb-8">{t('kontakt.openingHoursTitle')}</h2>
              <div className="bg-ink rounded-2xl p-8 shadow-xl">
                <div className="space-y-4 text-cream">
                  <div className="flex justify-between py-3 border-b border-cream border-opacity-20">
                    <span className="font-semibold">{t('kontakt.monThu')}</span>
                    <span>{t('kontakt.monThuTime')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-cream border-opacity-20">
                    <span className="font-semibold">{t('kontakt.friday')}</span>
                    <span>{t('kontakt.fridayTime')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-cream border-opacity-20">
                    <span className="font-semibold">{t('kontakt.saturday')}</span>
                    <span>{t('kontakt.saturdayTime')}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-semibold">{t('kontakt.sunday')}</span>
                    <span>{t('kontakt.sundayTime')}</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-cream border-opacity-20">
                    <p className="text-sm text-cream text-opacity-80">
                      <Clock className="inline mr-2" size={16} />
                      {t('kontakt.winterNote')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-ink mb-8">{t('kontakt.contactTitle')}</h2>
              <div className="bg-ink rounded-2xl p-8 shadow-xl space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-orange flex-shrink-0 mt-1" size={24} />
                  <div className="text-cream">
                    <p className="font-semibold text-lg mb-1">{t('kontakt.businessName')}</p>
                    <p>{t('kontakt.address1')}</p>
                    <p>{t('kontakt.address2')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-orange flex-shrink-0" size={24} />
                  <a href="tel:+41794368134" className="text-cream hover:text-orange transition-colors text-lg">
                    +41 79 436 81 34
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-orange flex-shrink-0" size={24} />
                  <a href="mailto:markys@bluewin.ch" className="text-cream hover:text-orange transition-colors text-lg">
                    markys@bluewin.ch
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-orange flex-shrink-0" size={24} />
                  <a
                    href="https://wa.me/41794368134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-orange transition-colors text-lg"
                  >
                    {t('kontakt.whatsapp')}
                  </a>
                </div>

                <div className="pt-6 mt-6 border-t border-cream border-opacity-20">
                  <a
                    href="https://maps.app.goo.gl/kAYq2YxmdJY2Z6Xo9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-orange text-ink font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 min-h-[44px]"
                  >
                    {t('kontakt.openInMaps')}
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5512.25787102712!2d7.964480175808763!3d46.307276776794815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f69488d03dab3%3A0x895a2811274bbe53!2sKantonsstrasse%2051%2C%203902%20Brig-Glis!5e0!3m2!1sen!2sch!4v1759759733695!5m2!1sen!2sch"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Markys Billardcenter Brig"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}