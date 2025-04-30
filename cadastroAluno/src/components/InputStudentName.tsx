import React from "react"

type StudentNameInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}

export const InputStudentName = ({value, onChange, placeholder} : StudentNameInputProps) => (
  <input 
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  aria-label="Campo para digitar o nome do aluno"
   />
)