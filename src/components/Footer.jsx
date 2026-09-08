import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';
import { MapPin, Phone, Mail, Instagram, X } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
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
    <footer
      ref={footerRef}
      className="w-full bg-black text-white py-12 sm:py-20 px-3 sm:px-6 lg:px-10 font-poppins"
    >
      
      {/* Outer Container Box with Scroll Entrance Animation */}
      <div
        className={`w-full max-w-[1720px] mx-auto bg-[#060a12]/95 border border-[#00c8f0]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-12 lg:p-16 xl:p-20 shadow-[0_0_60px_rgba(0,200,240,0.15)] backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
        }`}
      >
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-20 items-start mb-10 sm:mb-20">
          
          {/* Column 1: Logo, Description & Contact info */}
          <div
            className={`md:col-span-6 lg:col-span-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="inline-block mb-7 group">
              <img
                src={logoImg}
                alt="Black Tattoo Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-9 max-w-lg">
              Premium tattoo studio dedicated to creating timeless, high-contrast body art.
            </p>

            {/* Studio Locations Grid (Ellis Nagar & Pasumalai) */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#00c8f0] uppercase tracking-[0.2em]">
                STUDIO LOCATIONS (MADURAI)
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Branch 1 - Dinesh */}
                <div className="bg-[#0b121e] border border-white/12 rounded-xl p-4 transition-all duration-300 hover:border-[#00c8f0]/60 hover:shadow-[0_0_20px_rgba(0,200,240,0.15)] group">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#00c8f0] text-black text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      BRANCH 1
                    </span>
                    <span className="text-white text-sm font-bold">Mr. Dinesh</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-gray-300 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-[#00c8f0] shrink-0 mt-0.5" />
                    <span>Ellis Nagar, Madurai</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-gray-300 text-sm">
                    <Phone className="w-4 h-4 text-[#00c8f0] shrink-0" />
                    <a href="tel:+918973747449" className="hover:text-[#00c8f0] transition-colors font-medium">
                      +91 89737 47449
                    </a>
                  </div>
                </div>

                {/* Branch 2 - Vijay */}
                <div className="bg-[#0b121e] border border-white/12 rounded-xl p-4 transition-all duration-300 hover:border-[#00c8f0]/60 hover:shadow-[0_0_20px_rgba(0,200,240,0.15)] group">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#00c8f0] text-black text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      BRANCH 2
                    </span>
                    <span className="text-white text-sm font-bold">Mr. Vijay</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-gray-300 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-[#00c8f0] shrink-0 mt-0.5" />
                    <span>Pasumalai, Madurai</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-gray-300 text-sm">
                    <Phone className="w-4 h-4 text-[#00c8f0] shrink-0" />
                    <a href="tel:+916382073503" className="hover:text-[#00c8f0] transition-colors font-medium">
                      +91 63820 73503
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: NAVIGATION */}
          <div
            className={`md:col-span-3 lg:col-span-3 lg:pl-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-250 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="text-base sm:text-lg font-bold text-[#00c8f0] uppercase tracking-[0.2em] mb-7">
              NAVIGATION
            </h4>
            <ul className="space-y-4 text-base sm:text-lg lg:text-xl font-medium">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, 'home')} 
                  className="inline-block text-gray-300 hover:text-[#00c8f0] hover:translate-x-1.5 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')} 
                  className="inline-block text-gray-300 hover:text-[#00c8f0] hover:translate-x-1.5 transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, 'services')} 
                  className="inline-block text-gray-300 hover:text-[#00c8f0] hover:translate-x-1.5 transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#artists" 
                  onClick={(e) => handleNavClick(e, 'artists')} 
                  className="inline-block text-gray-300 hover:text-[#00c8f0] hover:translate-x-1.5 transition-all duration-300"
                >
                  Artists
                </a>
              </li>
              <li>
                <a 
                  href="#book" 
                  onClick={(e) => handleNavClick(e, 'book')} 
                  className="inline-block text-gray-300 hover:text-[#00c8f0] hover:translate-x-1.5 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: FOLLOW US */}
          <div
            className={`md:col-span-3 lg:col-span-3 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="text-base sm:text-lg font-bold text-[#00c8f0] uppercase tracking-[0.2em] mb-7">
              FOLLOW US
            </h4>
            <div className="flex items-center space-x-5">
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d1624] border border-white/15 flex items-center justify-center text-[#00c8f0] hover:border-[#00c8f0] hover:bg-[#00c8f0] hover:text-black hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,200,240,0.6)] transition-all duration-300 shadow-md group"
              >
                <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter / X"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0d1624] border border-white/15 flex items-center justify-center text-[#00c8f0] hover:border-[#00c8f0] hover:bg-[#00c8f0] hover:text-black hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,200,240,0.6)] transition-all duration-300 shadow-md group"
              >
                <X className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div
          className={`border-t border-white/15 pt-10 flex flex-col sm:flex-row items-center justify-between text-base sm:text-lg text-gray-400 gap-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-550 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p>© 2024 Black Tattoo Studio. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-[#00c8f0] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#00c8f0] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
