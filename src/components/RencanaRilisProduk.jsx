import React, { useState } from "react";
    

export default function InputForm(props) {

    const [data,setData] = useState({
        perencanaan_awal : "",
        perencanaan_akhir : "",
        desain_awal:"",
        desain_akhir:"",
        pengumpulan_data_awal:"",
        pengumpulan_data_akhir:"",
        pengolahan_data_awal:"",
        pengolahan_data_akhhir:"",
        analisis_awal:"",
        analisis_akhir:"",
        diseminasi_awal:"",
        diseminasi_akhir:"",
        evaluasi_awal:"",
        evaluasi_akhir:"",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value
        });
      };

    return (
        <>
            <table className="Table text-center border-black border-collapse ">
                <thead>

                
                <tr>
                    <td className="border-2 border-black ">No</td>
                    <td className="border-2 border-black ">Rincian</td>
                    <td className="border-2 border-black">Tanggal</td>
                </tr>
                </thead>
                <tbody>
                <tr className={`${props.tercetak == 1 ? '' : 'opacity-50 pointer-events-none'}`}>
                    <td  className="border-2 border-black font-semibold">1</td>
                    <td className="border-2 border-black text-left px-2">
                        Tercetak
                    </td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr className={`${props.digital == 1 ? '' : 'opacity-50 pointer-events-none'}`} >
                    <td  className="border-2 border-black font-semibold">2</td>
                    <td className="border-2 border-black text-left px-2">
                        Digital
                    </td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr className={`${props.data_mikro == 1 ? '' : 'opacity-50 pointer-events-none'}`} >
                    <td  className="border-2 border-black font-semibold">3</td>
                    <td className="border-2 border-black text-left px-2">
                        Data Mikro
                    </td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                
                </tbody>
            </table>
        </>         
    )
}
