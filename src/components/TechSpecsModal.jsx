import React from 'react';
import { X, Check } from 'lucide-react';

export default function TechSpecsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const specs = [
    {
      category: 'Audio Technology',
      items: [
        'Dual beamforming microphones',
        'Dual optical sensors',
        'Motion-detecting accelerometer',
        'Speech-detecting accelerometer',
      ],
    },
    {
      category: 'Chip',
      items: ['H1 headphone chip'],
    },
    {
      category: 'Controls',
      items: [
        'Double-tap to play, skip forward, or answer a phone call',
        'Say "Hey Siri" to do things like play a song, make a call, or get directions',
      ],
    },
    {
      category: 'Size and Weight',
      items: [
        'AirPods (each): 0.65 by 0.71 by 1.59 inches (16.5 by 18.0 by 40.5 mm)',
        'AirPods Weight: 0.14 ounce (4.0 g)',
        'Charging Case: 1.74 by 0.84 by 2.11 inches (44.3 by 21.3 by 53.5 mm)',
        'Charging Case Weight: 1.35 ounces (38.2 g)',
      ],
    },
    {
      category: 'Charging Case',
      items: [
        'Works with Lightning connector or Qi-certified wireless chargers',
      ],
    },
    {
      category: 'Battery',
      items: [
        'Up to 5 hours of listening time with a single charge',
        'Up to 3 hours of talk time with a single charge',
        'AirPods with Charging Case: More than 24 hours of listening time, up to 18 hours of talk time',
        '15 minutes in the case provides up to 3 hours listening time or up to 2 hours talk time',
      ],
    },
    {
      category: 'Connectivity',
      items: ['Bluetooth 5.0 wireless technology'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#d2d2d7]/50 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
              AirPods (2nd generation) — Tech Specs
            </h3>
            <p className="text-xs text-[#86868b] mt-0.5">Model A2032, A2031, A1938</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#e5e5ea] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {specs.map((group, idx) => (
            <div key={idx} className="pb-5 border-b border-[#e5e5ea] last:border-none">
              <h4 className="text-sm font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wider text-[11px] text-[#0071e3]">
                {group.category}
              </h4>
              <ul className="space-y-1.5">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs text-[#424245] flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#34c759] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#d2d2d7]/50 bg-[#f5f5f7] text-center">
          <button
            onClick={onClose}
            className="bg-[#1d1d1f] text-white px-6 py-2 rounded-full text-xs font-medium hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
