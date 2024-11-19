import React from "react";
import Image from "next/image";
import profileImage from "@/public/profileImage.jpg";
import { FaFacebookF } from "react-icons/fa";
import {  FaGithub} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex flex-col md:flex-row  shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Container */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gray-900 text-white flex flex-col justify-between">
          <div className="flex justify-start gap-4 mb-4">
            <FaFacebookF className="text-white text-xl hover:text-gray-400 transition" />
            <FaGithub className="text-white text-xl hover:text-gray-400 transition" />
            <FaLinkedinIn className="text-white text-xl hover:text-gray-400 transition" />
          </div>

          <div className="mb-6">
            <p className="text-lg tracking-wide animate-pulse mb-2">
              Hi I am <span className="font-bold text-orange-500">Alishba Shabbir</span>
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-orange-500 font-bold animate-bounce ">
              Web Developer
            </h1>
            <p className="mt-4 text-xs sm:text-sm lg:text-base">
              Highly skilled frontend web developer with expertise in HTML  CSS  TypeScript and responsive web design. Proven track record of delivering high-performance scalable web applications with a focus on user experience.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-sm sm:text-base">
              Hire Me
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition text-sm sm:text-base">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Container */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative bg-gray-900">
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-500 rounded-full opacity-30 top-5 left-5 animate-pulse"></div>
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-700 rounded-full opacity-30 bottom-5 right-5 animate-pulse"></div>
          <Image
            className="rounded-full border-4 border-white shadow-lg"
            src={profileImage}
            alt="Profile Image"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
