import React from "react"

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
}

export const HomePageButton = ({onClick, children}: ButtonProps) => (
  <button
  onClick={onClick}>
  {children}
</button>
)