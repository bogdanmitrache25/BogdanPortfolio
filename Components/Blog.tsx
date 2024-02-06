import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MI
        <span className="text-yellow-400"> BLOG</span>
        <span>( ⚒️En Construcción ⚒️)</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="C:\Users\bogda\my-portfolio\public\images\blog1.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
              10 de Diciembre,2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white"> Bogdan</p>
              </div>
              <div className="flex items-center space-x-3 ">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Coments(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Desarrollo Full Stack con Next Js
            </p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="C:\Users\bogda\my-portfolio\public\images\blog2.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
              3 de Junio, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white"> Bogdan</p>
              </div>
              <div className="flex items-center space-x-3 ">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Coments(3)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Desarrollo Full Stack con React Js
            </p>
          </div>
        </div>

        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="C:\Users\bogda\my-portfolio\public\images\blog3.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
              6 de Noviembre,2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Bogdan</p>
              </div>
              <div className="flex items-center space-x-3 ">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Coments(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Novedades de React Js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
