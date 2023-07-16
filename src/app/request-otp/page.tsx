"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addEligibility } from "@/stores/reducer/eligibilityReducer";
import BackButton from "@/components/atoms/Button/BackButton";


const InputContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getNik = useSelector((state: any) => state.eligibility.nik);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      console.log(phoneNumber);

      const apiRequest = process.env.NEXT_PUBLIC_API_REQUEST_URL;

      if (apiRequest) {
        axios
          .post(apiRequest, {
            identity_number: "123",
            phone_number: phoneNumber,
          })
          .then((response) => {
            console.log(response.data.data.Code);
            setOtpCode(response.data.data.Code);
            openModal();
          })
          .catch((error) => {
            console.error(error);
            setError("Terjadi kesalahan saat meminta OTP");
          });
      } else {
        setError("URL API tidak ditemukan");
      }
    }
    dispatch(addEligibility({ nik: getNik, phoneNumber: phoneNumber }));
  };

  const handleVerifyButton = () => {
    closeModal();
    window.location.href = `/verify-otp?phone=${phoneNumber}&otpCode=${otpCode}`;
  };

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between mx-auto">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl mr-auto ml-auto ">
          <div className="bg-white rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
            <div>
              <a href="/product">
              <BackButton black/>
              </a>
            </div>
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Verifikasi No Telepon Nasabah
            </h1>
            <label className="block text-sm font-medium mb-4">
              <h3>
                Silahkan masukkan nomor telepon nasabah untuk diverifikasi.
                Pastikan nomor telepon tersebut milik nasabah dan masih aktif.
              </h3>
            </label>
            <form>
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
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </form>
            {otpCode && (
              <div className={isModalOpen ? "block" : "hidden"}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white rounded-md p-4">
                    <h2 className="text-gray-800 text-lg font-bold mb-4">
                      Kode OTP
                    </h2>
                    <p className="text-gray-600">{otpCode}</p>
                    <div className="flex justify-center mt-4">
                      <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={handleVerifyButton}
                      >
                        Verify
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={closeModal}
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="fixed inset-0 bg-black bg-opacity-50"
                  onClick={closeModal}
                ></div>
              </div>
            )}
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
