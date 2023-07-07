"use client";
import ButtonBack from "@/components/atoms/Button/ButtonBack";
import ButtonKirim from "@/components/atoms/Button/ButtonKirim";
import InputOTP from "@/components/atoms/Form/InputOTP";
import {useState   } from "react";

import { useEffect } from "react";

export default function Dashboard() {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const phoneParam = searchParams.get("phone");
    if (phoneParam) {
      setPhoneNumber(phoneParam);
    }
  }, []);
  const hiddenPhoneNumber =
  phoneNumber.length >= 6
    ? phoneNumber.substring(0, 4) + "•".repeat(phoneNumber.length - 8) + phoneNumber.substring(phoneNumber.length - 4)
    : phoneNumber;
  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between  mx-auto  ">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
          <ButtonBack />
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-4 ">
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Kode OTP
            </h1>

            <h2 className="mb-2">
            Masukkan 6 kode verifikasi yang terkirim pada SMS di nomor telepon nasabah {hiddenPhoneNumber}
            </h2>
            <InputOTP />
          </div>
          <ButtonKirim />
          <h3 className="mt-2">Tidak menerima kode OTP? Kirim ulang dalam</h3>
        </div>
      </div>
    </main>
  );
}
