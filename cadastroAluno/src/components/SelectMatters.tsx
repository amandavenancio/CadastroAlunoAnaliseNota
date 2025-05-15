// src/components/SelectDisciplina.tsx
import React from "react";

type SelectDisciplinaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export const SelectDisciplina = ({ value, onChange, options }: SelectDisciplinaProps) => (
  <select
  className="w-full mt-4 px-2 py-1 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
    value={value}
    onChange={onChange}
    aria-label="Selecionar disciplina">
    <option value="">Selecione a disciplina</option>
    {options.map((disciplina, index) => (
      <option key={index} value={disciplina}>
        {disciplina}
      </option>
    ))}
  </select>
);
