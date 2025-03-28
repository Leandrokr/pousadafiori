
import { useEffect, useRef, useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const LazyImage = ({ src, alt, className = '' }: LazyImageProps) => {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imgRef.current) {
          const img = imgRef.current;
          const actualSrc = img.getAttribute('data-src');
          
          if (actualSrc) {
            img.setAttribute('src', actualSrc);
            img.onload = () => setLoading(false);
          }
          
          observer.unobserve(img);
        }
      });
    });
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      data-src={src}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
      alt={alt}
      className={`smooth-image ${loading ? 'loading' : 'loaded'} ${className}`}
    />
  );
};

type AnimateOnScrollProps = {
  children: React.ReactNode;
  threshold?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right';
  delay?: number;
};

export const AnimateOnScroll = ({
  children,
  threshold = 0.1,
  animation = 'fade-in-up',
  delay = 0
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
