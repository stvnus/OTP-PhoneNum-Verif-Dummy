"use client";
import ButtonBack from "@/components/atoms/Button/ButtonBack";
import { useState, useEffect } from "react";
import { useRef, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';

export default function Dashboard() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState("");

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

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
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

    axios.post('http://senyum-bff.ddb.uat.bri.co.id/api/v1/otp/verify', {
      identity_number: "123",
      phone_number: phoneNumber,
      code_otp: otp.join("")
    })
      .then(response => {
        // Respon berhasil, lakukan tindakan sesuai kebutuhan
        console.log("OTP berhasil diverifikasi");
      })
      .catch(error => {
        // Terjadi kesalahan pada permintaan API
        console.error(error);
        setError("Terjadi kesalahan saat memverifikasi OTP");
      });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const phoneParam = searchParams.get("phone");
    const otpCodeParam = searchParams.get("otpCode");
    if (phoneParam) {
      setPhoneNumber(phoneParam);
    }
    if (otpCodeParam) {
      setOtpCode(otpCodeParam);
    }
  }, []);

  

  const hiddenPhoneNumber =
    phoneNumber.length >= 6
      ? phoneNumber.substring(0, 4) + "•".repeat(phoneNumber.length - 8) + phoneNumber.substring(phoneNumber.length - 4)
      : phoneNumber;

  return (
    <main className="w-full max-w-xl mr-auto ml-auto flex flex-col justify-between  mx-auto  ">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-xl bg-white  rounded-md px-6 py-8 mb-8 ml-auto mr-auto">
          <ButtonBack />
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-4 ">
            <h1 className="text-gray-800 block text-2xl font-extrabold font-title text-center mb-8">
              Kode OTP
            </h1>
            <h2 className="mb-2">
              Masukkan 6 kode verifikasi yang terkirim pada SMS di nomor telepon nasabah {hiddenPhoneNumber}
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
          <h3 className="mt-2">Tidak menerima kode OTP? Kirim ulang dalam</h3>
        </div>
      </div>
    </main>
  );
}
