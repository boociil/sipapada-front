import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import bpsLogo from '../assets/bps.png';
import LongInput from "./LongInput";
import { GlobalStateContext } from './GlobalStateProvider';

export default function Main() {

  const { id, master_id } = useParams();
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
    satuan:"",
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
                master_id : master_id,
                nama : data.nama,
                konsep : data.konsep,
                definisi : data.definisi,
                interpretasi : data.interpretasi,
                rumus : data.rumus,
                ukuran : data.ukuran,
                satuan : data.satuan,
                klasifikasi_penyajian : data.klasifikasi_penyajian ,
                ind_komposit : data.ind_komposit,
                komp_publikasi : data.komp_publikasi,
                komp_nama : data.komp_nama,
                kegiatan_penghasil : data.kegiatan_penghasil,
                kode_keg : data.kode_keg,
                nama_var_pembangunan : data.nama_var_pembangunan,
                level_estimasi : data.level_estimasi,
                diakses_umum : data.diakses_umum,
             }) 
        };
        
        fetch(backendUrl + 'input_ms_ind', requestOptions)
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

  const onYesNoClick = (a) => {
    if(a == 1){
        setFormData({
            ...formData,
            ind_komposit: a,
            kegiatan_penghasil: "",
            kode_keg: "",
            nama_var_pembangunan: ""
          });
    }else{
        setFormData({
            ...formData,
            ind_komposit: a,
            komp_pubikasi: "",
            komp_nama: ""
          });
    }
  }

  const onAksesUmumClick = (a) => {
    setFormData({
        ...formData,
        ["diakses_umum"]: a
      });
  }

  const onSubmitClick = async (even) => {
    await sendDataMSInd(formData)
    .then(success => {
        // console.log(success);
        setGlobalId(success.id);
        navigate("/ind/" + id + "/" + success.id);
    })
    .catch(error => {
        console.log(error);
    })

    // alert(JSON.stringify(formData))
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
                        var={`satuan`}
                        nama={`Satuan`}
                        value={formData.Satuan}
                        onChange={handleChange}
                    />
                    <LongInput
                        var={`klasifikasi_penyajian`}
                        nama={`Klasifikasi Penyajian`}
                        value={formData.klasifikasi_penyajian}
                        onChange={handleChange}
                    />

                    <div className="ind_komposit mb-2  pb-2">
                        <label htmlFor="konsep" className="px-1 ">Apakah merupakan Indikator Komposit?</label>

                        <div className="flex mt-2">
                            <div 
                                className={`w-fit px-4 transition-all cursor-pointer duration-300 rounded-md hover:scale-100 ${formData.ind_komposit === 1 ? 'bg-blue-500 text-white border-2 border-blue-500' : 'bg-gray-300 border-2 border-gray-400'}`}
                                onClick={() => onYesNoClick(1)}
                            >
                                Ya
                            </div>
                            <div 
                                className={`w-fit ml-4 px-4 transition-all cursor-pointer duration-300 rounded-md hover:scale-100 ${formData.ind_komposit === 2 ? 'bg-blue-500 text-white border-2 border-blue-500 ' : 'bg-gray-300 border-2 border-gray-400'}`}
                                onClick={() => onYesNoClick(2)}
                            >
                                Tidak
                            </div>
                        </div>
                        
                    </div>

                    {
                        formData.ind_komposit === "" ? (
                            <>
                                <div className="bg-gray-200 text-gray-500 h-24 text-center p-2 rounded-lg flex items-center justify-center">
                                    Pilih Indikator Komposit
                                </div>

                            </>
                        ) : (
                            <>
                                {
                                    formData.ind_komposit === 1 ? (
                                        <>
                                            <div className="bg-gray-200  p-2 rounded-lg items-center">
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

                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="bg-gray-200  p-2 rounded-lg items-center">
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

                                            </div>
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                    
                    
                    <LongInput
                        var={`level_estimasi`}
                        nama={`Level Estimasi`}
                        value={formData.level_estimasi}
                        onChange={handleChange}
                    />

                    <label htmlFor="konsep" className="px-1 ">Apakah Kolom dapat diakses Umum?</label>
                    <div className="flex mt-2">
                        <div 
                            className={`w-fit px-4 transition-all cursor-pointer duration-300 rounded-md hover:scale-100 ${formData.diakses_umum === 1 ? 'bg-blue-500 text-white border-2 border-blue-500' : 'bg-gray-300 border-2 border-gray-400'}`}
                            onClick={() => onAksesUmumClick(1)}
                        >
                            Ya
                        </div>
                        <div 
                            className={`w-fit ml-4 px-4 transition-all cursor-pointer duration-300 rounded-md hover:scale-100 ${formData.diakses_umum === 2 ? 'bg-blue-500 text-white border-2 border-blue-500 ' : 'bg-gray-300 border-2 border-gray-400'}`}
                            onClick={() => onAksesUmumClick(2)}
                        >
                            Tidak
                        </div>
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
