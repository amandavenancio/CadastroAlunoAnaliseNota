type AlunoMediaCardProps = {
  nome: string;
  registro: string;
  disciplinas: {
    nome: string;
    media: number;
  }[];
};

export const AlunoMediaCard = ({ nome, registro, disciplinas }: AlunoMediaCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-red-600">{nome} - {registro}</h3>
      <ul className="mt-4 text-left">
        {disciplinas.map(({ nome, media }) => {
          const status = media >= 7 ? "Aprovado ✅" : "Reprovado ❌";
          const statusColor = media >= 7 ? "text-green-600" : "text-red-600";
          return (
            <li key={nome} className="mb-1">
              <span className="font-semibold">{nome}</span>: {media.toFixed(2)}{" "}
              <span className={`${statusColor} font-medium`}>{status}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};