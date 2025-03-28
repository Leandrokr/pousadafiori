
import React, { useState } from 'react';
import { AnimateOnScroll } from './Animations';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Map = () => {
  const [showMap, setShowMap] = useState(false);
  
  return (
    <section id="localizacao" className="section-padding bg-fiori-light">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-fiori-green text-white text-sm font-medium rounded-full mb-3">
              Como Chegar
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-fiori-earth">
              Nossa Localização
            </h2>
            <p className="text-fiori-dark/70 max-w-2xl mx-auto mb-8">
              Estamos localizados em um dos pontos mais privilegiados da Serra do Rio de Janeiro, 
              com fácil acesso e cercados pela natureza exuberante.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto subtle-shadow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-fiori-green" />
                <h3 className="text-xl font-serif font-medium text-fiori-earth">Endereço</h3>
              </div>
              <address className="not-italic text-fiori-dark/80 leading-relaxed mb-6">
                Estrada da Natureza, km 5<br />
                Floresta Verde, Rio de Janeiro<br />
                CEP: 12345-678
              </address>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button 
                  onClick={() => window.open('https://www.google.com/maps/place/Pousada+Fiori/@-22.331567623177797,-42.68687854933252,17z/data=!4m14!1m7!3m6!1s0x9825fcf57a4333:0x6cb5984c4381d5a!2sPousada+Fiori!8m2!3d-22.3319097!4d-42.686878!16s%2Fg%2F11f6v1q3v9!3m5!1s0x9825fcf57a4333:0x6cb5984c4381d5a!8m2!3d-22.3319097!4d-42.686878!16s%2Fg%2F11f6v1q3v9?entry=ttu', '_blank')}
                  className="bg-fiori-green hover:bg-fiori-green/90 text-white"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Como Chegar
                </Button>
                
                <Button 
                  onClick={() => setShowMap(!showMap)} 
                  variant="outline" 
                  className="border-fiori-green text-fiori-green hover:bg-fiori-green/10"
                >
                  {showMap ? 'Esconder Mapa' : 'Mostrar Mapa'} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-fiori-beige/10 p-6 rounded-lg border border-fiori-beige/30">
              <h4 className="font-serif text-lg mb-4 text-fiori-earth">Dicas para chegar</h4>
              <ul className="space-y-2 text-fiori-dark/80">
                <li className="flex items-start gap-2">
                  <span className="text-fiori-green font-bold">•</span>
                  <span>Siga pela rodovia principal até o km 5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fiori-green font-bold">•</span>
                  <span>Na bifurcação, tome o caminho à direita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fiori-green font-bold">•</span>
                  <span>A pousada estará 300m adiante, à sua esquerda</span>
                </li>
              </ul>
            </div>
          </div>
          
          {showMap && (
            <div className="relative rounded-lg overflow-hidden subtle-shadow w-full" style={{ height: '450px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304.818484307592!2d-42.68687854933252!3d-22.331567623177797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9825fcf57a4333%3A0x6cb5984c4381d5a!2sPousada%20Fiori!5e0!3m2!1spt-BR!2sbr!4v1743167228921!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Pousada Fiori"
                aria-label="Mapa da localização da Pousada Fiori"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;
