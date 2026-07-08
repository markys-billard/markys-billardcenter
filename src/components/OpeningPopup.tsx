import { useState, useEffect } from 'react';
import { X, PartyPopper } from 'lucide-react';
import { Link } from '../router';

export default function OpeningPopup() {
  // POPUP DISABLED - Grand opening event has ended
  // To reuse this popup template for future events, uncomment the code below and update the event details

  /*open comment here to disable popup*/
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('markys_popup_seen');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('markys_popup_seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 animate-fade-in"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-ink rounded-2xl shadow-2xl max-w-2xl w-full pointer-events-auto animate-scale-in overflow-hidden md:rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-cream hover:text-orange transition-colors p-2 hover:bg-cream hover:bg-opacity-10 rounded-full"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-orange to-orange/80 p-8 flex items-center justify-center">
              <div className="text-center">
                {/*<PartyPopper size={80} className="text-ink mx-auto mb-4" />*/}
                <div className="text-7xl mb-4">🏖️</div>
                <p className="text-5xl md:text-6xl font-bold text-ink"></p>
                <p className="text-2xl md:text-3xl font-bold text-ink">12. - 19.</p>
                <p className="text-3xl md:text-4xl font-bold text-ink">Juli</p>
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-10">
              <h2 className="text-cream text-2xl md:text-3xl lg:text-4xl font-serif mb-3">
                Betriebsferien
              </h2>

              <p className="text-orange text-lg md:text-xl font-semibold mb-4">
                Vom 12. bis 19. Juli 2026 bleibt das Billardcenter geschlossen.
              </p>

              <p className="text-cream text-opacity-90 mb-6 text-sm md:text-base leading-relaxed">
                Ab dem 20. Juli sind wir wieder wie gewohnt für euch da. Wir wünschen euch einen schönen Sommer! ☀️
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {/*<Link
                  href="/angebot"
                  onClick={handleClose}
                  className="flex-1 bg-orange text-ink font-bold text-center px-6 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Mehr erfahren
                </Link>*/}
                <button
                  onClick={handleClose}
                  className="px-6 py-4 border-2 border-cream border-opacity-30 text-cream font-semibold rounded-xl hover:bg-cream hover:bg-opacity-10 transition-all duration-300"
                >
                  Schliessen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }

        @media (max-width: 768px) {
          .animate-scale-in {
            animation: scale-in 0.4s ease-out;
          }
        }
      `}</style>
    </>
  );
  /*close comment here*/

  return null;
}
