import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

export default function AudioSharingSection() {
  const [vol1, setVol1] = useState(65);
  const [vol2, setVol2] = useState(80);

  return (
    <section className="bg-white text-[#1d1d1f] pt-24 pb-16 sm:pb-24 border-t border-[#f2f2f5] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          Two can play this song.
        </h2>

        {/* Section Subtext */}
        <p className="max-w-[740px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#6e6e73] font-normal mb-14">
          With Audio Sharing, you can easily share a song, podcast, or other audio stream between two sets of AirPods — each with independent volume control. If your AirPods are in their case, just bring them close to the iPhone or iPad you want to share with and connect in a tap.
        </p>

        {/* Audio Sharing Visual */}
        <div className="relative max-w-[820px] mx-auto group">
          <img
            src="/assets/airpods_audio_sharing.jpg"
            alt="Audio Sharing with two sets of AirPods"
            className="w-full h-auto max-h-[580px] object-contain mx-auto drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Interactive Audio Sharing Controls */}
          <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Interactive Audio Sharing
              </span>
              <span className="text-xs text-[#86868b]">Independent Volume</span>
            </div>

            {/* Slider 1: Liam's AirPods */}
            <div className="mb-3">
              <div className="flex justify-between text-xs font-medium text-[#1d1d1f] mb-1">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#0071e3]" />
                  Liam's AirPods
                </span>
                <span>{vol1}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={vol1}
                onChange={(e) => setVol1(Number(e.target.value))}
                className="w-full h-1.5 bg-[#d2d2d7] rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
              />
            </div>

            {/* Slider 2: Maya's AirPods */}
            <div>
              <div className="flex justify-between text-xs font-medium text-[#1d1d1f] mb-1">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#0071e3]" />
                  Maya's AirPods
                </span>
                <span>{vol2}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={vol2}
                onChange={(e) => setVol2(Number(e.target.value))}
                className="w-full h-1.5 bg-[#d2d2d7] rounded-lg appearance-none cursor-pointer accent-[#0071e3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
