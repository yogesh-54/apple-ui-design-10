import React from 'react';

export default function WirelessFullestSection() {
  return (
    <section className="bg-black text-white pt-24 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Wireless to the fullest.
        </h2>

        {/* Section Paragraph */}
        <p className="max-w-[700px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#a1a1a6] font-normal mb-14">
          After a simple one-tap setup, AirPods are automatically on and always connected. They sense when they’re in your ears and pause when you take them out. And the experience is just as amazing whether you’re listening to your iPhone, Apple Watch, iPad, Mac, or Apple TV.
        </p>

        {/* High Contrast Dramatic Portrait Visual */}
        <div className="relative max-w-[860px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 group">
          <img
            src="/assets/airpods_man_dark.jpg"
            alt="Man wearing Apple AirPods in profile against black background"
            className="w-full h-auto max-h-[680px] object-cover mx-auto transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />
          {/* Subtle vignette border around image */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
