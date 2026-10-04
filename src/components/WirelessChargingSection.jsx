import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function WirelessChargingSection({ onOpenCaseModal }) {
  const [isCharging, setIsCharging] = useState(false);

  return (
    <section className="bg-[#fafafc] text-[#1d1d1f] pt-24 pb-16 sm:pb-24 border-t border-[#f2f2f5] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          Lay it down, charge it up.
        </h2>

        {/* Description Copy */}
        <p className="max-w-[720px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#6e6e73] font-normal mb-6">
          With the available Wireless Charging Case, charging is as simple as placing the AirPods case on a Qi-certified charging mat. That’s it. The LED indicator on the front of the case lets you know that your AirPods are charging. And when you’re away from a charging mat, you can use the Lightning port to charge.
        </p>

        {/* Link */}
        <div className="flex justify-center items-center mb-12">
          <button
            onClick={onOpenCaseModal}
            className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] text-lg font-medium group transition-colors"
          >
            <span>See Wireless Charging Case</span>
            <ChevronRight className="w-4 h-4 text-[#0071e3] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Interactive Qi Charging Mat Presentation */}
        <div
          onClick={() => setIsCharging(!isCharging)}
          className="relative max-w-[420px] mx-auto py-10 cursor-pointer group select-none"
          title="Click to simulate placing on Qi charging mat"
        >
          {/* Qi Charging Pad visual */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-full bg-gradient-to-b from-[#f2f2f7] to-[#e5e5ea] p-4 flex items-center justify-center shadow-lg border border-[#d2d2d7]/40 transition-transform duration-500 group-hover:scale-105">
            {/* Wireless charging pulse waves when charging */}
            {isCharging && (
              <div className="absolute inset-0 rounded-full border-2 border-[#34c759] animate-ping opacity-30" />
            )}
            
            {/* Subtle inner ring */}
            <div className="w-56 h-56 rounded-full border border-neutral-300/60 flex items-center justify-center">
              <div className="relative">
                <img
                  src="/assets/airpods-2-hero.png"
                  alt="AirPods Charging Case"
                  className={`w-36 h-36 object-contain transition-all duration-500 ${
                    isCharging ? 'scale-105 drop-shadow-2xl' : 'drop-shadow-md'
                  }`}
                />
                
                {/* Amber / Green LED charging indicator */}
                <div
                  className={`absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                    isCharging ? 'bg-[#34c759] shadow-[0_0_8px_#34c759]' : 'bg-[#ff9500] shadow-[0_0_6px_#ff9500]'
                  }`}
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#86868b] font-medium tracking-wide">
            {isCharging ? '● 100% Fully Charged (LED Solid Green)' : 'Click mat to test Qi wireless charging LED'}
          </p>
        </div>
      </div>
    </section>
  );
}
