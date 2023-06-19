export default function Home() {
  return (
    <main className="flex flex-col justify-between p-10 mx-auto my-3">
      <div className="font-sans leading-normal tracking-normal border">
        <div
          className="w-full m-0 p-0 bg-cover bg-bottom"
          style={{
            backgroundColor: "#0051A0",
            height: "30vh",
            maxHeight: "100vh",
          }}
        >
          <div className="flex items-center p-5">
            <button>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white mr-2 transform rotate-180"
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
            <h1 className="font-semibold text-3xl text-white ml-4">
              Buat Pengajuan
            </h1>
          </div>
          <div className="container max-w-2xl mx-auto pt-8 text-center break-normal text-white">
            <p className="font-semibold text-xl ">
              Masukkan NIK Nasabah dan pilih produk yang diajukan
            </p>
          </div>
        </div>

        <div className="container px-4 md:px-0 max-w-2xl mx-auto -mt-28">
          <div className="mx-0 sm:mx-32">
            <div className="container  rounded mt-20 p-2  text-center">
              <div className="text-center">
                <form className="flex items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full max-w-md mx-auto">
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukkan NIK Anda"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
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
        <div className="py-6 px-8 grid text-center lg:grid-cols-1 lg:text-left text-black">
          <h1 className="mb-4 text-xl font-bold">Simpanan</h1>
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " />
                <p>Docs</p>
              </label>
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Info Produk
              </button>
            </h2>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " />
                <p>Docs</p>
              </label>
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Info Produk
              </button>
            </h2>
          </a>
          <h1 className="mb-4 text-xl font-bold">Pinjaman</h1>
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " />
                <p>Docs {" "}</p>
              </label>
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Info Produk
              </button>
            </h2>
          </a>
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex items-center justify-between mb-2 text-xl font-semibold">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " />
                <p>Docs</p>
              </label>
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Info Produk
              </button>
            </h2>
          </a>
        </div>
      </div>
    </main>
  );
}
