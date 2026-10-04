import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function InstantSetupSection() {
  const [connected, setConnected] = useState(false);

  return (
    <section className="bg-white text-[#1d1d1f] pt-24 pb-16 sm:pb-24 border-t border-[#f2f2f5] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          Instant setup. Easy listening.
        </h2>

        {/* Section Subtext */}
        <p className="max-w-[700px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#6e6e73] font-normal mb-14">
          AirPods connect immediately, and sound seamlessly switches between your iPhone, Apple Watch, Mac, iPad, and Apple TV.
        </p>

        {/* Ecosystem Setup Visual */}
        <div className="relative max-w-[820px] mx-auto group">
          <img
            src="/assets/airpods_instant_setup.jpg"
            alt="AirPods instant connection with iPhone and Apple Watch"
            className="w-full h-auto max-h-[580px] object-contain mx-auto drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Interactive Connection Pill */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setConnected(!connected)}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium transition-all shadow-sm ${
                connected
                  ? 'bg-[#34c759] text-white'
                  : 'bg-[#0071e3] hover:bg-[#0077ed] text-white hover:scale-105'
              }`}
            >
              {connected ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Connected to iCloud Devices
                </>
              ) : (
                'Simulate 1-Tap Connect'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
