import React from "react"

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className: string
}

export const HomePageButton = ({onClick, children ,className = ""}: ButtonProps) => (
  <button
  className={`px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 ${className}`}
  onClick={onClick}>
  {children}
</button>
)