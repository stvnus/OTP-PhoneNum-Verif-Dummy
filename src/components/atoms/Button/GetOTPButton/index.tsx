import React from "react";

interface GetOtpButtonProps {
  onClick: () => void;
}

const GetOtpButton: React.FC<GetOtpButtonProps> = ({ onClick }) => {
  return (
    <div className="mb-6">
      <button
        type="button"
        className="bg-indigo-200 hover:bg-orange-500 shadow-lg text-gray hover:text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
        onClick={onClick}
      >
        Kirim OTP Verifikasi
      </button>
    </div>
  );
};

export default GetOtpButton;
