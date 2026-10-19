import React, { useState } from 'react';
import { portfolioData } from '../data/companyData';

export default function Portofolio() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.brandId === filter);

  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl space-y-10">
      <div className="text-center space-y-3">
        <span className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.35em] font-light block">
          FEATURED WORKS
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-light text-[#183653] tracking-wide">
          Our Creations
        </h1>
        <p className="text-[#242A30]/75 text-xs md:text-sm max-w-md mx-auto font-light">
          Koleksi produk dan karya unggulan dari brand naungan TIRTA Group.
        </p>
      </div>

      {/* Filter Button */}
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { id: 'all', label: 'Semua Karya' },
          { id: 'esea', label: 'ESEA' },
          { id: 'kala', label: 'KALA' },
          { id: 'ananta', label: 'ANANTA' },
          { id: 'tirtabordir', label: 'TIRTABORDIR' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`px-5 py-2 text-[10px] font-light uppercase tracking-[0.2em] transition ${
              filter === item.id 
                ? 'bg-[#183653] text-[#F5F2EA]' 
                : 'bg-white border border-[#6D8BA6]/20 text-[#242A30] hover:bg-[#F5F2EA]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Grid Portofolio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="bg-white p-6 border border-[#6D8BA6]/20 space-y-4 hover:border-[#6D8BA6]/50 transition duration-300">
            <span className="text-[9px] font-medium text-[#6D8BA6] uppercase tracking-[0.2em] block">
              {p.category}
            </span>
            <h4 className="font-serif font-light text-[#183653] text-lg leading-snug">
              {p.title}
            </h4>
            <div className="pt-3 border-t border-[#F5F2EA] flex justify-between text-[10px] text-[#242A30]/60 font-light uppercase tracking-wider">
              <span>Brand: <strong className="text-[#183653] font-medium">{p.brandId}</strong></span>
              <span>{p.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}