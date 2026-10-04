import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ComparisonSection({ onBuyModel }) {
  const models = [
    {
      id: 'airpods-2',
      name: 'AirPods',
      generation: '2nd generation',
      price: '$129',
      image: '/assets/compare-airpods-2.png',
      colors: [{ name: 'White', hex: '#ffffff', border: '#d2d2d7' }],
      spatialAudio: '—',
      noiseCancellation: '—',
      sweatAndWater: '—',
      batterySingle: 'Up to 5 hours of listening time with a single charge',
      batteryCase: 'More than 24 hours of listening time with charging case',
      caseInfo: 'Lightning Charging Case',
    },
    {
      id: 'airpods-3',
      name: 'AirPods',
      generation: '3rd generation',
      price: 'From $169',
      image: '/assets/compare-airpods-3.png',
      colors: [{ name: 'White', hex: '#ffffff', border: '#d2d2d7' }],
      spatialAudio: 'Personalized Spatial Audio with dynamic head tracking',
      noiseCancellation: '—',
      sweatAndWater: 'Sweat and water resistant (IPX4)',
      batterySingle: 'Up to 6 hours of listening time with a single charge',
      batteryCase: 'Up to 30 hours of listening time with charging case',
      caseInfo: 'Lightning Charging Case or MagSafe Charging Case',
    },
    {
      id: 'airpods-pro',
      name: 'AirPods Pro',
      generation: '2nd generation',
      price: '$249',
      image: '/assets/compare-airpods-pro.png',
      colors: [{ name: 'White', hex: '#ffffff', border: '#d2d2d7' }],
      spatialAudio: 'Personalized Spatial Audio with dynamic head tracking',
      noiseCancellation: 'Active Noise Cancellation and Adaptive Transparency',
      sweatAndWater: 'Dust, sweat, and water resistant (IP54)',
      batterySingle: 'Up to 6 hours of listening time with a single charge',
      batteryCase: 'Up to 30 hours of listening time with charging case',
      caseInfo: 'MagSafe Charging Case (USB-C) with speaker and lanyard loop',
    },
    {
      id: 'airpods-max',
      name: 'AirPods Max',
      generation: 'Over-ear',
      price: '$549',
      image: '/assets/compare-airpods-max.png',
      colors: [
        { name: 'Space Gray', hex: '#53565a' },
        { name: 'Pink', hex: '#e8a9a6' },
        { name: 'Green', hex: '#a3baad' },
        { name: 'Silver', hex: '#e2e4e5' },
        { name: 'Sky Blue', hex: '#a0b3c6' },
      ],
      spatialAudio: 'Personalized Spatial Audio with dynamic head tracking',
      noiseCancellation: 'Active Noise Cancellation and Transparency mode',
      sweatAndWater: '—',
      batterySingle: 'Up to 20 hours of listening time with a single charge',
      batteryCase: 'Smart Case preserves battery charge in ultra-low-power state',
      caseInfo: 'Smart Case',
    },
  ];

  return (
    <section id="compare-section" className="bg-[#fafafc] text-[#1d1d1f] pt-24 pb-20 border-t border-[#f2f2f5]">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-center text-[#1d1d1f] mb-16">
          Which AirPods are right for you?
        </h2>

        {/* 4 Models Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-[#d2d2d7]/50">
          {models.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              {/* Product Image */}
              <div className="h-44 sm:h-52 flex items-center justify-center mb-6 group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-[130px] sm:max-w-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Color Swatches */}
              <div className="flex items-center space-x-1.5 h-6 mb-4">
                {item.colors.map((c, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-black/10 inline-block shadow-xs"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>

              {/* Title & Gen */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1d1d1f]">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] font-normal mb-2">
                {item.generation}
              </p>

              {/* Price */}
              <div className="text-sm sm:text-base font-semibold text-[#1d1d1f] mb-4">
                {item.price}
              </div>

              {/* Buy Pill Button */}
              <button
                onClick={() => onBuyModel(item)}
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-1.5 rounded-full text-xs font-medium transition-transform duration-150 active:scale-95 mb-8 shadow-sm"
              >
                Buy
              </button>

              {/* Feature 1: Spatial Audio */}
              <div className="w-full py-5 border-t border-[#d2d2d7]/40 min-h-[90px] flex items-center justify-center px-2">
                <span className="text-xs text-[#1d1d1f] font-normal leading-snug">
                  {item.spatialAudio}
                </span>
              </div>

              {/* Feature 2: Noise Cancellation */}
              <div className="w-full py-5 border-t border-[#d2d2d7]/40 min-h-[90px] flex items-center justify-center px-2">
                <span className="text-xs text-[#1d1d1f] font-normal leading-snug">
                  {item.noiseCancellation}
                </span>
              </div>

              {/* Feature 3: Sweat & Water */}
              <div className="w-full py-5 border-t border-[#d2d2d7]/40 min-h-[80px] flex items-center justify-center px-2">
                <span className="text-xs text-[#1d1d1f] font-normal leading-snug">
                  {item.sweatAndWater}
                </span>
              </div>

              {/* Feature 4: Battery Life */}
              <div className="w-full py-5 border-t border-[#d2d2d7]/40 min-h-[110px] flex flex-col justify-center px-2">
                <span className="text-xs text-[#1d1d1f] font-semibold leading-snug mb-1">
                  {item.batterySingle}
                </span>
                <span className="text-[11px] text-[#6e6e73] leading-snug">
                  {item.batteryCase}
                </span>
              </div>

              {/* Feature 5: Case Details */}
              <div className="w-full py-5 border-t border-[#d2d2d7]/40 min-h-[80px] flex items-center justify-center px-2">
                <span className="text-xs text-[#6e6e73] leading-snug">
                  {item.caseInfo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comparison Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] text-base font-medium group"
          >
            <span>Compare all AirPods models</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
