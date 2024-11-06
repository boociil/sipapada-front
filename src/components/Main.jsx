import React, { useEffect } from "react";
import { useState } from "react";
import bgImage from "../assets/Bg.png"

export default function Main() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("visible true")
      setIsVisible(true);
    }, 500); // Setel delay agar animasi lebih terlihat (misalnya 500ms setelah halaman dimuat)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <section className="text-gray-600 body-font h-screen flex items-center justify-center bg-cover bg-opacity-10" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-5xl mt-20 pb-24 mx-auto text-center">
        <h1 className={`text-5xl font-bold text-white mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          SIPAPADA1306
        </h1>
        <h2 class={`text-2xl font-semibold text-gray-50 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          Sistem integrasi Metadata Statistik, Data dalam Angka, dan Rekomendasi Statistik Kabupaten Padang Pariaman.
        </h2>
      </div>
    </section>


    <section className="bagian-opd">

    </section>

    <section class="relative pb-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div class="py-24 md:py-36">
          <h1 class="mb-5 text-6xl font-bold text-black">
            Subscribe to our newsletter
          </h1>
          <h1 class="mb-9 text-2xl font-semibold text-gray-600">
            Enter your email address and get our newsletters straight away.
          </h1>
          <input
            type="email"
            placeholder="jack@example.com"
            name="email"
            autocomplete="email"
            class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
          />{" "}
          <a
            class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
            href="/"
          >
            <span class="justify-center">Subscribe</span>
          </a>
        </div>
      </div>
    </section>
    
    </>
  );
}
