import React, {useState, useEffect} from "react";
import bgImage from "../assets/Bg.png";

export default function ComingSoonPage() {
  return (
    <>  
        <section className="body-font h-screen flex items-center justify-center bg-cover bg-no-repeat bg-fixed bg-opacity-10"  style={{ backgroundImage: `url(${bgImage})`}} >
            <div className="font-sans text-white">
                <h1 className="text-6xl lg:text-9xl">Coming Soon!</h1>
                
                <div className="flex justify-center mt-4 font-sans text-white">
                    <h1 className="text-xl lg:text-2xl">Halaman ini sedang dikerjakan....</h1>
                </div>
            </div>
            
        </section>
    </>
  );
}
