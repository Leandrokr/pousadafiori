
import { AnimateOnScroll, LazyImage } from './Animations';
import { siteImages } from '../config/images';

const About = () => {
  const features = [
    {
      title: "Natureza Exuberante",
      description: "Situada em meio à natureza intocada, nossa pousada oferece vistas deslumbrantes e ar puro."
    },
    {
      title: "Gastronomia Local",
      description: "Desfrute de pratos preparados com ingredientes frescos e locais, cultivados em nossa horta orgânica."
    },
    {
      title: "Tranquilidade",
      description: "Um refúgio longe do barulho da cidade, onde você poderá relaxar e reconectar-se."
    },
    {
      title: "Experiências Únicas",
      description: "Oferecemos atividades que proporcionam momentos inesquecíveis em meio à natureza."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-fiori-beige">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <AnimateOnScroll>
              <span className="inline-block px-3 py-1 bg-fiori-green text-white text-sm font-medium rounded-full mb-3">
                Sobre nós
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-fiori-earth">
                Um refúgio natural para momentos especiais
              </h2>
              <p className="text-fiori-dark/80 mb-6 leading-relaxed">
                Fundada em meio às belezas naturais, a Pousada Fiori nasceu do sonho de criar um espaço onde as pessoas pudessem se reconectar com a natureza sem abrir mão do conforto.
              </p>
              <p className="text-fiori-dark/80 mb-8 leading-relaxed">
                Nosso compromisso é oferecer uma experiência autêntica, sustentável e memorável. Cada detalhe da pousada foi pensado para proporcionar bem-estar, desde as acomodações até os serviços oferecidos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mt-1 mr-4">
                      <div className="w-10 h-10 rounded-full bg-fiori-green bg-opacity-10 flex items-center justify-center">
                        <span className="text-fiori-green text-lg">✦</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-fiori-earth">{feature.title}</h3>
                      <p className="text-sm text-fiori-dark/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="w-full md:w-1/2">
            <AnimateOnScroll delay={300}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-fiori-green rounded-sm z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden subtle-shadow">
                  <LazyImage 
                    src={siteImages.about.main}
                    alt="Jardim da Pousada Fiori com vista para as montanhas" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-fiori-wood rounded-sm z-0"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
