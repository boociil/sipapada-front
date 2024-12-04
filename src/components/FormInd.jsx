import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import bpsLogo from '../assets/bps.png';
import LongInput from "./LongInput";
import { GlobalStateContext } from './GlobalStateProvider';

export default function Main() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { globalId, setGlobalId } = useContext(GlobalStateContext);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    nama: "",
    konsep:"",
    definisi:"",
    interpretasi:"",
    rumus:"",
    ukuran:"",
    klasifikasi_penyajian:"",
    ind_komposit:"",
    komp_publikasi:"",
    komp_nama:"",
    kegiatan_penghasil:"",
    kode_keg:"",
    nama_var_pembangunan:"",
    level_estimasi:"",
    diakses_umum:"",
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const sendDataMSInd = (data) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'POST', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },
            body: JSON.stringify ({ 
                
             }) 
        };
        
        fetch(backendUrl + 'input_ms_keg', requestOptions)
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

    await sendDataMSInd(formData)
    .then(success => {
        // console.log(success);
        setGlobalId(success.id);
        navigate("/ind/" + formData.instansi + "/" + success.id);
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

  const handleRadioChange = (event) => {
    setSelectedOption(Number(event.target.value));
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
                        ms-ind
                    </div>
                </div>
                <div className="title">
                    <h1 className="text-center font-bold text-2xl">
                        Metadata Statistik Variabel
                    </h1>
                </div>
                <form action="" className="mt-9">
                    <LongInput
                        var={`nama`}
                        nama={`Nama Indikator`}
                        value={formData.nama}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`konsep`}
                        nama={`Konsep`}
                        value={formData.konsep}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`definisi`}
                        nama={`Definisi`}
                        value={formData.definisi}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`interpretasi`}
                        nama={`Interpretasi`}
                        value={formData.interpretasi}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`rumus`}
                        nama={`Rumus`}
                        value={formData.rumus}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`ukuran`}
                        nama={`Ukuran`}
                        value={formData.ukuran}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`klasifikasi_penyajian`}
                        nama={`Klasifikasi Penyajian`}
                        value={formData.klasifikasi_penyajian}
                        onChange={handleChange}
                    />

                    <div className="ind_komposit mb-2  pb-2">
                        <label htmlFor="konsep" className="px-1 ">Indikator Komposit</label>
                        <label>
                            <input
                            type="radio"
                            value={1}
                            checked={selectedOption === 1}  // Memeriksa apakah radio button ini dipilih
                            onChange={handleRadioChange}  // Menangani perubahan
                            />
                            Ya
                        </label>
                        
                        <label>
                            <input
                            type="radio"
                            value={0}
                            checked={selectedOption === 0}  // Memeriksa apakah radio button ini dipilih
                            onChange={handleRadioChange}  // Menangani perubahan
                            />
                            Tidak
                        </label>
                    </div>

                    <LongInput
                        var={`komp_publikasi`}
                        nama={`Publikasi Ketersediaan`}
                        value={formData.komp_publikasi}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`komp_nama`}
                        nama={`Nama`}
                        value={formData.komp_nama}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`kegiatan_penghasil`}
                        nama={`Kegiatan Penghasil`}
                        value={formData.kegiatan_penghasil}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`kode_keg`}
                        nama={`Kode Kegiatan`}
                        value={formData.kode_keg}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`nama_var_pembangunan`}
                        nama={`Nama`}
                        value={formData.nama_var_pembangunan}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`level_estimasi`}
                        nama={`Level Estimasi`}
                        value={formData.level_estimasi}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`diakses_umum`}
                        nama={`Apakah Kolom dapat diakses Umum?`}
                        value={formData.diakses_umum}
                        onChange={handleChange}
                    />
                </form>
            </section>
        </section>
    </>
  );
}
