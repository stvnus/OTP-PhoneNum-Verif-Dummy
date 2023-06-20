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
                Verifikasi No Telepon Nasabah
              </h1>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                <h3>
                  Silahkan masukkan no telepon nasabah untuk diverifikasi.
                  Pastikan nomor telepon tersebut milik nasabah dan masih aktif.
                </h3>
              </label>
              <input
                className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
                type="text"
                placeholder="Nomor Telepon"
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="bg-indigo-200 hover:bg-orange-500 shadow-lg text-gray hover:text-white  font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
              >
                Kirim OTP Verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
