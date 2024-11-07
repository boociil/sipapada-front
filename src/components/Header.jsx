import React from "react";

export default function Header() {

  return (
    <header className="absolute top-0 left-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-between p-3 md:p-1">
        <a
          href="/"
          className="flex text-xl md:text-2xl lg:text-8x text-white font-medium mb-0 md:mb-0 w-full justify-center md:justify-start"
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
