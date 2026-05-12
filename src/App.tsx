import { useRouter } from './router';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import OpeningPopup from './components/OpeningPopup';
import Home from './pages/Home';
import Angebot from './pages/Angebot';
import Teamevents from './pages/Teamevents';
import Turniere from './pages/Turniere';
import PreiseMitgliedschaften from './pages/PreiseMitgliedschaften';
import KontaktReservation from './pages/KontaktReservation';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/angebot':
        return <Angebot />;
      case '/teamevents':
        return <Teamevents />;
      case '/turniere':
        return <Turniere />;
      case '/preise-mitgliedschaften':
        return <PreiseMitgliedschaften />;
      case '/kontakt-reservation':
        return <KontaktReservation />;
      case '/impressum':
        return <Impressum />;
      case '/datenschutz':
        return <Datenschutz />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink text-cream">
        <Header />
        {renderPage()}
        <Footer />
        <OpeningPopup />
      </div>
    </LanguageProvider>
  );
}

export default App;
