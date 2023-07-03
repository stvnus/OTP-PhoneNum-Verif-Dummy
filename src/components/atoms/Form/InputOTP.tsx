import React from "react";

export default function InputOTP() {
  return (
    
    <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-4 ">
      <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
        Kode OTP
      </h1>
      <h3 className="mb-2">
        Masukkan 6 kode verifikasi yang terkirim pada sms di nomor telepon
        nasabah
      </h3>
      <div className="otp-form flex items-center justify-center">
        <input
          type="text"
          className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
          maxLength={1}
        />
        <input
          type="text"
          className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
          maxLength={1}
        />
        <input
          type="text"
          className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
          maxLength={1}
        />
        <input
          type="text"
          className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
          maxLength={1}
        />
        <input
          type="text"
          className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
          maxLength={1}
        />
        <input
          type="text"
          className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
          maxLength={1}
        />
      </div>
    </div>
  );
}
