import React from "react";

export default function Dashboard() {
  return (
    <div className="relative font-medium h-screen flex items-center content-center">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl mr-auto ml-auto ">
          <div className="bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
            <button>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-black mr-2 transform rotate-180"
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
            <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 ">
              <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
                Kode OTP
              </h1>
            </div>
            <div className="mb-4">
              <h3 className="mb-2">
                Masukkan 6 kode verifikasi yang terkirim pada sms di nomor
                telepon nasabah
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

            <div className="mb-6">
              <button
                type="button"
                className="bg-indigo-200 hover:bg-orange-500 shadow-lg text-gray hover:text-white  font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
              >
                Kirim OTP Verifikasi
              </button>
            </div>
            <h3 className="mt-2">Tidak menerima kode OTP? Kirim ulang dalam</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
