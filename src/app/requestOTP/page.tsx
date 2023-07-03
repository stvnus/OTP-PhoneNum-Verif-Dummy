import ButtonBack from "@/components/atoms/Button/ButtonBack";
import ButtonKirim from "@/components/atoms/Button/ButtonKirim";
import InputTelp from "@/components/atoms/Form/InputTelp";
import React from "react";

export default function Dashboard() {
  return (
    <div className="relative font-medium h-screen flex items-center content-center">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl mr-auto ml-auto ">
          <div className="bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
            <ButtonBack />
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Verifikasi No Telepon Nasabah
            </h1>
            <label className="block text-sm font-medium mb-4">
              <h3>
                Silahkan masukkan no telepon nasabah untuk diverifikasi.
                Pastikan nomor telepon tersebut milik nasabah dan masih aktif.
              </h3>
            </label>
            <InputTelp />

            <ButtonKirim />
          </div>
        </div>
      </div>
    </div>
  );
}
