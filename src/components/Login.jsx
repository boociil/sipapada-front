import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/Bg.png"
import arrowBack from "../assets/arrowBack.png"
import { useCookies } from 'react-cookie';

export default function Main() {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [dataUser,setDataUser] = useState({
    username: "",
    password:"",
  })
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const redirectTo = (path) => {
    navigate(path);
  }; 

  const handleChange = (e) => {
    const msg_div = document.getElementById("message-div")
    msg_div.classList.add("hidden");
    const { name, value } = e.target;
    setDataUser({
      ...dataUser, 
      [name]: value
    });
  };

  const onSubmitClick = async (event) => {
    await sendData(dataUser)
    .then(success => {
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 24); 
      setCookie('user', success.username, { path: '/', expires: expirationDate }); 
      setCookie('token', success.accessToken, { path: '/', expires: expirationDate }); 
      setCookie('role', success.role, { path: '/', expires: expirationDate }); 
      
      if(success.role == 0){
        navigate('/Admin');
      }

    })
    .catch(error => {
      const msg_div = document.getElementById("message-div")
      msg_div.classList.remove("hidden");
    })
  }

  const sendData = ( loginData ) => {
    return new Promise((resolve,reject) => {
        const requestOptions = {
            method: 'POST', // Metode HTTP
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten yang Anda kirimkan
            },
            body: JSON.stringify ({ 
                "username" : loginData.username,
                "password" : loginData.password,
             }) 
        };
        
        fetch(backendUrl + 'Login', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status == 200){
                resolve(data);
            }else{
                reject("Password atau Username tidak benar");
            }
        });
    })
  }


  return (
    <>
      <section
        className="shadow-2xl body-font h-screen flex items-center justify-center bg-cover bg-opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* From Uiverse.io by iZOXVL */}
        <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="relative max-w-md w-full bg-[#2C2C2C] mx-4 rounded-xl shadow-xl overflow-hidden p-8 space-y-8"
        >
            {/* bagian bulet */}
            <div className="absolute cursor-pointer group bg-white rounded-b-full w-10 h-20 -top-10 hover:-top-5 transition-all duration-700 shadow-md" onClick={() => redirectTo("/")}>
                <div className="text-black group-hover:scale-125 w-5 h-5 absolute bottom-2 left-1/2 transform -translate-x-1/2 group-hover:bottom-7 transition-all duration-500">
                    <img src={`${arrowBack}`} alt="" />
                </div>
            </div>



          <h2
            style={{ animation: "appear 2s ease-out" }}
            className="text-center text-4xl font-bold text-white"
          >
            Login
          </h2>
          <p
            style={{ animation: "appear 3s ease-out" }}
            className="text-center text-white"
          >
            Masukan username dan password anda
          </p>
          <div method="POST" action="#" className="space-y-6">
            <div className="relative">
              <input
                placeholder="username"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none "
                required
                id="username"
                name="username"
                type="text"
                value={dataUser.username}
                onChange={handleChange}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs"
                htmlFor="username"
              >
                Username
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                required
                id="password"
                name="password"
                type="password"
                value={dataUser.password}
                onChange={handleChange}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-xs"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className='text-red-500 text-xs hidden' id='message-div'>
                *username atau password tidak sesuai
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-200">
                <input
                  className="form-checkbox h-4 w-4 text-white bg-gray-800 border-gray-300 rounded"
                  type="checkbox"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a className="text-sm text-purple-200 hover:underline" href="#">
                Lupa Password?
              </a>
            </div>
            
            <button
              className="w-full py-2 px-4 bg-white hover:bg-gray-500 hover:text-white rounded-md shadow-lg text-black font-semibold transition duration-1000"
              onClick={onSubmitClick}
            >
              Sign In
            </button>
          </div>
          
        </div>
      </section>
    </>
  );
}  
