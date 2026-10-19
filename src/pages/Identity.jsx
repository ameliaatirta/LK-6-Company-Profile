import React from 'react';
import logoImg from '../assets/Logo Tirta.png';

export default function Identity() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs text-[#6D8BA6] font-bold uppercase tracking-widest">BRAND GUIDELINES</span>
        <h1 className="text-4xl font-serif font-bold text-[#183653]">Identitas Brand & Logo</h1>
        <p className="text-[#242A30] max-w-2xl mx-auto">
          Filosofi visual TIRTA Group yang mencerminkan kebermanfaatan, kebersamaan, dan pertumbuhan berkelanjutan.
        </p>
      </div>

      {/* Filosofi Logo */}
      <div className="bg-white p-8 rounded-2xl border border-[#6D8BA6]/20 shadow-sm grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center bg-[#F5F2EA] p-6 rounded-xl border border-[#6D8BA6]/20">
          <img src={logoImg} alt="Logo TIRTA Group" className="max-h-48 object-contain" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#183653]">Makna & Filosofi Logo</h2>
          <ul className="space-y-3 text-sm text-[#242A30]">
            <li className="flex gap-2">
              <span className="text-[#6D8BA6] font-bold">•</span>
              <span><strong>Huruf T & Aliran Air:</strong> Melambangkan nama TIRTA (air) yang mengalir dinamis, fleksibel, dan memberi kebermanfaatan bagi sekitar.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#6D8BA6] font-bold">•</span>
              <span><strong>Figur Terhubung:</strong> Simbol kebersamaan, ikatan harmonis, dan saling mendukung antarsektor brand.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#6D8BA6] font-bold">•</span>
              <span><strong>EST. 2011:</strong> Fondasi pengalaman dan pertumbuhan berkelanjutan sejak 2011.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Palet Warna */}
      <div className="space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#183653]">Palet Warna Resmi</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#183653] text-white p-5 rounded-xl shadow-sm text-center">
            <span className="font-bold block text-sm">Navy Blue</span>
            <span className="text-xs opacity-80 uppercase font-mono mt-1 block">#183653</span>
            <span className="text-[10px] opacity-60 block mt-2">Utama / Profesional</span>
          </div>
          <div className="bg-[#6D8BA6] text-white p-5 rounded-xl shadow-sm text-center">
            <span className="font-bold block text-sm">Steel Blue</span>
            <span className="text-xs opacity-80 uppercase font-mono mt-1 block">#6D8BA6</span>
            <span className="text-[10px] opacity-60 block mt-2">Aksen / Kreatif</span>
          </div>
          <div className="bg-[#F5F2EA] text-[#242A30] p-5 rounded-xl border border-[#6D8BA6]/30 shadow-sm text-center">
            <span className="font-bold block text-sm">Ivory</span>
            <span className="text-xs opacity-80 uppercase font-mono mt-1 block">#F5F2EA</span>
            <span className="text-[10px] opacity-60 block mt-2">Latar / Hangat</span>
          </div>
          <div className="bg-[#242A30] text-white p-5 rounded-xl shadow-sm text-center">
            <span className="font-bold block text-sm">Charcoal</span>
            <span className="text-xs opacity-80 uppercase font-mono mt-1 block">#242A30</span>
            <span className="text-[10px] opacity-60 block mt-2">Teks / Kontras</span>
          </div>
        </div>
      </div>
    </div>
  );
}