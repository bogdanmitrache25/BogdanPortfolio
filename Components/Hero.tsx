"use client";
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            ¡HOLA! SOY <span className="text-yellow-400">BOGDAN MITRACHE!</span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Me considero un apasionado del desarrollo web, donde cada día supone
            un nuevo aprendizaje. He completado un máster en desarrollo web
            fullstack donde pude poner en práctica los conocimientos adquiridos.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="public\Cv Bogdan  (2).pdf" download>
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Descarga mi CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/userIA2.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
