import InputNota from "../components/Inputs/InputNotaAluno";

type NotasFieldsProps = {
  nota1: string;
  nota2: string;
  nota3: string;
  onChangeNota1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNota2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNota3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  erro?: string;
};

export const NotasFields = ({
  nota1, nota2, nota3,
  onChangeNota1, onChangeNota2, onChangeNota3,
  erro
}: NotasFieldsProps) => (
  <>
    <InputNota
      nota1={nota1}
      nota2={nota2}
      nota3={nota3}
      onChangeNota1={onChangeNota1}
      onChangeNota2={onChangeNota2}
      onChangeNota3={onChangeNota3}
    />
    {erro && <p className="text-red-600 text-sm mt-1">{erro}</p>}
  </>
);