import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import bpsLogo from '../assets/bps.png';
import deleteIcon from '../assets/delete.png';
import ArrowIcon from '../assets/Arrow.png';
import ConfirmCard from './ConfirmCard';

export default function Main() {

  const navigate = useNavigate();
  const [showConfirmCard,setShowConfirmCard] = useState(false);
  const [UETrigger, setUETrigger] = useState(0);
  const [opd, setOPD] = useState();
  const [keg, setKeg] = useState({});
  const { id } = useParams();
  

  const reqOPDInfo = () => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'get_info_opd/' + id, requestOptions)
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
  const reqDelKeg = () => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'del_keg/' + id, requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){
                resolve(data);
                
            }else{
                reject("");
            }
        });
    })
  }

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

  const onConfirm = () => {
    reqDelKeg()
    .then(success => {
        setShowConfirmCard(false);
        setUETrigger(UETrigger+1);
    })
    .catch(err => {

    })
  }

  const onKegClick = (master_id) => {
    navigate("/var/" + id + "/" + master_id)
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    reqDataInd()
    .then(success => {
        setKeg(success.msg);
    })
    reqOPDInfo()
    .then(success => {
        setOPD(success.msg);
    })
  }, [UETrigger])

  return (
    <>
        <ConfirmCard
                    open={showConfirmCard} 
                    setOpen={setShowConfirmCard} 
                    msg={"Alert!"}
                    subMsg={"Hapus kegiatan?"}
                    isConfirm={true}
                    onConfirm={onConfirm}
                />
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
                            opd && (
                                <>
                                    {opd[0].Alias}
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
                    <div className="grid grid-cols-6 w-full">
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
                                        <div key={i} className="flex p-2 text text-sm cursor-pointer border-b-2" >
                                            <div className="mr-4 w-8 text-center">{i+1}</div>
                                            <div className="grid grid-cols-6 w-full">
                                                <div className="col-span-2 ">{item.nama_kegiatan}</div>
                                                <div className="text-center">{item.tahun}</div> 
                                                <div>{item.kode_kegiatan}</div> 
                                                <div >{item.Alias}</div>
                                                <div className="flex justify-center">
                                                    <div className={`text-white bottom-0 w-6 h-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md`} onClick={() => setShowConfirmCard(true)}>
                                                        <img src={`${deleteIcon}`} alt="" />
                                                    </div>
                                                    <div className={`text-white ml-4 rounded-full bg-gray-300 p-1 bottom-0 w-6 h-6 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all duration-300 `} onClick={() => onKegClick(item.id)}>
                                                        <img src={`${ArrowIcon}`} alt="" />
                                                    </div>
                                                </div>
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
