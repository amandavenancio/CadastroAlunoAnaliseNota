import { ButtonProps } from "./RegisterButton";

export const AllNotesButton = ({onClick, disabled, children}: ButtonProps) => (

  <button
  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
  onClick={onClick}
  disabled={disabled}
  >{children}
  </button>

)