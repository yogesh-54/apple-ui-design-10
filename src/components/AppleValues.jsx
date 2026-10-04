import React from 'react';
import { Truck, RotateCcw, Store, CreditCard, ChevronRight } from 'lucide-react';

export default function AppleValues() {
  const values = [
    {
      icon: <Truck className="w-8 h-8 text-[#1d1d1f]" />,
      title: 'Free delivery',
      desc: 'And free returns. See checkout for delivery dates.',
      linkText: 'Learn more',
    },
    {
      icon: <Store className="w-8 h-8 text-[#1d1d1f]" />,
      title: 'In-store pickup',
      desc: 'Pick up your online order at an Apple Store near you.',
      linkText: 'Learn more',
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-[#1d1d1f]" />,
      title: 'Free and easy returns',
      desc: 'Complete your return online or take it to an Apple Store.',
      linkText: 'Learn more',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#1d1d1f]" />,
      title: 'Monthly Installments',
      desc: 'Pay 0% APR over 6 months when you choose Apple Card Monthly Installments.',
      linkText: 'Learn more',
    },
  ];

  return (
    <section className="bg-white text-[#1d1d1f] py-16 border-t border-[#d2d2d7]/40">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4">{v.icon}</div>
              <h4 className="text-base font-semibold text-[#1d1d1f] mb-1">
                {v.title}
              </h4>
              <p className="text-xs text-[#6e6e73] font-normal leading-relaxed mb-2 max-w-[210px]">
                {v.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-xs text-[#0071e3] hover:text-[#0077ed] font-normal group"
              >
                <span>{v.linkText}</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
