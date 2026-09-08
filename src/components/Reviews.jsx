import React, { useState, useEffect, useRef } from 'react';
import clientArunImg from '../assets/client-arun.png';
import clientPriyaImg from '../assets/client-priya.png';
import clientKartikImg from '../assets/client-kartik.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
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

  const reviewsData = [
    {
      id: 1,
      quote: '"The Attention To Detail Was Incredible. The Artist Transformed My Idea Into A Masterpiece. Clean Studio, Friendly Staff, And An Unforgettable Experience."',
      name: 'ARUN K.',
      role: 'Custom Tattoo Client',
      avatar: clientArunImg,
    },
    {
      id: 2,
      quote: '"Absolute perfectionists! The realism on my portrait tattoo blew me away. Dhinesh & Vijay are true masters of body art with years of experience."',
      name: 'PRIYA S.',
      role: 'Portrait Tattoo Client',
      avatar: clientPriyaImg,
    },
    {
      id: 3,
      quote: '"Extremely hygienic studio with world-class equipment. They took the time to map out every fine detail before inking. 10/10 recommendation!"',
      name: 'KARTIK M.',
      role: 'Fine Line Tattoo Client',
      avatar: clientKartikImg,
    },
  ];

  // Auto-play timer for smooth review rotation
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, reviewsData.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/5 scroll-mt-20"
    >
      
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#069cc1]/12 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          
          {/* Eyebrow Tag */}
          <p
            className={`text-[#069cc1] font-inter text-sm sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold tracking-[0.22em] uppercase mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
            }`}
          >
            CLIENT REVIEWS
          </p>

          {/* Main Section Title */}
          <h2
            className={`font-koulen text-3xl sm:text-5xl md:text-[54px] lg:text-[62px] xl:text-[68px] font-normal text-white uppercase leading-tight tracking-normal mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-12 scale-95 pointer-events-none'
            }`}
          >
            WHAT OUR CLIENTS SAY
          </h2>

          {/* Subtitle Description */}
          <p
            className={`font-poppins text-gray-300 text-sm sm:text-base md:text-[18px] font-normal mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8 pointer-events-none'
            }`}
          >
            Real Stories. Real Experiences. Exceptional Artistry.
          </p>

          {/* Cyan Accent Bar Underneath */}
          <div
            className={`w-14 h-[3.5px] bg-[#069cc1] rounded-full mx-auto shadow-[0_0_12px_#069cc1] transition-all duration-700 delay-450 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />

        </div>

        {/* Reviews Cards Wrapper */}
        <div className="relative max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            className={`absolute left-0 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/90 border border-[#069cc1]/50 text-white flex items-center justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            } hover:bg-[#069cc1] hover:border-[#069cc1] hover:shadow-[0_0_20px_rgba(6,156,193,0.5)] active:scale-95 group cursor-pointer`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors" />
          </button>

          {/* 3 Review Cards Grid - Divide Outward on Scroll UP & DOWN */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 w-full items-stretch"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {reviewsData.map((review, index) => {
              const isActive = index === activeIndex;

              // Horizontal divide offset: Left card starts pushed right, Right card starts pushed left
              const divideTransformClass =
                index === 0
                  ? isVisible
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-24 sm:translate-x-32 scale-90 pointer-events-none'
                  : index === 1
                  ? isVisible
                    ? 'opacity-100 translate-y-0 scale-100 lg:scale-[1.04]'
                    : 'opacity-0 translate-y-12 scale-85 pointer-events-none'
                  : isVisible
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-24 sm:-translate-x-32 scale-90 pointer-events-none';

              return (
                <div
                  key={review.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative cursor-pointer rounded-[12px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform overflow-hidden ${divideTransformClass} ${
                    isActive
                      ? 'bg-[#090e17]/95 border-[1.5px] border-[#069cc1] shadow-[0_20px_50px_rgba(6,156,193,0.32)] z-20 ring-1 ring-[#069cc1]/50 -translate-y-3'
                      : 'bg-[#080d14]/75 border border-white/10 hover:border-white/30 shadow-xl z-10 hover:-translate-y-1'
                  }`}
                >
                  {/* Active Top Shimmer Light Bar */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#069cc1] to-transparent animate-pulse" />
                  )}

                  {/* Ambient Hover Gradient Shimmer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#069cc1]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[12px]" />

                  {/* Top Block: Quote Mark, 5-Star Rating & Review Text */}
                  <div className="relative z-10">
                    
                    {/* SVG Cyan Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className={`w-10 h-10 transition-all duration-500 transform ${
                          isActive ? 'text-[#069cc1] scale-110 rotate-[-4deg]' : 'text-[#069cc1]/60 group-hover:scale-105'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* 5 Scaled Up Animated Solid Gold Stars */}
                    <div className="flex items-center space-x-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          style={{ animationDelay: `${i * 150}ms` }}
                          className={`w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 text-amber-400 fill-amber-400 transition-all duration-500 transform ${
                            isActive
                              ? 'scale-110 drop-shadow-[0_0_10px_rgba(251,191,36,0.85)] animate-pulse'
                              : 'opacity-75 scale-95 group-hover:scale-105'
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className={`font-poppins text-base lg:text-[17.5px] font-normal leading-[1.65] mb-8 transition-all duration-500 ${
                      isActive ? 'text-white font-medium' : 'text-gray-300'
                    }`}>
                      {review.quote}
                    </p>

                  </div>

                  {/* Bottom Block: Client Avatar, Name & Tag */}
                  <div className="relative z-10 flex items-center space-x-4 pt-4 border-t border-white/10">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className={`w-13 h-13 rounded-full object-cover border transition-all duration-500 shadow-md ${
                        isActive ? 'border-[#069cc1] scale-110 shadow-[0_0_18px_rgba(6,156,193,0.6)]' : 'border-white/20 group-hover:scale-105'
                      }`}
                    />
                    <div>
                      <h4 className="font-poppins text-white text-lg font-bold tracking-wide uppercase leading-tight group-hover:text-[#08b4df] transition-colors duration-300">
                        {review.name}
                      </h4>
                      <p className="font-poppins text-gray-400 text-sm font-normal">
                        {review.role}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Review"
            className={`absolute right-0 sm:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-black/90 border border-[#069cc1]/50 text-white flex items-center justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            } hover:bg-[#069cc1] hover:border-[#069cc1] hover:shadow-[0_0_20px_rgba(6,156,193,0.5)] active:scale-95 group cursor-pointer`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors" />
          </button>

        </div>

        {/* Carousel Animated Pagination Dots */}
        <div className="flex items-center justify-center space-x-3 mt-12 sm:mt-14">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-500 ease-out focus:outline-none ${
                index === activeIndex
                  ? 'w-10 h-2.5 bg-[#069cc1] rounded-full shadow-[0_0_16px_#069cc1]'
                  : 'w-2.5 h-2.5 bg-white/30 rounded-full hover:bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Reviews;
