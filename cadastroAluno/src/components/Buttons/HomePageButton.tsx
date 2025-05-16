import React from "react"

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
  type?: "button" | "submit" | "reset";
}

export const HomePageButton = ({onClick, children, className = "", type = "button"}: ButtonProps) => (
  <button
  className={`px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-50 ${className}`}
  onClick={onClick}
  type={type}
  >
  {children}
</button>
)

