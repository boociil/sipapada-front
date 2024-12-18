import React, { useEffect, useState } from "react";
    

export default function InputForm(props) {

    const [rowAdd, setRowAdd] = useState(0);

    const addRow = () => {
        setRowAdd(rowAdd+1);
    }

    const decRow = () => {
        setRowAdd(rowAdd-1);
    }

    const render_row = () => {

        const rows = [];
        for (let i = 0; i < rowAdd; i++) {
            rows.push(
                <tr key={i}>
                    <td className="border-2 border-black">{i + 2}</td>
                    <td className="border-2 border-black">
                        <input type="text" value={props.varStat.nama[i+2] || ""} onChange={(e) => props.handleChange(e,"nama",i+2)}/>
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" value={props.varStat.konsep[i+2] || ""} onChange={(e) => props.handleChange(e,"konsep",i+2)}/>
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" value={props.varStat.definisi[i+2] || ""} onChange={(e) => props.handleChange(e,"definisi",i+2)}/>
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" value={props.varStat.referensi_waktu[i+2] || ""} onChange={(e) => props.handleChange(e,"referensi_waktu",i+2)}/>
                    </td>
                </tr>
            );
        }
        return rows; // Mengembalikan array dari JSX
    }

    return (
        <>
            <div className="flex flex-col">
                <table className="Table text-center border-black border-collapse">
                    <thead>

                    
                    <tr>
                        <td  rowSpan={2} className="border-2 border-black ">No</td>
                        <td className="border-2 border-black ">Nama Variabel</td>
                        <td rowSpan={2} className="border-2 border-black">Konsep</td>
                        <td rowSpan={2} className="border-2 border-black">Definisi</td>
                        <td className="border-2 border-black">Referensi Waktu</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black">(Karakteristik)</td>
                        <td className="border-2 border-black">(Periode Enumerasi)</td>
                    </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="border-2 border-black">1.</td>
                            <td className="border-2 border-black">
                                <input type="text" value={props.varStat.nama[0] || ""} onChange={(e) => props.handleChange(e,"nama",0)}/>
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" value={props.varStat.konsep[0] || ""} onChange={(e) => props.handleChange(e,"konsep",0)}/>
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" value={props.varStat.definisi[0] || ""} onChange={(e) => props.handleChange(e,"definisi",0)}/>
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" value={props.varStat.referensi_waktu[0] || ""} onChange={(e) => props.handleChange(e,"referensi_waktu",0)}/>
                            </td>
                        </tr>
                        {
                            render_row()
                        }

                    </tbody>
                </table>

                <div className="flex ">
                    <div className="bg-white font-semibold mt-4 w-fit py-1 px-6 rounded-md hover:shadow-lg transition-all cursor-pointer duration-200 active:scale-90 active:bg-gray-600" onClick={addRow}>
                        Tambah Baris
                    </div>
                    <div className={`bg-red-500 text-white font-semibold ml-8 mt-4 w-fit py-1 px-6 rounded-md hover:shadow-lg transition-all cursor-pointer duration-200 active:scale-90 active:bg-gray-600 ${rowAdd > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={decRow}>
                        Hapus Baris
                    </div>
                </div>
            </div>

        </>         
    )
}
