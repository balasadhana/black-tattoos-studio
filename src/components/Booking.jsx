import React, { useState } from 'react';
import bookingTattooImg from '../assets/booking-tattoo-machine.png';
import artistDhinesh from '../assets/artist-dhinesh.png';
import artistVijay from '../assets/artist-vijay.png';
import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  FileText,
  Check,
  ChevronDown
} from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    time: '',
    email: '',
    artist: 'Dinesh (Artist & founder)',
    selectedServices: ['01'],
    conceptDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    {
      id: '01',
      title: 'Custom Tattoo',
      desc: 'Bespoke layouts tailored to your unique concept.'
    },
    {
      id: '02',
      title: 'Portrait Artwork',
      desc: 'Hyper-realistic memory captures.'
    },
    {
      id: '03',
      title: 'Fine Line',
      desc: 'Elegant, clean minimal linework.'
    },
    {
      id: '04',
      title: 'Full Sleeve',
      desc: 'Cohesive flowing multi-session sleeves.'
    },
    {
      id: '05',
      title: 'Precision Piercing',
      desc: 'Safe & certified anatomic piercing.'
    },
    {
      id: '06',
      title: 'Permanent Makeup',
      desc: 'Premium cosmetic enhancements.'
    }
  ];

  const artistsList = [
    {
      id: 'dinesh',
      name: 'Dinesh (Artist & founder)',
      phone: '918973747449', // Artist Dinesh WhatsApp (+91 8973747449)
      image: artistDhinesh
    },
    {
      id: 'vijay',
      name: 'Vijay (Artist & founder)',
      phone: '916382073503', // Artist Vijay WhatsApp (+91 6382073503)
      image: artistVijay
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (id) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter(sId => sId !== id)
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, id]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Identify selected artist and their target WhatsApp number
    const selectedArtistObj = artistsList.find(a => a.name === formData.artist);
    const targetPhone = selectedArtistObj ? selectedArtistObj.phone : '918973747449';

    // Helper to format YYYY-MM-DD to DD/MM/YYYY
    const formatDDMMYYYY = (dateStr) => {
      if (!dateStr) return 'Not specified';
      if (dateStr.includes('-')) {
        const parts = dateStr.split('-');
        if (parts.length === 3) {
          return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
        }
      }
      return dateStr;
    };

    // Format selected services
    const selectedServiceTitles = servicesList
      .filter(s => formData.selectedServices.includes(s.id))
      .map(s => `• *${s.id}. ${s.title}*`)
      .join('\n');

    // Construct clean, professional WhatsApp message with highlighted shop name & bold headings
    const whatsappMessage = 
`⚡ *BLACK TATTOO STUDIO* ⚡
*✦ APPOINTMENT BOOKING REQUEST ✦*

──────────────────────────
*ARTIST REQUESTED:*
► *${formData.artist}*

*CLIENT INFORMATION:*
• *Name:* ${formData.fullName}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}

*APPOINTMENT SCHEDULE:*
• *Date:* ${formatDDMMYYYY(formData.date)}
• *Time Slot:* ${formData.time || 'Not specified'}

*SELECTED SERVICES:*
${selectedServiceTitles || '• *Custom Tattoo*'}

*DESIGN CONCEPT & DETAILS:*
• ${formData.conceptDetails ? formData.conceptDetails : 'No additional details provided.'}
──────────────────────────
_Sent via BlackTattoo Online Booking_`;

    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setSubmitted(false);
      // Open WhatsApp chat directly in new window/app
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="book" className="relative w-full bg-black text-white py-16 sm:py-24 overflow-hidden border-t border-white/10">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#00c8f0]/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-14 px-2">
          <p className="text-[#00c8f0] font-poppins text-xs sm:text-sm font-bold tracking-[0.22em] uppercase mb-2">
            BOOK APPOINTMENT
          </p>
          <h2 className="font-koulen text-3xl sm:text-5xl lg:text-6xl font-normal text-white uppercase tracking-normal mb-3">
            LET'S CREATE YOUR NEXT MASTERPIECE
          </h2>
          <p className="font-poppins text-gray-300 text-xs sm:text-base max-w-2xl leading-relaxed">
            Share Your Idea With Us, And Our Artists Will Get In Touch To Schedule Your Personalized Consultation.
          </p>
        </div>

        {/* Floating Container Wrapper with Decorative Ambient Aura */}
        <div className="relative group max-w-[1620px] mx-auto">

          {/* Floating Outer Ambient Glow Shadow Aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00c8f0]/30 via-[#069cc1]/20 to-[#00c8f0]/30 rounded-[28px] sm:rounded-[36px] blur-2xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 pointer-events-none animate-pulse" />

          {/* Single Unified Floating Container Card housing BOTH Image and Form */}
          <div className="relative bg-[#050a12]/90 border border-[#00c8f0]/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 backdrop-blur-2xl animate-floating-card transition-all duration-700 hover:border-[#00c8f0]/70">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* Left Column: High-Res Tattoo Action Image Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#070d17] shadow-xl h-full min-h-[360px] lg:min-h-[700px] w-full flex flex-col justify-between p-5 lg:p-8 group">

                {/* Background Image */}
                <img
                  src={bookingTattooImg}
                  alt="Tattoo Machine Precision Inking Action"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 pointer-events-none" />

                {/* Top Overlay Text */}
                <div className="relative z-10 pt-2">
                  <span className="bg-[#00c8f0] text-black font-poppins font-extrabold text-xs px-3.5 py-1.5 rounded-full inline-block tracking-wider uppercase mb-5 shadow-lg">
                    ELITE STANDARD
                  </span>

                  <h3 className="font-koulen text-3xl sm:text-4xl lg:text-[44px] text-white uppercase tracking-tight mb-3 leading-none">
                    INKED WITH PRECISION.
                  </h3>

                  <p className="font-poppins text-gray-300 text-sm lg:text-base leading-relaxed max-w-md">
                    Every detail is meticulously crafted to turn your vision into permanent, high-contrast, premium body art.
                  </p>
                </div>

                {/* Bottom Overlay Text */}
                <div className="relative z-10 pt-5 border-t border-white/20">
                  <p className="font-poppins text-xs text-gray-300 font-semibold tracking-wider uppercase">
                    HYGIENE CERTIFIED • 100% DISPOSABLE SETUP
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Appointment Form inside the SAME Container */}
            <div className="lg:col-span-7 flex flex-col justify-center p-2 sm:p-4">

              <form onSubmit={handleSubmit}>

                {/* Section 1: APPOINTMENT DETAILS */}
                <div className="mb-8">
                  <h3 className="font-poppins text-lg sm:text-xl font-bold tracking-wider text-[#00c8f0] uppercase pb-2.5 mb-6 border-b border-white/10 flex items-center justify-between">
                    <span>APPOINTMENT DETAILS</span>
                  </h3>

                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                    {/* Full Name */}
                    <div>
                      <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <div className="bg-[#0b121e] border border-white/12 rounded-lg p-3.5 flex items-center space-x-3 transition-colors focus-within:border-[#00c8f0] focus-within:ring-1 focus-within:ring-[#00c8f0]">
                        <User className="w-5 h-5 text-[#00c8f0] shrink-0" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full bg-transparent text-white font-poppins text-sm placeholder-gray-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="bg-[#0b121e] border border-white/12 rounded-lg p-3.5 flex items-center space-x-3 transition-colors focus-within:border-[#00c8f0] focus-within:ring-1 focus-within:ring-[#00c8f0]">
                        <Phone className="w-5 h-5 text-[#00c8f0] shrink-0" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 12345 67890"
                          className="w-full bg-transparent text-white font-poppins text-sm placeholder-gray-500 focus:outline-none"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Row 2: Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                    {/* Preferred Date */}
                    <div>
                      <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <div className="bg-[#0b121e] border border-white/12 rounded-lg p-3.5 flex items-center space-x-3 transition-colors focus-within:border-[#00c8f0] focus-within:ring-1 focus-within:ring-[#00c8f0]">
                        <Calendar className="w-5 h-5 text-[#00c8f0] shrink-0" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-transparent text-white font-poppins text-sm focus:outline-none [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Preferred Time
                      </label>
                      <div className="bg-[#0b121e] border border-white/12 rounded-lg p-3.5 flex items-center space-x-3 transition-colors focus-within:border-[#00c8f0] focus-within:ring-1 focus-within:ring-[#00c8f0] relative">
                        <Clock className="w-5 h-5 text-[#00c8f0] shrink-0" />
                        <select
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-transparent text-white font-poppins text-sm focus:outline-none appearance-none cursor-pointer pr-6"
                        >
                          <option value="" className="bg-[#0b121e] text-gray-400">Select Time Slot</option>
                          <option value="10:00 AM - 01:00 PM" className="bg-[#0b121e] text-white">10:00 AM - 01:00 PM</option>
                          <option value="01:30 PM - 04:30 PM" className="bg-[#0b121e] text-white">01:30 PM - 04:30 PM</option>
                          <option value="05:00 PM - 08:00 PM" className="bg-[#0b121e] text-white">05:00 PM - 08:00 PM</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                  </div>

                  {/* Row 3: Email Address */}
                  <div className="mb-5">
                    <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="bg-[#0b121e] border border-white/12 rounded-lg p-3.5 flex items-center space-x-3 transition-colors focus-within:border-[#00c8f0] focus-within:ring-1 focus-within:ring-[#00c8f0]">
                      <Mail className="w-5 h-5 text-[#00c8f0] shrink-0" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@blacktattoo.com"
                        className="w-full bg-transparent text-white font-poppins text-sm placeholder-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 4: Preference Artist */}
                  <div>
                    <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2.5">
                      Preference Artist
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {artistsList.map(artist => {
                        const isSelected = formData.artist === artist.name;
                        return (
                          <button
                            key={artist.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, artist: artist.name }))}
                            className={`flex items-center space-x-3.5 p-3.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${isSelected
                                ? 'border-[#00c8f0] bg-[#082030]/90 text-white shadow-[0_0_15px_rgba(0,200,240,0.15)] ring-1 ring-[#00c8f0]'
                                : 'border-white/12 bg-[#0b121e] text-gray-300 hover:border-white/25 hover:text-white'
                              }`}
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20 bg-neutral-800 flex items-center justify-center">
                              <img
                                src={artist.image}
                                alt={artist.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="font-poppins text-sm font-medium">
                              {artist.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Section 2: SELECT SERVICES */}
                <div className="mb-8">
                  <h3 className="font-poppins text-lg sm:text-xl font-bold tracking-wider text-[#00c8f0] uppercase mb-5">
                    SELECT SERVICES
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesList.map(service => {
                      const isSelected = formData.selectedServices.includes(service.id);
                      return (
                        <div
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${isSelected
                              ? 'border-[#00c8f0] bg-[#082030]/80 shadow-[0_0_20px_rgba(0,200,240,0.15)] ring-1 ring-[#00c8f0]'
                              : 'border-white/10 bg-[#0b121e] hover:border-white/20 hover:bg-[#0e1624]'
                            }`}
                        >
                          <div>
                            {/* Top row: Number and Checkbox */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-mono text-sm font-bold text-[#00c8f0]">
                                {service.id}
                              </span>
                              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected
                                  ? 'border-[#00c8f0] bg-[#00c8f0] text-black'
                                  : 'border-white/30 bg-transparent'
                                }`}>
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>

                            {/* Title */}
                            <h4 className="font-poppins text-base font-bold text-white mb-1">
                              {service.title}
                            </h4>

                            {/* Description */}
                            <p className="font-poppins text-xs text-gray-400 leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Design Concept & Details */}
                <div className="mb-8">
                  <label className="block font-poppins text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Design Concept & Details
                  </label>
                  <div className="bg-[#0b121e] border border-white/12 rounded-lg p-3.5 flex items-start space-x-3 transition-colors focus-within:border-[#00c8f0] focus-within:ring-1 focus-within:ring-[#00c8f0]">
                    <FileText className="w-5 h-5 text-[#00c8f0] shrink-0 mt-0.5" />
                    <textarea
                      name="conceptDetails"
                      value={formData.conceptDetails}
                      onChange={handleChange}
                      placeholder="Briefly describe placement, size, inspiration references, or details..."
                      rows={3}
                      className="w-full bg-transparent text-white font-poppins text-sm placeholder-gray-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Section 4: REQUEST APPOINTMENT VIA WHATSAPP Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-[#00c8f0] hover:bg-[#08d9ff] active:scale-[0.99] text-black font-poppins font-extrabold text-base sm:text-lg tracking-wider uppercase py-4 rounded-lg shadow-[0_0_25px_rgba(0,200,240,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,200,240,0.55)] flex items-center justify-center space-x-2.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-6 h-6 text-black" />
                  <span>{submitted ? 'OPENING WHATSAPP...' : 'REQUEST APPOINTMENT VIA WHATSAPP'}</span>
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
  );
};

export default Booking;
