import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import bpsLogo from '../assets/bps.png';
import InputForm from './InputForm';
import BabDiv from "./BabDiv";
import TableJadwalKegiatan from "./TabelJadwalKegiatan";
import TableVarStat from './TableVarStat'
import TableWilayah from './TableWilayah'
import RencanaRilisProduk from './RencanaRilisProduk'

export default function Main() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [allOPD, setAllOPD] = useState([]);
  const [dinasOptions, setDinasOptions] = useState([]); 

  const [varStat, setVarStat] = useState({
    nama : ["","","","","","","","",""],
    konsep : ["","","","","","","","",""],
    definisi : ["","","","","","","","",""],
    referensi_waktu : ["","","","","","","","",""],
  })

  const handleVarStatChange = (e, type, index) => {
    const { value } = e.target;
    setVarStat((prev) => ({
        ...prev,
        [type]: prev[type].map((item, i) => (i === index ? value : item))
    }));
  };

  const decOneVarStat = () => {
    setWilKeg((prev) => ({
        nama: prev.nama.slice(0, -1),
        konsep: prev.konsep.slice(0, -1),
        definisi: prev.definisi.slice(0, -1),
        referensi_waktu : prev.referensi_waktu.lice(0, -1),
    }));
  }

  const [wilKeg, setWilKeg] = useState({
    prov: ["", "", "","",""], // Inisialisasi array dengan jumlah elemen awal
    kabkot: ["", "", "","",""]
});

