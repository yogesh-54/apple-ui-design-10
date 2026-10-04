import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function HeroSection({ onWatchFilm }) {
  return (
    <section id="hero-section" className="pt-16 pb-12 sm:pb-20 bg-white overflow-hidden text-center">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-2">
          AirPods
        </h2>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6 max-w-4xl mx-auto leading-[1.08]">
          Wireless. Effortless. Magical.
        </h1>

        {/* Description Body Text */}
        <p className="max-w-[720px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#6e6e73] font-normal mb-6">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-fidelity sound. Just like magic.
        </p>

        {/* Watch Film Action */}
        <div className="flex justify-center items-center mb-12">
          <button
            onClick={onWatchFilm}
            className="inline-flex items-center gap-2 text-[#0071e3] hover:text-[#0077ed] text-lg font-medium group transition-colors"
          >
            <span>Watch the film</span>
            <PlayCircle className="w-5 h-5 fill-current text-transparent stroke-[#0071e3] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Hero Visual: AirPods 2 Floating from Case */}
        <div className="relative max-w-[850px] mx-auto mt-4 group">
          <div className="relative transition-transform duration-700 hover:scale-[1.02]">
            <img
              src="/assets/airpods-2-hero.png"
              alt="Apple AirPods 2nd Generation with Charging Case"
              className="w-full max-h-[620px] object-contain mx-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>
          {/* Subtle bottom gradient glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
