"use client";
import ProductList from "@/components/molecules/Product/ProductList";
import { addEligibility } from "@/stores/reducer/eligibilityReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchNIK() {
  const [nik, setNik] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, "").slice(0, 16);
    setNik(inputValue);
  };

  const handleReset = () => {
    setNik("");
  };
  const isNikValid = nik.length === 16;

  const handleSubmitNik = () => {
    dispatch(addEligibility({ nik: nik }));
    if (isNikValid) {
      router.push("/request-otp");
    }
  };

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between mx-auto">
      <div className="font-sans leading-normal tracking-normal border shadow-lg">
        <div
          className="w-full m-0 p-0 bg-cover bg-bottom shadow-lg"
          style={{
            backgroundColor: "#0051A0",
            height: "30vh",
            maxHeight: "100vh",
          }}
        >
          <div className="flex items-center p-5 text-white">
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
            <h1 className="font-semibold text-3xl ml-4 sm:text-2xl xl:text-4xl">
              Buat Pengajuan
            </h1>
          </div>
        </div>
        <div className="container px-4 md:px-0 max-w-2xl mx-auto -mt-28">
          <div className="mx-0 sm:mx-8">
            <div className="container rounded mt-5 p-2 px-2 text-center text-white">
              <div className="text-center">
                <h1 className="font-semibold text-1xl sm:text-1xl xl:text-2xl pb-1">
                  Masukkan NIK Nasabah dan pilih produk yang diajukan
                </h1>

                <form className="flex items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full max-w-lg mx-auto">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukkan NIK Anda"
                      value={nik}
                      onChange={handleInput}
                      maxLength={16}
                      pattern="\d*"
                      required
                    />
                    <button
                      type="reset"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={handleReset}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ProductList />
        <div className="mb-6 p-4">
          <button
            type="button"
            disabled={!isNikValid}
            onClick={handleSubmitNik}
            className={`bg-indigo-200 ${
              isNikValid
                ? "hover:bg-orange-500 hover:text-white"
                : "cursor-not-allowed"
            } shadow-lg text-gray font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all `}
          >
            Buat Pengajuan
          </button>
        </div>
      </div>
    </main>
  );
}
