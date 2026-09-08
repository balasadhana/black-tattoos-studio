import React, { useState, useEffect, useRef } from 'react';
import aboutStudioImg from '../assets/about-studio.png';
import btMonogramImg from '../assets/bt-monogram.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset visibility so transition triggers smoothly when scrolling back up/down into view
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
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
      id="about" 
      ref={sectionRef}
      className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/5 scroll-mt-20"
    >
      {/* Main Content Container - Matches Header & Hero Left Alignment */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-36">
        {/* Grid Container - Increased Gap Between Image & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">

          {/* Left Column: Studio Interior Image (5 Columns) - Fades & Slides from Left */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-start transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isVisible 
              ? 'opacity-100 translate-x-0 translate-y-0 scale-100' 
              : 'opacity-0 -translate-x-16 translate-y-6 scale-95 pointer-events-none'
          }`}>
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[530px] aspect-square rounded-[12px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] group transition-all duration-500 hover:border-[#069cc1]/60 hover:shadow-[0_20px_50px_rgba(6,156,193,0.35)]">
              <img
                src={aboutStudioImg}
                alt="Black Tattoo Studio Interior"
                className="w-full h-full object-cover rounded-[12px] transition-all duration-700 ease-out group-hover:scale-106 filter brightness-105 group-hover:brightness-115"
              />
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-75" />
            </div>
          </div>

          {/* Right Column: Text Content & Visible Monogram Logo (7 Columns) - Slides from Right */}
          <div className={`relative lg:col-span-7 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 transform ${
            isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-20 scale-95 pointer-events-none'
          }`}>

            {/* Bounded Text & Logo Block */}
            <div className="relative z-10 flex flex-col w-full">

              {/* Eyebrow Tag */}
              <p className="text-[#069cc1] font-inter text-xs sm:text-sm md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-2.5 sm:mb-3 transition-transform duration-300 hover:translate-x-1 inline-block">
                ABOUT BLACK TATTOO
              </p>

              {/* Main Section Headline - Single Line Heading */}
              <h2 className="font-koulen text-2xl sm:text-4xl md:text-[40px] lg:text-[45px] xl:text-[50px] font-normal text-white uppercase leading-tight tracking-normal mb-5 sm:mb-6">
                MORE THAN INK. IT'S YOUR STORY.
              </h2>

              {/* Content Row: Paragraphs Left + Visible Monogram Logo Right */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-5 lg:gap-6 xl:gap-8">

                {/* Left Text Block */}
                <div className="relative z-10 flex-1 max-w-full md:max-w-[480px] lg:max-w-[520px] xl:max-w-[550px]">
                  {/* Paragraph 1 */}
                  <p className="font-inter text-xs sm:text-base md:text-[16px] lg:text-[17px] text-gray-300 font-normal leading-[1.68] tracking-normal mb-4 sm:mb-5">
                    At Black Tattoo, We Believe Every Tattoo Is A Reflection Of Individuality, Memories, And Self-Expression. Our Mission Is To Transform Your Ideas Into Meaningful Art Work That You'll Proudly Carry For A Lifetime.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="font-inter text-xs sm:text-base md:text-[16px] lg:text-[17px] text-gray-300 font-normal leading-[1.68] tracking-normal mb-6 sm:mb-8">
                    With A Team Of Experienced Artists, Premium-Quality Inks, &amp; Strict Hygiene Standards, We Provide A Safe, Comfortable, And Creative Environment For Every Client. Whether You're Getting Your First Tattoo, A Custom Masterpiece, A Professional Piercing, Or Permanent Makeup, We Ensure Every Detail Is Crafted With Precision And Care.
                  </p>

                  {/* Action CTA Button */}
                  <div>
                    <a
                      href="#book"
                      className="inline-block bg-[#069cc1] hover:bg-[#08b4df] text-white font-inter text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-[4px] shadow-[0_0_20px_rgba(6,156,193,0.4)] hover:shadow-[0_0_35px_rgba(8,180,223,0.8)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
                    >
                      BOOK APPOINTMENT
                    </a>
                  </div>
                </div>

                {/* Monogram Logo: Absolute Background Watermark on Mobile (< md), Relative Side Image on Desktop (>= md) */}
                <div className="absolute right-0 bottom-0 md:relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[290px] xl:w-[330px] h-[240px] sm:h-[300px] md:h-[380px] lg:h-[430px] flex items-center justify-center select-none pointer-events-none opacity-20 md:opacity-75 lg:opacity-85 z-0 md:z-10 ml-auto md:-mr-6 sm:-mr-10 lg:-mr-16 xl:-mr-20 animate-float">
                  <img
                    src={btMonogramImg}
                    alt="Black Tattoo Monogram Logo"
                    className="w-full h-full object-contain filter brightness-180 contrast-130 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-700 hover:scale-105"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
