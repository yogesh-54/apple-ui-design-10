import React from 'react';

export default function BatterySection() {
  const stats = [
    {
      value: 'More than 24 hrs.',
      label: 'of battery life with charging case',
    },
    {
      value: 'Up to 5 hrs.',
      label: 'of listening time on one charge',
    },
    {
      value: 'Only 15 min.',
      label: 'of charging provides up to 3 hours of listening time',
    },
  ];

  return (
    <section className="bg-white text-[#1d1d1f] pt-24 pb-16 sm:pb-24 border-t border-[#f2f2f5] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          The power of 24-hour battery life.
        </h2>

        {/* Section Paragraph */}
        <p className="max-w-[740px] mx-auto text-[17px] sm:text-[19px] leading-relaxed text-[#6e6e73] font-normal mb-16">
          AirPods deliver an industry-leading 5 hours of listening time — and now up to 3 hours of talk time — all on one charge. And they’re made to keep up with you, thanks to a charging case that holds multiple charges for more than 24 hours of listening time. Need a quick charge? Just put AirPods back in the case for 15 minutes to get up to 3 hours of listening time or up to 2 hours of talk time.
        </p>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto mb-16 px-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1d1d1f] mb-2">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base text-[#86868b] max-w-[220px] font-normal leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Hands Holding AirPods Charging Case Visual */}
        <div className="relative max-w-[860px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black border border-black/10 group">
          <img
            src="/assets/airpods_battery_hands.jpg"
            alt="Hands lifting white AirPod headphone out of the charging case"
            className="w-full h-auto max-h-[640px] object-cover mx-auto transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
