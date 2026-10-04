import React from 'react';

export default function PerformanceSection() {
  return (
    <section className="bg-white text-[#1d1d1f] pt-24 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          Performance you’ll want to hear.
        </h2>

        {/* Description Copy */}
        <p className="max-w-[740px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#6e6e73] font-normal mb-16">
          Powered by the Apple H1 headphone chip, AirPods deliver a faster and more stable wireless connection to your devices — up to 2x faster when switching between active devices, and a 1.5x faster connect time for phone calls. The H1 chip also drives voice-activated Siri access and delivers up to 30 percent lower gaming latency. So whether you’re playing games, listening to music, or enjoying podcasts, you’ll experience higher-quality sound.
        </p>

        {/* Upright Standing AirPods Pair Visual */}
        <div className="relative max-w-[580px] mx-auto transition-transform duration-700 hover:scale-[1.02]">
          <img
            src="/assets/airpods-2.png"
            alt="Apple AirPods 2nd Gen Pair Standing Upright"
            className="w-full max-h-[520px] object-contain mx-auto filter drop-shadow-xl"
            loading="lazy"
          />
          {/* Floor shadow */}
          <div className="w-2/3 h-5 bg-black/5 mx-auto rounded-full blur-md mt-4" />
        </div>
      </div>
    </section>
  );
}
