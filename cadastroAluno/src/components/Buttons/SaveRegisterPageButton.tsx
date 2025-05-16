import React from "react"

export type ButtonProps = {
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const SaveRegisterPageButton = ({ disabled, type = "button", children, className = "" }: ButtonProps) => (
  <button
    type={type}
    className={`px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-50 ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
)