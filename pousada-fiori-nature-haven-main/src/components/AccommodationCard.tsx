
import { useState } from 'react';
import { LazyImage, AnimateOnScroll } from './Animations';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export type AccommodationType = {
  id: number;
  name: string;
  description: string;
  capacity: string;
  amenities: string[];
  imageSrc: string;
  additionalImages?: string[]; // Array de imagens adicionais
};

type AccommodationCardProps = {
  accommodation: AccommodationType;
  index: number;
};

const AccommodationCard = ({ accommodation, index }: AccommodationCardProps) => {
  const { name, description, capacity, amenities, imageSrc, additionalImages = [] } = accommodation;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // WhatsApp number updated
  const whatsappNumber = "47996345025";
  
  // Todas as imagens para o carrossel (imagem principal + adicionais)
  const allImages = [imageSrc, ...(additionalImages || [])];
  
  // Function to handle WhatsApp reservation
  const handleReservation = () => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre a reserva da acomodação "${name}" na Pousada Fiori.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimateOnScroll delay={index * 150}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="glass-card overflow-hidden group hover-lift cursor-pointer">
            <div className="h-64 overflow-hidden">
              <LazyImage
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover image-hover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-fiori-earth mb-2">{name}</h3>
              <p className="text-sm text-fiori-dark/80 mb-4">{description}</p>
              
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiori-wood mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm text-fiori-dark/80">{capacity}</span>
              </div>
              
              <div className="border-t border-fiori-beige pt-4">
                <h4 className="text-sm font-medium mb-2">Comodidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((amenity, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-fiori-beige rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReservation();
                  }}
                  className="block w-full py-2 text-center text-fiori-green border border-fiori-green rounded-md transition hover:bg-fiori-green hover:text-white"
                >
                  Reservar agora
                </button>
              </div>
            </div>
          </div>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-4xl p-0 bg-white">
          <div className="p-6">
            <h2 className="text-2xl font-serif font-semibold text-fiori-earth mb-4">{name}</h2>
            <p className="text-fiori-dark/80 mb-6">{description}</p>
            
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {allImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="flex items-center justify-center p-1">
                      <LazyImage 
                        src={img} 
                        alt={`${name} - Imagem ${i+1}`} 
                        className="rounded-lg max-h-[60vh] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="mt-8">
              <h3 className="text-xl font-serif font-semibold text-fiori-earth mb-3">Detalhes da Acomodação</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Capacidade</h4>
                  <p className="flex items-center text-fiori-dark/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fiori-wood mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {capacity}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Comodidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {amenities.map((amenity, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-fiori-beige rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={handleReservation}
                  className="px-6 py-3 text-white bg-fiori-green rounded-md transition hover:bg-fiori-green/90 inline-flex items-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.882-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Reservar via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AnimateOnScroll>
  );
};

export default AccommodationCard;
