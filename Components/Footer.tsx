import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] mr-4">
            <MapIcon className="md:w-[12rem] md:h-[12rem] w-[9rem] h-[9rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Ubicación
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Zaragoza
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] mr-4">
            <DevicePhoneMobileIcon className="md:w-[12rem] md:h-[12rem] w-[9rem] h-[9rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Móvil & <br />
              WhatsApp
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              657475471
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] mr-4">
            <EnvelopeIcon className="md:w-[12rem] md:h-[12rem] w-[9rem] h-[9rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Envíame un correo
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              bogdancmitrache@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-50">
          WebDev Bogdan Mitrache 2024 | Creado con Next & Tailwind
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-50">
            <a
              href="https://es.linkedin.com/in/bogdan-mitrache-bb0781247"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
