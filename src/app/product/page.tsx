"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEligibility } from "@/stores/reducer/eligibilityReducer";
import { useRouter } from "next/navigation";
import ProductList from "@/components/molecules/ProductList";
import SearchInput from "@/components/molecules/SearchInput";
import ButtonPengajuan from "@/components/atoms/Button/PengajuanButton";

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
            <SearchInput
              nik={nik}
              onChange={handleInput}
              onReset={handleReset}
              isNikValid={isNikValid}
              onSubmit={handleSubmitNik}
            />
          </div>
        </div>
        <ProductList />
        <div className="mb-6 p-4">
          <ButtonPengajuan disabled={!isNikValid} onClick={handleSubmitNik} />
        </div>
      </div>
    </main>
  );
}
