"use client"
import ButtonBack from "@/components/atoms/Button/ButtonBack";
import ButtonKirim from "@/components/atoms/Button/ButtonKirim";
import InputOTP from "@/components/atoms/Form/InputOTP";
import { useRef, useState, ChangeEvent, KeyboardEvent } from "react";

export default function Dashboard() {


  return (
    <div className="h-screen flex items-center font-medium">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
          <ButtonBack />
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-4 ">
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Kode OTP
            </h1>
            <h3 className="mb-2">
              Masukkan 6 kode verifikasi yang terkirim pada sms di nomor telepon
              nasabah
            </h3>
          <InputOTP />
          </div>
          <ButtonKirim />
          <h3 className="mt-2">Tidak menerima kode OTP? Kirim ulang dalam</h3>
        </div>
      </div>
    </div>
  );
}
