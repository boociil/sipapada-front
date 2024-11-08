import React, {useState, useEffect} from "react";


export default function Header(props) {

  
  let txt_colour = "text-white";
  let header_type = "absolute";
  if (props.bg !== undefined){
    setBgColor(props.bg)
  }
  if (props.txt !== undefined){
    txt_colour = props.txt
  }
  if (props.type !== undefined){
    header_type = props.type
  }
  
  const [bgColor, setBgColor] = useState("bg-transparent " + txt_colour); // Default background transparent
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Ubah nilai 50 sesuai kebutuhan
        setBgColor("bg-[#FBFBFB] text-black shadow-lg"); // Warna background saat di-scroll
      }
       else {
        setBgColor("bg-transparent text-white"); // Kembali ke warna transparan
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${header_type} transition-all duration-500 top-0 left-0 w-full clearNav z-50 ${bgColor}`}>
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-between p-3 md:p-1">
        <a
          href="/"
          className={`flex text-xl md:text-2xl lg:text-8x font-medium mb-0 md:mb-0 w-full justify-center md:justify-start `}
        >
          SIPAPADA1306
        </a>
        
        {/* <div className="text-white text-xl font-bold hidden md:flex md:flex-grow">
          Login
        </div> */}
      </div>

        
      </div>
    </header>
  );
}
