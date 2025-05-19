import React from "react"

type StudentNameInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}

export const InputStudentName = ({ value, onChange, placeholder }: StudentNameInputProps) => (
  <input
    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label="Campo para digitar o nome do aluno"
  />
)