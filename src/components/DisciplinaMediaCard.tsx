type DisciplinaMediaCardProps = {
  disciplina: string;
  mediaGeral: number;
};

export const DisciplinaMediaCard = ({ disciplina, mediaGeral }: DisciplinaMediaCardProps) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition">
    <p className="text-base font-semibold text-gray-800">{disciplina}</p>
    <p className="text-lg font-bold text-red-500 mt-1">{mediaGeral.toFixed(2)}</p>
  </div>
);