import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/Bg.png";
import arrowDown from "../assets/arrowDown.png";
import BoxOPD from "./BoxOPD";
import { useCookies } from 'react-cookie';
import Loading from "./Loading"

export default function Main() {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [allOPD, setAllOPD] = useState([]);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const redirectTo = (path) => {
    navigate(path);
  }; 

  const reqDataOPD = ( ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'get_all_instansi', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){
                resolve(data);
            }else{
                reject("gatawu");
            }
        });
    })
  }

  useEffect( () => {
    reqDataOPD()
    .then(success => {
      setAllOPD(success.msg);
    })
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible2(true);
    }, 1500); // Setel delay agar animasi lebih terlihat (misalnya 500ms setelah halaman dimuat)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <section className="text-gray-600 shadow-2xl body-font h-screen flex items-center justify-center bg-cover bg-opacity-10" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=" mt-20 pb-24 mx-auto text-center items-center justify-center">
        <h1 className={`text-4xl lg:text-6xl font-bold text-white mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          SIPAPADA1306
        </h1>
        <h2 className={`text-md md:text-2xl lg:text-3xl max-w-6xl px-8 font-semibold text-gray-50 ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          Sistem integrasi Metadata Statistik, Data dalam Angka, dan Rekomendasi Statistik Kabupaten Padang Pariaman.
        </h2>
        <div className={`login flex font-bold p-1 mt-8 justify-center ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          {
            !cookies.user && (
              <div className="bg-white text-md md:text-lg py-1 px-10 hover:scale-110 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-700 shadow-lg" onClick={() => redirectTo("/Login")}>
                Login
              </div>
            )
          }
        </div>
      </div>
      <div className={`absolute text-white bottom-0 w-14 h-14 animate-bounce cursor-pointer ${isVisible2 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        <img src={`${arrowDown}`} alt="" />
      </div>
    </section>

    <section className="relative pb-0 mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="py-2 w-full ">
          <h1 className={` mt-8 text-2xl lg:text-4xl font-bold text-black mb-6 `}>
            Temukan OPD Anda
          </h1>
          <div className="w-full  flex justify-center mb-8 lg:justify-center">
            <input
              type="text"
              placeholder="Nama OPD"
              name="opd"
              className="border border-gray-400 flex-grow h-fit px-4 py-2 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-white"
            />
            <div className="inline-flex items-center px-4 py-1 mt-2 ml-2 font-medium text-white transition duration-300 bg-[#2C2C2C] rounded-lg cursor-pointer hover:bg-[#525252] ">
              <span className="justify-center">Cari</span>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 lg:grid-cols-4 ">
          {
            allOPD.map((opd,i) => (
              <>
                <BoxOPD 
                  key={opd.id}
                  id={opd.id}
                  nama={opd.nama}
                  alias={opd.alias}
                  alamat={opd.alamat}
                  img_link={backendUrl+'uploads/' + opd.id + '.png'}
                  />
              </>
            ))
          }
          </div>
  
        </div>
      </div>
    </section>
    
    </>
  );
}
