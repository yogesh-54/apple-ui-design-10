import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Film Player Simulation with interactive sound & visuals */}
        <div className="relative aspect-video bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex flex-col items-center justify-center p-8 overflow-hidden">
          {/* Animated audio ripples / sound wave */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className={`w-96 h-96 rounded-full border border-white/20 ${isPlaying ? 'animate-ping' : ''}`} />
            <div className="w-64 h-64 rounded-full border border-white/40 absolute" />
          </div>

          <img
            src="/assets/airpods-2-hero.png"
            alt="AirPods Film"
            className={`w-64 h-64 object-contain transition-transform duration-700 ${isPlaying ? 'scale-110 drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]' : 'scale-95'}`}
          />

          <div className="text-center mt-6 z-10">
            <h4 className="text-2xl font-bold text-white tracking-tight">AirPods — Bounce</h4>
            <p className="text-sm text-neutral-400 mt-1">Wireless headphones that connect like magic.</p>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-neutral-300 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <span className="text-xs text-neutral-300 font-mono">01:42 / 02:15</span>
            </div>

            {/* Simulated progress track */}
            <div className="flex-1 mx-6 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-3/4 rounded-full" />
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:text-neutral-300 transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
