type AlunoMediaCardProps = {
  nome: string;
  disciplina: string;
  media: number;
};

export const AlunoMediaCard = ({ nome, disciplina, media }: AlunoMediaCardProps) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition">
    <h3 className="text-lg font-bold text-red-600">{nome}</h3>
    <p className="mt-2 text-sm text-gray-700">
      {disciplina}<br />
      <span className="font-medium text-gray-900">Média: {media.toFixed(2)}</span>
    </p>
  </div>
);