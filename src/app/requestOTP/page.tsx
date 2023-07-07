"use client"
import { useGetProfile } from "@/hooks/useGetProfile";
import React, { useState } from "react";



const InputContainer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const profile = useGetProfile({
    enabled: true
  });

  profile.data?.data.data;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/\D/g, "");
    const truncatedInput = sanitizedInput.slice(0, 13);
    setPhoneNumber(truncatedInput);

    if (truncatedInput.length < 10) {
      setError("Angka belum cukup");
    } else {
      setError("");
    }
  };

  const handleVerifyOTP = () => {
    if (phoneNumber.length < 10) {
      setError("Angka belum cukup");
    } else {
      setError("");
      window.location.href = `/verifyOTP?phone=${phoneNumber}`;
    }
  };

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between  mx-auto  ">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl mr-auto ml-auto ">
          <div className="bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
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
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Verifikasi No Telepon Nasabah
            </h1>
            <label className="block text-sm font-medium mb-4">
              <h3>
                Silahkan masukkan no telepon nasabah untuk diverifikasi.
                Pastikan nomor telepon tersebut milik nasabah dan masih aktif.
              </h3>
            </label>
            <div className="relative z-0 w-full mb-6 group">

              <input
                type="tel"
                name="floating_notelp"
                id="floating_notelp"
                value={phoneNumber}
                onChange={handleChange}
                className="block py-4 pl-2 sm:pl-4 sm:pr-6 lg:pl-4 lg:pr-8 w-full text-sm text-gray-900 bg-transparent border border-gray-400 leading-tight rounded appearance-none shadow-sm dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-indigo-300 focus:ring-0 peer placeholder-gray-400 placeholder-opacity-50 !placeholder-shown:text-red-500"
                placeholder=" "
                minLength={10}
                maxLength={13}
                required
              />
               <label
                htmlFor="floating_notelp"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 left-4 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nomor Telepon
              </label>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <div className="mb-6">
              <button
                type="button"
                className="bg-indigo-200 hover:bg-orange-500 shadow-lg text-gray hover:text-white  font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
                onClick={handleVerifyOTP}
              >
                Kirim OTP Verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InputContainer;
