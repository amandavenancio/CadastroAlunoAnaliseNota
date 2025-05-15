type DisciplinaMediaCardProps = {
  disciplina: string;
  mediaGeral: number;
};

export const DisciplinaMediaCard = ({ disciplina, mediaGeral }: DisciplinaMediaCardProps) => (
  <div className=" bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 ml-4 text-center">
    <p className=" text-base font-medium">{disciplina}: {mediaGeral.toFixed(2)}</p>
  </div>
);