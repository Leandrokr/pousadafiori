import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-10',
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center"
          aria-label="Pousada Fiori Home"
        >
          <h1 className={cn(
            'text-2xl md:text-3xl font-serif font-semibold tracking-tight transition-colors duration-300',
            isScrolled ? 'text-fiori-green' : 'text-fiori-light'
          )}>
            Pousada Fiori
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Acomodações', 'SPA', 'Sobre', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'font-medium transition-all duration-300 hover:text-fiori-wood',
                isScrolled ? 'text-fiori-dark' : 'text-fiori-light'
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              'block w-6 h-0.5 transition-all duration-300',
              isScrolled ? 'bg-fiori-dark' : 'bg-fiori-light',
              isMobileMenuOpen && 'rotate-45 translate-y-2'
            )} 
          />
          <span 
            className={cn(
              'block w-6 h-0.5 transition-all duration-300',
              isScrolled ? 'bg-fiori-dark' : 'bg-fiori-light',
              isMobileMenuOpen && 'opacity-0'
            )} 
          />
          <span 
            className={cn(
              'block w-6 h-0.5 transition-all duration-300',
              isScrolled ? 'bg-fiori-dark' : 'bg-fiori-light',
              isMobileMenuOpen && '-rotate-45 -translate-y-2'
            )} 
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-fiori-beige z-40 flex flex-col pt-24 px-6 transform transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {['Início', 'Acomodações', 'SPA', 'Sobre', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-fiori-dark text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
