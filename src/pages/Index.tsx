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
      name: "Suíte G",
      description: "Nossa suíte mais espaçosa, perfeita para momentos especiais. Com 45m², oferece um ambiente sofisticado com jacuzzi privativo no quarto, varanda com vista panorâmica e decoração exclusiva.",
      capacity: "2 adultos",
      amenities: [
        "Cama King Size",
        "Jacuzzi privativo no quarto",
        "Varanda com vista panorâmica",
        "Café da manhã completo",
        "Ar-condicionado split",
        "Frigobar",
        "TV Smart 50\"",
        "Wi-Fi de alta velocidade",
        "Secador de cabelo",
        "Amenities exclusivos"
      ],
      imageSrc: siteImages.accommodations.suiteG.main,
      additionalImages: siteImages.accommodations.suiteG.additional
    },
    {
      id: 2,
      name: "Suíte M",
      description: "Conforto e elegância em 35m². Suíte intermediária com jacuzzi privativo, varanda aconchegante e todos os detalhes para uma estadia perfeita.",
      capacity: "2 adultos",
      amenities: [
        "Cama Queen Size",
        "Jacuzzi privativo no quarto",
        "Varanda privativa",
        "Café da manhã completo",
        "Ar-condicionado split",
        "Frigobar",
        "TV Smart 43\"",
        "Wi-Fi de alta velocidade",
        "Secador de cabelo",
        "Amenities exclusivos"
      ],
      imageSrc: siteImages.accommodations.suiteM.main,
      additionalImages: siteImages.accommodations.suiteM.additional
    },
    {
      id: 3,
      name: "Suíte P",
      description: "Aconchegante suíte de 30m², ideal para casais que buscam privacidade e contato com a natureza. Jacuzzi na varanda com vista para o jardim.",
      capacity: "2 adultos",
      amenities: [
        "Cama Queen Size",
        "Jacuzzi na varanda privativa",
        "Vista para o jardim",
        "Café da manhã completo",
        "Ar-condicionado split",
        "TV Smart 40\"",
        "Wi-Fi de alta velocidade",
        "Secador de cabelo",
        "Amenities exclusivos"
      ],
      imageSrc: siteImages.accommodations.suiteP.main,
      additionalImages: siteImages.accommodations.suiteP.additional
    }
  ]);

  // ... resto do código permanece igual ...
} 