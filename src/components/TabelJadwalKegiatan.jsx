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
                    <td  rowSpan={2} className="border-2 border-black "></td>
                    <td className="border-2 border-black ">Awal</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black">Akhir</td>
                </tr>
                <tr>
                    <td className="border-2 border-black">(tgl/bln/thn)</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black">(tgl/bln/thn)</td>
                </tr>
                </thead>
                <tbody>

                
                <tr>
                    <td  className="border-2 border-black font-semibold">A. Perencanaan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">1. Perencanaan Kegiatan</td>
                    <td className="border-2 border-black">
                    <input 
                            type="date" 
                            name="perencanaan_awal"
                            value={data.perencanaan_awal}
                            onChange={handleChange}
                        />
                    </td>
                    <td className="border-2 border-black px-2">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="perencanaan_akhir"
                            value={data.perencanaan_akhir}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">2. Desain</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            
                        />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black font-semibold">B. Pengumpulan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">3. Pengumpulan Data</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black font-semibold">C. Pemeriksaan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">4. Pengolahan Data</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black font-semibold">D. Penyebarluasan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">5. Analisis</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">6. Diseminasi Hasil</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">7. Evaluasi</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                </tbody>
            </table>
        </>         
    )
}
