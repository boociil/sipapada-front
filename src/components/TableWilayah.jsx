import React, { useEffect, useState } from "react";
    

export default function InputForm(props) {

    const [rowAdd, setRowAdd] = useState(0);
    const [data,setData] = useState({})

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
        props.decOne();
        setRowAdd(rowAdd-1);
    }

    const render_row = () => {

        const rows = [];
        for (let i = 0; i < rowAdd; i++) {
            rows.push(
                <tr key={i}>
                    <td className="border-2 border-black">{i + 2}</td>
                    <td className="border-2 border-black">
                        <input type="text" value={props.wilKeg.prov[i+1] || ""} onChange={(e) => props.handleChange(e,"prov",i+1)}/>
                    </td>
                    <td className="border-2 border-black">
                        <input type="text" value={props.wilKeg.kabkot[i+1] || ""} onChange={(e) => props.handleChange(e,"kabkot",i+1)}/>
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
                        <td className="border-2 border-black ">No</td>
                        <td className="border-2 border-black ">Provinsi</td>
                        <td className="border-2 border-black">Kabupaten/Kota</td>
                    </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="border-2 border-black">1.</td>
                            <td className="border-2 border-black">
                                <input type="text" value={props.wilKeg.prov[0] || ""} onChange={(e) => props.handleChange(e,"prov",0)}/>
                            </td>
                            <td className="border-2 border-black">
                                <input type="text" value={props.wilKeg.kabkot[0] || ""} onChange={(e) => props.handleChange(e,"kabkot",0)}/>
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
