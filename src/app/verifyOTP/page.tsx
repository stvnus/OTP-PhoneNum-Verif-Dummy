import ButtonBack from "@/components/atoms/Button/ButtonBack";
import ButtonKirim from "@/components/atoms/Button/ButtonKirim";
import InputOTP from "@/components/atoms/Form/InputOTP";

import React from "react";

export default function Dashboard() {
  return (
    <div className="h-screen flex items-center font-medium">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
          <ButtonBack />
          <InputOTP />
          <ButtonKirim />
          <h3 className="mt-2">Tidak menerima kode OTP? Kirim ulang dalam</h3>
        </div>
      </div>
    </div>
  );
}
