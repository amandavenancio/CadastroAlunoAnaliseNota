type AlunoMediaCardProps = {
  nome: string;
  disciplina: string;
  media: number;
};

export const AlunoMediaCard = ({ nome, disciplina, media }: AlunoMediaCardProps) => {
  const status = media >= 7 ? "Aprovado ✅" : "Reprovado ❌";
  const statusColor = media >= 7 ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-red-600">{nome}</h3>
      <p className="text-sm text-gray-700 mt-1">{disciplina}</p>
      <p className="mt-2 font-semibold text-gray-900">Média: {media.toFixed(2)}</p>
      <p className={`mt-1 text-sm font-medium ${statusColor}`}>{status}</p>
    </div>
  );
};