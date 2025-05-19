import React from "react";

type InputNotaProps = {
  nota1: string;
  nota2: string;
  nota3: string;
  onChangeNota1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNota2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNota3: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputNota = ({ nota1, nota2, nota3, onChangeNota1, onChangeNota2, onChangeNota3 }: InputNotaProps) => (
  <>
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition mb-4"
      type="number"
      value={nota1}
      onChange={onChangeNota1}
      placeholder="Nota 1"
      aria-label="Campo para digitar a primeira nota"
    />
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition mb-4"
      type="number"
      value={nota2}
      onChange={onChangeNota2}
      placeholder="Nota 2"
      aria-label="Campo para digitar a segunda nota"
    />
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition mb-4"
      type="number"
      value={nota3}
      onChange={onChangeNota3}
      placeholder="Nota 3"
      aria-label="Campo para digitar a terceira nota"
    />
  </>
);

export default InputNota