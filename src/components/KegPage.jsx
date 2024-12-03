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

  const [keg, setKeg] = useState({});

  const { id,master_id } = useParams();
  

  const reqDataInd = ( ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'get_keg/' + id, requestOptions)
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

  const onBackClick = () => {
    navigate("/Form-var/" + id);
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    reqDataInd()
    .then(success => {
        setKeg(success.msg);
    })
  }, [])

  return (
    <>
        <section className="all-body mb-80">
            <section className="form md:mx-auto mx-4 max-w-4xl p-4 mt-24 rounded-lg  ">
                <div className="keterangan flex justify-between">
                    {/* <div className="bps-logo text-xs mb-4 italic font-semibold flex items-center">
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
                    </div> */}
                </div>
                <div className="title">
                    <h1 className="text-center font-bold text-2xl">
                        Metadata Kegiatan
                    </h1>
                    <p className="text-center text-lg text-gray-600">
                        {
                            keg.length > 0 && (
                                <>
                                    {keg[0].Alias}
                                </>
                            )
                        }
                    </p>
                </div>

                <div 
                    className="fixed hover:p-3 border-gray-400 right-10 bottom-10 border-2 p-1 cursor-pointer transition-all duration-500 rounded-lg"
                    onClick={() => navigate("/Form-Keg/" + id)}
                >
                    Add
                </div>

                <div className="mt-12 flex bg-gray-200 p-2 rounded-t-xl text-gray-500 text-sm">
                    <div className="mr-4 w-8 text-center">No</div>
                    <div className="grid grid-cols-5 w-full">
                        <div className="col-span-2 text-center">Nama Kegiatan</div>
                        <div className="text-center">Tahun</div>
                        <div >Kode Kegiatan</div>
                        <div>Penyelenggara</div>
                    </div>
                </div>
                {
                    keg.length > 0 ? (
                        <>
                        {
                            keg.map((item,i) => {
                                return(
                                    <>
                                        <div key={i} className="flex p-2 text text-sm border-b-2 hover:bg-gray-50">
                                            <div className="mr-4 w-8 text-center">{i+1}</div>
                                            <div className="grid grid-cols-5 w-full">
                                                <div className="col-span-2 ">{item.nama_kegiatan}</div>
                                                <div className="text-center">{item.tahun}</div> 
                                                <div>{item.kode_kegiatan}</div> 
                                                <div >{item.Alias}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        </>
                    ) : (
                        <>
                            <div className="w-full text-center mt-36 text-gray-400">Belum ada Kegiatan</div>
                        </>
                    )
                }
                


            </section>
        </section>
    </>
  );
}
