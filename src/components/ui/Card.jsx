import React from 'react';

export default function Card({ title, subtitle, description, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white p-8 border border-[#6D8BA6]/15 hover:border-[#6D8BA6]/40 transition duration-300 cursor-pointer flex flex-col justify-between space-y-6"
    >
      <div className="space-y-3">
        <span className="text-[9px] font-sans text-[#6D8BA6] uppercase tracking-[0.25em] block">{subtitle}</span>
        <h3 className="text-2xl font-serif font-light text-[#183653] group-hover:text-[#6D8BA6] transition duration-300">{title}</h3>
        <p className="text-[#242A30]/80 text-xs leading-relaxed font-light">{description}</p>
      </div>
      <div className="pt-4 border-t border-[#F5F2EA] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-light text-[#183653] group-hover:translate-x-1 transition duration-300">
        <span>Selengkapnya</span>
        <span>→</span>
      </div>
    </div>
  );
}