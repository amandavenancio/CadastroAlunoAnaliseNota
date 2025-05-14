type AlunoMediaCardProps = {
  nome: string;
  disciplina: string;
  media: number;
};

export const AlunoMediaCard = ({ nome, disciplina, media }: AlunoMediaCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
    <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">{nome}</h3>
    
    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{disciplina} - Média: {media.toFixed(2)}</p>
  </div>
);