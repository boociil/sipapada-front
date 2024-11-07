import React, { useEffect } from "react";
import { useState } from "react";
import bgImage from "../assets/Bg.png"

export default function Main() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Setel delay agar animasi lebih terlihat (misalnya 500ms setelah halaman dimuat)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible1(true);
    }, 1000); // Setel delay agar animasi lebih terlihat (misalnya 500ms setelah halaman dimuat)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <section className="text-gray-600 body-font h-screen flex items-center justify-center bg-cover bg-opacity-10" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=" mt-20 pb-24 mx-auto text-center">
        <h1 className={`text-5xl lg:text-8xl font-bold text-white mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          SIPAPADA1306
        </h1>
        <h2 className={`text-md md:text-4xl lg:text-6xl px-8 font-semibold text-gray-50 ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          Sistem integrasi Metadata Statistik, Data dalam Angka, dan Rekomendasi Statistik Kabupaten Padang Pariaman.
        </h2>
      </div>
      <div className="absolute text-white bottom-2">
        Arrow Bawah
      </div>
    </section>

    <section className="relative pb-0 border-2 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="py-2">
          <h1 className="mb-4 font-semibold text-gray-600">
            Temukan OPD Anda
          </h1>
          <input
            type="text"
            placeholder="Nama OPD"
            name="opd"
            className="border border-gray-400 h-fit pr-2 pl-2 py-1 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-white"
          />{" "}
          <div
            className="inline-flex items-center px-4 py-1 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border border-[#2A2A2A] rounded-lg bg-[#2A2A2A]"

          >
            <span className="justify-center">Cari</span>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
