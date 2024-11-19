import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/Bg.png";
import { Link } from 'react-scroll';
import Loading from "./Loading"
import DeleteIcon from "../assets/delete.png"
import Alert from "./Alert.jsx"

export default function Main() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [dataUsers, setDataUsers] = useState([]);
  const [allOPD, setAllOPD] = useState([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [dinasOptions, setDinasOptions] = useState([]); 
  const [dataUsersLength,setDataUsersLength] = useState();
  const [addUserLoading,setAddUserLoading] = useState(false);
  const [showConfirmCard,setShowConfirmCard] = useState(false);
  const [usernameActive,setUsernameActive] = useState("")
  const [dataDinas, setDataDinas] = useState({
    nama: "",
    alias:"",
  });
  const [dataUser, setDataUser] = useState({
    username: "",
    role: 1,
    password: "",
    confPass: "",
    dinas: "1",
  });
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const redirectTo = (path) => {
    navigate(path);
  };

  const validateAddUser = () => {
    if (dataUser.password.length < 8){
      return false;
    }

    if (dataUser.password !== dataUser.confPass){
      return false;
    }

    return true;
  }

  const onSubmitUserClick = async (event) => {
    setAddUserLoading(true);
    event.preventDefault();
    
    // VALIDASI DULU APAKAH FORM MASIH KOSONG ATAU SUDAH TERISI
    if (validateAddUser()){
      await sendDataUserTOBackend(dataUser)
      .then(success => {
        setDataUsersLength(dataUsersLength+1);
        setAddUserLoading(false);
        setShowUserForm(false);
        setDataUser({
          username: "",
          role: 1,
          password: "",
          confPass: "",
          dinas: "1",
        });
      })
      .catch(error => {
        const msg_div = document.getElementById("message-div")
        msg_div.classList.remove("hidden");
      })
    }else{
      setAddUserLoading(false);
      const msg_div = document.getElementById("message-div")
      msg_div.classList.remove("hidden");
    }
    
  }

  const onAddUserClick = () => {
    setShowUserForm(true);
  }

  const onCloseAddUserClick = () => {
    setShowUserForm(false);
    setDataUser({
      username: "",
      role: 1,
      password: "",
      confPass: "",
      dinas: "1",
    })
  }

  // Mengubah state dataDinas
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataDinas({
      ...dataDinas,
      [name]: value
    });
  };

  // Mengubah state dataUser
  const handleChangeUser = (e) => {
    const msg_div = document.getElementById("message-div")
    msg_div.classList.add("hidden");
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,  // Perbaiki ini untuk menggunakan dataUser
      [name]: value
    });
  };

  const deleteUserInBackend = ( username ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'POST', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },
            body: JSON.stringify ({ 
                "username" : username
             }) 
        };
        
        fetch(backendUrl + 'delete_user', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){
                resolve(data);
            }else{
                reject("Error");
            }
        });
    })

  }

  const proceedDeleteUser = async (username) => {
    await deleteUserInBackend(username)
    .then(success => {
      setDataUsersLength(dataUsersLength-1);
      setShowConfirmCard(false);
    })
  }

  const onDeleteUserClick = (event,username) => {
    setUsernameActive(username);
    
    setShowConfirmCard(true);
  }

  // Fetch data user
  const reqDataUsers = () => {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(backendUrl + 'get_all_users', requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status == 200) {
            resolve(data);
          } else {
            reject("Error fetching users");
          }
        });
    });
  };

  const sendDataUserTOBackend = ( userData ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'POST', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },
            body: JSON.stringify ({ 
                "username" : userData.username,
                "password" : userData.password,
                "role" : userData.role,
                "dinas" : userData.dinas,
             }) 
        };
        
        fetch(backendUrl + 'add_user', requestOptions)
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

  // Fetch data OPD
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

  // Efek untuk fetch data users dan opd
  useEffect(() => {
    reqDataUsers()
      .then(success => {
        setDataUsers(success.msg);
        setDataUsersLength(success.msg.length)
        console.log(success.msg);
      });
  }, [dataUsersLength])

  useEffect(() => {
    
    reqDataOPD()
      .then(success => {
        setAllOPD(success.msg);
        console.log(success.msg);
      });
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Efek untuk mengupdate dinasOptions setelah allOPD tersedia
  useEffect(() => {
    if (allOPD.length > 0) {
      const options = allOPD.map((opd) => ({
        value: opd.id,
        label: opd.alias,
      }));
      setDinasOptions(options);
    }
  }, [allOPD]);

  // Efek animasi lainnya
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible1(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>

    <Alert 
      open={showConfirmCard} 
      setOpen={setShowConfirmCard} 
      isConfirm={true} 
      onConfirm={() => proceedDeleteUser(usernameActive)} 
      msg={`Delete User ${usernameActive}?`} 
      subMsg="Jika user dihapus, maka data user akan hilang" 
    />

      <section className="text-gray-600 shadow-2xl body-font h-screen flex items-center justify-center bg-cover bg-opacity-10" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="mt-20 pb-24 mx-auto text-center items-center justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-white mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            Hallo Admin
          </h1>
          <h2 className={`text-md md:text-2xl lg:text-3xl max-w-6xl px-8 font-semibold text-gray-50 ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            Ada perlu apa hari ini?
          </h2>
          <div className={`font-bold p-1 mt-8 ${isVisible1 ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'} flex flex-col items-center`}>
            <Link to="users_management" smooth={true} duration={500} className="bg-white mb-4 text-md md:text-lg py-1 px-10 hover:scale-110 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-700 shadow-lg">
              Users Management
            </Link>
            <Link to="tambah_instansi" smooth={true} duration={500} className="bg-white mb-4 text-md md:text-lg py-1 px-10 hover:scale-110 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-700 shadow-lg">
              Tambah Instansi
            </Link>
          </div>
        </div>
      </section>

      <section name="users_management" className="tambah-instansi-disini text-gray-600 shadow-2xl body-font flex items-center mx-auto bg-cover bg-opacity-10">
        <div className="mt-20 pb-24 mx-auto text-center items-center justify-center">
          <h1 className={`text-2xl lg:text-4xl font-bold text-black mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            Users
          </h1>

          <div className="p-2 border-b border-gray-300 grid grid-cols-4">
            <h2 className="text-sm font-semibold text-gray-800">Username</h2>
            <p className="text-sm text-gray-800 font-semibold">Role</p>
            <p className="text-sm text-gray-800 font-semibold">Dinas</p>
            <p className="text-sm text-gray-800 font-semibold">Aksi</p>
          </div>
          {
            dataUsers.map((usr, i) => (
              <div key={i} className="p-2 border-b border-gray-300 grid grid-cols-4">
                <h2 className="text-gray-600">{usr.username}</h2>
                <p className="text-gray-600">{usr.role}</p>
                <p className="text-gray-600">{usr.dinas}</p>
                <div 
                  className="text-center w-full flex justify-center"
                  onClick={(e) => onDeleteUserClick(e, usr.username)}
                >
                  <img src={DeleteIcon} alt="Delete" className="w-6 h-auto cursor-pointer"/>
                </div>
              </div>
            ))
          }



          <div 
            className="bg-blue-500 hover:bg-blue-400 transition-all duration-300 cursor-pointer text-white font-semibold px-2 py-1 rounded-md mt-6"
            onClick={onAddUserClick}
          >
            Tambah User
          </div>

          {
            showUserForm && (
              <>
                {/* Form Tambah User */}
                <div style={{ animation: "slideInFromLeft 1s ease-out" }} className="relative min-w-96 mt-8 max-w-2xl bg-white mx-auto rounded-xl border-2 border-blue-100 overflow-hidden p-8 space-y-8">

                  <div 
                    className="close-button cursor-pointer hover:bg-red-400 hover:scale-110 transition-all duration-500 absolute -right-3 -top-3 hover:-right-1 hover:-top-1 bg-red-500 text-white font-bold px-4 py-2 rounded-full text-xl"
                    onClick={onCloseAddUserClick}
                  >
                    X
                  </div>

                  <h2 style={{ animation: "appear 2s ease-out" }} className="text-center text-4xl font-bold text-black">Tambah User</h2>
                  <p style={{ animation: "appear 3s ease-out" }} className="text-center text-gray-600">Masukan Data User disini.</p>


                  <div className="user-form space-y-6 ">
                    <div className="relative">
                      <input
                        placeholder="Username"
                        className="peer h-10 w-full border-b-2 border-gray-400  focus:border-blue-400 text-black bg-transparent placeholder-transparent focus:outline-none"
                        required
                        id="username"
                        name="username"
                        type="text"
                        value={dataUser.username}
                        onChange={handleChangeUser}
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-500  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-xs" htmlFor="username">
                        Username
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        placeholder="Password"
                        className="peer h-10 w-full border-b-2 border-gray-400 focus:border-blue-400 text-black bg-transparent placeholder-transparent focus:outline-none"
                        required
                        id="password"
                        name="password"
                        type="password"
                        value={dataUser.password}
                        onChange={handleChangeUser}
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-500 focus:border-blue-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-xs" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        placeholder="Konfirmasi Password"
                        className="peer h-10 w-full border-b-2 border-gray-400 focus:border-blue-400 text-black bg-transparent placeholder-transparent focus:outline-none"
                        required
                        id="confPass"
                        name="confPass"
                        type="password"
                        value={dataUser.confPass}
                        onChange={handleChangeUser}
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-500  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-xs" htmlFor="confPass">
                        Konfirmasi Password
                      </label>
                    </div>

                    <div className="relative text-gray-500 border-b-2 border-gray-400 w-fit focus:border-blue-400">
                      <label htmlFor="dinas"></label>
                      <select
                        id="dinas"
                        name="dinas"
                        value={dataUser.dinas}
                        onChange={handleChangeUser}
                      >
                        {dinasOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className='text-red-500 text-xs hidden' id='message-div'>
                      <div>
                      Periksa Isian Form :   
                      </div>
                      <div>
                      *password lebih dari 8 karakter
                      </div>
                      <div>
                      *pastikan password sama
                      </div>
                    </div>

                    <button 
                      className="w-full py-2 px-4 hover:bg-blue-400 bg-blue-500 text-white rounded-md shadow-lg font-semibold transition duration-1000"
                      onClick={onSubmitUserClick}
                    >
                      
                      {
                        addUserLoading ? (
                          <Loading />
                        ) : (
                          <p>Tambah</p>
                        )
                      }

                      
                    </button>
                  </div>
                </div>
              </>
            )
          }
          
        </div>
      </section>

      <section name="tambah_instansi" className="tambah-instansi-disini text-gray-600 shadow-2xl body-font flex items-center justify-center bg-cover bg-opacity-10" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="mt-20 pb-24 text-center w-full items-center justify-center">
          <div style={{ animation: "slideInFromLeft 1s ease-out" }} className="relative min-w-96 max-w-2xl bg-[#2C2C2C] mx-auto rounded-xl shadow-xl overflow-hidden p-8 space-y-8">
            <h2 style={{ animation: "appear 2s ease-out" }} className="text-center text-4xl font-bold text-white">Tambah Dinas</h2>
            <p style={{ animation: "appear 3s ease-out" }} className="text-center text-white">Masukan Data Dinas disini.</p>

            <div className="space-y-6">
              <div className="relative">
                <input
                  placeholder="Nama Dinas"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none"
                  required
                  id="nama"
                  name="nama"
                  type="text"
                  value={dataDinas.nama}
                  onChange={handleChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs" htmlFor="nama">
                  Nama Dinas
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="Alias Dinas"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none"
                  required
                  id="alias"
                  name="alias"
                  type="text"
                  value={dataDinas.alias}
                  onChange={handleChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs" htmlFor="alias">
                  Alias
                </label>
              </div>

              <button className="w-full py-2 px-4 bg-white hover:bg-gray-500 hover:text-white rounded-md shadow-lg text-black font-semibold transition duration-1000">
                Tambah
              </button>
            </div>
          </div>

          <h1 className={`text-white mt-8 text-2xl lg:text-4xl font-bold mb-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            Dinas/OPD
          </h1>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="p-2 border-b border-gray-300 grid grid-cols-3 text-white">
              <h2 className="text-sm font-semibold">Nama</h2>
              <h2 className="text-sm font-semibold">Alias</h2>
              <p className="text-sm font-semibold">Alamat</p>
            </div>
            {allOPD.map((opd, i) => (
              <div key={i} className="p-2 border-b border-gray-300 grid grid-cols-3 text-gray-200">
                <h2>{opd.nama}</h2>
                <h2>{opd.alias}</h2>
                <p>{opd.alamat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
