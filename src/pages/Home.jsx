import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { companyInfo, brandsData } from '../data/companyData';
import bgHero from '../assets/background hero.jpg';

import imgEsea from '../assets/esea.jpg';
import imgKala from '../assets/kala.jpg';
import imgAnanta from '../assets/ananta.jpg';
import imgBordir from '../assets/bordir.png';

const brandImages = {
  esea: imgEsea,
  kala: imgKala,
  ananta: imgAnanta,
  tirtabordir: imgBordir,
};

export default function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brandsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? brandsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % brandsData.length);
  };

  const currentBrand = brandsData[currentIndex];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Banner Section */}
      <section 
        className="relative bg-cover bg-center text-[#F5F2EA] min-h-[82vh] flex items-center justify-center px-6 text-center"
        style={{ backgroundImage: `url('${bgHero}')` }}
      >
        <div className="absolute inset-0 bg-[#183653]/80 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] md:text-xs text-[#6D8BA6] uppercase tracking-[0.35em] font-light">
            EST. 2011 — TIRTA GROUP
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-snug tracking-wide text-[#F5F2EA]">
            “{companyInfo.tagline}”
          </h1>
          <p className="text-[#F5F2EA]/75 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            {companyInfo.description}
          </p>
          <div className="pt-4 flex justify-center gap-5 text-xs tracking-[0.2em] uppercase font-light">
            <Link 
              to="/services" 
              className="bg-[#6D8BA6] text-[#F5F2EA] px-8 py-3.5 hover:bg-[#183653] transition duration-300 shadow-sm"
            >
              Eksplorasi Brand
            </Link>
            <Link 
              to="/about" 
              className="border border-[#F5F2EA]/60 text-[#F5F2EA] px-8 py-3.5 hover:bg-[#F5F2EA] hover:text-[#183653] transition duration-300"
            >
              Tentang TIRTA
            </Link>
          </div>
        </div>
      </section>

      {/* Section Statistik Pencapaian */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-[#6D8BA6]/20 text-center">
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-serif font-light text-[#183653]">2011</span>
            <p className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.2em]">Tahun Berdiri</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-serif font-light text-[#183653]">04</span>
            <p className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.2em]">Brand Lineup</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-serif font-light text-[#183653]">100+</span>
            <p className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.2em]">Karya & Produk</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-serif font-light text-[#183653]">100%</span>
            <p className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.2em]">Karya Lokal</p>
          </div>
        </div>
      </section>

      {/* Carousel Section: Judul Diubah ke "Our Brands" */}
      <section className="container mx-auto px-6 max-w-5xl space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] text-[#6D8BA6] tracking-[0.35em] font-light uppercase block">EDITORIAL LOOKBOOK</span>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-[#183653] tracking-wide">Our Brands</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white border border-[#6D8BA6]/20 shadow-sm rounded-none overflow-hidden grid md:grid-cols-2 items-center">
          <div className="relative h-[380px] md:h-[480px] overflow-hidden bg-[#183653]/5">
            <img 
              src={brandImages[currentBrand.id]} 
              alt={currentBrand.name}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#183653]/80 text-[#F5F2EA] px-3 py-1 text-[10px] tracking-[0.2em] font-light uppercase backdrop-blur-sm">
              0{currentIndex + 1} / 0{brandsData.length}
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.25em] font-medium block">
                {currentBrand.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-[#183653]">
                {currentBrand.name}
              </h3>
              <p className="text-xs italic text-[#6D8BA6] font-serif tracking-wide">
                “{currentBrand.tagline}”
              </p>
              <p className="text-[#242A30]/80 text-xs md:text-sm font-light leading-relaxed pt-2">
                {currentBrand.story || currentBrand.description}
              </p>
              <p className="text-[11px] text-[#183653] font-medium tracking-wider pt-1">
                Instagram: <span className="text-[#6D8BA6]">{currentBrand.instagram}</span>
              </p>
            </div>

            <div className="pt-6 border-t border-[#F5F2EA] flex items-center justify-between">
              <button 
                onClick={() => navigate('/services')}
                className="text-xs uppercase tracking-[0.2em] text-[#183653] font-light hover:text-[#6D8BA6] transition"
              >
                Lihat Koleksi →
              </button>

              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 border border-[#6D8BA6]/30 flex items-center justify-center text-[#183653] hover:bg-[#183653] hover:text-[#F5F2EA] transition"
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 border border-[#6D8BA6]/30 flex items-center justify-center text-[#183653] hover:bg-[#183653] hover:text-[#F5F2EA] transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {brandsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#183653]" : "w-2 bg-[#6D8BA6]/30 hover:bg-[#6D8BA6]"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}