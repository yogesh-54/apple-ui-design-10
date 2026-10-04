import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductSubnav from './components/ProductSubnav';
import HeroSection from './components/HeroSection';
import WirelessFullestSection from './components/WirelessFullestSection';
import PerformanceSection from './components/PerformanceSection';
import WirelessChargingSection from './components/WirelessChargingSection';
import BatterySection from './components/BatterySection';
import InstantSetupSection from './components/InstantSetupSection';
import AudioSharingSection from './components/AudioSharingSection';
import PromoBannersSection from './components/PromoBannersSection';
import ComparisonSection from './components/ComparisonSection';
import AppleValues from './components/AppleValues';
import Footnotes from './components/Footnotes';
import Footer from './components/Footer';
import BuyDrawer from './components/BuyDrawer';
import BagDrawer from './components/BagDrawer';
import VideoModal from './components/VideoModal';
import TechSpecsModal from './components/TechSpecsModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenBuy = (product = null) => {
    setSelectedProduct(product);
    setIsBuyOpen(true);
  };

  const handleAddToBag = (item) => {
    setBagItems((prev) => [...prev, item]);
    setToastMessage(`Added ${item.name} to your Bag!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleRemoveFromBag = (index) => {
    setBagItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    alert('Thank you for checking out with Apple Pay! Your order is being processed.');
    setBagItems([]);
    setIsBagOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans flex flex-col selection:bg-[#0071e3] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-[#1d1d1f] text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#34c759]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Apple Navigation */}
      <Navbar
        bagCount={bagItems.length}
        onOpenBag={() => setIsBagOpen(true)}
        onOpenSearch={() => alert('Search Apple: Type product, feature, or accessory...')}
      />

      {/* AirPods (2nd generation) Sticky Subnav */}
      <ProductSubnav
        onBuyClick={() => handleOpenBuy({
          name: 'AirPods (2nd generation)',
          price: '$129.00',
          rawPrice: 129,
          image: '/assets/airpods-2-hero.png',
        })}
        onTechSpecsClick={() => setIsSpecsOpen(true)}
      />

      {/* Announcement Ribbon */}
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] py-3 text-center text-xs text-[#1d1d1f] px-4">
        <span>Get 6 months of Apple Music free with your AirPods.* </span>
        <button
          onClick={() => {
            const el = document.getElementById('compare-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[#0071e3] hover:underline font-medium ml-1"
        >
          Shop now &gt;
        </button>
      </div>

      {/* Main AirPods Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section: Wireless. Effortless. Magical. */}
        <HeroSection onWatchFilm={() => setIsVideoOpen(true)} />

        {/* 2. Dark Section: Wireless to the fullest. */}
        <WirelessFullestSection />

        {/* 3. Performance you'll want to hear. */}
        <PerformanceSection />

        {/* 4. Lay it down, charge it up. */}
        <WirelessChargingSection onOpenCaseModal={() => setIsSpecsOpen(true)} />

        {/* 5. The power of 24-hour battery life. */}
        <BatterySection />

        {/* 6. Instant setup. Easy listening. */}
        <InstantSetupSection />

        {/* 7. Two can play this song. */}
        <AudioSharingSection />

        {/* 8 & 9. Engrave them for free & Apple Music promo */}
        <PromoBannersSection
          onOpenBuyWithEngraving={() => handleOpenBuy({
            name: 'AirPods (2nd generation)',
            price: '$129.00',
            rawPrice: 129,
            image: '/assets/airpods-2-hero.png',
          })}
          onOpenAppleMusic={() => alert('Apple Music: 100M+ songs in lossless audio and Dolby Atmos. 6 months free for new subscribers.')}
        />

        {/* 10. Which AirPods are right for you? (Comparison Grid) */}
        <ComparisonSection
          onBuyModel={(model) => handleOpenBuy({
            name: `${model.name} (${model.generation})`,
            price: model.price,
            rawPrice: parseInt(model.price.replace(/[^0-9]/g, '')) || 129,
            image: model.image,
          })}
        />

        {/* 11. Apple Value Propositions */}
        <AppleValues />
      </main>

      {/* 12. Footnotes & Legal disclaimers */}
      <Footnotes />

      {/* 13. Global Apple Footer */}
      <Footer />

      {/* Drawers and Modals */}
      <BuyDrawer
        isOpen={isBuyOpen}
        onClose={() => setIsBuyOpen(false)}
        onAddToBag={handleAddToBag}
        initialProduct={selectedProduct}
      />

      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onRemoveItem={handleRemoveFromBag}
        onCheckout={handleCheckout}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <TechSpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
      />
    </div>
  );
}
