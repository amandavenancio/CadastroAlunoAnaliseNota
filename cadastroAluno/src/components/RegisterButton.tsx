import React from "react"

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const RegisterButton = ({onClick, disabled, children}: ButtonProps) => (
  <button
  onClick={onClick}
  disabled={disabled}>
  {children}
</button>
)