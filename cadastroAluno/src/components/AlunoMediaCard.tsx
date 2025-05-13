type AlunoMediaCardProps = {
  nome: string;
  disciplina: string;
  media: number;
};

export const AlunoMediaCard = ({ nome, disciplina, media }: AlunoMediaCardProps) => (
  <div className="bg-white rounded shadow p-4 my-2">
    <p><strong>{nome}</strong></p>
    <p>{disciplina} - Média: {media.toFixed(2)}</p>
  </div>
);