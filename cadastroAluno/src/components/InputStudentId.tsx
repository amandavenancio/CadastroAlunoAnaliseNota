// src/components/InputStudentId.tsx
import React from "react";

type InputStudentIdProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const InputStudentId = ({ value, onChange, placeholder }: InputStudentIdProps) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder ?? "Digite o número de registro"}
    aria-label="Número de registro do aluno"
    className="bg-sky-200"
  />
);
