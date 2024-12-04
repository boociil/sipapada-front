import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import { GlobalStateContext } from './GlobalStateProvider';

export default function Main() {

  const navigate = useNavigate();
  const { globalId, setGlobalId } = useContext(GlobalStateContext);

  const [ind, setInd] = useState({});

  const { id,master_id } = useParams();
  

  const reqDataInd = ( ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'GET', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },

        };
        
        fetch(backendUrl + 'get_stat_ind/' + master_id, requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){

                console.log(data);
                
                resolve(data);
                
            }else{
                reject("gatawu");
            }
        });
    })
  }

  const onAddClick = () => {
    navigate("/Form-ind/" + id + "/" + globalId)
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;



  useEffect(() => {
    reqDataInd()
    .then(success => {
        setInd(success.msg)
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
                        Metadata Statistik Indikator
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
                    <div className="grid grid-cols-4 w-full">
                        <div>Nama Indikator</div>
                        <div>Alias</div>
                        <div>Ukuran</div>
                        <div>Definisi Indikator</div>
                    </div>
                </div>
                {
                    ind.length > 0 ? (
                        <>
                        {
                            ind.map((item,i) => {
                                return(
                                    <>
                                        <div key={i} className="flex p-2 text text-sm border-b-2">
                                            <div className="mr-4 w-8 text-center">{i+1}</div>
                                            <div className="grid grid-cols-4 w-full">
                                                <div>{item.nama_indikator}</div>
                                                <div>{item.alias}</div> 
                                                <div>{item.ukuran}</div> 
                                                <div>{item.definisi}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        </>
                    ) : (
                        <>
                            <div 
                                className="w-full text-center mt-36 text-gray-400"
                                
                            >
                                Belum ada Indikator
                            </div>
                        </>
                    )
                }
                


            </section>
        </section>
    </>
  );
}
