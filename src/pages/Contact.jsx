import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-2xl space-y-10">
      <div className="text-center space-y-3">
        <span className="text-[10px] text-[#6D8BA6] font-light uppercase tracking-[0.35em] block">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-light text-[#183653] tracking-wide">
          Let's Start a Conversation!
        </h1>
        <p className="text-[#242A30]/75 text-xs md:text-sm max-w-md mx-auto font-light leading-relaxed">
          Silakan tinggalkan pesan untuk pertanyaan seputar brand, kemitraan bisnis, atau layanan manufaktur bordir.
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 border border-[#6D8BA6]/20 shadow-sm">
        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 bg-[#183653] text-[#F5F2EA] rounded-full flex items-center justify-center mx-auto text-lg font-serif">
              ✓
            </div>
            <h3 className="text-xl font-serif text-[#183653]">Pesan Terkirim</h3>
            <p className="text-xs text-[#242A30]/70 font-light max-w-xs mx-auto">
              Terima kasih telah menghubungi TIRTA Group. Tim kami akan merespons pesan Anda sesegera mungkin.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#6D8BA6] hover:text-[#183653] font-medium"
            >
              ← Kirim Pesan Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-[10px] font-light text-[#6D8BA6] uppercase tracking-[0.2em]">
                NAMA LENGKAP
              </label>
              <input 
                required 
                type="text" 
                placeholder="Masukkan nama Anda" 
                className="w-full bg-[#F5F2EA]/30 border-b border-[#6D8BA6]/30 px-3 py-2.5 text-xs text-[#242A30] focus:outline-none focus:border-[#183653] transition font-light placeholder:text-[#242A30]/30" 
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-light text-[#6D8BA6] uppercase tracking-[0.2em]">
                ALAMAT EMAIL
              </label>
              <input 
                required 
                type="email" 
                placeholder="nama@email.com" 
                className="w-full bg-[#F5F2EA]/30 border-b border-[#6D8BA6]/30 px-3 py-2.5 text-xs text-[#242A30] focus:outline-none focus:border-[#183653] transition font-light placeholder:text-[#242A30]/30" 
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-light text-[#6D8BA6] uppercase tracking-[0.2em]">
                PESAN / PERTANYAAN
              </label>
              <textarea 
                required 
                rows="4" 
                placeholder="Tuliskan pesan Anda secara ringkas..." 
                className="w-full bg-[#F5F2EA]/30 border-b border-[#6D8BA6]/30 px-3 py-2.5 text-xs text-[#242A30] focus:outline-none focus:border-[#183653] transition font-light placeholder:text-[#242A30]/30 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#183653] text-[#F5F2EA] py-3.5 text-xs uppercase tracking-[0.25em] font-light hover:bg-[#6D8BA6] transition duration-300 shadow-sm"
            >
              Kirim Pesan
            </button>
          </form>
        )}
      </div>
    </div>
  );
}