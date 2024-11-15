import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/Bg.png"
import { Link, Element } from 'react-scroll';

export default function Main() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [dataUsers, setDataUsers] = useState([]);
  const [allOPD, setAllOPD] = useState([]);
  const [dataDinas, setDataDinas] = useState({
    nama: "",
    alias:"",
  });
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const redirectTo = (path) => {
    navigate(path);
  }; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataDinas({
      ...dataDinas,
      [name]: value
    });
  };

  const reqDataUsers = ( ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'get_all_users', requestOptions)
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
    reqDataUsers()
    .then(success => {
      setDataUsers(success.msg);
      console.log(success.msg);
    })
    reqDataOPD()
    .then(success => {
      setAllOPD(success.msg);
      console.log(success.msg);
      
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
          Hallo Admin
        </h1>
        <h2 className={`text-md md:text-2xl lg:text-3xl max-w-6xl px-8 font-semibold text-gray-50 ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          Ada perlu apa hari ini?   
        </h2>
        <div className={`font-bold p-1 mt-8 ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'} flex flex-col items-center`}>
            <Link
                to="users_management"
                smooth={true} 
                duration={500} 
                className="bg-white mb-4 text-md md:text-lg py-1 px-10 hover:scale-110 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-700 shadow-lg">
                Users Management
            </Link>
            <Link
                to="tambah_instansi"
                smooth={true} 
                duration={500} 
                className="bg-white mb-4 text-md md:text-lg py-1 px-10 hover:scale-110 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-700 shadow-lg">
                Tambah Instansi
            </Link>
        </div>

      </div>
    </section>

    <section name="users_management" className="tambah-instansi-disini text-gray-600 shadow-2xl body-font flex items-center  bg-cover bg-opacity-10">
      <div className=" mt-20 pb-24 mx-auto text-center items-center justify-center">
        {/* Form Tambah Instansi disini*/}

        <h1 className={`text-2xl lg:text-4xl font-bold text-black mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          Users
        </h1>


        <div className="p-2 border-b border-gray-300 grid grid-cols-3">
            <h2 className="text-sm font-semibold text-gray-800">Username</h2>
            <p className="text-sm text-gray-800 font-semibold">Role</p>
            <p className="text-sm text-gray-800 font-semibold">Dinas</p>
        </div>
        {
            dataUsers.map((usr,i) => (
              <div key={i} className="p-2 border-b border-gray-300 grid grid-cols-3">
                <h2 className=" text-gray-600">{usr.username}</h2>
                <p className="text-gray-600">{usr.role}</p>
                <p className="text-gray-600">{usr.dinas}</p>
              </div>
            ))
          }
        
      </div>
    </section>



    <section name="tambah_instansi" className="tambah-instansi-disini text-gray-600 shadow-2xl body-font flex items-center justify-center bg-cover bg-opacity-10" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=" mt-20 pb-24 text-center w-full items-center justify-center">
        
            {/* From Uiverse.io by iZOXVL */}
            <div
                style={{ animation: "slideInFromLeft 1s ease-out" }}
                className="relative min-w-96 max-w-2xl bg-[#2C2C2C] mx-auto rounded-xl shadow-xl overflow-hidden p-8 space-y-8"
            >
                {/* bagian bulet */}
                



            <h2
                style={{ animation: "appear 2s ease-out" }}
                className="text-center text-4xl font-bold text-white"
            >
                Tambah Dinas
            </h2>
            <p
                style={{ animation: "appear 3s ease-out" }}
                className="text-center text-white"
            >
                Masukan Data Dinas disini.
            </p>
            <form method="POST" action="#" className="space-y-6 ">
                <div className="relative">
                    <input
                        placeholder="Nama Dinas"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none "
                        required
                        id="nama"
                        name="nama"
                        type="text"
                        value={dataDinas.nama}
                        onChange={handleChange}
                    />
                    <label
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs"
                        htmlFor="nama"
                    >
                        Nama Dinas
                    </label>
                </div>
                <div className="relative">
                    <input
                        placeholder="Alias Dinas"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none "
                        required
                        id="alias"
                        name="alias"
                        type="text"
                        value={dataDinas.alias}
                        onChange={handleChange}
                    />
                    <label
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs"
                        htmlFor="alias"
                    >
                        Alias
                    </label>
                </div>

                
                
                <button
                className="w-full py-2 px-4 bg-white hover:bg-gray-500 hover:text-white rounded-md shadow-lg text-black font-semibold transition duration-1000"
                type="submit"
                >
                Tambah
                </button>
            </form>
            </div>

        <h1 className={`text-white mt-8 text-2xl lg:text-4xl font-bold mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          Dinas/OPD
        </h1>

        <div className="max-w-4xl mx-auto mt-10">
            <div className="p-2 border-b border-gray-300 grid grid-cols-3 text-white">
                <h2 className="text-sm font-semibold ">Nama</h2>
                <h2 className="text-sm font-semibold ">Alias</h2>
                <p className="text-sm  font-semibold">Alamat</p>
            </div>
            {
                allOPD.map((opd,i) => (
                    <div key={i} className="p-2 border-b border-gray-300 grid grid-cols-3 text-gray-200">
                        <h2 className=" ">{opd.nama}</h2>
                        <h2 className=" ">{opd.alias}</h2>
                        <p className="">{opd.alamat}</p>
                    </div>
                ))
            }
        </div>
      </div>
        
    </section>

    </>
  );
}
