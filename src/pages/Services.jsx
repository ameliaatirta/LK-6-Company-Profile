import React from 'react';
import { brandsData } from '../data/companyData';

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl space-y-12">
      <div className="text-center space-y-3">
        <span className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.35em] font-light block">
          PORTFOLIO LINEUP
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-light text-[#183653] tracking-wide">
          Our Brands
        </h1>
        <p className="text-[#242A30]/75 text-xs md:text-sm max-w-md mx-auto font-light leading-relaxed">
          Empat pilar bisnis TIRTA Group yang bergerak di bidang fashion, kriya kreatif, dan jasa bordir manufaktur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brandsData.map((b) => (
          <div key={b.id} className="bg-white p-8 md:p-10 border border-[#6D8BA6]/20 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[9px] text-[#6D8BA6] uppercase tracking-[0.25em] font-medium block">
                {b.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-light text-[#183653]">
                {b.name}
              </h3>
              <p className="text-xs italic text-[#6D8BA6] font-serif">
                “{b.tagline}”
              </p>
              <p className="text-xs text-[#242A30]/80 font-light leading-relaxed pt-2">
                {b.story || b.description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F5F2EA] flex justify-between items-center text-[10px] text-[#6D8BA6] tracking-wider uppercase font-light">
              <span>Instagram</span>
              <span className="text-[#183653] font-medium">{b.instagram}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}