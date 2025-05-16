import React from "react"

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className: string
}

export const HomePageButton = ({onClick, children ,className = ""}: ButtonProps) => (
  <button
  className={`px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-50 ${className}`}
  onClick={onClick}>
  {children}
</button>
)

