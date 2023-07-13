/* eslint-disable @next/next/no-img-element */
import InfoProduk from "@/components/atoms/Button/InfoProduk";
import React from "react";

export default function ProductList() {
  return (
    <div className="py-6 px-8 text-black">
      <h1 className="mb-4 text-xl font-bold">Simpanan</h1>
      <div className="grid grid-cols-1 gap-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 accent-green-600"
              />
              <span>
                <img
                  src="/ProductSimpedesUMi.svg"
                  alt="Product Icon"
                  className="h-50 w-70"
                />
              </span>
            </label>
            <InfoProduk />
          </h2>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 accent-green-600"
              />
              <span>
                <img
                  src="/ProductTabunganEmas.svg"
                  alt="Product Icon"
                  className="h-50 w-70"
                />
              </span>
            </label>
            <InfoProduk />
          </h2>
        </a>
      </div>

      <h1 className="mb-4 text-xl font-bold">Pinjaman</h1>
      <div className="grid grid-cols-1 gap-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 accent-green-600"
              />
              <span>
                <img
                  src="/ProductPegadaian.svg"
                  alt="Product Icon"
                  className="h-50 w-70"
                />
              </span>
            </label>
            <InfoProduk />
          </h2>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 accent-green-600"
              />
              <span>
                <img src="/ProductPinjamanBRI.svg" alt="Product Icon" className="h-50 w-70" />
              </span>
            </label>
            <InfoProduk />
          </h2>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 accent-green-600"
              />
              <span>
                <img src="/Mekaar.png" alt="Product Icon" className="h-50 w-70" />
              </span>
            </label>
            <InfoProduk />
          </h2>
        </a>
      </div>
    </div>
  );
}