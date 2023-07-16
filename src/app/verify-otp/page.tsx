"use client";
import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";
import BackButton from "@/components/atoms/Button/BackButton";

export default function Dashboard() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [resendModalOpen, setResendModalOpen] = useState(false);
  const [resendOtp, setResendOtp] = useState("");

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (isNaN(Number(value))) return;

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index - 1] = "";
        return newOtp;
      });
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = () => {
    if (otp.join("").length < 6) {
      setError("Kode OTP tidak valid");
      return;
    }

    setIsVerifying(true);
    setModalOpen(true);
    setModalMessage("Sedang memverifikasi OTP...");

    const apiVerify = process.env.NEXT_PUBLIC_API_VERIFY_URL;

    if (apiVerify) {
      axios
        .post(apiVerify, {
          identity_number: "123",
          phone_number: phoneNumber,
          code_otp: otp.join(""),
        })
        .then((response) => {
          console.log("OTP berhasil diverifikasi");
          setModalMessage("OTP berhasil diverifikasi");
        })
        .catch((error) => {
          console.error(error);
          setError("Terjadi kesalahan saat memverifikasi OTP");
          setModalMessage("Terjadi kesalahan saat memverifikasi OTP");
        })
        .finally(() => {
          setIsVerifying(false);
          setTimeout(() => {
            setModalOpen(false);
            window.location.href = "/kyc-photo"; 
          }, 2000);
        });
    } else {
      setError("URL API tidak ditemukan");
    }
  };

  const handleResendOTP = () => {
    if (phoneNumber) {
      const apiRequest = process.env.NEXT_PUBLIC_API_REQUEST_URL;

      if (apiRequest) {
        axios
          .post(apiRequest, {
            identity_number: "123",
            phone_number: phoneNumber,
          })
          .then((response) => {
            console.log("Permintaan OTP dikirim ulang");
            setResendOtp(response.data.data.Code);
            setResendModalOpen(true);
          })
          .catch((error) => {
            console.error(error);
            setError("Terjadi kesalahan saat mengirim ulang OTP");
          });
      } else {
        setError("URL API tidak ditemukan");
      }
    } else {
      setError("Nomor telepon tidak valid");
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const phoneParam = searchParams.get("phone");
    if (phoneParam) {
      setPhoneNumber(phoneParam);
    }
  }, []);

  const hiddenPhoneNumber =
    phoneNumber.length >= 6
      ? phoneNumber.substring(0, 4) +
        "•".repeat(phoneNumber.length - 8) +
        phoneNumber.substring(phoneNumber.length - 4)
      : phoneNumber;

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between mx-auto">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl bg-white rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
          <div>
            <a href="/requestOTP">
              <BackButton black />
            </a>
          </div>
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-4">
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Kode OTP
            </h1>
            <h2 className="mb-2">
              Masukkan 6 kode verifikasi yang terkirim pada SMS di nomor telepon
              nasabah {hiddenPhoneNumber}
            </h2>
            <div className="otp-form flex items-center justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="otp-input border border-gray-300 mr-1 w-12 h-12 text-center rounded-lg"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="mb-6">
            <button
              type="button"
              className="bg-indigo-200 hover:bg-orange-500 shadow-lg text-gray hover:text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
              onClick={handleVerifyOTP}
            >
              Kirim OTP Verifikasi
            </button>
          </div>
          <div className="mb-6 flex items-center">
            <h3 className="mr-2">Tidak menerima kode OTP?</h3>
            <p
              className="text-black hover:text-red-500 font-semibold text-sm rounded text-center hover:bg-tertiary duration-200 transition-all cursor-pointer"
              onClick={handleResendOTP}
            >
              Kirim Ulang OTP
            </p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-md p-4">
            <p>{modalMessage}</p>
          </div>
        </div>
      )}

      {resendModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-md p-4">
            <h3 className="text-xl mb-2">Kirim Ulang OTP</h3>
            <p className="text-gray-600">
              Kode OTP baru telah dikirim ke nomor telepon {hiddenPhoneNumber}.
              Silakan gunakan kode berikut untuk verifikasi:
            </p>
            <div className="flex justify-center mt-4">
              <input
                type="text"
                className="otp-input  mr-1 h-12 text-center rounded-lg"
                value={resendOtp}
                readOnly
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Kode OTP ini berlaku selama 5 menit.
            </p>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-400 text-gray-800 hover:text-white font-semibold text-sm py-2 px-4 rounded"
                onClick={() => setResendModalOpen(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
