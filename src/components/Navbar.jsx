import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const idleTimeoutRef = useRef(null);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'ARTISTS', href: '#artists', id: 'artists' },
  ];

  // Scroll listener & idle auto-hide logic
  useEffect(() => {
    const handleScroll = () => {
      // Toggle header background opacity on scroll
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Instantly reveal navbar on any scroll activity (up or down)
      setVisible(true);

      // Reset existing idle timer
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }

      // Hide navbar after 2.2s of inactivity when scrolled past hero
      if (window.scrollY > 120) {
        idleTimeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, 2200);
      }

      // Active section scroll spy logic
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    // Reveal navbar when mouse moves to top of viewport
    const handleMouseMove = (e) => {
      if (e.clientY <= 90) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      visible || mobileMenuOpen || !scrolled
        ? 'translate-y-0 opacity-100 pointer-events-auto' 
        : '-translate-y-full opacity-0 pointer-events-none'
    } ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent border-b border-transparent py-4 sm:py-6'
    }`}>
      <div className="w-full max-w-[1680px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-36 h-20 sm:h-24 flex items-center justify-between">

        {/* Scaled Up Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          className="flex items-center group"
        >
          <img
            src={logoImg}
            alt="Black Tattoo Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-[64px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links with Active Line Indicator */}
        <nav className="hidden md:flex items-center space-x- lg:space-x- xl:space-x-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative font-inter text-sm md:text-[15px] lg:text-[16px] xl:text-[17px] font-semibold tracking-[0.12em] transition-colors duration-300 py-2 group ${
                  isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}

                {/* Underline Indicator Line for Active Page/Section - Solid White Line */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-white rounded-full transition-all duration-500 ease-out transform origin-center ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:block">
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, '#book', 'book')}
            className="inline-block border-2 border-[#069cc1] text-white font-inter text-xs sm:text-sm md:text-[14px] font-semibold tracking-[0.12em] uppercase px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-transparent hover:bg-[#069cc1] hover:shadow-[0_0_20px_rgba(6,156,193,0.5)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            BOOK APPOINTMENT
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`font-inter text-sm font-medium tracking-[0.14em] py-1 transition-colors flex items-center justify-between ${
                    isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-2">
            <a
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center border border-[#069cc1] text-white font-inter text-xs font-semibold tracking-[0.12em] py-3 rounded-[4px] bg-[#069cc1] hover:bg-[#08b4df] transition-colors"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
