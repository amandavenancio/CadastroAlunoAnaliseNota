import React from "react"

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const RegisterButton = ({onClick, disabled, children}: ButtonProps) => (
  <button
  className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-50"
  onClick={onClick}
  disabled={disabled}>
  {children}
</button>
)