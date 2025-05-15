type AlunoMediaCardProps = {
  nome: string;
  disciplina: string;
  media: number;
};

export const AlunoMediaCard = ({ nome, disciplina, media }: AlunoMediaCardProps) => (
  <div className="bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 ml-4 text-center mb-4">
    <h3 className="text-base font-medium">{nome}</h3>
    
    <p className="mt-2 text-sm ">{disciplina} - Média: {media.toFixed(2)}</p>
  </div>
);