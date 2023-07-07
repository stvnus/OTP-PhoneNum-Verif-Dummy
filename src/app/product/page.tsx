"use client";
import ButtonBack from "@/components/atoms/Button/ButtonBack";
import ButtonPengajuan from "@/components/atoms/Button/ButtonPengajuan";
import ProductList from "@/components/molecules/Product/ProductList";
import SearchNIKK from "@/components/atoms/Search/SearchNIK";
import React, { useState } from "react";

export default function SearchNIK() {
  const [nik, setNik] = useState("");

  const handleClearClick = () => {
    setNik("");
  };

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between  mx-auto  ">
      <div className="font-sans leading-normal tracking-normal border shadow-lg">
        <div
          className="w-full m-0 p-0 bg-cover bg-bottom shadow-lg"
          style={{
            backgroundColor: "#0051A0",
            height: "30vh",
            maxHeight: "100vh",
          }}
        >
          <div className="flex items-center p-5 text-white ">
          <div>
      <a href="/">
        <button>
          <svg
            aria-hidden="true"
            className="w-6 h-6 mr-2 transform rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12H19M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </a>
    </div>
    <h1 className="font-semibold text-3xl ml-4 sm:text-2xl xl:text-4xl">Buat Pengajuan</h1>

          </div>
       
        </div>
        <div className="container px-4 md:px-0 max-w-2xl mx-auto -mt-28">
          <SearchNIKK />
        </div>
        <ProductList />
        <div className="mb-6 p-4">
      <a href="/requestOTP">
        <button
          type="button"
          className="bg-indigo-200 hover:bg-orange-500 shadow-lg text-gray  font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all hover:text-white"
        >
          Buat Pengajuan
        </button>
      </a>
    </div>
      </div>
    </main>
  );
}
