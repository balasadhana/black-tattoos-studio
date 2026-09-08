import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-start"
    >
      {/* Background Image Layer with Mobile-Optimized Position */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat filter brightness-110 contrast-105 transition-all duration-700"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center center',
        }}
      />

      {/* Responsive Gradient Overlay: Top-to-Bottom on Mobile for Image Visibility, Left-to-Right on Desktop */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/50 to-black/80 md:from-black/95 md:via-black/75 md:to-transparent pointer-events-none" />

      {/* Content Container aligned 100% straight with the Black Tattoo Logo */}
      <div className="relative z-10 w-full max-w-[1650px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-36 pt-28 sm:pt-32 md:pt-36 lg:pt-[220px] xl:pt-[260px] pb-16">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col items-start text-left">

          {/* Eyebrow Tag - TOP */}
          <p className="text-[#069cc1] font-inter text-xs sm:text-sm md:text-[15px] font-semibold tracking-[0.22em] uppercase mb-3 sm:mb-4 animate-fade-in-up animation-delay-100">
            PREMIUM TATTOO STUDIO
          </p>

          {/* Main Headline - MIDDLE */}
          <h1 className="font-koulen text-3xl sm:text-5xl md:text-[68px] lg:text-[78px] xl:text-[84px] font-normal text-white uppercase leading-[1.04] tracking-normal mb-4 sm:mb-5 animate-fade-in-up animation-delay-250">
            INK YOUR STORY.<br />
            <span>WEAR YOUR IDENTITY.</span>
          </h1>

          {/* Subheading - BELOW HEADLINE */}
          <p className="w-full flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 font-inter text-xs sm:text-base md:text-[18px] lg:text-[20px] text-white/90 font-medium tracking-[0.02em] mb-7 sm:mb-9 animate-fade-in-up animation-delay-400">
            <span>Custom Tattoos</span>
            <span className="text-white/60 font-bold text-sm sm:text-base mx-1">•</span>
            <span>Professional Piercing</span>
            <span className="text-white/60 font-bold text-sm sm:text-base mx-1">•</span>
            <span>Permanent Makeup</span>
          </p>

          {/* Action Buttons - BOTTOM */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up animation-delay-550">
            {/* Primary Button - BOOK APPOINTMENT */}
            <a
              href="#book"
              className="group relative overflow-hidden bg-[#069cc1] hover:bg-[#08b4df] text-white font-inter text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-[4px] text-center shadow-[0_0_20px_rgba(6,156,193,0.4)] hover:shadow-[0_0_35px_rgba(8,180,223,0.8)] hover:-translate-y-1 transition-all duration-300 active:scale-95 active:translate-y-0"
            >
              {/* Shimmer Sweep Effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
              <span className="relative z-10">BOOK APPOINTMENT</span>
            </a>

            {/* Secondary Button - VIEW SERVICES */}
            <a
              href="#services"
              className="group relative overflow-hidden bg-transparent border border-white/70 hover:border-[#069cc1] hover:bg-[#069cc1]/15 text-white font-inter text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-[4px] text-center hover:shadow-[0_0_25px_rgba(6,156,193,0.45)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 active:translate-y-0"
            >
              {/* Shimmer Sweep Effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#069cc1]/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
              <span className="relative z-10">VIEW SERVICES</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-white">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
