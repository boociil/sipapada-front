import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import { GlobalStateContext } from './GlobalStateProvider';
import ConfirmCard from './ConfirmCard';
import deleteIcon from '../assets/delete.png';

export default function Main() {

  const navigate = useNavigate();
  const { globalId, setGlobalId } = useContext(GlobalStateContext);
  const [showConfirmCard,setShowConfirmCard] = useState(false);
  const [metVar, setMetVar] = useState({});
  const [UETrigger, setUETrigger] = useState(0);
  const { id,master_id } = useParams();
  const [idVar, setIDVar] = useState();
  
  const reqDelVar = (id_var) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'del_var/' + id_var, requestOptions)
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

  const reqDataVar = ( ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'get_stat_var/' + master_id, requestOptions)
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

  const onAddClick = () => {
    navigate("/Form-var/" + id + "/" + master_id)
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const onConfirm = () => {
    reqDelVar(idVar)
    .then(success => {
        setShowConfirmCard(false);
        setUETrigger(UETrigger+1);
    })
    .catch(err => {

    })
  }

  const onDelClick = (varID) => {
    setIDVar(varID);
    setShowConfirmCard(true);
  }

  useEffect(() => {
    reqDataVar()
    .then(success => {
        setMetVar(success.msg)

    })
  }, [UETrigger])

  return (
    <>
    <ConfirmCard
                    open={showConfirmCard} 
                    setOpen={setShowConfirmCard} 
                    msg={"Alert!"}
                    subMsg={"Hapus variabel?"}
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
                        Metadata Statistik Variabel
                    </h1>
                </div>

                <div 
                    className="fixed hover:p-3 border-gray-400 right-10 bottom-10 border-2 p-1 cursor-pointer transition-all duration-500 rounded-lg"
                    onClick={onAddClick}
                >
                    Add
                </div>

                <div className="mt-12 flex bg-gray-200 p-2 rounded-t-xl text-gray-500 text-sm">
                    <div className="mr-4 w-8 text-center">No</div>
                    <div className="grid grid-cols-5 w-full">
                        <div>Nama Variabel</div>
                        <div>Alias</div>
                        <div>Ukuran</div>
                        <div>Definisi Variabel</div>
                    </div>
                </div>
                {
                    metVar.length > 0 ? (
                        <>
                        {
                            metVar.map((item,i) => {
                                return(
                                    <>
                                        <div key={i} className="flex p-2 text text-sm border-b-2">
                                            <div className="mr-4 w-8 text-center">{i+1}</div>
                                            <div className="grid grid-cols-5 w-full">
                                                <div>{item.nama_variabel}</div>
                                                <div>{item.alias}</div> 
                                                <div>{item.ukuran}</div> 
                                                <div>{item.definisi_var}</div>
                                                <div className="flex justify-center">
                                                <div className={`text-white bottom-0 w-6 h-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md`} onClick={() => onDelClick(item.id)}>
                                                    <img src={`${deleteIcon}`} alt="" />
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
                            <div className="w-full text-center mt-36 text-gray-400">Belum ada Variabel</div>
                        </>
                    )
                }
                


            </section>
        </section>
    </>
  );
}
