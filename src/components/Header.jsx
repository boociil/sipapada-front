import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalStateContext } from './GlobalStateProvider';

export default function Header(props) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const segments = pathSegments[1];
  const id = pathSegments[2];

  const { globalId } = useContext(GlobalStateContext);

  const header_array = ["Form-keg", "Form-ind", "Form-var"];
  const segments_num = header_array.indexOf(segments);

  const isActive = (num) => {
    return num === segments_num ? "text-black font-medium" : "text-gray-500";
  };

  const [txt_colour, setTxt_colour] = useState("text-white");
  const [bgColor, setBgColor] = useState("bg-transparent " + txt_colour);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  let header_type = props.type || "absolute";

  useEffect(() => {
    if (props.txt !== undefined) {
      setTxt_colour(props.txt);
    }
  }, [props.txt]);

  useEffect(() => {
    if (props.bg !== undefined) {
      setBgColor(props.bg);
    }
  }, [props.bg]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-[#FBFBFB] text-black shadow-lg");
      } else {
        setBgColor("bg-transparent " + txt_colour);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [txt_colour]);

  const redirectTo = (path) => {
    navigate(path);
  };

  const onLogout = () => {
    Object.keys(cookies).forEach((cookieName) => {
      removeCookie(cookieName, { path: "/" });
    });
    redirectTo("/");
  };

  return (
    <header
      className={`${header_type} transition-all duration-500 top-0 left-0 w-full clearNav z-50 ${bgColor}`}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-grow items-center justify-between p-3 md:p-1">
          <a
            href="/"
            className={`flex text-xl md:text-2xl lg:text-8x font-medium mb-0 md:mb-0 w-full justify-center md:justify-start `}
          >
            <p className="hover:scale-105 transition-all duration-300">
              SIPAPADA1306
            </p>
          </a>
          {props.metadata && (
            <div className="md:flex hidden">
              <a
                href={`/Form-keg/` + id}
                className={`flex mx-6 hover:text-black transition-all duration-300 text-xs md:text-lg lg:text-xl mb-0 md:mb-0 w-full justify-center md:justify-start ${isActive(
                  0
                )}`}
              >
                Kegiatan
              </a>
              <a
                href={`/Form-ind/` + id}
                className={`flex mx-6 hover:text-black transition-all duration-300 text-xs md:text-lg lg:text-xl mb-0 md:mb-0 w-full justify-center md:justify-start ${isActive(
                  1
                )}`}
              >
                Indikator
              </a>
              <a
                href={`/Form-var/` + id}
                className={`flex mx-6 hover:text-black transition-all duration-300 text-xs md:text-lg lg:text-xl mb-0 md:mb-0 w-full justify-center md:justify-start ${isActive(
                  2
                )}`}
              >
                Variabel
              </a>
            </div>
          )}
          {cookies.user && (
            <div
              className={`cursor-pointer text-xl font-bold hidden md:flex md:flex-grow hover:scale-105 ml-20 transition-all duration-200`}
              onClick={onLogout}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
