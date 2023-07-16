const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center font-medium">
        <div className="mr-auto ml-auto w-full">
          <div className="w-full max-w-xl bg-white shadow-lg rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
            <h3 className="mt-2 i">Home</h3>
            <div className="m-4  flex justify-center items-center bg-gray-200 p-4">
              <a
                href="/product"
                className="mr-2 bg-white py-2 px-4 rounded-md  hover:text-white hover:bg-black"
              >
                Produk List
              </a>
              <a
                href="/request-otp"
                className="mr-2 bg-white py-2 px-4 rounded-md  hover:text-white hover:bg-black"
              >
                Request OTP
              </a>
              <a
                href="/verify-otp"
                className="mr-2 bg-white py-2 px-4 rounded-md hover:text-white hover:bg-black"
              >
                Verify OTP
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
