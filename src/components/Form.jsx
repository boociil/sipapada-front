import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bpsLogo from '../assets/bps.png'
import InputForm from './InputForm'
import BabDiv from "./BabDiv";

export default function Main() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    judul_kegiatan: "",
    tahun_kegiatan: "",
    met_pengumpulan_data: "",
    sektor_kegiatan: "",
    rekomendasi_kegiatan: "",
    id_rekomendasi: "",
    instansi: "",
    alamat: "",
    telepon: "",
    email: "",
    faksimile: "",
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
        <section className="all-body mb-80">
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
                            placeholder="Judul Kegiatan" 
                            name="judul_kegiatan" 
                            id="judul_kegiatan" 
                            value={formData.judul_kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="pengumpulan_data mb-2 justify-between flex border-b-2 pb-2">
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
                    <div className="sektor_kegiatan mb-2 justify-between flex border-b-2 pb-2">
                        <label htmlFor="sektor_kegiatan" className="pr-1 pt-2 font-semibold">Sektor Kegiatan</label>
                        <input 
                            type="text" 
                            className="px-2 h-8 w-16 rounded-md mt-1 text-center" 
                            name="sektor_kegiatan" 
                            id="sektor_kegiatan" 
                            value={formData.sektor_kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="keterangan_metode_pengumpulan_data text-xs w-fit lg:flex lg:justify-between">
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
                        <div className="lg:ml-20">
                            <div className="flex justify-between">
                                <div>Ketenagakerjaan</div>
                                <div>- 13</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Neraca Nasional</div>
                                <div>- 14</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Indikator Ekonomi Bulanan</div>
                                <div>- 15</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Produktivitas</div>
                                <div>- 16</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Harga dan Paritas Daya Beli</div>
                                <div>- 17</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Sektor Publik, Perpajakan, dan Regulasi Pasar</div>
                                <div>- 18</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Perwilayahan dan Perkotaan</div>
                                <div>- 19</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Ilmu Pengetahuan dan Hak Paten</div>
                                <div>- 20</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Perlindungan Sosial dan Kesejahteraan</div>
                                <div>- 21</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Transportasi</div>
                                <div>- 22</div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 justify-between flex border-b-2 pb-2">
                        <label htmlFor="rekomendasi_kegiatan" className="pr-1 pt-2 font-semibold ">Jika Survei Statistik Sektoral, Apakah mendapatkan rekomendasi dari BPS?</label>
                        <input 
                            type="text" 
                            className="px-2 h-8 w-16 rounded-md mt-4 md:mt-0 text-center" 
                            name="rekomendasi_kegiatan" 
                            id="rekomendasi_kegiatan" 
                            value={formData.rekomendasi_kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-xs w-fit">
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
                            <input 
                                type="text" 
                                className="rounded-md ml-2 h-6" 
                                name="id_rekomendasi"
                                value={formData.id_rekomendasi}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <InputForm 
                        text={"Sektor Kegiatan"} 
                        name="sektor_kegiatan"
                        value={formData.rekomendasi_kegiatan} 
                        change={handleChange} 
                        print_info
                        info={["Ya","Tidak","gatau","ntahlah"]}
                    />

                    {/* BAB 1 */}
                    {/* PENYELENGGARA */}

                    <BabDiv text={"I. PENYELENGGARA"} />

                    <InputForm 
                        text={"1.1 Instansi Penyelenggara"}
                        name="instansi"
                        value={formData.instansi}
                        change={handleChange}
                    />

                    <InputForm 
                        text={"1.2 Alamat Instansi Penyelenggara"}
                        name="alamat"
                        value={formData.alamat}
                        change={handleChange}
                    />
                    <InputForm 
                        text={"Telepon Penyelenggara"}
                        name="telepon"
                        value={formData.telepon}
                        change={handleChange}
                    />
                    <InputForm 
                        text={"Email Penyelenggara"}
                        name="email"
                        value={formData.email}
                        change={handleChange}
                    />
                    <InputForm 
                        text={"Faksimile Penyelenggara"}
                        name="faksimile"
                        value={formData.faksimile}
                        change={handleChange}
                    />

                    <BabDiv text={"II. PENANGGUNG JAWAB"} />

                    <BabDiv text={"III. PERENCANAAN DAN PERSIAPAN"} />

                    <BabDiv text={"IV. DESAIN KEGIATAN"} />

                    <BabDiv text={"V. DESAIN SAMPEL"} />

                </form>
            </section>
        </section>
    </>
  );
}