const handleWilKegChange = (e, type, index) => {
    const { value } = e.target;
    setWilKeg((prev) => ({
        ...prev,
        [type]: prev[type].map((item, i) => (i === index ? value : item))
    }));
};



  const decOneWilKeg = () => {
    setWilKeg((prev) => ({
        prov: prev.prov.slice(0, -1),
        kabkot: prev.kabkot.slice(0, -1),
    }));
  }

  const [formData, setFormData] = useState({
    judul_kegiatan: "",
    kode_kegiatan: "",
    tahun_kegiatan: "2022",
    met_pengumpulan_data: "",
    sektor_kegiatan: "",
    rekomendasi_kegiatan: "",
    id_rekomendasi: "",

    instansi: "1",

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
    // BAB III
    latbel_kegiatan:"",
    tujuan_kegiatan:"",
    perencanaan_awal:"", 
    perencanaan_akhir:"",
    desain_awal:"", 
    desain_akhir:"", 
    pengumpulan_awal:"", 
    pengumpulan_akhir:"",
    pengolahan_awal:"",
    pengolahan_akhir:"",
    analisis_awal:"",
    analisis_akhir:"",
    diseminasi_awal:"",
    diseminasi_akhir:"",
    evaluasi_awal:"",
    evaluasi_akhir:"",
    // BAB IV
    kegiatan_dilakukan:"",
    jika_berulang:"",
    tipe_pengumpulan_data:"",
    cakupan_wilayah_data:"",
    metode_pengumpulan_data:"",
    metode_pengumpulan_data_lainnya:"",
    sarana_pengumpulan_data:"",
    sarana_pengumpulan_data_lainnya:"",
    unit_pengumpulan_data:"",
    unit_pengumpulan_data_lainnya:"",
    // BAB V
    rancangan_sampel:"",
    metode_pemilihan_sampel_terakir:"",
    metode_sampel:"",
    kerangka_sampel_terakir:"",
    fraksi_sampel_keseluruhan:"",
    sampling_error:"",
    unit_sampel: "",
    unit_observasi:"",
    // BAB VI
    pilot_survei: "",
    metode_pemeriksaan_kualitas_pengumpulan_data: "",
    metode_pemeriksaan_kualitas_pengumpulan_data_lainnya: "",
    penyesuaian_non_respon: "",
    petugas_pengumpulan_data:"",
    persyaratan_pendidikan_terendah_petugas:"",
        // PETUGAS
        jumlah_supervisor:"",
        jumlah_pengumpul_data:"",
    pelatihan_petugas:"",
    // BAB VII
    penyuntingan: "",
    penyandian: "",
    data_entry:"",
    penyahihan:"",
    metode_analisis:"",
    unit_analisis:"",
    unit_analisis_lainnya:"",
    tingkat_penyajian_hasil_analisis:"",
    tingkat_penyajian_hasil_analisis_lainnya:"",
    // BAB VIII
    tercetak: "",
    digital:"",
    data_mikro:"",
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const sendDataMSKeg = (data) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'POST', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },
            body: JSON.stringify ({ 
                dinas_id : data.instansi, 
                tahun : data.tahun_kegiatan, 
                nama_kegiatan : data.judul_kegiatan, 
                kode_kegiatan : data.kode_kegiatan, 
                pj_eselon_1 : data.eselon_1, 
                pj_eselon_2 : data.eselon_2, 
                pj_eselon_3 : data.nama_pj, 
                jabatan_es_3: data.jabatan_pj, 
                alamat_es_3 : data.alamat_pj, 
                telepon_es_3 : data.telepon_pj, 
                email_es_3 : data.email_pj, 
                faksimile_es_3 : data.faksimile_pj, 
                cara_pengumpulan : data.met_pengumpulan_data, 
                sektor_kegiatan : data.sektor_kegiatan, 
                rekomendasi : data.rekomendasi_kegiatan, 
                id_rekomendasi : data.rekomendasi_kegiatan, 
                telepon_intansi : data.telepon, 
                email_instansi : data.email, 
                faksimile : data.faksimile, 
                // BAB III
                latbel_kegiatan : data.latbel_kegiatan, 
                tujuan_kegiatan : data.tujuan_kegiatan, 
                perencanaan_awal : data.perencanaan_awal, 
                perencanaan_akhir : data.perencanaan_akhir, 
                desain_awal : data.desain_awal, 
                desain_akhir : data.desain_akhir, 
                pengumpulan_awal : data.pengumpulan_awal, 
                pengumpulan_akhir : data.pengumpulan_akhir, 
                pengolahan_awal : data.pengolahan_awal, 
                pengolahan_akhir : data.pengolahan_akhir, 
                analisis_awal : data.analisis_awal, 
                analisis_akhir : data.analisis_akhir, 
                diseminasi_awal : data.diseminasi_awal, 
                diseminasi_akhir : data.diseminasi_akhir, 
                evaluasi_awal : data.evaluasi_awal, 
                evaluasi_akhir : data.evaluasi_akhir, 
                variabel_stat : JSON.stringify(varStat), 
                // BAB IV
                kegiatan_dilakukan : data.kegiatan_dilakukan, 
                jika_berulang : data.jika_berulang, 
                tipe_pengumpulan_data : data.tipe_pengumpulan_data, 
                cakupan_wilayah : data.cakupan_wilayah_data, 
                wilayah_kegiatan : JSON.stringify(wilKeg), 
                metode_pengumpulan : data.metode_pengumpulan_data, 
                metode_pengumpulan_lainnya : data.metode_pengumpulan_data_lainnya, 
                sarana_pengumpulan : data.sarana_pengumpulan_data, 
                sarana_pengumpulan_lainnya : data.sarana_pengumpulan_data_lainnya, 
                unit_pengumpulan : data.unit_pengumpulan_data, 
                unit_pengumpulan_lainnya : data.unit_pengumpulan_data_lainnya, 
                // BAB V
                rancangan_sampel : data.rancangan_sampel, 
                metode_pemiliahan_sampel_terakir : data.metode_pemilihan_sampel_terakir, 
                metode_sampel : data.metode_sampel, 
                kerangka_sampel_terakir : data.kerangka_sampel_terakir, 
                fraksi_sampel : data.fraksi_sampel_keseluruhan, 
                sampling_error : data.sampling_error, 
                unit_sampel : data.unit_sampel, 
                unit_observasi : data.unit_observasi, 
                // BAB VI
                uji_coba : data.pilot_survei, 
                metode_pemeriksaan_kualitas_data : data.metode_pemeriksaan_kualitas_data, 
                metode_pemeriksaan_kualitas_data_lainnya : data.metode_pemeriksaan_kualitas_data_lainnya, 
                penyesuaian_non_respon : data.penyesuaian_non_respon, 
                petugas_pengumpulan_data : data.petugas_pengumpulan_data, 
                persyaratan_pendidikan_terendah_petugas : data.persyaratan_pendidikan_terendah_petugas, 
                jumlah_supervisor : data.jumlah_supervisor, 
                jumlah_pengumpul : data.jumlah_pengumpul_data, 
                jumlah_petugas : jumlah_supervisor + jumlah_pengumpul_data, 
                pelatihan_petugas : data.pelatihan_petugas, 
                // BAB VII
                penyuntingan : data.penyuntingan, 
                penyandian : data.penyandian, 
                data_entry : data.data_entry, 
                penyahihan : data.penyahihan, 
                metode_analisis : data.metode_analisis,
                unit_analisis : data.unit_analisis, 
                unit_analisis_lainnya : data.unit_analisis_lainnya, 
                penyajian_analisis : data.tingkat_penyajian_hasil_analisis, 
                penyajian_analisis_lainnya : data.tingkat_penyajian_hasil_analisis_lainnya, 
                // BAB VIII
                cetak : data.tercetak, 
                digital : data.digital, 
                data_mikro : data.data_mikro,
             }) 
        };
        
        fetch(backendUrl + 'input_ms_keg', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 201){
                resolve(data);
            }else{
                reject("Error FE");
            }
        });
    })
  }

  const onSubmitClick = async (even) => {

    await sendDataMSKeg(formData)
    .then(success => {
        console.log(success);
        navigate("/Form-ind/6");
    })
    .catch(error => {
        console.log(error);
    })
  }

  const reqDataOPD = () => {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(backendUrl + 'get_all_instansi', requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status === 200) {
            resolve(data);
          } else {
            reject("Error fetching OPD");
          }
        });
    });
  };

  useEffect(() => {
    
    reqDataOPD()
      .then(success => {
        setAllOPD(success.msg);
      });

  }, []);

  useEffect(() => {
      if (allOPD.length > 0) {
        const options = allOPD.map((opd) => ({
          value: opd.id,
          label: opd.alias,
        }));
        setDinasOptions(options);
      }

  }, [allOPD]);

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
                    <div className="tahun_kegiatan mb-2 flex justify-between border-b-2 pb-2">
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
                    <div className="judul_kegiatan mb-2 border-b-2 pb-2">
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
                    <InputForm 
                        text={`Kode Kegiatan`}
                        name="kode_kegiatan"
                        value={formData.kode_kegiatan} 
                        change={handleChange} 
                    />
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


                    {/* BAB 1 */}
                    {/* PENYELENGGARA */}

                    <BabDiv text={"I. PENYELENGGARA"} />



                    <div className={`mb-2 justify-between flex border-b-2 pb-2`}>
                        <label htmlFor="instansi" className={`pr-1 pt-2  font-semibold`}>1.1 Instansi Penyelenggara</label>
                            <select
                                className={`px-2 h-8 rounded-md mt-1 text-center w-48`} 
                                name={`instansi`} 
                                id={`instansi`}
                                value={formData.instansi}
                                onChange={handleChange}
                            >
                                
                                {dinasOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                    </div>

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

                    <InputForm 
                        text={"3.1 Latar Belakang Kegiatan"} 
                        name="latbel_kegiatan"
                        value={formData.latbel_kegiatan} 
                        change={handleChange} 
                        big_input={true}
                    />
                    <InputForm 
                        text={"3.2 Tujuan Kegiatan"} 
                        name="tujuan_kegiatan"
                        value={formData.tujuan_kegiatan} 
                        change={handleChange} 
                        big_input={true}
                    />
                    <InputForm 
                        text={"3.3 Rencana Jadwal Kegiatan"} 
                        not_input_title={true}
                    />

                    <div className="flex justify-center">
                        < TableJadwalKegiatan 
                            perencanaan_awal={formData.perencanaan_awal}
                            perencanaan_akhir={formData.perencanaan_akhir}
                            desain_awal={formData.desain_awal}
                            desain_akhir={formData.desain_akhir}
                            pengumpulan_awal={formData.pengumpulan_awal}
                            pengumpulan_akhir={formData.pengumpulan_akhir}
                            pengolahan_awal={formData.pengolahan_awal}
                            pengolahan_akhir={formData.pengolahan_akhir}
                            analisis_awal={formData.analisis_awal}
                            analisis_akhir={formData.analisis_akhir}
                            diseminasi_awal={formData.diseminasi_awal}
                            diseminasi_akhir={formData.diseminasi_akhir}
                            evaluasi_awal={formData.evaluasi_awal}
                            evaluasi_akhir={formData.evaluasi_akhir}  
                            handleChange={handleChange}                          
                        />

                    </div>

                    <InputForm 
                        text={"3.4 Variabel Karakteristik yang Dikumpulkan"} 
                        not_input_title={true}
                    />

                    <div className="flex justify-center">
                        < TableVarStat varStat={varStat} handleChange={handleVarStatChange} decOne={decOneVarStat}/>
                    </div>

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

                    <div className="flex justify-center">
                        < TableWilayah handleChange={handleWilKegChange} decOne={decOneWilKeg} wilKeg={wilKeg}/>
                    </div>

                    <InputForm 
                        text={"4.6 Metode Pengumpulan Data"} 
                        name="metode_pengumpulan_data"
                        value={formData.metode_pengumpulan_data} 
                        change={handleChange} 
                        multiple={true}
                        lainnya={true}
                        lainnyaValue={formData.metode_pengumpulan_data_lainnya}
                        lainnyaChange={handleChange}
                        lainnyaName={"metode_pengumpulan_data_lainnya"}
                        print_info={true}
                        info={["Wawancara","Mengisi Kuesioner Sendiri (swacacah)","Pengmatan (Observasi)","Pengumpulan Data Sekunder"]}
                    />
                    
                    <InputForm 
                        text={"4.7 Sarana Pengumpulan Data"} 
                        name="sarana_pengumpulan_data"
                        value={formData.sarana_pengumpulan_data} 
                        change={handleChange} 
                        multiple={true}
                        lainnya={true}
                        lainnyaValue={formData.sarana_pengumpulan_data_lainnya}
                        lainnyaChange={handleChange}
                        lainnyaName={"sarana_pengumpulan_data_lainnya"}
                        print_info={true}
                        info={["Paper-assisted Personal Interviewing (PAPI)","Computer-assisted Personal INterviewing (CAPI)", "Computer-assited Telephones Interviewing (CATI)","Computer Aided Web Interviewing (CAWI)","Mail"]}
                    />

                    <InputForm 
                        text={"4.8 Unit Pengumpulan Data"} 
                        name="unit_pengumpulan_data"
                        value={formData.unit_pengumpulan_data} 
                        change={handleChange}
                        multiple={true} 
                        lainnya={true}
                        lainnyaValue={formData.unit_pengumpulan_data_lainnya}
                        lainnyaChange={handleChange}
                        lainnyaName={"unit_pengumpulan_data_lainnya"}
                        print_info={true}
                        info={["Individu","Rumah Tangga","Usaha/Perusahaan"]}
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

                    <InputForm 
                        text={`5.4 Kerangka Sampel Tahap Terakhir`}
                        name="kerangka_sampel_terakir"
                        value={formData.kerangka_sampel_terakir} 
                        change={handleChange} 
                        print_info={true}
                        info={["List Frame","Area Frame"]}
                    />
                    
                    <InputForm 
                        text={`5.5 Fraksi Sampel Keseluruhan`}
                        name="fraksi_sampel_keseluruhan"
                        value={formData.fraksi_sampel_keseluruhan} 
                        change={handleChange} 
                    />

                    <InputForm 
                        text={`5.6 Nilai Perkiraan Sampling Error Variabel Utama`}
                        name="sampling_error"
                        value={formData.sampling_error} 
                        change={handleChange} 
                    />
                    
                    <InputForm 
                        text={`5.7 Unit Sampel`}
                        name="unit_sampel"
                        value={formData.unit_sampel} 
                        change={handleChange} 
                    />
                    
                    <InputForm 
                        text={`5.8 Unit Observasi`}
                        name="unit_observasi"
                        value={formData.unit_observasi} 
                        change={handleChange} 
                    />

                    <BabDiv text={"VI. PENGUMPULAN DATA"} />

                    <InputForm 
                        text={`6.1 Apakah Melakukan Uji Coba (Pilot Survey)?`}
                        name="pilot_survei"
                        value={formData.pilot_survei} 
                        change={handleChange} 
                        print_info={true}
                        info={["Ya","Tidak"]}
                    />

                    <InputForm 
                        text={`6.2 Metode Pemeriksaan Kualitas Pengumpulan Data`}
                        name="metode_pemeriksaan_kualitas_pengumpulan_data"
                        value={formData.metode_pemeriksaan_kualitas_pengumpulan_data} 
                        change={handleChange} 
                        lainnya={true}
                        lainnyaValue={formData.metode_pemeriksaan_kualitas_pengumpulan_data_lainnya}
                        lainnyaChange={handleChange}
                        lainnyaName={"metode_pemeriksaan_kualitas_pengumpulan_data_lainnya"}
                        print_info={true}
                        info={["Kunjungan Kembali (Revisit)","Supervisi","Task Force"]}
                    />
                    
                    <InputForm 
                        text={`6.3 Apakah Melakukan Penyesuaian Nonrespon?`}
                        name="penyesuaian_non_respon"
                        value={formData.penyesuaian_non_respon} 
                        change={handleChange} 
                        print_info={true}
                        info={["Ya","Tidak"]}
                    />

                    <InputForm 
                        text={`6.4 Petugas Pengumpulan Data`}
                        name="petugas_pengumpulan_data"
                        value={formData.petugas_pengumpulan_data} 
                        change={handleChange} 
                        print_info={true}
                        info={["Staf Instansi Penyelenggara","Mitra/Tenaga Kontrak","Staf Instansi Penyelenggara dan Mitra/Tenaga Kontrak"]}
                    />


                    <InputForm 
                        text={`6.5 Persyaratan Pendidikan Terendah Petugas Pengumpulan Data`}
                        name="persyaratan_pendidikan_terendah_petugas"
                        value={formData.persyaratan_pendidikan_terendah_petugas} 
                        change={handleChange} 
                        print_info={true}
                        info={["SMP","SMA/SMK","Diploma I/II/III","Diploma IV/S1/S2/S3"]}
                    />

                    <InputForm 
                        text={`6.6 Jumlah Petugas`}
                        not_input_title={true}
                    />
                    

                    <InputForm 
                        text={"Supervisor/Penyelia/Pengawas"}
                        name="jumlah_supervisor"
                        value={formData.jumlah_supervisor}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={"Pengumpul data/enumerator"}
                        name="jumlah_pengumpul_data"
                        value={formData.jumlah_pengumpul_data}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={`6.7 Apakah Melakukan Pelatihan Petugas?`}
                        name="pelatihan_petugas"
                        value={formData.pelatihan_petugas} 
                        change={handleChange} 
                        print_info={true}
                        info={["Ya","Tidak"]}
                    />

                    <BabDiv text={"VII. PENGOLAHAN DAN ANALISIS"} />
                    
                    <InputForm 
                        text={"7.1 Tahap Pengolahan Data"}
                        name="faksimile"
                        not_input_title={true}
                        print_info={true}
                        info={["Ya","Tidak"]}
                    />

                    <InputForm 
                        text={"Penyuntingan (Editing)"}
                        name="penyuntingan"
                        value={formData.penyuntingan}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Penyandian (Coding)"}
                        name="penyandian"
                        value={formData.penyandian}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Data Entry"}
                        name="data_entry"
                        value={formData.data_entry}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Penyahihan"}
                        name="penyahihan"
                        value={formData.penyahihan}
                        change={handleChange}
                        font_is_small={true}
                    />

                    <InputForm 
                        text={`7.2 Metode Analisis`}
                        name="metode_analisis"
                        value={formData.metode_analisis} 
                        change={handleChange} 
                        print_info={true}
                        info={["Deskriptif","Inferensia","Deskriptif dan Inferensia"]}
                    />

                    <InputForm 
                        text={`7.3 Unit Analisis`}
                        name="unit_analisis"
                        value={formData.unit_analisis} 
                        change={handleChange} 
                        multiple={true}
                        lainnya={true}
                        lainnyaValue={formData.unit_analisis_lainnya}
                        lainnyaChange={handleChange}
                        lainnyaName={"unit_analisis_lainnya"}
                        print_info={true}
                        info={["Individu","Rumah Tangga","Usaha/Perusahaan"]}
                    />

                    <InputForm 
                        text={`7.4 Tingkat Penyajian Hasil Analisis`}
                        name="tingkat_penyajian_hasil_analisis"
                        value={formData.tingkat_penyajian_hasil_analisis} 
                        change={handleChange} 
                        multiple={true}
                        lainnya={true}
                        lainnyaValue={formData.tingkat_penyajian_hasil_analisis_lainnya}
                        lainnyaChange={handleChange}
                        lainnyaName={"tingkat_penyajian_hasil_analisis_lainnya"}
                        print_info={true}
                        info={["Nasional","Provinsi","Kabupaten/Kota","Kecamatan"]}
                    />
                    
                    <BabDiv text={"VII. DISEMINASI HASIL"} />
                    
                    <InputForm 
                        text={"8.1 Produk Kegiatan yang Tersedia untuk Umum"}
                        name="faksimile"
                        not_input_title={true}
                        print_info={true}
                        info={["Ya","Tidak"]}
                    />

                    <InputForm 
                        text={"Tercetak"}
                        name="tercetak"
                        value={formData.tercetak}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Digital"}
                        name="digital"
                        value={formData.digital}
                        change={handleChange}
                        font_is_small={true}
                    />
                    <InputForm 
                        text={"Data Mikro"}
                        name="data_mikro"
                        value={formData.data_mikro}
                        change={handleChange}
                        font_is_small={true}
                    />
                    

                    <InputForm 
                        text={"8.2 Jika pilihan R.8.1 kode 1, Rencana Rilis Produk Kegiatan :"}
                        name="faksimile"
                        not_input_title={true}
                    />

                    <div className="flex justify-center">
                        < RencanaRilisProduk digital={formData.digital} tercetak={formData.tercetak} data_mikro={formData.data_mikro} />
                    </div>


                    <div className=" flex justify-center mt-4">
                        <div 
                            className="bg-white w-fit px-6 py-2 font-semibold rounded-md my-2 cursor-pointer hover:shadow-lg transition-all duration-200"
                            onClick={onSubmitClick}
                        >
                            Submit
                        </div>
                    </div>
                </form>
            </section>
        </section>
    </>
  );
}
