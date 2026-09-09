import React, { useState, useEffect, useRef } from 'react';
import serviceCustomImg from '../assets/service-custom.png';
import servicePortraitImg from '../assets/service-portrait.png';
import serviceSleeveImg from '../assets/service-sleeve.png';
import serviceFinelineImg from '../assets/service-fineline.png';
import servicePiercingImg from '../assets/service-piercing.png';
import serviceMakeupImg from '../assets/service-makeup.png';

const servicesData = [
  {
    id: '01',
    numberTitle: '01. CUSTOM TATTOO',
    description: 'Personalized Tattoo Designs Crafted To Tell Your Unique Story.',
    image: serviceCustomImg,
  },
  {
    id: '02',
    numberTitle: '02. PORTRAIT TATTOO',
    description: 'Realistic Portraits That Preserve Memories With Exceptional Detail.',
    image: servicePortraitImg,
  },
  {
    id: '03',
    numberTitle: '03. FINE LINE TATTOO',
    description: 'Elegant, Minimal Designs With Clean Lines And Timeless Appeal.',
    image: serviceFinelineImg,
  },
  {
    id: '04',
    numberTitle: '04. SLEEVE TATTOO',
    description: 'Custom Sleeve Artwork Designed For Bold, Long-Lasting Impact.',
    image: serviceSleeveImg,
  },
  {
    id: '05',
    numberTitle: '05. PIERCING',
    description: 'Safe, Hygienic Piercing Services Performed With Professional Precision.',
    image: servicePiercingImg,
  },
  {
    id: '06',
    numberTitle: '06. PERMANENT MAKEUP',
    description: 'Enhance Your Natural Beauty With Long-Lasting Cosmetology.',
    image: serviceMakeupImg,
  },
];

const ServiceCard = ({ service, isVisible, index }) => (
  <div
    style={{
      transitionDelay: isVisible ? `${(index + 1) * 120}ms` : '0ms',
    }}
    className={`relative group rounded-[12px] border border-transparent bg-neutral-950 overflow-hidden w-full aspect-[427/326] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible
        ? 'opacity-100 translate-y-0 scale-100 filter brightness-100'
        : 'opacity-0 translate-y-16 scale-95 pointer-events-none filter brightness-50'
      } hover:border-[#069cc1] hover:shadow-[0_20px_50px_rgba(6,156,193,0.45)] hover:-translate-y-2.5 hover:scale-[1.02]`}
  >
    {/* Background Tattoo Image with Moody Dark Contrast Filter matching Card 01 */}
    <img
      src={service.image}
      alt={service.numberTitle}
      className="w-full h-full object-cover scale-[1.02] transition-all duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] contrast-[1.15] saturate-[0.90] group-hover:brightness-[0.98] group-hover:contrast-[1.10]"
    />

    {/* Overall Moody Dark Tint Overlay */}
    <div className="absolute inset-0 bg-black/30 pointer-events-none transition-opacity duration-500 group-hover:bg-black/15" />

    {/* Top Shadow Vignette (Matches Card 01 top dark framing) */}
    <div className="absolute top-0 inset-x-0 h-[35%] bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

    {/* Bottom Dark Gradient Overlay for Text Readability */}
    <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-black via-black/85 via-40% to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

    {/* Shimmer Sweep Effect on Hover */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

    {/* Card Content Overlay */}
    <div className="absolute bottom-0 inset-x-0 p-6 lg:p-7 flex flex-col justify-end z-10">

      {/* Animated Cyan Accent Underline Bar */}
      <div className="w-8 h-[2px] bg-[#069cc1] mb-2.5 rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-[#08b4df] group-hover:shadow-[0_0_12px_#08b4df]" />

      {/* Service Title with Number */}
      <h3 className="font-koulen text-2xl sm:text-[28px] lg:text-[32px] font-normal text-white uppercase leading-tight tracking-normal mb-2 group-hover:text-[#08b4df] transition-colors duration-300">
        {service.numberTitle}
      </h3>

      {/* Service Description */}
      <p className="font-poppins text-gray-300 text-[13px] sm:text-[14px] lg:text-[15px] font-normal leading-relaxed group-hover:text-white transition-colors duration-300">
        {service.description}
      </p>

    </div>
  </div>
);

const Services = () => {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-black text-white pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 border-t border-white/5 scroll-mt-28"
    >

      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#069cc1]/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Section Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-36 pt-12 sm:pt-16 lg:pt-20">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[950px] mx-auto mb-12 sm:mb-16">

          {/* Eyebrow Tag */}
          <p
            className={`text-[#069cc1] font-inter text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase mb-2.5 sm:mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-12 scale-95 pointer-events-none'
              }`}
          >
            OUR SERVICES
          </p>

          {/* Main Section Title */}
          <h2
            className={`font-koulen text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] xl:text-[58px] font-normal text-white uppercase leading-tight tracking-[0.02em] mb-3 sm:mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 transform ${isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-16 scale-95 pointer-events-none'
              }`}
          >
            WHAT WE OFFER
          </h2>

          {/* Subtitle Description */}
          <p
            className={`font-inter text-gray-300 text-xs sm:text-sm md:text-[15px] lg:text-[16px] font-normal leading-[1.6] max-w-[860px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 transform ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-12 pointer-events-none'
              }`}
          >
            From Custom Tattoos To Professional Piercing And Permanent Makeup, We Deliver Premium Body Art Services With Exceptional Craftsmanship, Precision, And The Highest Standards Of Hygiene.
          </p>

        </div>

        {/* 6 Services Grid Container - Staggered 3D Cascade Reveal on Scroll UP & DOWN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 max-w-[1620px] mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} isVisible={isVisible} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
