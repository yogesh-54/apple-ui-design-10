import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function BagDrawer({ isOpen, onClose, items, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    const num = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + num;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-[#d2d2d7]/50 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1d1d1f]" />
              <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                Review your Bag ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#e5e5ea] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-6 flex-1 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#d2d2d7] mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-[#1d1d1f] mb-1">Your Bag is empty.</h4>
                <p className="text-xs text-[#86868b]">Explore AirPods models and add one to your bag.</p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={idx} className="flex gap-4 pb-6 border-b border-[#e5e5ea] last:border-none">
                  <img
                    src={item.image || '/assets/airpods-2-hero.png'}
                    alt={item.name}
                    className="w-20 h-20 object-contain bg-[#fbfbfd] rounded-xl p-2 border border-[#f2f2f5]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-[#1d1d1f]">{item.name}</h4>
                      <span className="text-sm font-bold text-[#1d1d1f]">{item.price}</span>
                    </div>
                    {item.engraving && (
                      <p className="text-xs text-[#0071e3] mt-1 font-mono">
                        Free Engraving: "{item.engraving}"
                      </p>
                    )}
                    {item.appleCare && (
                      <p className="text-xs text-[#34c759] mt-0.5">
                        ✓ AppleCare+ Included
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[11px] text-[#86868b]">Qty: 1</span>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-xs text-[#fa243c] hover:underline flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#d2d2d7]/50 bg-white sticky bottom-0 z-10 space-y-4">
              <div className="space-y-1.5 text-xs text-[#6e6e73]">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#34c759] font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1d1d1f] pt-2 border-t border-[#e5e5ea]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 rounded-full text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Check Out with Apple Pay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
