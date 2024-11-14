import React, { useEffect, useState } from "react";
    

export default function InputForm(props) {

    const [rowAdd, setRowAdd] = useState(0);
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
                        <input type="text" />
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" />
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" />
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" />
                    </td>
                </tr>
            );
        }
        return rows; // Mengembalikan array dari JSX
    }

    useEffect(() => {
        console.log(rowAdd);
    }, [rowAdd]);

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
                                <input type="text" />
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" />
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" />
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" />
                            </td>
                        </tr>
                        {
                            render_row()
                        }

                    </tbody>
                </table>

                <div className="flex ">
                    <div className="bg-white font-semibold mt-4 w-fit py-1 px-6 rounded-md hover:shadow-lg transition-all cursor-pointer duration-200 active:scale-90 active:bg-gray-600" onClick={addRow}>
                        Tambah Kolom
                    </div>
                    <div className={`bg-red-500 text-white font-semibold ml-8 mt-4 w-fit py-1 px-6 rounded-md hover:shadow-lg transition-all cursor-pointer duration-200 active:scale-90 active:bg-gray-600 ${rowAdd > 0 ? 'opacity-100' : 'opacity-0'}`} onClick={decRow}>
                        Hapus Kolom
                    </div>
                </div>
            </div>

        </>         
    )
}
