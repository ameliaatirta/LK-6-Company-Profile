import React from 'react';
import { companyInfo, teamData } from '../data/companyData';
import logoImg from '../assets/Logo Tirta.png';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl space-y-16">
      {/* Header Tentang Kami */}
      <div className="text-center space-y-3">
        <span className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.35em] font-light block">
          ABOUT US
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-light text-[#183653] tracking-wide">
          {companyInfo.name}
        </h1>
        <p className="text-[#242A30]/80 leading-relaxed text-sm md:text-base font-light max-w-2xl mx-auto pt-2">
          {companyInfo.description}
        </p>
      </div>

      {/* Visi & Misi */}
      <div className="bg-white p-8 md:p-10 border border-[#6D8BA6]/20 shadow-sm space-y-6">
        <h2 className="text-2xl font-serif font-light text-[#183653] border-b border-[#F5F2EA] pb-3">
          Visi & Misi
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#183653] mb-1">VISI</h3>
            <p className="text-xs md:text-sm text-[#242A30]/80 font-light leading-relaxed">
              Menjadi induk perusahaan yang terus mengalirkan kebermanfaatan, inovasi, dan nilai luhur melalui beragam lini usaha pakaian, kriya kreatif, dan manufaktur.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#183653] mb-1">MISI</h3>
            <ul className="list-disc list-inside text-xs md:text-sm text-[#242A30]/80 font-light space-y-1.5 leading-relaxed">
              <li>Mengembangkan setiap brand anak perusahaan dengan standar kualitas dan estetika tertinggi.</li>
              <li>Memberdayakan kreativitas lokal melalui produksi kerajinan dan busana yang berkarakter.</li>
              <li>Menjaga integritas, kebersamaan, dan kebermanfaatan di setiap layanan.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Identitas Brand & Filosofi Logo */}
      <div className="bg-white p-8 md:p-10 border border-[#6D8BA6]/20 shadow-sm space-y-8">
        <h2 className="text-2xl font-serif font-light text-[#183653] border-b border-[#F5F2EA] pb-3">
          Identitas Visual & Filosofi Logo
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center bg-[#F5F2EA]/60 p-8 border border-[#6D8BA6]/15">
            <img src={logoImg} alt="Logo TIRTA Group" className="max-h-40 object-contain" />
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-[#242A30]/80 font-light leading-relaxed">
            <li className="flex gap-2">
              <span className="text-[#6D8BA6]">•</span>
              <span><strong>Huruf T & Aliran Air:</strong> Melambangkan nama TIRTA (air) yang mengalir dinamis dan memberi kebermanfaatan.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#6D8BA6]">•</span>
              <span><strong>Figur Terhubung:</strong> Simbol kebersamaan, ikatan harmonis, dan saling mendukung antar-brand.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#6D8BA6]">•</span>
              <span><strong>EST. 2011:</strong> Fondasi pengalaman dan pertumbuhan sejak tahun 2011.</span>
            </li>
          </ul>
        </div>

        {/* Palet Warna Resmi */}
        <div className="pt-4 border-t border-[#F5F2EA]">
          <span className="text-[10px] text-[#6D8BA6] uppercase tracking-[0.25em] font-medium block mb-3">
            PALET WARNA RESMI
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="bg-[#183653] text-white p-3 font-light">Navy Blue<br/><span className="opacity-60 text-[10px]">#183653</span></div>
            <div className="bg-[#6D8BA6] text-white p-3 font-light">Steel Blue<br/><span className="opacity-60 text-[10px]">#6D8BA6</span></div>
            <div className="bg-[#F5F2EA] text-[#242A30] p-3 border border-[#6D8BA6]/20 font-light">Ivory<br/><span className="opacity-60 text-[10px]">#F5F2EA</span></div>
            <div className="bg-[#242A30] text-white p-3 font-light">Charcoal<br/><span className="opacity-60 text-[10px]">#242A30</span></div>
          </div>
        </div>
      </div>

      {/* Tim Kepemimpinan */}
      <div className="bg-white p-8 md:p-10 border border-[#6D8BA6]/20 shadow-sm space-y-6">
        <h2 className="text-2xl font-serif font-light text-[#183653] border-b border-[#F5F2EA] pb-3">
          Tim Kepemimpinan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamData.map((member) => (
            <div key={member.id} className="p-5 border border-[#6D8BA6]/15 bg-[#F5F2EA]/30 space-y-1">
              <h4 className="font-serif text-[#183653] font-normal text-base">{member.name}</h4>
              <p className="text-[10px] text-[#6D8BA6] font-light uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}