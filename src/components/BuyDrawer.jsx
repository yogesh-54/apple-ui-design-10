import React, { useState } from 'react';
import { X, Check, Sparkles, ShieldCheck, Truck, Store } from 'lucide-react';

export default function BuyDrawer({ isOpen, onClose, onAddToBag, initialProduct }) {
  const [hasEngraving, setHasEngraving] = useState(false);
  const [engravingText, setEngravingText] = useState(' Music');
  const [appleCare, setAppleCare] = useState(false);

  if (!isOpen) return null;

  const product = initialProduct || {
    name: 'AirPods (2nd generation)',
    price: '$129.00',
    rawPrice: 129,
    image: '/assets/airpods-2-hero.png',
  };

  const totalPrice = product.rawPrice + (appleCare ? 29 : 0);
  const monthlyPrice = (totalPrice / 6).toFixed(2);

  const handleAdd = () => {
    onAddToBag({
      name: product.name,
      price: `$${totalPrice}.00`,
      engraving: hasEngraving ? engravingText : null,
      appleCare,
      image: product.image,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-[#d2d2d7]/50 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                Buy {product.name}
              </h3>
              <p className="text-sm font-semibold text-[#0071e3] mt-0.5">
                ${totalPrice}.00 or ${monthlyPrice}/mo. for 6 mo.*
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#e5e5ea] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-8 flex-1">
            {/* Visual representation */}
            <div className="relative text-center py-4 bg-[#fafafc] rounded-2xl border border-[#e5e5ea]">
              <img
                src={product.image}
                alt={product.name}
                className="w-44 h-44 object-contain mx-auto drop-shadow-md"
              />
              {hasEngraving && engravingText && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-3 py-0.5 rounded-full text-xs font-mono font-medium shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#ff9500]" />
                  <span>{engravingText}</span>
                </div>
              )}
            </div>

            {/* Free Engraving Option */}
            <div className="border border-[#d2d2d7] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ff9500]" />
                  <span className="font-semibold text-sm text-[#1d1d1f]">Free Engraving</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasEngraving(!hasEngraving)}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                    hasEngraving
                      ? 'bg-[#1d1d1f] text-white'
                      : 'bg-[#f5f5f7] text-[#0071e3] hover:bg-[#e5e5ea]'
                  }`}
                >
                  {hasEngraving ? 'Remove' : 'Add Engraving'}
                </button>
              </div>

              {hasEngraving && (
                <div className="mt-3 pt-3 border-t border-[#e5e5ea]">
                  <label className="block text-xs text-[#6e6e73] mb-1.5 font-medium">
                    Type text, numbers, or choose emoji:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={12}
                      value={engravingText}
                      onChange={(e) => setEngravingText(e.target.value)}
                      placeholder="e.g.  YOGI"
                      className="w-full text-xs px-3 py-2 border border-[#d2d2d7] rounded-lg focus:outline-none focus:border-[#0071e3]"
                    />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {['', '🎧', '⚡', '✨', '❤️', '🦄', '🔥'].map((em) => (
                      <button
                        key={em}
                        onClick={() => setEngravingText(em)}
                        className="text-xs bg-[#f5f5f7] hover:bg-[#e5e5ea] px-2 py-1 rounded border border-[#d2d2d7]"
                      >
                        {em}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AppleCare+ Option */}
            <div
              onClick={() => setAppleCare(!appleCare)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                appleCare ? 'border-[#0071e3] bg-[#0071e3]/5 ring-1 ring-[#0071e3]' : 'border-[#d2d2d7] hover:border-black'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <ShieldCheck className={`w-5 h-5 mt-0.5 ${appleCare ? 'text-[#0071e3]' : 'text-[#6e6e73]'}`} />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1d1d1f]">AppleCare+ for Headphones</h4>
                    <p className="text-xs text-[#6e6e73] mt-0.5 leading-relaxed">
                      Unlimited repairs for accidental damage protection. Express Replacement Service.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#1d1d1f] whitespace-nowrap ml-2">+$29.00</span>
              </div>
            </div>

            {/* Delivery Perks */}
            <div className="space-y-3 pt-2 text-xs text-[#6e6e73]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#1d1d1f]" />
                <span>Free 2-day delivery or scheduled courier</span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-[#1d1d1f]" />
                <span>Free pickup today at your local Apple Store</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-[#d2d2d7]/50 bg-white sticky bottom-0 z-10">
            <button
              onClick={handleAdd}
              className="w-full bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#0062c4] text-white py-3.5 rounded-full text-sm font-medium transition-all shadow-md transform hover:scale-[1.01]"
            >
              Add to Bag • ${totalPrice}.00
            </button>
            <p className="text-center text-[11px] text-[#86868b] mt-3">
              Need a moment? Items stay in your bag for up to 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
