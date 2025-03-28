import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AccommodationCard, { AccommodationType } from '@/components/AccommodationCard';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { AnimateOnScroll } from '@/components/Animations';
import { siteImages } from '@/config/images';

const Index = () => {
  const [accommodations, setAccommodations] = useState<AccommodationType[]>([
    {
      id: 1,
      name: "Rosa",
      description: "Suíte G com jacuzzi dentro do quarto, oferecendo conforto e privacidade em ambiente sofisticado.",
      capacity: "2 adultos",
      amenities: ["Cama King", "Jacuzzi no quarto", "Café da manhã", "Ar-condicionado"],
      imageSrc: siteImages.accommodations.rosa.main,
      additionalImages: siteImages.accommodations.rosa.additional
    },
    {
      id: 2,
      name: "Dália",
      description: "Suíte master com jacuzzi dentro do quarto, ambiente elegante com vista para o jardim.",
      capacity: "2 adultos",
      amenities: ["Cama Queen", "Jacuzzi no quarto", "Café da manhã", "Frigobar"],
      imageSrc: siteImages.accommodations.dalia.main,
      additionalImages: siteImages.accommodations.dalia.additional
    },
    {
      id: 3,
      name: "Tulipas",
      description: "Suíte P com jacuzzi na varanda, perfeita para relaxar enquanto aprecia a natureza.",
      capacity: "2 adultos",
      amenities: ["Cama Queen", "Jacuzzi na varanda", "Café da manhã", "Vista panorâmica"],
      imageSrc: siteImages.accommodations.tulipas.main,
      additionalImages: siteImages.accommodations.tulipas.additional
    },
    {
      id: 4,
      name: "Orquídeas",
      description: "Suíte P com jacuzzi na varanda e vista privilegiada para o jardim de orquídeas.",
      capacity: "2 adultos",
      amenities: ["Cama Queen", "Jacuzzi na varanda", "Café da manhã", "Varanda privativa"],
      imageSrc: siteImages.accommodations.orquideas.main,
      additionalImages: siteImages.accommodations.orquideas.additional
    },
    {
      id: 5,
      name: "Violeta",
      description: "Suíte P com jacuzzi na varanda, decorada com tons suaves e ambiente tranquilo.",
      capacity: "2 adultos",
      amenities: ["Cama Queen", "Jacuzzi na varanda", "Café da manhã", "Ar-condicionado"],
      imageSrc: siteImages.accommodations.violeta.main,
      additionalImages: siteImages.accommodations.violeta.additional
    },
    {
      id: 6,
      name: "Jasmim",
      description: "Suíte P com jacuzzi na varanda e decoração inspirada no aroma relaxante do jasmim.",
      capacity: "2 adultos",
      amenities: ["Cama Queen", "Jacuzzi na varanda", "Café da manhã", "Amenities especiais"],
      imageSrc: siteImages.accommodations.jasmim.main,
      additionalImages: siteImages.accommodations.jasmim.additional
    },
    {
      id: 7,
      name: "Lírios",
      description: "Suíte sem jacuzzi com duas camas de solteiro e uma cama de casal, ideal para famílias.",
      capacity: "2 adultos + 2 crianças",
      amenities: ["Cama Casal + 2 Solteiro", "Vista para jardim", "Café da manhã", "Espaço família"],
      imageSrc: siteImages.accommodations.lirios.main,
      additionalImages: siteImages.accommodations.lirios.additional
    }
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <section id="acomodações" className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-fiori-green text-white text-sm font-medium rounded-full mb-3">
                Conforto na Natureza
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-fiori-earth">
                Nossas Acomodações
              </h2>
              <p className="text-fiori-dark/70 max-w-2xl mx-auto">
                Cada uma de nossas acomodações foi cuidadosamente projetada para oferecer conforto, privacidade e uma conexão especial com a natureza. Escolha a que melhor se adapta ao seu estilo.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <AccommodationCard 
                key={accommodation.id}
                accommodation={accommodation}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <About />
      
      <Map />
      
      <Testimonials />
      
      <section id="contato" className="section-padding bg-white">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12 subtle-shadow max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 bg-fiori-green text-white text-sm font-medium rounded-full mb-3">
                  Entre em Contato
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-fiori-earth">
                  Faça sua Reserva
                </h2>
                <p className="text-fiori-dark/70 max-w-2xl mx-auto">
                  Estamos ansiosos para recebê-lo na Pousada Fiori. Entre em contato para verificar disponibilidade e fazer sua reserva.
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <AnimateOnScroll delay={200}>
                  <div className="bg-fiori-green text-white p-6 rounded-lg">
                    <h3 className="text-xl font-serif mb-6">Informações de Contato</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+55 (11) 99999-9999</span>
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>contato@pousadafiori.com</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <address className="not-italic">
                          Estrada da Natureza, km 5<br />
                          Floresta Verde, SP<br />
                          CEP: 12345-678
                        </address>
                      </li>
                    </ul>
                    
                    <div className="mt-8">
                      <p className="font-medium mb-4">Horário de funcionamento:</p>
                      <p>Segunda a Domingo: 8h às 20h</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
              
              <div className="w-full md:w-1/2">
                <AnimateOnScroll delay={400}>
                  <div className="text-center p-6">
                    <div className="mb-8">
                      <img 
                        src={siteImages.contact.whatsapp}
                        alt="WhatsApp Icon" 
                        className="w-20 h-20 mx-auto mb-4"
                      />
                      <h3 className="text-xl font-serif mb-2 text-fiori-earth">Prefere WhatsApp?</h3>
                      <p className="text-fiori-dark/70 mb-6">
                        Envie-nos uma mensagem e responderemos o mais breve possível.
                      </p>
                    </div>
                    
                    <a 
                      href="#" 
                      className="button-primary inline-flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(`https://wa.me/47996345025?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre a Pousada Fiori.')}`, '_blank');
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.882-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Falar via WhatsApp
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
