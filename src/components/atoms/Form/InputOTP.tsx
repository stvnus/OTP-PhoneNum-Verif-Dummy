"use client"
import React from "react";
import { useRef, useState, ChangeEvent, KeyboardEvent } from "react";

export default function InputOTP() {
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
  return (
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
  );
}
