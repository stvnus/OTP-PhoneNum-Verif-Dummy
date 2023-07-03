import React from "react";

export default function ButtonBack() {
  return (
    <div>
      <a href="/">
        <button>
          <svg
            aria-hidden="true"
            className="w-6 h-6 mr-2 transform rotate-180"
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
      </a>
    </div>
  );
}
