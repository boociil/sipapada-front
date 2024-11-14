import React from "react";

// props: text, name, value, change, print_info, info

export default function InputForm(props) {

    return (
        <>
            <table className="Table text-center border-black border-collapse ">
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
                <tr>
                    <td  className="border-2 border-black font-semibold">A. Perencanaan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black font-semibold">B. Pengumpulan</td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                    <td className="border-2 border-black"></td>
                </tr>
                <tr>
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
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
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
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
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
                <tr>
                    <td  className="border-2 border-black">1. Perencanaan Kegiatan</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                    <td className="border-2 border-black">s.d</td>
                    <td className="border-2 border-black">
                        <input type="date" />
                    </td>
                </tr>
            </table>
        </>         
    )
}
