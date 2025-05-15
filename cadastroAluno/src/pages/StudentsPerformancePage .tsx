import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DisciplinaMediaCard } from "../components/DisciplinaMediaCard";
import { calcularMedia } from "../utils/media";
import { AlunoMediaCard } from "../components/AlunoMediaCard";
import { buscarAlunos } from '../services/studentSaveAndSearch'
import { HomePageButton } from "../components/Buttons/HomePageButton";


type Aluno = {
  id: string;
  nome: string;
  disciplina: string;
  notas: number[];
};

export const StudentsPerformancePage = () => {

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

    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 flex flex-col place-content-center text-center bg-red-100 rounded-xl shadow-md border-2 border-red-500">

        <h2 className="text-xl font-bold mb-4">Desempenho dos Alunos</h2>

        <div className="flex place-content-center">
          <section>
            <h3 className="text-lg font-semibold mb-4">Média por aluno</h3>
            <div className="flex place-content-center">
              {alunos.map((aluno) => (
                <AlunoMediaCard
                  key={aluno.id}
                  nome={aluno.nome}
                  disciplina={aluno.disciplina}
                  media={calcularMedia(aluno.notas)}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="p-4 flex flex-col place-content-center text-center bg-red-100">
          <section>
            <h3 className="text-lg font-semibold">Média geral por matéria</h3>
            <div className="mt-4 flex place-content-center">
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
            </div>
          </section>
        </div>
        <div>
          <HomePageButton
            onClick={() => { navigate("/"); }}
            className={""}>
            Página Inicial
          </HomePageButton>
        </div>
      </div>
    </div>
  );

}