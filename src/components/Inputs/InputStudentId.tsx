// src/components/InputStudentId.tsx
import React from "react";

type InputStudentIdProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const InputStudentId = ({ value, onChange, placeholder }: InputStudentIdProps) => (
  <input
  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder ?? "Digite o número de registro"}
    aria-label="Número de registro do aluno"
  />
);
