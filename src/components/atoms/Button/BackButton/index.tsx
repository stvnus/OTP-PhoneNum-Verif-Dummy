import { usePathname, useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  black?: boolean
}

const BackButton: React.FC<Props> = ({black}) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {pathname !== "/" && (
        <button type="button" onClick={() => router.back()}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.52073 6.16786L7.99073 1.69786L6.8124 0.519531L0.330729 7.0012L6.8124 13.4829L7.99073 12.3045L3.52073 7.83453L13.6641 7.83453V6.16786L3.52073 6.16786Z"
              fill={black ? 'black' : 'white'}
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackButton;
