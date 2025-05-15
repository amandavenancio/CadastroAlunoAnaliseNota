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
    className={`px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
)