import { useState } from 'react';
import { AnimateOnScroll } from './Animations';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

type TestimonialType = {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  accommodation: string;
};

const Testimonials = () => {
  const [testimonials] = useState<TestimonialType[]>([
    {
      id: 1,
      name: "Mariana Silva",
      location: "São Paulo, SP",
      comment: "Nossa estadia na Suíte Violeta foi incrível! O contato com a natureza, a tranquilidade do local e o conforto da acomodação superaram nossas expectativas. Com certeza voltaremos!",
      rating: 5,
      accommodation: "Violeta"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      comment: "A Suíte Rosa oferece uma vista deslumbrante e todo o conforto que precisávamos para nosso fim de semana romântico. O café da manhã é simplesmente espetacular.",
      rating: 5,
      accommodation: "Rosa"
    },
    {
      id: 3,
      name: "Família Rodrigues",
      location: "Belo Horizonte, MG",
      comment: "A Suíte Lírios foi perfeita para nossa reunião familiar. Espaçosa, bem equipada e com uma localização privilegiada. As crianças adoraram explorar a natureza ao redor.",
      rating: 4,
      accommodation: "Lírios"
    },
    {
      id: 4,
      name: "Amanda e Paulo",
      location: "Florianópolis, SC",
      comment: "Passamos nossa lua de mel na Suíte Dália e foi mágico! O jacuzzi no quarto e o atendimento personalizado fizeram toda a diferença. Recomendamos muito!",
      rating: 5,
      accommodation: "Dália"
    }
  ]);

  return (
    <section id="depoimentos" className="section-padding bg-fiori-beige">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-fiori-green text-white text-sm font-medium rounded-full mb-3">
              Experiências Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-fiori-earth">
              O que nossos hóspedes dizem
            </h2>
            <p className="text-fiori-dark/70 max-w-2xl mx-auto">
              Descubra as experiências autênticas de quem já se hospedou na Pousada Fiori e viveu momentos especiais em nosso refúgio na natureza.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.id} delay={index * 200}>
              <Card className="hover-lift overflow-hidden border border-fiori-light/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        } mr-1`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-fiori-dark/60">
                      Hospedado em: {testimonial.accommodation}
                    </span>
                  </div>
                  <p className="italic text-fiori-dark/80 mb-4">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div>
                      <p className="font-medium text-fiori-earth">{testimonial.name}</p>
                      <p className="text-sm text-fiori-dark/60">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll delay={400}>
          <div className="text-center mt-12">
            <p className="text-fiori-dark/70 mb-6">
              Junte-se aos nossos hóspedes satisfeitos e crie suas próprias memórias inesquecíveis.
            </p>
            <a 
              href="#contato" 
              className="button-primary inline-flex items-center"
            >
              Faça sua reserva
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
