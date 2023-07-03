"use client"
import ButtonBack from "@/components/atoms/Button/ButtonBack";
import ButtonPengajuan from "@/components/atoms/Button/ButtonPengajuan";
import ProductList from "@/components/molecules/Product/ProductList";
import SearchNIKK from "@/components/atoms/Search/SearchNIK";
import React, { useState } from 'react';

export default function SearchNIK() {
  const [nik, setNik] = useState('');

  const handleClearClick = () => {
    setNik('');
  };

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between p-10 mx-auto my-3 ">
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
          <ButtonBack />
            <h1 className="font-semibold text-3xl ml-4">Buat Pengajuan</h1>
          </div>
          <div className="container max-w-2xl mx-auto pt-8 text-center break-normal text-white">
            <p className="font-semibold text-xl ">
              Masukkan NIK Nasabah dan pilih produk yang diajukan
            </p>
          </div>
        </div>
        <div className="container px-4 md:px-0 max-w-2xl mx-auto -mt-28">
      <SearchNIKK />
  </div>
  <ProductList />
  <ButtonPengajuan />
      </div>
    </main>
  );
}
