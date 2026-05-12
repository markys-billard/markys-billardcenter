import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export default function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
  ];

  const currentLang = languages.find(l => l.code === language)?.label || 'DE';

  if (mobile) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-cream hover:text-orange transition-colors min-h-[44px] px-4"
        >
          <Globe size={20} />
          <span className="font-medium">{currentLang}</span>
        </button>
        {isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-ink border border-cream border-opacity-20 rounded-lg shadow-xl min-w-[100px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'de' | 'en' | 'fr' | 'it');
                  setIsOpen(false);
                }}
                className={`block w-full text-center px-4 py-3 hover:bg-orange hover:text-ink transition-colors min-h-[44px] first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? 'text-orange font-semibold' : 'text-cream'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-cream hover:text-orange transition-colors min-h-[44px] px-3">
        <Globe size={20} />
        <span className="font-medium">{currentLang}</span>
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-ink border border-cream border-opacity-20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[100px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'de' | 'en' | 'fr' | 'it')}
            className={`block w-full text-center px-4 py-3 hover:bg-orange hover:text-ink transition-colors min-h-[44px] first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'text-orange font-semibold' : 'text-cream'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
