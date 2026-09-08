import React, { useState, useEffect, useRef } from 'react';
import artistDhineshImg from '../assets/artist-dhinesh.png';
import artistVijayImg from '../assets/artist-vijay.png';
import badgeCertifiedImg from '../assets/badge-certified.png';
import badgeExpertsImg from '../assets/badge-experts.png';
import { Instagram, MessageCircle } from 'lucide-react';

const Artists = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const founders = [
    {
      id: 'dhinesh',
      role: 'FOUNDER & TATTOO ARTIST',
      name: 'MR.DHINESH',
      experience: '7+ Years Experience',
      image: artistDhineshImg,
      delay: 'delay-300',
      socials: {
        instagram: 'https://www.instagram.com/black_tattoos_2.0_madurai?stkn=MXMyMTVkejhtZWlzdQ%3D%3D',
        whatsapp: 'https://wa.me/918973747449',
      },
    },
    {
      id: 'vijay',
      role: 'FOUNDER & TATTOO ARTIST',
      name: 'MR.VIJAY',
      experience: '8+ Years Experience',
      image: artistVijayImg,
      delay: 'delay-500',
      socials: {
        instagram: 'https://www.instagram.com/_.black_tattoo_madurai._/',
        whatsapp: 'https://wa.me/916382073503',
      },
    },
  ];

  return (
    <section
      id="artists"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/5 scroll-mt-20"
    >

      {/* Section Content Wrapper - Increased Left Margin & Container Padding */}
      <div className="relative z-10 w-full max-w-[1760px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-36">

        {/* Main Grid Wrapper (items-start for top alignment with images) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start max-w-[1720px] w-full mx-auto">

          {/* Left Column: Eyebrow, Scaled Headline, Description, Custom Badges & CTA Button */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left max-w-[650px] mx-auto lg:mx-0 pt-1 lg:pt-3">

            {/* Eyebrow Tag */}
            <p
              className={`text-[#069cc1] font-inter text-sm sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold tracking-[0.22em] uppercase mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
              }`}
            >
              OUR ARTISTS
            </p>

            {/* Main Section Title */}
            <h2
              className={`font-koulen text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] xl:text-[54px] font-normal text-white uppercase leading-tight tracking-tight whitespace-nowrap mb-4 sm:mb-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-12 scale-95 pointer-events-none'
              }`}
            >
              MEET THE FOUNDERS
            </h2>

            {/* Description Paragraph */}
            <p
              className={`font-poppins text-gray-200 text-sm sm:text-base md:text-[18px] lg:text-[19px] font-normal leading-[1.65] max-w-[590px] mb-6 sm:mb-8 lg:mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10 pointer-events-none'
              }`}
            >
              The Founders Of Black Tattoo Combine <br className="hidden sm:inline" />
              Artistic Excellence, Years Of Experience, <br className="hidden sm:inline" />
              And A Passion For Creating Timeless Body Art.
            </p>

            {/* Custom Artwork Feature Badges Row - Shifted Left & Centered to Match Content */}
            <div
              className={`w-full max-w-[480px] lg:max-w-[520px] flex items-center justify-start gap-8 sm:gap-12 lg:gap-14 mb-8 lg:mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-450 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
              }`}
            >

              {/* Badge 1: Certified Professionals */}
              <div className="flex flex-col items-center text-center space-y-3 group">
                <img
                  src={badgeCertifiedImg}
                  alt="Certified Professionals Badge"
                  className="h-20 sm:h-24 md:h-[100px] w-auto object-contain filter brightness-110 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                <p className="font-poppins text-sm sm:text-base md:text-[16px] font-medium text-white leading-snug text-center transition-colors duration-300 group-hover:text-[#08b4df]">
                  Certified <br /> Professionals
                </p>
              </div>

              {/* Badge 2: Tattoo Experts */}
              <div className="flex flex-col items-center text-center space-y-3 group">
                <img
                  src={badgeExpertsImg}
                  alt="Tattoo Experts Badge"
                  className="h-20 sm:h-24 md:h-[100px] w-auto object-contain filter brightness-110 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                <p className="font-poppins text-sm sm:text-base md:text-[16px] font-medium text-white leading-snug text-center transition-colors duration-300 group-hover:text-[#08b4df]">
                  Tattoo Experts
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div
              className={`mt-2 sm:mt-4 lg:mt-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-600 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              <a
                href="#book"
                className="inline-block bg-[#069cc1] hover:bg-[#08b4df] text-white font-inter text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.14em] uppercase px-8 py-3.5 sm:px-10 sm:py-4 lg:px-12 lg:py-4.5 rounded-[4px] shadow-[0_4px_25px_rgba(6,156,193,0.35)] transition-all duration-300 hover:shadow-[0_6px_35px_rgba(6,156,193,0.5)] hover:-translate-y-1 active:scale-95"
              >
                BOOK APPOINTMENT
              </a>
            </div>

          </div>

          {/* Right Column: 2 Founder Cards Grid */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7 xl:gap-8 w-full">
            {founders.map((artist) => (
              <div
                key={artist.id}
                className={`relative group rounded-xl sm:rounded-2xl border border-white/20 bg-neutral-950 overflow-hidden aspect-[4/5.2] h-[460px] sm:h-[520px] lg:h-[580px] w-full shadow-2xl transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${artist.delay} transform ${
                  isVisible
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                } hover:border-[#069cc1] hover:shadow-[0_12px_40px_rgba(6,156,193,0.4)]`}
              >
                {/* Background Artist Image */}
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 filter brightness-105 contrast-105 group-hover:brightness-115"
                />

                {/* Dark Vignette Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-black/98 via-black/55 to-transparent pointer-events-none" />

                {/* Card Bottom Text & Socials Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-end z-10">

                  {/* Subtle Accent Line & Eyebrow Role Tag */}
                  <div className="border-t border-white/15 pt-3 mb-1.5">
                    <p className="text-[#069cc1] font-inter text-xs lg:text-[13px] font-bold tracking-[0.18em] uppercase">
                      {artist.role}
                    </p>
                  </div>

                  {/* Founder Name */}
                  <h3 className="font-koulen text-3xl sm:text-[36px] lg:text-[40px] font-normal text-white uppercase leading-tight tracking-normal mb-1 group-hover:text-[#08b4df] transition-colors duration-300">
                    {artist.name}
                  </h3>

                  {/* Experience */}
                  <p className="font-poppins text-gray-300 text-xs sm:text-[14px] lg:text-[15px] font-normal mb-4">
                    {artist.experience}
                  </p>

                  {/* Social Media Icons */}
                  <div className="flex items-center space-x-3.5 pt-1">

                    {/* Instagram */}
                    <a
                      href={artist.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${artist.name} Instagram`}
                      className="w-9 h-9 rounded-full bg-[#069cc1] text-black flex items-center justify-center hover:bg-[#08b4df] hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <Instagram size={18} className="stroke-[2.5]" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={artist.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${artist.name} WhatsApp`}
                      className="w-9 h-9 rounded-full bg-[#069cc1] text-black flex items-center justify-center hover:bg-[#08b4df] hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <MessageCircle size={18} className="stroke-[2.5]" />
                    </a>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Artists;
