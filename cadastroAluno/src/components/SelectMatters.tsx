// src/components/SelectDisciplina.tsx
import React from "react";

type SelectDisciplinaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export const SelectDisciplina = ({ value, onChange, options }: SelectDisciplinaProps) => (
  <select
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
