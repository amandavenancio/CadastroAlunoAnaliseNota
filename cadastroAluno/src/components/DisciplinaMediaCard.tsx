type DisciplinaMediaCardProps = {
  disciplina: string;
  mediaGeral: number;
};

export const DisciplinaMediaCard = ({ disciplina, mediaGeral }: DisciplinaMediaCardProps) => (
  <div className="bg-gray-100 rounded p-4 my-2">
    <p><strong>{disciplina}:</strong> {mediaGeral.toFixed(2)}</p>
  </div>
);