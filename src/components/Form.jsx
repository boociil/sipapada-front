import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bpsLogo from '../assets/bps.png'
import InputForm from './InputForm'
import BabDiv from "./BabDiv";
import SubTitleForm from "./SubTitleForm"

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
    eselon_1 : "",
    eselon_2 : "",
    nama_pj: "",
    jabatan_pj: "",
    alamat_pj: "",
    telepon_pj:"",
    email_pj:"",
    faksimile_pj:"",
    // BAB IV
    kegiatan_dilakukan:"",
    jika_berulang:"",
    tipe_pengumpulan_data:"",
    cakupan_wilayah_data:"",
    metode_pengumpulan_data:"",
    sarana_pengumpulan_data:"",
    unit_pengumpulan_data:"",
    // BAB V
    rancangan_sampel:"",
    metode_pemilihan_sampel_terakir:"",
    metode_sampel:"",
    kerangka_sampel_terakir:"",
    fraksi_sampel_keseluruhan:"",
    sampling_error:"",
    unit_sampel: "",
    unit_observasi:"",
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
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Email Penyelenggara"}
                        name="email"
                        value={formData.email}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Faksimile Penyelenggara"}
                        name="faksimile"
                        value={formData.faksimile}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <BabDiv text={"II. PENANGGUNG JAWAB"} />

                  
                    <InputForm 
                        text={"2.1 Unit Eselon Penanggung Jawab"}
                        name="faksimile"
                        not_input_title={true}
                    />
                    
                    <InputForm 
                        text={"Eselon 1"}
                        name="eselon_1"
                        value={formData.eselon_1}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={"Eselon 2"}
                        name="eselon_2"
                        value={formData.eselon_2}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={"2.2 Penanggung Jawab Teknis (Setingkat Eselon 3)"}
                        name="faksimile"
                        not_input_title={true}
                    />

                    <InputForm 
                        text={"Nama"}
                        name="nama_pj"
                        value={formData.nama_pj}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={"Jabatan"}
                        name="jabatan_pj"
                        value={formData.jabatan_pj}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={"Alamat"}
                        name="alamat_pj"
                        value={formData.alamat_pj}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Telepon"}
                        name="telepon_pj"
                        value={formData.telepon_pj}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Email"}
                        name="email_pj"
                        value={formData.email_pj}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Faksimile"}
                        name="faksimile_pj"
                        value={formData.faksimile_pj}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <BabDiv text={"III. PERENCANAAN DAN PERSIAPAN"} />

                    <BabDiv text={"IV. DESAIN KEGIATAN"} />

                    <InputForm 
                        text={"4.1 Kegiatan ini dilakukan "} 
                        name="kegiatan_dilakukan"
                        value={formData.kegiatan_dilakukan} 
                        change={handleChange} 
                        print_info={true}
                        info={["Hanya Sekali","Berulang"]}
                    />
                    
                    <InputForm 
                        text={`4.2 Jika "berulang" (R.4.1. berkode 2), Frekuensi Penyelenggaraan `} 
                        name="jika_berulang"
                        value={formData.jika_berulang} 
                        change={handleChange} 
                        print_info={true}
                        info={["Harian","Mingguan","Bulanan","Triwulanan",
                            "Empat Bulanan", "Semesteran","Tahunan","> Dua Tahunan"
                        ]}
                    />

                    <InputForm 
                        text={"4.3 Tipe Pengumpulan Data "} 
                        name="tipe_pengumpulan_data"
                        value={formData.tipe_pengumpulan_data} 
                        change={handleChange} 
                        print_info={true}
                        info={["Longitudinal Panel", "Longitudinal Cross Sectional", "Cross Seciotnal"]}
                    />
                    
                    <InputForm 
                        text={"4.4 Cakupan Wilayah Pengumpulan Data"} 
                        name="cakupan_wilayah_data"
                        value={formData.cakupan_wilayah_data} 
                        change={handleChange} 
                        print_info={true}
                        info={["Seluruh WIlayah Indonesia", "Sebagian Wilayah Indonesia"]}
                    />

                    <InputForm 
                        text={`4.5 Jika "sebagian wilayah indonesia" (R.4.4. berkode 2), WIlayah kegiatan :`}
                        name="faksimile"
                        not_input_title={true}
                    />

                    <InputForm 
                        text={"4.6 Metode Pengumpulan Data"} 
                        name="metode_pengumpulan_data"
                        value={formData.metode_pengumpulan_data} 
                        change={handleChange} 
                        print_info={true}
                        info={["Wawancara","Mengisi Kuesioner Sendiri (swacacah)","Pengmatan (Observasi)","Pengumpulan Data Sekunder","Lainnya (Sebutkan)"]}
                    />
                    
                    <InputForm 
                        text={"4.7 Sarana Pengumpulan Data"} 
                        name="sarana_pengumpulan_data"
                        value={formData.sarana_pengumpulan_data} 
                        change={handleChange} 
                        print_info={true}
                        info={["Paper-assisted Personal Interviewing (PAPI)","Computer-assisted Personal INterviewing (CAPI)", "Computer-assited Telephones Interviewing (CATI)","Computer Aided Web Interviewing (CAWI)","Mail", "Lainnya (Sebutkan)"]}
                    />

                    <InputForm 
                        text={"4.8 Unit Pengumpulan Data"} 
                        name="unit_pengumpulan_data"
                        value={formData.unit_pengumpulan_data} 
                        change={handleChange} 
                        print_info={true}
                        info={["Individu","Rumah Tangga","Usaha/Perusahaan","Lainnya (sebutkan) "]}
                    />


                    <BabDiv text={"V. DESAIN SAMPEL"} />
                    
                    <InputForm 
                        text={"5.1 Jenis Rancangan Sampel"} 
                        name="rancangan_sampel"
                        value={formData.rancangan_sampel} 
                        change={handleChange} 
                        print_info={true}
                        info={["Single Stage/Phase","Multi Stage/Phase"]}
                    />

                    <InputForm 
                        text={"5.2 Metode Pemilihan Sampel Tahap Terakhir"} 
                        name="metode_pemilihan_sampel_terakir"
                        value={formData.metode_pemilihan_sampel_terakir} 
                        change={handleChange} 
                        print_info={true}
                        info={["Probabilitas","Non Probabilitas"]}
                    />

                    <InputForm 
                        text={`5.3 Jika "Sampel Probabilitas" (R.5.2. berkode 1), Metode yang digunakan :`}
                        name="metode_sampel"
                        value={formData.metode_sampel} 
                        change={handleChange} 
                        print_info={true}
                        info={["Simple Random Sampling","Systematic Random Sampling","Stratified Random Sampling","Cluster Sampling","Multi Stage Sampling"]}
                    />
                    <InputForm 
                        text={`Jika "Sampel Non Probabilitas" (R.5.2. berkode 2), Metode yang digunakan :`}
                        name="faksimile"
                        not_input_title={true}
                        print_info={true}
                        info={["Quota Sampling","Accidental Sampling","Purposive Sampling","Snowball Sampling","Saturation Sampling"]}
                    />

                    <BabDiv text={"VI. PENGOLAHAN DAN ANALISIS"} />
                    <BabDiv text={"VI. DISEMINASI HASIL"} />

                </form>
            </section>
        </section>
    </>
  );
}
