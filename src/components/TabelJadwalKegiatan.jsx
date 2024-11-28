import React, { useState } from "react";
    

export default function InputForm(props) {


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
                            value={props.perencanaan_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black px-2">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="perencanaan_akhir"
                            value={props.perencanaan_akhir}
                            onChange={props.handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">2. Desain</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="desain_awal"
                            value={props.desain_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="desain_akhir"
                            value={props.desain_akhir}
                            onChange={props.handleChange}
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
                    <td  className="border-2 border-black text-left">3. Pengumpulan props</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date"
                            name="pengumpulan_awal"
                            value={props.pengumpulan_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date"
                            name="pengumpulan_akhir"
                            value={props.pengumpulan_akhir}
                            onChange={props.handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black font-semibold">C. Pemeriksaan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">4. Pengolahan props</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="pengolahan_awal"
                            value={props.pengolahan_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="pengolahan_akhir"
                            value={props.pengolahan_akhir}
                            onChange={props.handleChange}
                        />
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
                        <input 
                            type="date" 
                            name="analisis_awal"
                            value={props.analisis_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="analisis_akhir"
                            value={props.analisis_akhir}
                            onChange={props.handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">6. Diseminasi Hasil</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="diseminasi_awal"
                            value={props.diseminasi_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date"
                            name="diseminasi_akhir"
                            value={props.diseminasi_akhir}
                            onChange={props.handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black text-left">7. Evaluasi</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="evaluasi_awal"
                            value={props.evaluasi_awal}
                            onChange={props.handleChange}
                        />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input 
                            type="date" 
                            name="evaluasi_akhir"
                            value={props.evaluasi_akhir}
                            onChange={props.handleChange}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </>         
    )
}
