import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bpsLogo from '../assets/bps.png'

export default function Main() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    judul_kegiatan: "",
    tahun_kegiatan: "",
    met_pengumpulan_data: "",
    sektor_kegiatan: "",
    rekomendasi_kegiatan: "",
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const redirectTo = (path) => {
    navigate(path);
  }; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
        <section className="all-body">
            <section className="form md:mx-auto mx-4 max-w-4xl p-4 mt-24 rounded-lg shadow-lg bg-gray-300 ">
                <div className="keterangan flex justify-between">
                    <div className="bps-logo text-xs mb-4 italic font-semibold flex items-center">
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
                        ms-keg
                    </div>
                </div>
                <div className="title">
                    <h1 className="text-center font-bold text-2xl">
                        Metadata Statistik Kegiatan
                    </h1>
                </div>
                <form action="" className="mt-9">
                    <div className="tahun_kegiatan mb-2 flex justify-between">
                        <label htmlFor="tahun_kegiatan" className="p-1 font-semibold">Tahun Kegiatan </label>
                        <select
                            className="px-2 h-8 rounded-md mt-1 w-32 text-center" 
                            name="tahun_kegiatan" 
                            id="tahun_kegiatan" 
                            value={formData.tahun_kegiatan}
                            onChange={handleChange}
                        >
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                    <div className="judul_kegiatan mb-2">
                        <label htmlFor="judul_kegiatan" className="px-1 font-semibold">Judul Kegiatan </label>
                        <input 
                            type="text" 
                            className="w-full px-2 h-8 rounded-md mt-1" 
                            placeholder="Judul" 
                            name="judul_kegiatan" 
                            id="judul_kegiatan" 
                            value={formData.judul_kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="pengumpulan_data mb-2 justify-between flex">
                        <label htmlFor="pengumpulan_data" className="pr-1 pt-2 font-semibold">Metode Pengumpulan Data</label>
                        <input 
                            type="text" 
                            className="px-2 h-8 w-16 rounded-md mt-1 text-center" 
                            name="met_pengumpulan_data" 
                            id="pengumpulan_data" 
                            value={formData.met_pengumpulan_data}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="keterangan_metode_pengumpulan_data text-xs w-56">
                        <div className="flex justify-between">
                            <div>Pencacahan Lengkap</div>
                            <div>- 1</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Survei</div>
                            <div>- 2</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Kompilasi Produk Administrasi</div>
                            <div>- 3</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Cara Lain Sesuai Perkembangan TI</div>
                            <div>- 4</div>
                        </div>
                    </div>
                    <div className="sektor_kegiatan mb-2 justify-between flex">
                        <label htmlFor="sektor_kegiatan" className="pr-1 pt-2 font-semibold">Sektor Kegiatan</label>
                        <input 
                            type="text" 
                            className="px-2 h-8  w-16 rounded-md mt-1 text-center" 
                            name="sektor_kegiatan" 
                            id="sektor_kegiatan" 
                            value={formData.sektor_kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="keterangan_metode_pengumpulan_data text-xs w-fit">
                        <div>
                            <div className="flex justify-between">
                                <div>Pertanian dan Perikanan</div>
                                <div>- 1</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Demografi dan Kependudukan</div>
                                <div>- 2</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Pembangunan</div>
                                <div>- 3</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Proyeksi Ekonomi</div>
                                <div>- 4</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Pendidikan dan Pelatihan</div>
                                <div>- 5</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Lingkungan</div>
                                <div>- 6</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Keuangan</div>
                                <div>- 7</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Globalisasi</div>
                                <div>- 8</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Kesehatan</div>
                                <div>- 9</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Industri dan Jasa</div>
                                <div>- 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Teknologi Informasi dan Komunikasi</div>
                                <div>- 11</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Perdagangan Internasional dan Neraca Perdagangan</div>
                                <div>- 12</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <div>Kompilasi Produk Administrasi</div>
                                <div>- 13</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Cara Lain Sesuai Perkembangan TI</div>
                                <div>- 14</div>
                            </div>
                        </div>
                    </div>
                    <div className="rekomendasi_kegiatan mb-2 justify-between flex">
                        <label htmlFor="rekomendasi_kegiatan" className="pr-1 pt-2 font-semibold">Sektor Kegiatan</label>
                        <input 
                            type="text" 
                            className="px-2 h-8  w-16 rounded-md mt-1 text-center" 
                            name="rekomendasi_kegiatan" 
                            id="rekomendasi_kegiatan" 
                            value={formData.rekomendasi_kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="keterangan_metode_pengumpulan_data text-xs w-fit">
                        <div className="flex justify-between">
                            <div>Ya</div>
                            <div>- 1</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Tidak</div>
                            <div>- 2</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Jika "YA", identitas rekomendasi :  </div>
                            <input type="text" className="rounded-md ml-2 h-6" />
                        </div>
                    </div>
                </form>
            </section>
        </section>
    </>
  );
}
