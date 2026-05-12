import { useState, useEffect, useRef } from 'react';
import { Link } from '../router';
import { useLanguage } from '../contexts/LanguageContext';
import { Star } from 'lucide-react';

const slides = [
  {
    image: '/hero/1.webp',
    alt: 'Billard Tische im Premium Ambiente',
  },
  {
    image: '/hero/2.webp',
    alt: 'Professionelle Billard Ausrüstung',
  },
  {
    image: '/hero/3.webp',
    alt: 'Gemütliche Bar & Lounge',
  },
  {
    image: '/hero/4.webp',
    alt: 'Dart Automaten mit modernster Technik',
  },
  {
    image: '/hero/5.webp',
    alt: 'Markys Billardcenter Brig Atmosphere',
  },
];

const testimonials = [
  {
    text: 'Sehr gemütlich eingerichtet, tolles Billard Equipment, gute Musik, sehr freundliche Bedienung. Wir kommen gerne wieder.',
    author: 'Stefan A.',
    rating: 5,
  },
  {
    text: 'Super Lokal und sehr netter Chef! Unschlagbar tolle Qualität der Tische ect… Eine wirkliche Innovation für unsere Region.',
    author: 'Daniel S.',
    rating: 5,
  },
  {
    text: 'Super Location, Chef sehr sympathisch und hilfsbereit… auch bei Anfänger. Übung macht den Meister, komme gerne wieder 💪',
    author: 'Sandra T.',
    rating: 5,
  },
  {
    text: 'Absolut geniales Billardcenter! Freundlich Stilvoll Professionell',
    author: 'BÄZI 06',
    rating: 5,
  },
  {
    text: 'Tolle Lokation. Endlich wieder Biliard und Darts ins Wallis gebracht. Merci 😁',
    author: 'Zoltan T.',
    rating: 5,
  },
];

export default function HeroSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={sliderRef}
      aria-label="Bildergalerie"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content absolute top-[20%] md:top-[30%] left-1/2 -translate-x-1/2 w-full">
        <div className="container-custom text-center">
          <h1 className="text-cream mb-6 text-balance">
            MARKYS <span className="md:inline block">Billard<span className="md:inline block">center</span></span>
          </h1>
          <p className="text-xl md:text-2xl text-cream mb-10 max-w-2xl mx-auto text-balance">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/kontakt-reservation#form" className="btn-primary">
              {t('hero.reserveNow')}
            </Link>
            <Link href="#oeffnung" className="btn-secondary">
              {t('hero.openingHours')}
            </Link>
          </div>

          <div className="relative h-24 overflow-hidden max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange fill-orange" />
                  ))}
                </div>
                <p className="text-cream/90 text-sm md:text-base italic mb-2 px-4">
                  "{testimonial.text}"
                </p>
                <p className="text-cream/70 text-xs md:text-sm font-medium">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 gap-2 z-10 hidden [@media(min-height:700px)]:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="relative w-11 h-11 flex items-center justify-center"
            aria-label={`Gehe zu Folie ${index + 1}`}
            aria-current={index === currentSlide}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange' : 'bg-cream bg-opacity-50'
              }`}
            />
            <span className="sr-only">Folie {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
