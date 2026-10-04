import React, { useState } from 'react';

export default function ProductSubnav({ onBuyClick, onTechSpecsClick }) {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToSection = (id, tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-11 z-40 bg-white/80 backdrop-blur-md border-b border-[#d2d2d7]/50 transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex items-center justify-between">
        {/* Product Title */}
        <div className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] tracking-tight">
          AirPods <span className="font-normal text-sm sm:text-base text-[#6e6e73]">(2nd generation)</span>
        </div>

        {/* Links and Actions */}
        <div className="flex items-center space-x-5 text-xs text-[#1d1d1f]">
          <button
            onClick={() => scrollToSection('hero-section', 'overview')}
            className={`transition-colors hover:text-[#0071e3] ${
              activeTab === 'overview' ? 'text-[#1d1d1f] font-medium' : 'text-[#6e6e73]'
            }`}
          >
            Overview
          </button>
          
          <button
            onClick={onTechSpecsClick}
            className={`transition-colors hover:text-[#0071e3] ${
              activeTab === 'specs' ? 'text-[#1d1d1f] font-medium' : 'text-[#6e6e73]'
            }`}
          >
            Tech Specs
          </button>

          <button
            onClick={onBuyClick}
            className="bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0062c4] text-white px-3.5 py-1 rounded-full text-xs font-medium transition-all shadow-sm transform hover:scale-[1.02]"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
