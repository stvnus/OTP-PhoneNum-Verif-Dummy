import React from "react";

interface PhoneNumberInputProps {
  phoneNumber: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  phoneNumber,
  error,
  onChange,
}) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="tel"
        name="floating_notelp"
        id="floating_notelp"
        value={phoneNumber}
        onChange={onChange}
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
  );
};

export default PhoneNumberInput;
