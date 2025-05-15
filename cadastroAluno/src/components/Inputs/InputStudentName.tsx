import React from "react"

type StudentNameInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}

export const InputStudentName = ({value, onChange, placeholder} : StudentNameInputProps) => (
  <input 
  className="w-full mt-4 px-2 py-1 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  aria-label="Campo para digitar o nome do aluno"
   />
)