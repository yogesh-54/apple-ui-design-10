import React, { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PromoBannersSection({ onOpenBuyWithEngraving, onOpenAppleMusic }) {
  const [customText, setCustomText] = useState('😃');

  const presetEmojis = ['😃', '👽', '🦄', '❤️', '⚡', '🚀', '🎧', 'JML'];

  return (
    <section className="bg-white text-[#1d1d1f] pt-20 pb-16 sm:pb-24 border-t border-[#f2f2f5] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Banner 1: Engraving Banner */}
        <div className="bg-[#fafafc] rounded-3xl p-8 sm:p-12 border border-[#f2f2f5] flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
              Engrave them for free.
            </h3>
            <p className="text-[17px] text-[#6e6e73] font-normal mb-5 leading-relaxed">
              Add an emoji, text, and numbers to make your AirPods uniquely yours. Only at Apple.
            </p>
            <button
              onClick={onOpenBuyWithEngraving}
              className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] font-medium text-base group/link"
            >
              <span>Personalize yours</span>
              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
            </button>

            {/* Quick interactive engraving preview */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start items-center">
              <span className="text-xs text-[#86868b] mr-1">Try emoji:</span>
              {presetEmojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setCustomText(emoji)}
                  className={`px-2 py-1 text-xs rounded-lg transition-all border ${
                    customText === emoji
                      ? 'bg-black text-white border-black scale-105'
                      : 'bg-white text-[#1d1d1f] border-[#d2d2d7] hover:border-black'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Engraving Visual */}
          <div className="relative w-full max-w-[480px]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/assets/airpods_engraving_cases.jpg"
                alt="AirPods cases with custom engravings"
                className="w-full h-auto object-cover rounded-2xl drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Live custom tag overlay on middle case */}
            <div className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-xs font-mono font-medium shadow-md pointer-events-none flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#ff9500]" />
              <span>{customText}</span>
            </div>
          </div>
        </div>

        {/* Banner 2: Apple Music Free Offer */}
        <div className="bg-[#fafafc] rounded-3xl p-8 sm:p-12 border border-[#f2f2f5] flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="max-w-md text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#fa243c] mb-2 block">
              Apple Music
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
              Get 6 months of Apple Music free with your AirPods.*
            </h3>
            <button
              onClick={onOpenAppleMusic}
              className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] font-medium text-base group/link mt-2"
            >
              <span>Learn more</span>
              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Apple Music 3D Cube Card */}
          <div className="w-full max-w-[340px] flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-105 border border-[#fa243c]/10">
              <img
                src="/assets/apple_music_box.jpg"
                alt="Apple Music 6 Months Free"
                className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
