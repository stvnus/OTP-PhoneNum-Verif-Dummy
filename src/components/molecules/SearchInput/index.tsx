import React from "react";

interface SearchInputProps {
  nik: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  isNikValid: boolean;
  onSubmit: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  nik,
  onChange,
  onReset,
}) => {
  return (
    <div className="container rounded mt-5 p-2 px-2 text-center text-white">
      <div className="text-center">
        <h1 className="font-semibold text-1xl sm:text-1xl xl:text-2xl pb-1">
          Masukkan NIK Nasabah dan pilih produk yang diajukan
        </h1>

        <form className="flex items-center">
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
              onChange={onChange}
              maxLength={16}
              pattern="\d*"
              required
            />
            <button
              type="reset"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={onReset}
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
  );
};

export default SearchInput;
