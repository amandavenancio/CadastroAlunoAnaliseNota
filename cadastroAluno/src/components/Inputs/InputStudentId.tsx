// src/components/InputStudentId.tsx
import React from "react";

type InputStudentIdProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const InputStudentId = ({ value, onChange, placeholder }: InputStudentIdProps) => (
  <input
    className="w-full px-2 py-1 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder ?? "Digite o número de registro"}
    aria-label="Número de registro do aluno"
  />
);
