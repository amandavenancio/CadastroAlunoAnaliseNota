import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DisciplinaMediaCard } from "../components/DisciplinaMediaCard";
import { calcularMedia } from "../utils/media";
import { AlunoMediaCard } from "../components/AlunoMediaCard";
import { buscarAlunos } from '../services/studentSaveAndSearch'
import { HomePageButton } from "../components/HomePageButton";


type Aluno = {
  id: string;
  nome: string;
  disciplina: string;
  notas: number[];
};

export const StudentsPerformancePage  = () => {

  const navigate = useNavigate();
  
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunosSupabase = await buscarAlunos()
        setAlunos(alunosSupabase)
      } catch (err) {
        console.error(err)
      }
    }
  
    fetchAlunos()
  }, [])

  const mediasPorDisciplina: { [disciplina: string]: number[] } = {};
  alunos.forEach((aluno) => {
    const media = calcularMedia(aluno.notas);
    if (!mediasPorDisciplina[aluno.disciplina]) {
      mediasPorDisciplina[aluno.disciplina] = [];
    }
    mediasPorDisciplina[aluno.disciplina].push(media);
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Desempenho dos Alunos</h2>

      <section>
        <h3 className="text-lg font-semibold">Média por aluno</h3>
        {alunos.map((aluno) => (
          <AlunoMediaCard
            key={aluno.id}
            nome={aluno.nome}
            disciplina={aluno.disciplina}
            media={calcularMedia(aluno.notas)}
          />
        ))}
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Média geral por matéria</h3>
        {Object.entries(mediasPorDisciplina).map(([disciplina, medias]) => {
          const mediaGeral = calcularMedia(medias);
          return (
            <DisciplinaMediaCard
              key={disciplina}
              disciplina={disciplina}
              mediaGeral={mediaGeral}
            />
          );
        })}
      </section>

            <HomePageButton onClick={() => {navigate("/")}}>
              Página Inicial
            </HomePageButton>
    </div>

  );

}