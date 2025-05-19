// src/components/SelectDisciplina.tsx
import React from "react";

type SelectDisciplinaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export const SelectDisciplina = ({ value, onChange, options }: SelectDisciplinaProps) => (
<select
  className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-400 transition"
  value={value}
  onChange={onChange}
>
  <option value="">Selecione a disciplina</option>
  {options.map((disciplina, index) => (
    <option key={index} value={disciplina}>
      {disciplina}
    </option>
  ))}
</select>

);
