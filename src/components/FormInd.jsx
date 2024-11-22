import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import bpsLogo from '../assets/bps.png';
import InputForm from './InputForm';
import BabDiv from "./BabDiv";
import TableJadwalKegiatan from "./TabelJadwalKegiatan";
import TableVarStat from './TableVarStat'
import TableWilayah from './TableWilayah'
import RencanaRilisProduk from './RencanaRilisProduk'

export default function Main() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
  });

  const { id } = useParams();



  const onBackClick = () => {
    navigate("/Form-var/" + id);
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
        <section className="all-body mb-80">
            <section className="form md:mx-auto mx-4 max-w-4xl p-4 mt-24 rounded-lg shadow-lg bg-gray-300 ">
                <div className="keterangan flex justify-between">
                    <div className="bps-logo text-xs mb-4 italic font-semibold flex items-center">
                        <img 
                            src={`${bpsLogo}`} 
                            alt="BPS" 
                            className="w-16 h-auto mr-2" 
                        />
                        <div>
                            <p>Badan Pusat Statistik</p>
                            <p>Kabupaten Padang Pariaman</p>
                        </div>
                    </div>
                    <div className="mr-10"> 
                        ms-var
                    </div>
                </div>
                <div className="title">
                    <h1 className="text-center font-bold text-2xl">
                        Metadata Statistik Indikator
                    </h1>
                </div>
                <div className="border-2 border-black grid grid-cols-4">
                    <div>no</div>
                    <div>Nama Indikator</div>
                    <div>Alias</div>
                    <div>Definisi Variabel</div>
                </div>
                <div className="flex mt-4 justify-between w-full">
                    <div 
                        className="bg-white w-fit px-6 rounded-md my-2 cursor-pointer hover:shadow-lg transition-all duration-200"
                        onClick={onBackClick}
                    >
                        Kembali
                    </div>
                    <div 
                        className="bg-white w-fit px-6 rounded-md my-2 cursor-pointer hover:shadow-lg transition-all duration-200"
                    >
                        Submit
                    </div>
                </div>
            </section>
        </section>
    </>
  );
}
