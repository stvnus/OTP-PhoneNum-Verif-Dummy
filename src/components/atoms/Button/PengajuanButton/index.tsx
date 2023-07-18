import React from "react";

interface ButtonPengajuanProps {
  disabled: boolean;
  onClick: () => void;
}

const ButtonPengajuan: React.FC<ButtonPengajuanProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`bg-indigo-200 ${
        disabled ? "cursor-not-allowed" : "hover:bg-orange-500 hover:text-white"
      } shadow-lg text-gray font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all `}
    >
      Buat Pengajuan
    </button>
  );
};

export default ButtonPengajuan;
