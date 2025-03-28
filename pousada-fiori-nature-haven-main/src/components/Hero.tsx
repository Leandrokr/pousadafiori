import { AnimateOnScroll } from './Animations';
import { siteImages } from '../config/images';

const Hero = () => {
  return (
    <section id="início" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-brackground.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom h-full flex flex-col justify-center relative z-10">
        <div className="max-w-2xl">
          <AnimateOnScroll animation="fade-in" delay={300}>
            <span className="inline-block px-3 py-1 bg-fiori-green bg-opacity-80 text-white text-sm font-medium rounded-full mb-5">
              Refúgio na Natureza
            </span>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-up" delay={500}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-semibold leading-tight mb-4">
              Um paraíso natural para renovar suas energias
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-up" delay={700}>
            <p className="text-lg md:text-xl text-fiori-light font-light mb-8 leading-relaxed max-w-xl">
              Descubra a perfeita harmonia entre conforto e natureza em uma experiência única na Pousada Fiori.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-up" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#acomodações" className="button-primary text-center">Conheça nossas acomodações</a>
              <a href="#contato" className="button-secondary text-center">Reservar agora</a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#acomodações" className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
