import { ButtonProps } from "./RegisterButton";

export const AllNotesButton = ({onClick, disabled, children}: ButtonProps) => (

  <button
  onClick={onClick}
  disabled={disabled}
  >{children}
  </button>

)