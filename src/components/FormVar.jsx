import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import bpsLogo from '../assets/bps.png';
import InputForm from './InputForm';
import BabDiv from "./BabDiv";
import { GlobalStateContext } from './GlobalStateProvider';

export default function Main() {

  const { id,master_id } = useParams();
  const navigate = useNavigate();
  const [allOPD, setAllOPD] = useState([]);
  const [dinasOptions, setDinasOptions] = useState([]); 
  const { globalId, setGlobalId } = useContext(GlobalStateContext);

  const [formData, setFormData] = useState({
    nama: "",
    alias:"",
    konsep:"",
    definisi:"",
    referensi_pemilihan:"",
    referensi_waktu:"",
    tipe_data:"",
    klasifikasi_isian:"",
    aturan_validasi:"",
    kalimat_pertanyaan:"",
    akses_umum:"",
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const sendDataMSVar = (data) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'POST', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },
            body: JSON.stringify ({ 
                master_id : 1, 
                nama: data.nama, 
                alias: data.alias, 
                konsep: data.konsep, 
                definisi: data.definisi, 
                referensi_pemilihan: data.referensi_pemilihan, 
                referensi_waktu: data.referensi_waktu, 
                tipe_data: data.tipe_data, 
                klasifikasi_isian: data.klasifikasi_isian,
                aturan_validasi:data.aturan_validasi,
                kalimat_pertanyaan: data.kalimat_pertanyaan, 
                akses_umum: data.akses_umum,
             }) 
        };
        
        fetch(backendUrl + 'input_ms_var', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 201){
                resolve(data);
            }else{
                reject("Error FE");
            }
        });
    })
  }

  const onSubmitClick = async (even) => {

    alert(JSON.stringify(formData));
    await sendDataMSVar(formData)
    .then(success => {
        // console.log(success);
        navigate("/var/" + id + "/" + success.id);
    })
    .catch(error => {
        console.log(error);
    })
    
  }

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
                        Metadata Statistik Variabel
                    </h1>
                </div>
                <form action="" className="mt-9">
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="nama" className="px-1 ">Nama Variabel </label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Nama" 
                            name="nama" 
                            id="nama" 
                            value={formData.nama}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="alias" className="px-1 ">Alias Variabel </label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Alias" 
                            name="alias" 
                            id="alias" 
                            value={formData.alias}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="konsep" className="px-1 ">Konsep</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Konsep" 
                            name="konsep" 
                            id="konsep" 
                            value={formData.konsep}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="definisi" className="px-1 ">Definisi</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Definisi" 
                            name="definisi" 
                            id="definisi" 
                            value={formData.definisi}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="judul_kegiatan" className="px-1 ">Referensi Pemilihan</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Referensi Pemilihan" 
                            name="referensi_pemilihan" 
                            id="referensi_pemilihan" 
                            value={formData.referensi_pemilihan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="referensi_waktu" className="px-1 ">Referensi Waktu</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Referensi Waktu" 
                            name="referensi_waktu" 
                            id="referensi_waktu" 
                            value={formData.referensi_waktu}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="tipe_data" className="px-1 ">Tipe Data</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Tipe Data" 
                            name="tipe_data" 
                            id="tipe_data" 
                            value={formData.tipe_data}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=" mb-2  pb-2">
                        <label htmlFor="klasifikasi_isian" className="px-1 ">Klasifikasi</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Klasifikasi" 
                            name="klasifikasi_isian" 
                            id="klasifikasi_isian" 
                            value={formData.klasifikasi_isian}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="aturan_validasi" className="px-1 ">Aturan Validasi</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Aturan Validasi" 
                            name="aturan_validasi" 
                            id="aliaaturan_validasi" 
                            value={formData.aturan_validasi}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="kalimat_pertanyaan" className="px-1 ">Kalimat Pertanyaan</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Kalimat Pertanyaan" 
                            name="kalimat_pertanyaan" 
                            id="kalimat_pertanyaan" 
                            value={formData.kalimat_pertanyaan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="judul_kegiatan mb-2  pb-2">
                        <label htmlFor="akses_umum" className="px-1 ">Akses Umum</label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Akses Umum" 
                            name="akses_umum" 
                            id="aliaakses_umum" 
                            value={formData.akses_umum}
                            onChange={handleChange}
                        />
                    </div>

                    <div className=" flex justify-center mt-4">
                        <div 
                            className="bg-white w-fit px-6 py-2 font-semibold rounded-md my-2 cursor-pointer hover:shadow-lg transition-all duration-200"
                            onClick={onSubmitClick}
                        >
                            Submit
                        </div>
                    </div>
                </form>
            </section>
        </section>
    </>
  );
}
